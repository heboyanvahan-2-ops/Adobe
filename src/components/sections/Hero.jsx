import Container from '../common/Container';
import Button from '../common/Button';
import styles from '../../styles/Hero.module.css';

/* ============================================================
   Hero — большой баннер для верхней части страницы.
   ============================================================ */

/**
 * Hero — герой-баннер (полноэкранный или фиксированной высоты).
 *
 * Поддерживает три режима фона:
 *   1. backgroundImage — URL картинки + затемнение для читаемости текста.
 *   2. backgroundColor — сплошной цвет (или градиент).
 *   3. По умолчанию — фирменный градиент Adobe (тёмно-синий + красный акцент).
 *
 * Props:
 *  - title           (строка, обязательная) — большой заголовок (h1).
 *  - subtitle        (строка) — подзаголовок под названием.
 *  - badge           (строка, опц.) — мини-бейдж над заголовком (например, «Դիպլոմային աշխատանք»).
 *  - backgroundImage (строка, опц.) — URL картинки или CSS-фон.
 *  - backgroundColor (строка, опц.) — цвет/градиент.
 *  - height          ('full' | 'medium' | 'compact') — высота:
 *      • 'full'    — почти весь экран (min-height: 80vh, мин. 480px);
 *      • 'medium'  — 400–500px (по умолчанию);
 *      • 'compact' — 300px (для внутренних страниц).
 *  - theme           ('dark' | 'light') — цветовая тема:
 *      • 'dark'  (по умолчанию) — белый текст на тёмном/цветном фоне;
 *      • 'light' — тёмный текст на светлом фоне.
 *  - align           ('center' | 'left') — горизонтальное выравнивание текста.
 *  - cta             (объект, опц.) — главная кнопка:
 *      { text, action }  где action — путь '/about' (Link),
 *                                  url 'https://...' (внешняя ссылка),
 *                                  или функция onClick.
 *  - secondaryCta    (объект, опц.) — вторая кнопка (outline) — тот же формат.
 *  - children        — произвольный JSX под кнопками (опционально).
 *  - decoration      (ReactNode, опц.) — декоративный слой, который рендерится
 *                    ПОВЕРХ фона, но ПОД контентом (волны, частицы, орбы и т.п.).
 *                    Если задан — стандартные плавающие пятна (defaultBg) НЕ показываются.
 *
 * Пример:
 *   <Hero
 *     badge="Դիպլոմային աշխատանք"
 *     title="Adobe Showcase"
 *     subtitle="30+ արտադրանքների ինտերակտիվ ցուցադրություն..."
 *     cta={{ text: 'Adobe-ի մասին', action: '/about' }}
 *     secondaryCta={{ text: 'Արտադրանքներ', action: '/creative-cloud' }}
 *     height="full"
 *   />
 */
function Hero({
  title,
  subtitle,
  badge,
  backgroundImage,
  backgroundColor,
  height = 'medium',
  theme = 'dark',
  align = 'center',
  cta,
  secondaryCta,
  children,
  decoration,
}) {
  // Собираем стили фона. Приоритет: image > color > градиент по умолчанию.
  const heroStyle = {};
  if (backgroundImage) {
    heroStyle.backgroundImage = `url(${backgroundImage})`;
  } else if (backgroundColor) {
    heroStyle.background = backgroundColor;
  }

  const classes = [
    styles.hero,
    styles[`height_${height}`],
    theme === 'light' ? styles.themeLight : styles.themeDark,
    align === 'left' ? styles.alignLeft : styles.alignCenter,
    backgroundImage ? styles.withImage : '',
    !backgroundImage && !backgroundColor ? styles.defaultBg : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <section className={classes} style={heroStyle}>
      {/* Кастомный декоративный слой (волны, частицы…). Если он задан, стандартные
          плавающие пятна не показываем — иначе перегруз. */}
      {decoration && (
        <div className={styles.decoration} aria-hidden="true">
          {decoration}
        </div>
      )}

      {/* Декоративные плавающие пятна в фоне (показываются только в режиме defaultBg
          и если не задан кастомный decoration) */}
      {!decoration && !backgroundImage && !backgroundColor && (
        <>
          <span className={`${styles.blob} ${styles.blob1}`} aria-hidden="true" />
          <span className={`${styles.blob} ${styles.blob2}`} aria-hidden="true" />
          <span className={`${styles.blob} ${styles.blob3}`} aria-hidden="true" />
        </>
      )}

      {/* Затемняющий слой над фоновой картинкой для контраста текста */}
      {backgroundImage && <div className={styles.overlay} aria-hidden="true" />}

      <Container className={styles.inner}>
        {badge && (
          <span className={`${styles.badge} animate-fade-in-down`}>
            {badge}
          </span>
        )}

        <h1 className={`${styles.title} animate-fade-in-up`}>
          {title}
        </h1>

        {subtitle && (
          <p className={`${styles.subtitle} animate-fade-in-up delay-100`}>
            {subtitle}
          </p>
        )}

        {(cta || secondaryCta) && (
          <div className={`${styles.actions} animate-fade-in-up delay-200`}>
            {cta && <CtaButton cta={cta} variant="primary" />}
            {secondaryCta && <CtaButton cta={secondaryCta} variant="outline" />}
          </div>
        )}

        {children && <div className={styles.children}>{children}</div>}
      </Container>
    </section>
  );
}

/**
 * CtaButton — внутренний хелпер: превращает объект `cta` в Button-компонент.
 *
 * action может быть:
 *   - функция        → onClick;
 *   - строка с http  → внешняя ссылка (href);
 *   - другая строка  → путь React Router (to).
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

export default Hero;
