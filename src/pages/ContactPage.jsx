import { Link } from 'react-router-dom';
import PageLayout from '../components/layouts/PageLayout';
import Container from '../components/common/Container';
import Hero from '../components/sections/Hero';
import Stats from '../components/sections/Stats';
import Grid from '../components/layouts/Grid';
import { categories, getAllProducts } from '../data/products';
import styles from '../styles/ContactPage.module.css';

/**
 * ContactPage — финальная страница-«заключение» проекта.
 *
 * Маршрут: /contact
 *
 * Структура:
 *   1. Hero            — «Спасибо за просмотр!» (благодарность пользователю).
 *   2. Project Summary — что было показано в проекте (метрики проекта).
 *   3. Quick Links     — 5 компактных плиток-ссылок на каждую категорию.
 *   4. Stats Adobe     — реальные числа Adobe (масштаб компании).
 *   5. Contact         — Email, Website, Social в крупных карточках.
 *   6. Footer          — автоматически из PageLayout.
 *
 * Все армянские тексты собраны в объект T для удобства правки.
 */

/* ============================================================
   Inline SVG-иконки (без эмодзи) — Email, Website, Social.
   ============================================================ */

const ICON_PROPS = {
  width: 32,
  height: 32,
  viewBox: '0 0 32 32',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: false,
};

function MailIcon() {
  return (
    <svg {...ICON_PROPS}>
      <rect x="4" y="7" width="24" height="18" rx="2" />
      <path d="M4 9 L16 18 L28 9" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg {...ICON_PROPS}>
      <circle cx="16" cy="16" r="11" />
      <ellipse cx="16" cy="16" rx="5" ry="11" />
      <line x1="5" y1="16" x2="27" y2="16" />
      <path d="M7.5 10 H 24.5" />
      <path d="M7.5 22 H 24.5" />
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg {...ICON_PROPS}>
      <circle cx="7" cy="16" r="3.5" />
      <circle cx="25" cy="8" r="3.5" />
      <circle cx="25" cy="24" r="3.5" />
      <line x1="10" y1="14.5" x2="22" y2="9.5" />
      <line x1="10" y1="17.5" x2="22" y2="22.5" />
    </svg>
  );
}

/* ============================================================
   Социальные сети (вспомогательные мини-иконки 18×18)
   ============================================================ */

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 12a10 10 0 10-11.6 9.9v-7H7.9v-3h2.5V9.4c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.3.2 2.3.2v2.5h-1.3c-1.3 0-1.7.8-1.7 1.6V12h2.9l-.5 3h-2.4v7A10 10 0 0022 12z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.86-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.35V9h3.41v1.56h.05c.47-.9 1.64-1.86 3.37-1.86 3.6 0 4.27 2.37 4.27 5.45v6.3zM5.34 7.43a2.06 2.06 0 11-.001-4.121A2.06 2.06 0 015.34 7.43zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

/* ============================================================
   Контент страницы (армянский)
   ============================================================ */

const T = {
  hero: {
    badge: 'Շնորհակալություն',
    title: 'Շնորհակալություն դիտման համար!',
    subtitle:
      'Հուսով ենք՝ Adobe Showcase նախագիծը հաճելի էր և օգտակար։ ' +
      'Ստորև ամփոփումն է ամեն ինչի, ինչ ցույց տվեցինք։',
  },

  summary: {
    title: 'Ինչ ենք ցույց տվել',
    subtitle:
      'Կարճ ամփոփում նախագծի մասշտաբի մասին։',
    items: [
      {
        value: '30+',
        label: 'Adobe-ի արտադրանք',
        description:
          'Photoshop-ից մինչև Firefly — ամբողջական ակնարկ կարկառուն ' +
          'արտադրանքների մասին։',
        color: '#FF0000',
      },
      {
        value: '5',
        label: 'առանձնահատուկ կատեգորիաներ',
        description:
          'Creative Cloud, Document Cloud, Experience Cloud, ' +
          'Content & Commerce, 3D & AI։',
        color: '#00A0DE',
      },
      {
        value: '9',
        label: 'ինտերակտիվ էջեր',
        description:
          'Գլխավոր էջից մինչև յուրաքանչյուր արտադրանքի մանրամասները՝ ' +
          'ադապտիվ դիզայնով։',
        color: '#9D4EDD',
      },
      {
        value: '100%',
        label: 'CSS անիմացիաներ',
        description:
          'Բոլոր անիմացիաները՝ զուտ CSS-ով, առանց JavaScript ' +
          'գրադարանների, prefers-reduced-motion-ի աջակցությամբ։',
        color: '#00CC66',
      },
    ],
  },

  quickLinks: {
    title: 'Արագ անցումներ կատեգորիաներով',
    subtitle:
      'Ուզում եք վերադառնալ որևէ կատեգորիա կամ ուսումնասիրել այլ ' +
      'ուղղություն։ Ընտրեք ստորև։',
  },

  adobeStats: {
    title: 'Adobe թվերով',
    subtitle: 'Հիշեցում՝ ընկերության համաշխարհային մասշտաբի մասին։',
    items: [
      { value: '25 000+', label: 'աշխատակից', color: '#FF0000' },
      { value: '5մլն+',  label: 'օգտատեր',    color: '#00CC66' },
      { value: '60+',    label: 'արտադրանք',  color: '#00A0DE' },
      { value: '180+',   label: 'երկիր',      color: '#9D4EDD' },
    ],
  },

  contact: {
    title: 'Կապ հաստատել',
    subtitle:
      'Հարցեր, առաջարկներ կամ կարծիքներ՝ ուրախ կլինենք լսել ձեզնից։',

    email: {
      label: 'Էլ․ փոստ',
      value: 'hello@adobe-showcase.am',
      href:  'mailto:hello@adobe-showcase.am',
      color: '#FF0000',
    },
    website: {
      label: 'Կայք',
      value: 'adobe.com',
      href:  'https://www.adobe.com',
      color: '#00A0DE',
    },
    social: {
      label: 'Սոցիալական ցանցեր',
      value: 'Հետևեք մեզ',
      color: '#9D4EDD',
      links: [
        { name: 'Facebook', href: 'https://www.facebook.com/adobe',   Icon: FacebookIcon },
        { name: 'Twitter',  href: 'https://twitter.com/Adobe',        Icon: TwitterIcon },
        { name: 'LinkedIn', href: 'https://www.linkedin.com/company/adobe', Icon: LinkedInIcon },
      ],
    },
  },
};

