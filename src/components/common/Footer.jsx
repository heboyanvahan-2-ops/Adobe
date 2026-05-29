import { Link } from 'react-router-dom';
import Container from './Container';
import styles from '../../styles/Footer.module.css';

const T = {
  navigation: 'Նավիգացիա',
  home: 'Գլխավոր',
  about: 'Adobe Photoshop-ի Մասին',
  lessons: 'Ուսումնական նյութ',
  videoLessons: 'Տեսադասեր',
  quiz: 'Թեստեր',
  copyright: (year) => `© ${year} Adobe Showcase`,
  trademark:
    'Բոլոր լոգոները և ապրանքանիշերը պատկանում են Adobe Inc.-ին։',
};

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
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>{T.navigation}</h3>
            <ul className={styles.linkList}>
              <li><Link to="/" className={styles.link}>{T.home}</Link></li>
              <li><Link to="/about" className={styles.link}>{T.about}</Link></li>
              <li>
                <Link to="/product/photoshop" className={styles.link}>
                  {T.lessons}
                </Link>
              </li>
              <li><Link to="/video-lessons" className={styles.link}>{T.videoLessons}</Link></li>
              <li><Link to="/quiz" className={styles.link}>{T.quiz}</Link></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>{T.copyright(currentYear)}</span>
          <span className={styles.bottomMuted}>{T.trademark}</span>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
