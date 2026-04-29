import Container from '../common/Container';
import Button from '../common/Button';
import styles from '../../styles/CTASection.module.css';

/**
 * CTASection — крупный «призыв к действию» с заголовком и кнопкой.
 *
 * Используется в нижней части страниц как финальный аккорд.
 *
 * Props:
 *  - title       (строка, обяз.) — большой заголовок (h2).
 *  - subtitle    (строка, опц.)  — поясняющий текст под заголовком.
 *  - cta         (объект)        — главная кнопка { text, action }.
 *      action: путь '/x' (Link), 'https://...' (внешняя), либо функция onClick.
 *  - secondaryCta (объект, опц.) — вторая кнопка (outline, на тёмном фоне светлая).
 *  - background  ('red' | 'dark' | 'gradient' | 'light') — стиль фона:
 *      • 'red'      — фирменный красный Adobe;
 *      • 'dark'     — тёмно-синий с радиальными бликами;
 *      • 'gradient' — диагональный красно-фиолетовый градиент (по умолчанию);
 *      • 'light'    — светло-серый (для лёгкого CTA).
 *  - align       ('center' | 'left') — выравнивание (по умолчанию 'center').
 *
 * Пример:
 *   <CTASection
 *     title="Սկսեք օգտագործել Adobe-ն այսօր"
 *     subtitle="Ընտրեք առաջին կատեգորիան և սուզվեք ստեղծագործության աշխարհ"
 *     cta={{ text: 'Անցնել Creative Cloud', action: '/creative-cloud' }}
 *   />
 */
function CTASection({
  title,
  subtitle,
  cta,
  secondaryCta,
  background = 'gradient',
  align = 'center',
}) {
  const classes = [
    styles.section,
    styles[`bg_${background}`],
    align === 'left' ? styles.alignLeft : styles.alignCenter,
  ].join(' ');

  return (
    <section className={classes}>
      <Container>
        <div className={styles.inner}>
          <h2 className={`${styles.title} animate-fade-in-up`}>{title}</h2>

          {subtitle && (
            <p className={`${styles.subtitle} animate-fade-in-up delay-100`}>
              {subtitle}
            </p>
          )}

          {(cta || secondaryCta) && (
            <div className={`${styles.actions} animate-fade-in-up delay-200`}>
              {cta && <CtaButton cta={cta} variant={primaryVariant(background)} />}
              {secondaryCta && (
                <CtaButton cta={secondaryCta} variant={secondaryVariant(background)} />
              )}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

/* На разных фонах кнопкам нужны разные варианты, чтобы был контраст. */
function primaryVariant(bg) {
  // На красном — secondary (серая) или primary (выглядит одинаково).
  // На тёмном/градиенте/светлом — primary красная.
  if (bg === 'red') return 'secondary';
  return 'primary';
}

function secondaryVariant(bg) {
  // На красном фоне outline-кнопка плохо читается, заменяем на secondary.
  if (bg === 'red') return 'secondary';
  return 'outline';
}

/**
 * Адаптер для пропа cta — превращает { text, action } в Button.
 * Тот же подход, что и в Hero.jsx.
 */
function CtaButton({ cta, variant }) {
  const { text, action } = cta;

  if (typeof action === 'function') {
    return <Button variant={variant} size="large" text={text} onClick={action} />;
  }
  if (typeof action === 'string' && /^https?:\/\//.test(action)) {
    return <Button variant={variant} size="large" text={text} href={action} />;
  }
  if (typeof action === 'string') {
    return <Button variant={variant} size="large" text={text} to={action} />;
  }
  return <Button variant={variant} size="large" text={text} />;
}

export default CTASection;
