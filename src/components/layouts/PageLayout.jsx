import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../common/Header';
import Footer from '../common/Footer';
import styles from '../../styles/PageLayout.module.css';

/**
 * PageLayout — единая обёртка для всех страниц.
 *
 * Что делает:
 *  - рендерит Header сверху, Footer снизу, основной контент в середине;
 *  - при смене маршрута проматывает страницу к началу (UX);
 *  - устанавливает <title> в заголовок вкладки браузера, если передан проп `title`.
 *
 * Props:
 *  - children: содержимое страницы.
 *  - title:    текст для document.title (опционально).
 */
function PageLayout({ children, title }) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' in window ? 'auto' : 'auto' });
  }, [location.pathname]);

  useEffect(() => {
    if (title) {
      document.title = `${title} — Adobe Showcase`;
    } else {
      document.title = 'Adobe Showcase';
    }
  }, [title]);

  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}

export default PageLayout;
