import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import PageLayout from '../components/layouts/PageLayout';
import Container from '../components/common/Container';
import Hero from '../components/sections/Hero';
import Button from '../components/common/Button';
import { quizLevels, quizBasePath, getQuizLevelByProductId } from '../data/quiz';
import { getProductById } from '../data/products';
import styles from '../styles/QuizPage.module.css';

const OPTION_LETTERS = ['Ա', 'Բ', 'Գ', 'Դ'];
const TOTAL_QUESTIONS = quizLevels.length * 6;

const T = {
  pageTitle: 'Թեստեր · Adobe արտադրանք',
  intro:
    'Ընտրիր մեկ մակարդակ՝ վեց Adobe արտադրանքից։ Յուրաքանչյուր մակարդակում 6 հարց, բոլորը հայերեն։',
  pickerHint: 'Յուրաքանչյուր քարտի բոլոր հարցերը նույն մեկ արտադրանքին են առնչվում։',
  statsLevels: 'մակարդակ',
  statsQuestions: 'հարց',
  ariaForm: 'Adobe արտադրանքների թեստ՝ ընտրված մակարդակ',
  checkAnswers: 'Ավարտել և ստուգել',
  nextQuestion: 'Հաջորդ',
  prevQuestion: 'Նախորդ',
  resetQuiz: 'Նորից',
  backLevels: 'Մակարդակներ',
  startLevel: 'Սկսել',
  stepAria: (i, total) => `Հարց ${i} ${total}-ից`,
  backHome: 'Գլխավոր',
  learnProduct: 'Արտադրանքի մասին',
  retryLevel: 'Կրկին փորձել',
  seeReview: 'Տեսնել պատասխանները',
  backToResults: 'Արդյունք',
  reviewLegend: 'Կանաչ՝ ճիշտ, կարմիր՝ ձեր սխալ ընտրությունը։',
  progressLabel: (done, total) => `${done}/${total} պատասխան`,
  questionOf: (i, total) => `Հարց ${i}/${total}`,
  breakdownTitle: 'Պատասխանների ամփոփում',
};

function getLevelMeta(level) {
  const product = getProductById(level.productId);
  return {
    accent: product?.color ?? '#FA0F01',
    shortCode: product?.shortCode ?? 'Ad',
    productName: product?.name ?? level.title.split(' · ')[1] ?? 'Adobe',
  };
}

function computeScore(selections, questions) {
  let n = 0;
  for (let i = 0; i < questions.length; i += 1) {
    if (selections[i] === questions[i].correctIndex) n += 1;
  }
  return n;
}

function getScoreFeedback(score, total) {
  const pct = total ? score / total : 0;
  if (pct >= 1) {
    return { tone: 'excellent', title: 'Գերազանց', message: 'Բոլոր 6 պատասխանները ճիշտ են։' };
  }
  if (pct >= 0.83) {
    return { tone: 'great', title: 'Շատ լավ', message: 'Գրեթե կատարյալ արդյունք։' };
  }
  if (pct >= 0.5) {
    return { tone: 'good', title: 'Լավ մեկնարկ', message: 'Կարդա արտադրանքի էջը և կրկին փորձիր։' };
  }
  return { tone: 'retry', title: 'Փորձիր կրկին', message: 'Անցիր մակարդակը նորից՝ ավելի լավ հիշելու համար։' };
}

function scoreRingOffset(score, total) {
  const c = 2 * Math.PI * 52;
  const pct = total ? score / total : 0;
  return c * (1 - pct);
}

