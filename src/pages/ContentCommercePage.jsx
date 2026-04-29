import PageLayout from '../components/layouts/PageLayout';
import Container from '../components/common/Container';
import Hero from '../components/sections/Hero';
import Highlights from '../components/sections/Highlights';
import CTASection from '../components/sections/CTASection';
import Grid from '../components/layouts/Grid';
import ProductCard from '../components/cards/ProductCard';
import {
  ContentLayersIcon,
  ShoppingBagIcon,
  GlobeIcon,
} from '../components/common/CategoryIcons';
import { getCategoryById, products } from '../data/products';
import styles from '../styles/CategoryPage.module.css';

/**
 * ContentCommercePage — страница категории «Content & Commerce».
 *
 * Структура:
 *   1. Hero        — баннер с фирменным оранжевым цветом категории.
 *   2. Intro       — короткое описание категории.
 *   3. Highlights  — 3 ключевых преимущества с уникальными SVG-иконками.
 *   4. Products    — Grid с ProductCard (2 продукта: Experience Manager, Commerce).
 *   5. CTA         — финальный призыв к действию.
 *
 * Поскольку продуктов всего 2, для них используется 2-колоночная сетка
 * на больших экранах (вместо 3) — карточки получаются крупнее.
 */

const T = {
  hero: {
    badge: 'Կատեգորիա',
    title: 'Content & Commerce',
    subtitle: 'Բովանդակություն ստեղծեք, հրապարակեք և վաճառեք',
  },
  intro: {
    title: 'Մեկ հարթակ՝ բովանդակության և առևտրի համար',
  },
  highlights: {
    title: 'Հիմնական հնարավորությունները',
    subtitle:
      'Adobe Experience Manager-ը և Adobe Commerce-ը (Magento) ' +
      'լուծումներ են enterprise մակարդակի բիզնեսի համար։',
    items: [
      {
        icon: <ContentLayersIcon />,
        title: 'Կորպորատիվ CMS',
        description:
          'Կառավարեք բովանդակությունը կայքերի, բջջային հավելվածների ' +
          'և թվային ակտիվների համար մեկ տեղում՝ AEM-ի միջոցով։',
      },
      {
        icon: <ShoppingBagIcon />,
        title: 'Էլեկտրոնային խանութ',
        description:
          'Կառուցեք առևտրի հարթակ ցանկացած մասշտաբի համար՝ ' +
          'փոքր բիզնեսից մինչև միլիարդանոց բրենդներ Magento-ով։',
      },
      {
        icon: <GlobeIcon />,
        title: 'Օմնիկանալ հասանելիություն',
        description:
          'Հասեք հաճախորդներին ցանկացած ալիքով՝ վեբ, բջջային, ' +
          'սոցցանցեր և քայլվող խանութներ՝ բոլորը մեկ ինտերֆեյսից։',
      },
    ],
  },
  products: {
    title: 'Կատեգորիայի արտադրանքները',
    countLabel: (n) => `${n} արտադրանք`,
  },
  cta: {
    title: 'Բովանդակությունից մինչև առևտուր',
    subtitle:
      'Միավորեք բովանդակության կառավարումը և վաճառքները ' +
      'մեկ ինտեգրված հարթակում։',
    primary: { text: 'Adobe-ի մասին', action: '/about' },
    secondary: { text: 'Բոլոր կատեգորիաները', action: '/' },
  },
};

function ContentCommercePage() {
  const category = getCategoryById('content-commerce');
  const list = products['content-commerce'] || [];

  return (
    <PageLayout title={category.name}>
      {/* 1) Hero — фирменный оранжевый Content & Commerce (#FF6B35) */}
      <Hero
        badge={T.hero.badge}
        title={T.hero.title}
        subtitle={T.hero.subtitle}
        backgroundColor={`linear-gradient(135deg, ${category.color} 0%, #D9501F 100%)`}
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

      {/* 4) Сетка продуктов: 2 продукта (карточки крупнее) */}
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

          <Grid columns={{ sm: 1, md: 2, lg: 2 }} gap="lg">
            {list.map((product, i) => (
              <ProductCard
                key={product.id}
                product={product}
                className={`animate-fade-in-up delay-${Math.min((i + 1) * 100, 400)}`}
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

export default ContentCommercePage;
