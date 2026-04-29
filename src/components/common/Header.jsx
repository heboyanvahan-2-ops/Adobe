import { Link } from 'react-router-dom';
import Container from './Container';
import Navigation from './Navigation';
import styles from '../../styles/Header.module.css';

/**
 * AdobeLogo — SVG-логотип Adobe (классический треугольник «A»).
 * Размер регулируется через CSS (width/height у .logoMark).
 * fill="currentColor" — цвет наследуется от родителя.
 */
function AdobeLogo() {
  return (
    <svg
      className={styles.logoMark}
      viewBox="0 0 240 234"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="currentColor"
        d="M150 0h90v234L150 0zM90 0H0v234L90 0zM120 86l57 148h-37l-17-43H81L120 86z"
      />
    </svg>
  );
}

/**
 * Header — верхняя панель сайта.
 *
 * Особенности:
 *  - Sticky: прилипает к верху при скролле (position: sticky).
 *  - Полупрозрачный фон с blur-эффектом (как у современных сайтов).
 *  - Логотип Adobe (SVG) — кликабельная ссылка на главную.
 *  - Адаптивная навигация (см. компонент Navigation).
 *
 * Структура (CSS Grid в .inner):
 *   [ Логотип ]  [ Spacer ]  [ Навигация ]
 */
function Header() {
  return (
    <header className={styles.header}>
      <Container className={styles.inner} as="div">
        <Link
          to="/"
          className={styles.logo}
          aria-label="Adobe Showcase — Գլխավոր էջ"
        >
          <AdobeLogo />
          <span className={styles.logoText}>
            Adobe<span className={styles.logoAccent}>Showcase</span>
          </span>
        </Link>

        <Navigation />
      </Container>
    </header>
  );
}

export default Header;