/* ============================================================
   Сама страница
   ============================================================ */

function ContactPage() {
  // Подсчитываем фактическое количество продуктов из данных,
  // чтобы цифра в Hero subtitle всегда соответствовала реальности.
  const totalProducts = getAllProducts().length;
  const totalCategories = categories.length;

  return (
    <PageLayout title="Շնորհակալություն">
      {/* 1) Hero — благодарственный баннер */}
      <Hero
        badge={T.hero.badge}
        title={T.hero.title}
        subtitle={T.hero.subtitle}
        height="medium"
        theme="dark"
        align="center"
      />

      {/* 2) Project Summary — что показано в проекте */}
      <section className={styles.summary}>
        <Container>
          <div className={styles.sectionHeader}>
            <h2 className={`${styles.sectionTitle} animate-fade-in-up`}>
              {T.summary.title}
            </h2>
            <p className={`${styles.sectionSubtitle} animate-fade-in-up delay-100`}>
              {T.summary.subtitle.replace('{n}', totalProducts).replace('{c}', totalCategories)}
            </p>
          </div>

          <Grid columns={{ sm: 1, md: 2, lg: 4 }} gap="md">
            {T.summary.items.map((item, i) => (
              <article
                key={item.label}
                className={`${styles.summaryCard} animate-fade-in-up delay-${Math.min((i + 1) * 100, 500)}`}
                style={{ '--accent': item.color }}
              >
                <div className={styles.summaryValue}>{item.value}</div>
                <div className={styles.summaryLabel}>{item.label}</div>
                <p className={styles.summaryDesc}>{item.description}</p>
              </article>
            ))}
          </Grid>
        </Container>
      </section>

      {/* 3) Quick links — 5 категорий компактными плитками */}
      <section className={styles.quickLinks}>
        <Container>
          <div className={styles.sectionHeader}>
            <h2 className={`${styles.sectionTitle} animate-fade-in-up`}>
              {T.quickLinks.title}
            </h2>
            <p className={`${styles.sectionSubtitle} animate-fade-in-up delay-100`}>
              {T.quickLinks.subtitle}
            </p>
          </div>

          <div className={styles.quickGrid}>
            {categories.map((category, i) => (
              <Link
                key={category.id}
                to={`/${category.id}`}
                className={`${styles.quickTile} animate-fade-in-up delay-${Math.min((i + 1) * 100, 500)}`}
                style={{ '--accent': category.color }}
              >
                <span className={styles.quickIndex}>0{i + 1}</span>
                <span className={styles.quickName}>{category.name}</span>
                <span className={styles.quickArrow} aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* 4) Adobe Stats — масштаб компании */}
      <Stats
        title={T.adobeStats.title}
        subtitle={T.adobeStats.subtitle}
        items={T.adobeStats.items}
        background="light"
      />

      {/* 5) Contact info — Email + Website + Social */}
      <section className={styles.contact}>
        <Container>
          <div className={styles.sectionHeader}>
            <h2 className={`${styles.sectionTitle} animate-fade-in-up`}>
              {T.contact.title}
            </h2>
            <p className={`${styles.sectionSubtitle} animate-fade-in-up delay-100`}>
              {T.contact.subtitle}
            </p>
          </div>

          <div className={styles.contactGrid}>
            {/* Email */}
            <article
              className={`${styles.contactCard} animate-fade-in-up delay-100`}
              style={{ '--accent': T.contact.email.color }}
            >
              <div className={styles.contactIconWrap}>
                <MailIcon />
              </div>
              <span className={styles.contactLabel}>
                {T.contact.email.label}
              </span>
              <p className={styles.contactValue}>
                <a href={T.contact.email.href} className={styles.contactLink}>
                  {T.contact.email.value}
                </a>
              </p>
            </article>

            {/* Website */}
            <article
              className={`${styles.contactCard} animate-fade-in-up delay-200`}
              style={{ '--accent': T.contact.website.color }}
            >
              <div className={styles.contactIconWrap}>
                <GlobeIcon />
              </div>
              <span className={styles.contactLabel}>
                {T.contact.website.label}
              </span>
              <p className={styles.contactValue}>
                <a
                  href={T.contact.website.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactLink}
                >
                  {T.contact.website.value}
                </a>
              </p>
            </article>

            {/* Social */}
            <article
              className={`${styles.contactCard} animate-fade-in-up delay-300`}
              style={{ '--accent': T.contact.social.color }}
            >
              <div className={styles.contactIconWrap}>
                <ShareIcon />
              </div>
              <span className={styles.contactLabel}>
                {T.contact.social.label}
              </span>
              <p className={styles.contactValue}>{T.contact.social.value}</p>

              <ul className={styles.socialList}>
                {T.contact.social.links.map(({ name, href, Icon }) => (
                  <li key={name}>
                    <a
                      className={styles.socialItem}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={name}
                    >
                      <Icon />
                    </a>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </Container>
      </section>

      {/* 6) Footer — рендерится автоматически в PageLayout. */}
    </PageLayout>
  );
}

export default ContactPage;
