import { Link } from 'react-router-dom';
import Container from './Container';
import Navigation from './Navigation';
import styles from '../../styles/Header.module.css';

/**
 * PhotoshopLogo — иконка приложения Adobe Photoshop (Ps на синем фоне).
 */
function PhotoshopLogo() {
  return (
    <span className={styles.logoMark} aria-hidden="true">
      Ps
    </span>
  );
}

/**
 * Header — верхняя панель сайта.
 */
function Header() {
  return (
    <header className={styles.header}>
      <Container className={styles.inner} as="div">
        <Link
          to="/"
          className={styles.logo}
          aria-label="Adobe Photoshop — Գլխավոր էջ"
        >
          <PhotoshopLogo />
          <span className={styles.logoText}>
            Adobe <span className={styles.logoProduct}>Photoshop</span>
          </span>
        </Link>

        <Navigation />
      </Container>
    </header>
  );
}

export default Header;
