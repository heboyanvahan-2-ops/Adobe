import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PageLayout from '../components/layouts/PageLayout';
import { photoshopLessons } from '../data/photoshopLessons';
import { getSectionQuiz } from '../data/photoshopSectionQuiz';
import styles from '../styles/PhotoshopPage.module.css';

function LessonImage({ image }) {
  if (!image?.src) return null;
  return (
    <figure className={styles.lessonFigure}>
      <img className={styles.lessonImage} src={image.src} alt={image.alt} loading="lazy" />
      {image.caption && (
        <figcaption className={styles.imageCaption}>{image.caption}</figcaption>
      )}
    </figure>
  );
}

function StepList({ steps, className }) {
  if (!steps?.length) return null;
  return (
    <ol className={className ?? styles.stepsList}>
      {steps.map((step) => (
        <li key={step}>{step}</li>
      ))}
    </ol>
  );
}

function ParagraphList({ paragraphs }) {
  if (!paragraphs?.length) return null;
  return paragraphs.map((p) => (
    <p key={p.slice(0, 48)} className={styles.lessonText}>
      {p}
    </p>
  ));
}

function LessonSection({ section }) {
  return (
    <article className={styles.sectionBlock}>
      {section.title && <h3 className={styles.sectionTitle}>{section.title}</h3>}
      <ParagraphList paragraphs={section.paragraphs} />
      <StepList steps={section.steps} />
      <LessonImage image={section.image} />
    </article>
  );
}