function QuizPage() {
  const { productId: productIdParam } = useParams();
  const navigate = useNavigate();

  const pickedLevelIdx = useMemo(() => {
    if (!productIdParam) return null;
    const idx = quizLevels.findIndex((l) => l.productId === productIdParam);
    return idx >= 0 ? idx : null;


  }, [productIdParam]);

  useEffect(() => {
    if (productIdParam && getQuizLevelByProductId(productIdParam) === undefined) {
      navigate(quizBasePath, { replace: true });
    }
  }, [productIdParam, navigate]);

  const quizTopRef = useRef(null);
  const resultsRef = useRef(null);

  const level = pickedLevelIdx != null ? quizLevels[pickedLevelIdx] : null;
  const questions = level?.questions ?? [];
  const n = questions.length;
  const meta = level ? getLevelMeta(level) : null;
  const accent = meta?.accent ?? '#FA0F01';

  const initialAnswers = useMemo(() => Array.from({ length: n }, () => null), [n]);

  const [answers, setAnswers] = useState(initialAnswers);
  const [currentStep, setCurrentStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [reviewMode, setReviewMode] = useState(false);

  useEffect(() => {
    setAnswers(initialAnswers);
    setCurrentStep(0);
    setSubmitted(false);
    setReviewMode(false);
  }, [initialAnswers]);

  useEffect(() => {
    if (submitted && !reviewMode && resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [submitted, reviewMode]);

  const scrollToQuiz = () => {
    quizTopRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const answeredCount = answers.filter((x) => x !== null).length;
  const allAnswered = n > 0 && answeredCount === n;
  const score = submitted && n ? computeScore(answers, questions) : null;
  const feedback = score !== null ? getScoreFeedback(score, n) : null;
  const progressPct = n ? Math.round((answeredCount / n) * 100) : 0;
  const stepIndex = Math.min(currentStep, Math.max(n - 1, 0));
  const currentQuestion = questions[stepIndex];
  const currentAnswered = answers[stepIndex] !== null;
  const isFirstStep = stepIndex === 0;
  const isLastStep = n > 0 && stepIndex === n - 1;
  const showQuestion = !submitted || reviewMode;

  const goToStep = (idx) => {
    if (idx < 0 || idx >= n) return;
    if (!submitted && !(answers[idx] !== null || idx <= stepIndex)) return;
    if (submitted && !reviewMode) return;
    setCurrentStep(idx);
    scrollToQuiz();
  };

  const goNext = () => {
    if (submitted && reviewMode) {
      if (!isLastStep) setCurrentStep((s) => s + 1);
      scrollToQuiz();
      return;
    }
    if (!currentAnswered || isLastStep) return;
    setCurrentStep((s) => Math.min(s + 1, n - 1));
    scrollToQuiz();
  };

  const goPrev = () => {
    if (isFirstStep) return;
    setCurrentStep((s) => Math.max(s - 1, 0));
    scrollToQuiz();
  };

  const setAnswer = (qIdx, optIdx) => {
    if (submitted) return;
    setAnswers((prev) => {
      const next = [...prev];
      next[qIdx] = optIdx;
      return next;
    });
  };

  const handleSubmit = () => {
    if (!allAnswered) return;
    setSubmitted(true);
    setReviewMode(false);
  };

  const handleReset = () => {
    setAnswers(Array.from({ length: n }, () => null));
    setCurrentStep(0);
    setSubmitted(false);
    setReviewMode(false);
    scrollToQuiz();
  };

  const handleBackToPicker = () => {
    navigate(quizBasePath);
    setCurrentStep(0);
    setSubmitted(false);
    setReviewMode(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const startReview = () => {
    setReviewMode(true);
    setCurrentStep(0);
    scrollToQuiz();
  };

  const exitReview = () => {
    setReviewMode(false);
    resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  };

  const radioName = (i) => `quiz-q-${level?.productId ?? 'pick'}-${i}`;

  const heroBadge = 'Թեստեր';
  const heroTitle = level
    ? meta?.productName ?? level.title.split(' · ')[1]
    : T.pageTitle.split(' · ')[0];
  const heroSubtitle = level
    ? submitted && !reviewMode
      ? `${score}/${n} ճիշտ · ${meta?.shortCode}`
      : reviewMode
        ? `Վերանայում · ${T.questionOf(stepIndex + 1, n)}`
        : T.questionOf(stepIndex + 1, n)
    : undefined;
  const heroGradient = `linear-gradient(135deg, ${accent} 0%, color-mix(in srgb, ${accent} 55%, #0A0E27) 100%)`;

  return (
    <PageLayout title={T.pageTitle}>
      <div className={styles.page} style={{ '--quiz-accent': accent }}>
        <Hero
          badge={heroBadge}
          badgeTo={quizBasePath}
          title={heroTitle}
          subtitle={heroSubtitle}
          backgroundColor={pickedLevelIdx == null ? undefined : heroGradient}
          height="compact"
          align="center"
        />

        <Container>
          <div className={pickedLevelIdx == null ? styles.wrapWide : styles.wrap}>
            {pickedLevelIdx == null ? (
              <section className={styles.picker} aria-labelledby="quiz-picker-heading">
                <header className={styles.pickerHeader}>
                  <h2 id="quiz-picker-heading" className={styles.pickerTitle}>
                    Ընտրիր մակարդակ
                  </h2>
                  <p className={styles.intro}>{T.intro}</p>
                  <ul className={styles.statsRow} aria-label="Թեստի ամփոփում">
                    <li className={styles.statChip}>
                      <span className={styles.statValue}>{quizLevels.length}</span>
                      <span className={styles.statLabel}>{T.statsLevels}</span>
                    </li>
                    <li className={styles.statChip}>
                      <span className={styles.statValue}>{TOTAL_QUESTIONS}</span>
                      <span className={styles.statLabel}>{T.statsQuestions}</span>
                    </li>
                  </ul>
                  <p className={styles.pickerLead}>{T.pickerHint}</p>
                </header>

                <ul className={styles.levelGrid}>
                  {quizLevels.map((lv) => {
                    const lvMeta = getLevelMeta(lv);
                    const productLabel = lv.title.split(' · ')[1] ?? lvMeta.productName;
                    const levelPath = `${quizBasePath}/${lv.productId}`;
                    return (
                      <li key={lv.level}>
                        <article
                          className={styles.levelCard}
                          style={{ '--level-accent': lvMeta.accent }}
                        >
                          <Link
                            to={levelPath}
                            className={styles.levelCardTap}
                            aria-label={`${T.startLevel} — ${productLabel}`}
                          >
                            <div className={styles.levelCardHero}>
                              <span className={styles.levelBadge}>Մակարդակ {lv.level}</span>
                              <span className={styles.levelCode} aria-hidden="true">
                                {lvMeta.shortCode}
                              </span>
                            </div>
                            <div className={styles.levelCardBody}>
                              <h3 className={styles.levelCardTitle}>{productLabel}</h3>
                              <p className={styles.levelCardSub}>{lv.subtitle}</p>
                              <p className={styles.levelCardMeta}>6 հարց</p>
                            </div>
                          </Link>
                          <div className={styles.levelCardFooter}>
                            <Link to={levelPath} className={styles.levelBtn}>
                              {T.startLevel}
                            </Link>
                            <Link to={`/product/${lv.productId}`} className={styles.levelLink}>
                              {T.learnProduct}
                            </Link>
                          </div>
                        </article>
                      </li>
                    );
                  })}
                </ul>
              </section>
            ) : (
              <section className={styles.quiz} aria-label={T.ariaForm}>
                <div ref={quizTopRef} className={styles.quizAnchor} />

                <header className={styles.quizNav}>
                  <div className={styles.quizNavTop}>
                    <button
                      type="button"
                      className={styles.quizBack}
                      onClick={reviewMode ? exitReview : handleBackToPicker}
                    >
                      <span className={styles.quizBackIcon} aria-hidden="true">
                        ←
                      </span>
                      {reviewMode ? T.backToResults : T.backLevels}
                    </button>
                    {meta?.shortCode && (
                      <span
                        className={styles.quizProductTag}
                        style={{ background: accent }}
                      >
                        {meta.shortCode}
                      </span>
                    )}
                  </div>

                  <div className={styles.quizProgress}>
                    <div className={styles.quizProgressLabels}>
                      <span className={styles.quizProgressTitle}>
                        {reviewMode
                          ? T.reviewLegend
                          : submitted
                            ? T.breakdownTitle
                            : T.questionOf(stepIndex + 1, n)}
                      </span>
                      <span className={styles.quizProgressCount}>
                        {submitted && !reviewMode
                          ? `${score}/${n}`
                          : T.progressLabel(answeredCount, n)}
                      </span>
                    </div>
                    <div
                      className={styles.progressTrack}
                      role="progressbar"
                      aria-valuenow={submitted && !reviewMode ? score : answeredCount}
                      aria-valuemin={0}
                      aria-valuemax={n}
                      aria-label={T.progressLabel(answeredCount, n)}
                    >
                      <div
                        className={styles.progressFill}
                        style={{
                          width: `${
                            submitted && !reviewMode
                              ? Math.round((score / n) * 100)
                              : progressPct
                          }%`,
                        }}
                      />
                    </div>
                  </div>

                  {showQuestion && (
                    <nav className={styles.stepper} aria-label="Հարցերի քայլեր">
                      {questions.map((item, i) => {
                        const done = answers[i] !== null;
                        const active = i === stepIndex;
                        const correct =
                          submitted &&
                          answers[i] === item.correctIndex;
                        const wrong =
                          submitted &&
                          answers[i] !== null &&
                          answers[i] !== item.correctIndex;
                        const canJump = submitted
                          ? reviewMode
                          : done || i <= stepIndex;

                        let dotClass = styles.stepDot;
                        if (active) dotClass += ` ${styles.stepDotActive}`;
                        else if (submitted && correct) dotClass += ` ${styles.stepDotCorrect}`;
                        else if (submitted && wrong) dotClass += ` ${styles.stepDotWrong}`;
                        else if (done) dotClass += ` ${styles.stepDotDone}`;

                        return (
                          <button
                            key={`step-${i}`}
                            type="button"
                            className={dotClass}
                            onClick={() => canJump && goToStep(i)}
                            disabled={!canJump}
                            aria-label={T.stepAria(i + 1, n)}
                            aria-current={active ? 'step' : undefined}
                          >
                            {submitted ? (correct ? '✓' : wrong ? '✕' : i + 1) : i + 1}
                          </button>
                        );
                      })}
                    </nav>
                  )}
                </header>

                {showQuestion && currentQuestion && (
                  <form
                    className={styles.form}
                    onSubmit={(e) => {
                      e.preventDefault();
                      if (reviewMode) {
                        if (isLastStep) exitReview();
                        else goNext();
                        return;
                      }
                      if (isLastStep && allAnswered) handleSubmit();
                      else goNext();
                    }}
                  >
                    <div className={styles.questionSlide} key={`quiz-step-${stepIndex}`}>
                      <fieldset
                        className={`${styles.card} ${currentAnswered ? styles.cardAnswered : ''}`}
                      >
                        <legend className={styles.srOnly}>{`Հարց ${stepIndex + 1}`}</legend>
                        <p
                          id={`quiz-q-${stepIndex}-title`}
                          className={styles.cardTitle}
                        >
                          {currentQuestion.question}
                        </p>
                        <div
                          className={styles.options}
                          role="radiogroup"
                          aria-labelledby={`quiz-q-${stepIndex}-title`}
                        >
                          {currentQuestion.options.map((label, oi) => {
                            const isSelected = answers[stepIndex] === oi;
                            const isCorrect = oi === currentQuestion.correctIndex;
                            let stateClass = '';
                            if (submitted && isCorrect) stateClass = styles.optionCorrect;
                            else if (submitted && isSelected && !isCorrect) {
                              stateClass = styles.optionWrong;
                            } else if (isSelected) stateClass = styles.optionSelected;

                            return (
                              <label
                                key={`${stepIndex}-${oi}`}
                                className={`${styles.option} ${stateClass}`}
                              >
                                <input
                                  className={styles.optionInput}
                                  type="radio"
                                  name={radioName(stepIndex)}
                                  checked={isSelected}
                                  disabled={submitted}
                                  onChange={() => setAnswer(stepIndex, oi)}
                                />
                                <span className={styles.optionLetter} aria-hidden="true">
                                  {OPTION_LETTERS[oi]}
                                </span>
                                <span className={styles.optionLabel}>{label}</span>
                                {submitted && isCorrect && (
                                  <span className={styles.optionMark} aria-hidden="true">
                                    ✓
                                  </span>
                                )}
                                {submitted && isSelected && !isCorrect && (
                                  <span
                                    className={`${styles.optionMark} ${styles.optionMarkWrong}`}
                                    aria-hidden="true"
                                  >
                                    ✕
                                  </span>
                                )}
                              </label>
                            );
                          })}
                        </div>
                      </fieldset>
                    </div>

                    {!submitted && !currentAnswered && (
                      <p className={styles.hint} role="status">
                        {T.selectAnswerHint}
                      </p>
                    )}

                    <div className={styles.actions}>
                      <button
                        type="button"
                        className={styles.btnGhost}
                        onClick={goPrev}
                        disabled={isFirstStep}
                      >
                        {T.prevQuestion}
                      </button>

                      <div className={styles.actionsCenter}>
                        {reviewMode ? (
                          <button type="submit" className={styles.btnPrimary}>
                            {isLastStep ? T.backToResults : T.nextQuestion}
                          </button>
                        ) : isLastStep ? (
                          <button
                            type="submit"
                            className={styles.btnPrimary}
                            disabled={!allAnswered}
                          >
                            {T.checkAnswers}
                          </button>
                        ) : (
                          <button
                            type="submit"
                            className={styles.btnPrimary}
                            disabled={!currentAnswered}
                          >
                            {T.nextQuestion}
                          </button>
                        )}
                      </div>

                      {!submitted ? (
                        <button
                          type="button"
                          className={styles.btnText}
                          onClick={handleReset}
                          disabled={answeredCount === 0}
                        >
                          {T.resetQuiz}
                        </button>
                      ) : (
                        <span className={styles.actionsSpacer} aria-hidden="true" />
                      )}
                    </div>
                  </form>
                )}

                {submitted && score !== null && feedback && !reviewMode && (
                  <aside
                    ref={resultsRef}
                    className={`${styles.results} ${styles[`results_${feedback.tone}`]}`}
                    aria-live="polite"
                  >
                    <div className={styles.resultsInner}>
                      <div className={styles.scoreRingWrap} aria-hidden="true">
                        <svg className={styles.scoreRing} viewBox="0 0 120 120">
                          <circle
                            className={styles.scoreRingBg}
                            cx="60"
                            cy="60"
                            r="52"
                            fill="none"
                            strokeWidth="10"
                          />
                          <circle
                            className={styles.scoreRingFg}
                            cx="60"
                            cy="60"
                            r="52"
                            fill="none"
                            strokeWidth="10"
                            strokeDasharray={2 * Math.PI * 52}
                            strokeDashoffset={scoreRingOffset(score, n)}
                          />
                        </svg>
                        <span className={styles.scoreValue}>
                          {score}
                          <span className={styles.scoreTotal}>/{n}</span>
                        </span>
                      </div>
                      <div className={styles.resultsCopy}>
                        <h2 className={styles.resultsTitle}>{feedback.title}</h2>
                        <p className={styles.resultsMessage}>{feedback.message}</p>
                      </div>
                    </div>

                    <ul className={styles.breakdown} aria-label={T.breakdownTitle}>
                      {questions.map((item, i) => {
                        const ok = answers[i] === item.correctIndex;
                        return (
                          <li key={`bd-${i}`}>
                            <button
                              type="button"
                              className={`${styles.breakdownBtn} ${ok ? styles.breakdownOk : styles.breakdownBad}`}
                              onClick={() => {
                                setReviewMode(true);
                                setCurrentStep(i);
                                scrollToQuiz();
                              }}
                              aria-label={`${T.stepAria(i + 1, n)} — ${ok ? 'ճիշտ' : 'սխալ'}`}
                            >
                              {i + 1}
                            </button>
                          </li>
                        );
                      })}
                    </ul>

                    <div className={styles.resultsActions}>
                      <button
                        type="button"
                        className={styles.btnPrimary}
                        onClick={startReview}
                      >
                        {T.seeReview}
                      </button>
                      <button
                        type="button"
                        className={styles.btnGhost}
                        onClick={handleReset}
                      >
                        {T.retryLevel}
                      </button>
                      <button
                        type="button"
                        className={styles.btnGhost}
                        onClick={handleBackToPicker}
                      >
                        {T.backLevels}
                      </button>
                      <Button text={T.backHome} variant="outline" to="/" />
                    </div>
                  </aside>
                )}
              </section>
            )}
          </div>
        </Container>
      </div>
    </PageLayout>
  );
}

export default QuizPage;
