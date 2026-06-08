import PageLayout from '../components/layouts/PageLayout';
import Container from '../components/common/Container';
import Hero from '../components/sections/Hero';
import WaveBackground from '../components/sections/WaveBackground';
import styles from '../styles/HomePage.module.css';

/**
 * HomePage — главная страница Adobe Showcase.
 *
 * Структура:
 *   1. Hero       — большой светлый баннер с заголовком.
 *   2. Showcase   — крупная галерея изображений Photoshop-творчества.
 */

const SHOWCASE_IMAGES = [
  {
    src: '/images/photoshop-showcase.png',
    alt: 'Վառ թվային աշխատանք Photoshop-ում՝ նկարների մշակում և էֆեկտներ',
    label: 'Գույն և լույս',
  },
  {
    src: '/images/photoshop-color.png',
    alt: 'Գունային կարգավորում և տոնальային correction Photoshop-ում',
    label: 'Գունային գամմա',
  },
  {
    src: '/images/photoshop-composite.png',
    alt: 'Բազմ շերտերի կոլաժ Photoshop-ում',
    label: 'Կոմպոզիցիա',
  },
  {
    src: '/images/photoshop-brush.png',
    alt: 'Խոշորացված brush stroke և տեքստուրա Photoshop-ում',
    label: 'Գեղանկարչական տեքստուրա',
  },
];

const T = {
  hero: {
    badge: 'Ավարտական աշխատանք',
    title: 'Adobe Photoshop',
    subtitle:
      'Մեր կայքից կարող են օգտվել և՛ աշակերտները, և՛ ուսուցիչները։ ' +
      'Այն լիովին անվճար է և ազատ։',
  },

  showcase: {
    title: 'Ստեղծագործական աշխատանք Photoshop-ում',
    subtitle:
      'Գույն, լույս, շերտեր և brush stroke — մեկ պրոֆեսիոնալ գործիքով։',
  },
};

function ShowcaseCard({ image, className = '' }) {
  return (
    <figure className={`${styles.showcaseCard} ${className}`.trim()}>
      <div className={styles.showcaseFrame}>
        <img
          src={image.src}
          alt={image.alt}
          className={styles.showcaseImage}
          loading="lazy"
          decoding="async"
        />
        <div className={styles.showcaseOverlay} aria-hidden="true" />
        {image.label && (
          <figcaption className={styles.showcaseCaption}>{image.label}</figcaption>
        )}
      </div>
    </figure>
  );
}

function HomePage() {
  const [heroImage, ...galleryImages] = SHOWCASE_IMAGES;

  return (
    <PageLayout title="Գլխավոր">
      <Hero
        badge={T.hero.badge}
        title={T.hero.title}
        subtitle={T.hero.subtitle}
        height="full"
        theme="light"
        backgroundColor="linear-gradient(135deg, #ffffff 0%, #f7f7f9 55%, #fff5f5 100%)"
        decoration={<WaveBackground />}
      />

      <section className={styles.showcaseSection}>
        <Container>
          <div className={styles.sectionHeader}>
            <h2 className={`${styles.sectionTitle} animate-fade-in-up`}>
              {T.showcase.title}
            </h2>
            <p className={`${styles.sectionSubtitle} animate-fade-in-up delay-100`}>
              {T.showcase.subtitle}
            </p>
          </div>
        </Container>

        <div className={`${styles.showcaseGallery} animate-fade-in-up delay-200`}>
          <Container size="wide">
            <ShowcaseCard
              image={heroImage}
              className={styles.showcaseHero}
            />
          </Container>

          <Container size="wide">
            <div className={styles.showcaseGrid}>
              {galleryImages.map((image, i) => (
                <ShowcaseCard
                  key={image.src}
                  image={image}
                  className={`${styles.showcaseTile} delay-${Math.min((i + 1) * 100, 300)}`}
                />
              ))}
            </div>
          </Container>
        </div>
      </section>
    </PageLayout>
  );
}

export default HomePage;
