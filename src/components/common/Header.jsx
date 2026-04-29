import { Link } from 'react-router-dom';
import Container from './Container';
import Navigation from './Navigation';
import styles from '../../styles/Header.module.css';

/**
 * Header — верхняя панель сайта.
 * Содержит логотип-ссылку на главную и компонент Navigation.
 * Логотип Adobe изображён через CSS-стилизованный квадратик с буквой A,
 * чтобы не зависеть от внешних ассетов.
 */
function Header() {
  return (
    <header className={styles.header}>
      <Container className={styles.inner} as="div">
        <Link to="/" className={styles.logo} aria-label="Adobe Showcase — на главную">
          <span className={styles.logoMark} aria-hidden="true">
            A
          </span>
          <span className={styles.logoText}>Adobe Showcase</span>
        </Link>

        <Navigation />
      </Container>
    </header>
  );
}

export default Header;