function SectionQuiz({ lessonId }) {
  const questions = getSectionQuiz(lessonId);
  const total = questions.length;
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState(() => Array.from({ length: total }, () => null));
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setStep(0);
    setAnswers(Array.from({ length: total }, () => null));
    setSubmitted(false);
  }, [lessonId, total]);

  if (!total) return null;

  const score = submitted
    ? answers.reduce((n, a, i) => (a === questions[i].correctIndex ? n + 1 : n), 0)
    : null;

  const safeStep = Math.min(step, total - 1);
  const current = questions[safeStep];
  const currentAnswered = answers[safeStep] !== null;
  const allAnswered = answers.every((a) => a !== null);
  const isFirst = safeStep === 0;
  const isLast = safeStep === total - 1;
  const progressPct = submitted
    ? Math.round((score / total) * 100)
    : Math.round((answers.filter((a) => a !== null).length / total) * 100);

  const pick = (optIdx) => {
    if (submitted) return;
    setAnswers((prev) => {
      const next = [...prev];
      next[safeStep] = optIdx;
      return next;
    });
  };

  const handleReset = () => {
    setStep(0);
    setAnswers(Array.from({ length: total }, () => null));
    setSubmitted(false);
  };

  const goNext = () => {
    if (submitted) {
      if (!isLast) setStep((s) => s + 1);
      return;
    }
    if (currentAnswered && !isLast) setStep((s) => s + 1);
  };

  const goPrev = () => {
    if (!isFirst) setStep((s) => s - 1);
  };

  const handleSubmit = () => {
    if (allAnswered) setSubmitted(true);
  };

  return (
    <section className={styles.sectionQuiz} aria-labelledby={`quiz-${lessonId}`}>
      <div className={styles.quizHeader}>
        <h3 id={`quiz-${lessonId}`} className={styles.sectionQuizTitle}>
          Թեստ
        </h3>
        {!submitted && (
          <span className={styles.quizMeta}>
            Հարց {safeStep + 1}/{total}
          </span>
        )}
      </div>

      {!submitted && (
        <div className={styles.quizProgressWrap}>
          <div
            className={styles.quizProgressTrack}
            role="progressbar"
            aria-valuenow={answers.filter((a) => a !== null).length}
            aria-valuemin={0}
            aria-valuemax={total}
          >
            <div className={styles.quizProgressFill} style={{ width: `${progressPct}%` }} />
          </div>
          <nav className={styles.quizStepper} aria-label="Հարցերի քայլեր">
            {questions.map((_, i) => {
              const done = answers[i] !== null;
              const active = i === safeStep;
              let dotClass = styles.stepDot;
              if (active) dotClass += ` ${styles.stepDotActive}`;
              else if (done) dotClass += ` ${styles.stepDotDone}`;

              return (
                <button
                  key={`dot-${i}`}
                  type="button"
                  className={dotClass}
                  onClick={() => (done || i <= safeStep) && setStep(i)}
                  disabled={!done && i > safeStep}
                  aria-label={`Հարց ${i + 1}`}
                  aria-current={active ? 'step' : undefined}
                >
                  {i + 1}
                </button>
              );
            })}
          </nav>
        </div>
      )}

      {submitted && score !== null ? (
        <aside className={styles.quizResultsCard} aria-live="polite">
          <p className={styles.quizResultsLabel}>Արդյունք</p>
          <p className={styles.quizResultsScore}>
            {score}
            <span className={styles.quizResultsTotal}>/{total}</span>
          </p>
          <p className={styles.quizResultsMsg}>
            {score === total
              ? 'Գերազանց — բոլոր պատասխանները ճիշտ են։'
              : 'Կարդացեք նյութը և կրկին փորձեք։'}
          </p>
          <ul className={styles.quizBreakdown}>
            {questions.map((q, i) => {
              const ok = answers[i] === q.correctIndex;
              return (
                <li key={q.question.slice(0, 30)}>
                  <button
                    type="button"
                    className={`${styles.breakdownBtn} ${ok ? styles.breakdownOk : styles.breakdownBad}`}
                    onClick={() => {
                      setSubmitted(false);
                      setStep(i);
                    }}
                    aria-label={`Հարց ${i + 1} — ${ok ? 'ճիշտ' : 'սխալ'}`}
                  >
                    {ok ? '✓' : '✕'}
                  </button>
                </li>
              );
            })}
          </ul>

          <div className={styles.quizReview}>
            <h4 className={styles.quizReviewTitle}>Ճիշտ պատասխաններ</h4>
            <ol className={styles.quizReviewList}>
              {questions.map((q, i) => {
                const ok = answers[i] === q.correctIndex;
                const userAnswer =
                  answers[i] !== null ? q.options[answers[i]] : '—';
                const correctAnswer = q.options[q.correctIndex];

                return (
                  <li
                    key={`review-${q.question.slice(0, 32)}`}
                    className={`${styles.quizReviewItem} ${ok ? styles.reviewOk : styles.reviewBad}`}
                  >
                    <p className={styles.reviewQuestion}>
                      <span className={styles.reviewNum}>{i + 1}.</span> {q.question}
                    </p>
                    {!ok && (
                      <p className={styles.reviewUserAnswer}>
                        <span className={styles.reviewLabel}>Ձեր պատասխանը՝</span>{' '}
                        {userAnswer}
                      </p>
                    )}
                    <p className={styles.reviewCorrectAnswer}>
                      <span className={styles.reviewLabel}>Ճիշտ պատասխան՝</span>{' '}
                      {correctAnswer}
                    </p>
                  </li>
                );
              })}
            </ol>
          </div>

          <button type="button" className={styles.btnPrimary} onClick={handleReset}>
            Կրկին փորձել
          </button>
        </aside>
      ) : (
        <div className={styles.quizCard} key={`step-${safeStep}`}>
          <p className={styles.quizQuestion}>{current.question}</p>
          <div className={styles.options} role="radiogroup">
            {current.options.map((label, oi) => {
              const isSelected = answers[safeStep] === oi;
              const stateClass = isSelected ? styles.optionSelected : '';

              return (
                <button
                  key={label}
                  type="button"
                  className={`${styles.option} ${stateClass}`}
                  aria-pressed={isSelected}
                  onClick={() => pick(oi)}
                >
                  {label}
                </button>
              );
            })}
          </div>

          <div className={styles.quizActions}>
            <button
              type="button"
              className={styles.btnGhost}
              onClick={goPrev}
              disabled={isFirst}
            >
              Նախորդ
            </button>

            {isLast ? (
              <button
                type="button"
                className={styles.btnPrimary}
                onClick={handleSubmit}
                disabled={!allAnswered}
              >
                Ավարտել
              </button>
            ) : (
              <button
                type="button"
                className={styles.btnPrimary}
                onClick={goNext}
                disabled={!currentAnswered}
              >
                Հաջորդ
              </button>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

function LessonInfo({ blocks }) {
  if (!blocks?.length) return null;

  return (
    <section className={styles.lessonInfo} aria-label="Տեղեկատվություն">
      <h3 className={styles.lessonInfoTitle}>Տեղեկատվություն</h3>
      <div className={styles.lessonInfoList}>
        {blocks.map((block) => (
          <article key={block.title} className={styles.lessonInfoItem}>
            {block.title && <h4 className={styles.lessonInfoItemTitle}>{block.title}</h4>}
            <ParagraphList paragraphs={block.paragraphs} />
            <StepList steps={block.steps} />
          </article>
        ))}
      </div>
    </section>
  );
}

function LessonContent({ lesson }) {
  return (
    <>
      <h2 className={styles.lessonTitle}>{lesson.title}</h2>
      <ParagraphList paragraphs={lesson.paragraphs} />

      {lesson.steps?.length > 0 && !lesson.sections?.length && (
        <div className={styles.topSteps}>
          <h3 className={styles.stepsTitle}>Քայլեր</h3>
          <StepList steps={lesson.steps} />
        </div>
      )}

      {lesson.images?.map((img) => (
        <LessonImage key={img.src} image={img} />
      ))}

      {lesson.sections?.length > 0 && (
        <div className={styles.sectionList}>
          {lesson.sections.map((section) => (
            <LessonSection key={section.title ?? section.steps?.[0]} section={section} />
          ))}
        </div>
      )}

      <LessonInfo blocks={lesson.infoBlocks} />
      <SectionQuiz lessonId={lesson.id} />
    </>
  );
}

function PhotoshopPage() {
  const location = useLocation();
  const [activeId, setActiveId] = useState(photoshopLessons[0]?.id ?? 'intro');
  const lesson = photoshopLessons.find((l) => l.id === activeId);

  useEffect(() => {
    const hashId = location.hash.replace('#', '');
    if (hashId && photoshopLessons.some((item) => item.id === hashId)) {
      setActiveId(hashId);
    }
  }, [location.hash]);

  const selectLesson = (id) => {
    setActiveId(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <PageLayout title="Adobe Photoshop">
      <div className={styles.page}>
        <div className={styles.layout}>
          <aside className={styles.sidebar} aria-label="Թեմաների ցանկ">
            <div className={styles.sidebarHead}>
              <span className={styles.sidebarIcon} aria-hidden="true">
                ☰
              </span>
              <h2 className={styles.sidebarTitle}>Adobe Photoshop</h2>
            </div>

            <ul className={styles.navList}>
              {photoshopLessons.map((item) => (
                <li key={item.id} className={styles.navItem}>
                  <button
                    type="button"
                    className={`${styles.navBtn} ${
                      activeId === item.id ? styles.navBtnActive : ''
                    }`}
                    onClick={() => selectLesson(item.id)}
                  >
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          <main className={styles.main}>
            <div className={styles.heroStrip}>
              <h1 className={styles.heroTitle}>Adobe Photoshop</h1>
            </div>

            <div className={styles.card}>
              {lesson && <LessonContent lesson={lesson} />}
            </div>
          </main>
        </div>
      </div>
    </PageLayout>
  );
}

export default PhotoshopPage;
