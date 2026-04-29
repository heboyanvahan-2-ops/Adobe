import PageLayout from '../components/layouts/PageLayout';
import Container from '../components/common/Container';
import Hero from '../components/sections/Hero';
import Highlights from '../components/sections/Highlights';
import CTASection from '../components/sections/CTASection';
import Grid from '../components/layouts/Grid';
import ProductCard from '../components/cards/ProductCard';
import {
  Cube3DIcon,
  AISparkIcon,
  NeuralNetIcon,
} from '../components/common/CategoryIcons';
import { getCategoryById, products } from '../data/products';
import styles from '../styles/CategoryPage.module.css';

/**
 * ThreeDAIPage — страница категории «3D & AI».
 *
 * Структура:
 *   1. Hero        — баннер с фирменным фиолетовым цветом категории.
 *   2. Intro       — короткое описание категории.
 *   3. Highlights  — 3 ключевых преимущества с уникальными SVG-иконками.
 *   4. Products    — Grid с ProductCard (4 продукта).
 *   5. CTA         — финальный призыв к действию.
 *
 * Этот файл соответствует маршруту /3d-ai. Имя компонента
 * начинается с буквы (ThreeDAI), потому что JS-идентификаторы
 * не могут начинаться с цифры.
 */

const T = {
  hero: {
    badge: 'Կատեգորիա',
    title: '3D & AI',
    subtitle:
      'Հաջորդ սերնդի տեխնոլոգիաներ ստեղծագործողների համար — ' +
      '3D-մոդելավորում և գեներատիվ ԱԲ',
  },
  intro: {
    title: 'Բովանդակություն ստեղծելու ապագան',
  },
  highlights: {
    title: 'Հիմնական հնարավորությունները',
    subtitle:
      'Տեխնոլոգիաներ, որոնք փոխում են ստեղծագործության մոտեցումը՝ ' +
      'Substance 3D-ից մինչև Firefly գեներատիվ ԱԲ։',
    items: [
      {
        icon: <Cube3DIcon />,
        title: '3D-մոդելավորում',
        description:
          'Ստեղծեք լուսանկարա-իրատեսական 3D-տեսարաններ, տեքստուրաներ ' +
          'և մոկապներ՝ Substance 3D-ի և Dimension-ի միջոցով։',
      },
      {
        icon: <AISparkIcon />,
        title: 'Գեներատիվ ԱԲ',
        description:
          'Adobe Firefly-ն ստեղծում է եզակի բովանդակություն ' +
          'ձեր տեքստային նկարագրությամբ, անվտանգ առևտրային օգտագործման համար։',
      },
      {
        icon: <NeuralNetIcon />,
        title: 'ԱԲ-ի ինտեգրացիա',
        description:
          'Generative Fill, Vector Recolor, Neural Filters — ' +
          'ԱԲ-գործիքները ինտեգրված են անմիջապես Photoshop-ում և Illustrator-ում։',
      },
    ],
  },
  products: {
    title: 'Կատեգորիայի արտադրանքները',
    countLabel: (n) => `${n} արտադրանք`,
  },
  cta: {
    title: 'Մուտք գործեք ստեղծագործության նոր դարաշրջան',
    subtitle:
      'Փորձեք 3D-ն և ԱԲ-ն ձեր նախագծերում։ ' +
      'Ապագան արդեն այստեղ է — Adobe-ի հետ։',
    primary: { text: 'Adobe-ի մասին', action: '/about' },
    secondary: { text: 'Բոլոր կատեգորիաները', action: '/' },
  },
};

function ThreeDAIPage() {
  const category = getCategoryById('3d-ai');
  const list = products['3d-ai'] || [];

  return (
    <PageLayout title={category.name}>
      {/* 1) Hero — фирменный фиолетовый 3D & AI (#9D4EDD) */}
      <Hero
        badge={T.hero.badge}
        title={T.hero.title}
        subtitle={T.hero.subtitle}
        backgroundColor={`linear-gradient(135deg, ${category.color} 0%, #6F2DAB 100%)`}
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

      {/* 4) Сетка продуктов: 4 продукта */}
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

          <Grid columns={{ sm: 1, md: 2, lg: 4 }} gap="lg">
            {list.map((product, i) => (
              <ProductCard
                key={product.id}
                product={product}
                className={`animate-fade-in-up delay-${Math.min((i + 1) * 100, 500)}`}
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

export default ThreeDAIPage;
