import { Link } from 'react-router-dom';
import Container from './Container';
import { categories } from '../../data/products';
import styles from '../../styles/Footer.module.css';

/* ============================================================
   Иконки SVG для соцсетей.
   Простые, лаконичные, в одном стиле — fill="currentColor",
   чтобы цвет управлялся через CSS.
   ============================================================ */

function FacebookIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </svg>
  );
}

/* ============================================================
   Данные для футера.
   Если нужно поменять соцсети — правится в одном месте.
   ============================================================ */

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/adobe',
    Icon: FacebookIcon,
  },
  {
    label: 'Twitter / X',
    href: 'https://twitter.com/adobe',
    Icon: TwitterIcon,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/adobe',
    Icon: LinkedInIcon,
  },
];

const CONTACT_EMAIL = 'showcase@example.com';

// Подписи к колонкам и блокам футера на армянском.
const T = {
  tagline:
    'Adobe-ի արտադրանքների ուսումնական ցուցադրություն — դիպլոմային աշխատանք։ ' +
    '30+ ծրագրերի ինտերակտիվ ներկայացում 5 կատեգորիաներից՝ Photoshop-ից մինչև Firefly։',
  categories: 'Կատեգորիաներ',
  navigation: 'Նավիգացիա',
  contact: 'Կապ հաստատել',
  home: 'Գլխավոր',
  about: 'Adobe-ի մասին',
  contactPage: 'Կապ',
  officialSite: 'Պաշտոնական կայք ↗',
  emailAria: (email) => `Գրել ${email} հասցեին`,
  socialLabel: 'Մենք սոցցանցերում՝',
  copyright: (year) => `© ${year} Adobe Showcase. Ուսումնական նախագիծ։`,
  trademark:
    'Բոլոր լոգոները և ապրանքանիշերը պատկանում են Adobe Inc.-ին։',
};

/* ============================================================
   Footer — подвал сайта.
   ============================================================ */

/**
 * Footer — подвал сайта.
 *
 * Содержит:
 *  - Брендовый блок (логотип + описание проекта).
 *  - Колонку «Категории» (динамически из products.js).
 *  - Колонку «Навигация» (главные страницы).
 *  - Колонку «Связаться» (email + соцсети).
 *  - Нижнюю строку с копирайтом и подписью.
 *
 * Адаптивность построена на CSS Grid:
 *  - mobile: 1 колонка;
 *  - >= 640px: 2 колонки;
 *  - >= 1024px: 4 колонки.
 */
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.grid}>
          {/* ----- Брендовый блок ----- */}
          <div className={styles.brand}>
            <span className={styles.brandTitle}>
              <span className={styles.brandMark} aria-hidden="true">
                A
              </span>
              Adobe Showcase
            </span>
            <p className={styles.brandText}>{T.tagline}</p>
          </div>

          {/* ----- Категории ----- */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>{T.categories}</h3>
            <ul className={styles.linkList}>
              {categories.map((cat) => (
                <li key={cat.id}>
                  <Link to={`/${cat.id}`} className={styles.link}>
                    <span
                      className={styles.linkDot}
                      style={{ backgroundColor: cat.color }}
                      aria-hidden="true"
                    />
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ----- Навигация ----- */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>{T.navigation}</h3>
            <ul className={styles.linkList}>
              <li><Link to="/" className={styles.link}>{T.home}</Link></li>
              <li><Link to="/about" className={styles.link}>{T.about}</Link></li>
              <li><Link to="/contact" className={styles.link}>{T.contactPage}</Link></li>
              <li>
                <a
                  href="https://www.adobe.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  {T.officialSite}
                </a>
              </li>
            </ul>
          </div>

          {/* ----- Контакты + соцсети ----- */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>{T.contact}</h3>

            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className={styles.contact}
              aria-label={T.emailAria(CONTACT_EMAIL)}
            >
              <MailIcon />
              <span>{CONTACT_EMAIL}</span>
            </a>

            <p className={styles.socialLabel}>{T.socialLabel}</p>
            <ul className={styles.socialList}>
              {socialLinks.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    aria-label={label}
                    title={label}
                  >
                    <Icon />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ----- Нижняя строка ----- */}
        <div className={styles.bottom}>
          <span>{T.copyright(currentYear)}</span>
          <span className={styles.bottomMuted}>{T.trademark}</span>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
