import { Link } from 'react-router-dom';
import Container from './Container';
import { categories } from '../../data/products';
import styles from '../../styles/Footer.module.css';

/**
 * Footer — подвал сайта.
 * Содержит:
 *  - брендовый блок с описанием проекта,
 *  - колонку «Навигация» (главная, о Adobe, контакты),
 *  - колонку «Категории» (динамически из products.js),
 *  - колонку «Ресурсы» с внешними ссылками,
 *  - нижнюю строку с копирайтом.
 */
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <span className={styles.brandTitle}>
              <span className={styles.brandMark} aria-hidden="true">
                A
              </span>
              Adobe Showcase
            </span>
            <p className={styles.brandText}>
              Учебная демонстрация продуктов компании Adobe.
              Дипломная работа: интерактивная презентация 30+ программ
              из 5 категорий — от Photoshop до Firefly.
            </p>
          </div>

          <div className={styles.column}>
            <h3>Навигация</h3>
            <ul className={styles.linkList}>
              <li><Link to="/" className={styles.link}>Главная</Link></li>
              <li><Link to="/about" className={styles.link}>О Adobe</Link></li>
              <li><Link to="/contact" className={styles.link}>Контакты</Link></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3>Категории</h3>
            <ul className={styles.linkList}>
              {categories.map((cat) => (
                <li key={cat.id}>
                  <Link to={`/${cat.id}`} className={styles.link}>
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.column}>
            <h3>Ресурсы</h3>
            <ul className={styles.linkList}>
              <li>
                <a
                  href="https://www.adobe.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  Официальный сайт
                </a>
              </li>
              <li>
                <a
                  href="https://helpx.adobe.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  Документация
                </a>
              </li>
              <li>
                <a
                  href="https://www.adobe.com/products/catalog.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  Все продукты
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© {currentYear} Adobe Showcase. Учебный проект.</span>
          <span>Все логотипы и торговые марки — собственность Adobe Inc.</span>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
