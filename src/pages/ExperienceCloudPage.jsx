import PageLayout from '../components/layouts/PageLayout';
import Container from '../components/common/Container';
import Hero from '../components/sections/Hero';
import Highlights from '../components/sections/Highlights';
import CTASection from '../components/sections/CTASection';
import Grid from '../components/layouts/Grid';
import ProductCard from '../components/cards/ProductCard';
import {
  AnalyticsChartIcon,
  FunnelIcon,
  AudienceIcon,
} from '../components/common/CategoryIcons';
import { getCategoryById, products } from '../data/products';
import styles from '../styles/CategoryPage.module.css';

/**
 * ExperienceCloudPage — страница категории «Experience Cloud».
 *
 * Структура:
 *   1. Hero        — баннер с фирменным зелёным цветом категории.
 *   2. Intro       — короткое описание категории.
 *   3. Highlights  — 3 ключевых преимущества с уникальными SVG-иконками.
 *   4. Products    — Grid с ProductCard (6 продуктов).
 *   5. CTA         — финальный призыв к действию.
 */

const T = {
  hero: {
    badge: 'Կատեգորիա',
    title: 'Experience Cloud',
    subtitle: 'Ապագայի մարքեթինգ, անալիտիկա և հաճախորդի փորձ',
  },
  intro: {
    title: 'Հաճախորդը ձեր ռազմավարության կենտրոնում',
  },
  highlights: {
    title: 'Հիմնական հնարավորությունները',
    subtitle:
      'Adobe Experience Cloud-ը հարթակ է, որից օգտվում են ' +
      'աշխարհի խոշորագույն բրենդները՝ իրենց հաճախորդների ' +
      'փորձը կառավարելու համար։',
    items: [
      {
        icon: <AnalyticsChartIcon />,
        title: 'Իրական ժամանակի անալիտիկա',
        description:
          'Հետևեք օգտատերերին, չափեք ROI-ն և ստացեք պատկերացումներ ' +
          'ակնթարթորեն՝ Adobe Analytics-ի միջոցով։',
      },
      {
        icon: <FunnelIcon />,
        title: 'Կոնվերսիայի օպտիմիզացիա',
        description:
          'Բարելավեք վաճառքի ձագարը A/B-թեստերի, սեգմենտացիայի ' +
          'և մեքենայական ուսուցման միջոցով։',
      },
      {
        icon: <AudienceIcon />,
        title: 'Միասնական պրոֆիլ',
        description:
          'Real-Time CDP-ը միավորում է բոլոր տվյալները հաճախորդի ' +
          'մեկ պրոֆիլում՝ բոլոր ալիքներով անհատականացման համար։',
      },
    ],
  },
  products: {
    title: 'Կատեգորիայի արտադրանքները',
    countLabel: (n) => `${n} արտադրանք`,
  },
  cta: {
    title: 'Կառուցեք հաճախորդի անզուգական փորձը',
    subtitle:
      'Միանաք L\'Oréal-ի, Coca-Cola-ի և այլ խոշոր բրենդների ' +
      'շարքին, որոնք օգտվում են Experience Cloud-ից։',
    primary: { text: 'Adobe-ի մասին', action: '/about' },
    secondary: { text: 'Բոլոր կատեգորիաները', action: '/' },
  },
};

function ExperienceCloudPage() {
  const category = getCategoryById('experience-cloud');
  const list = products['experience-cloud'] || [];

  return (
    <PageLayout title={category.name}>
      {/* 1) Hero — фирменный зелёный Experience Cloud (#00CC66) */}
      <Hero
        badge={T.hero.badge}
        title={T.hero.title}
        subtitle={T.hero.subtitle}
        backgroundColor={`linear-gradient(135deg, ${category.color} 0%, #009948 100%)`}
        height="medium"
        align="center"
      />

      {/* 2) Описание категории */}
      <section className={styles.intro}>
        <Container>
          <div className={`${styles.introContent} animate-fade-in-up`}>
            <h2 className={styles.introTitle}>{T.intro.title}</h2>
            <p className={styles.introText}>{category.description}</p>
          </div>
        </Container>
      </section>

      {/* 3) Highlights — 3 ключевых преимущества с уникальными SVG-иконками */}
      <Highlights
        title={T.highlights.title}
        subtitle={T.highlights.subtitle}
        accent={category.color}
        items={T.highlights.items}
      />

      {/* 4) Сетка продуктов: 6 продуктов */}
      <section className={styles.productsSection}>
        <Container>
          <div className={styles.productsHeader}>
            <h2 className={`${styles.productsTitle} animate-fade-in-up`}>
              {T.products.title}
            </h2>
            <span className={`${styles.productsCount} animate-fade-in-up delay-100`}>
              {T.products.countLabel(list.length)}
            </span>
          </div>

          <Grid columns={{ sm: 1, md: 2, lg: 3 }} gap="lg">
            {list.map((product, i) => (
              <ProductCard
                key={product.id}
                product={product}
                className={`animate-fade-in-up delay-${Math.min((i + 1) * 100, 600)}`}
              />
            ))}
          </Grid>
        </Container>
      </section>

      {/* 5) CTA */}
      <CTASection
        title={T.cta.title}
        subtitle={T.cta.subtitle}
        cta={T.cta.primary}
        secondaryCta={T.cta.secondary}
        background="dark"
      />
    </PageLayout>
  );
}

export default ExperienceCloudPage;
