import PageLayout from '../components/layouts/PageLayout';
import Container from '../components/common/Container';
import Hero from '../components/sections/Hero';
import CTASection from '../components/sections/CTASection';
import Grid from '../components/layouts/Grid';
import ProductCard from '../components/cards/ProductCard';
import { getCategoryById, products } from '../data/products';
import styles from '../styles/CategoryPage.module.css';

/**
 * CreativeCloudPage — страница категории «Creative Cloud».
 *
 * Структура:
 *  1. Hero      — большой баннер с фирменным синим цветом категории.
 *  2. Intro     — текстовое описание категории под баннером.
 *  3. Products  — Grid с 7 ProductCard. Каждая карточка — ссылка на /product/:id.
 *  4. CTA       — финальный призыв узнать больше об Adobe.
 *
 * Все армянские тексты вынесены в объект T (как и на HomePage),
 * чтобы их легко находить и править.
 */

// Тексты страницы (на армянском). Названия категории и продуктов — английские.
const T = {
  hero: {
    badge: 'Կատեգորիա',
    title: 'Creative Cloud',
    subtitle: 'Գործիքներ դիզայնի, տեսանյութի և ստեղծագործության համար',
  },
  intro: {
    title: 'Ստեղծագործության էկոհամակարգ',
  },
  products: {
    title: 'Կատեգորիայի արտադրանքները',
    countLabel: (n) => `${n} արտադրանք`,
  },
  cta: {
    title: 'Իմանալ ավելին Creative Cloud-ի մասին',
    subtitle:
      'Ցանկանու՞մ եք բացահայտել ողջ էկոհամակարգը։ ' +
      'Ընտրեք մյուս կատեգորիաները կամ իմացեք Adobe ընկերության մասին։',
    primary: { text: 'Adobe-ի մասին', action: '/about' },
    secondary: { text: 'Բոլոր կատեգորիաները', action: '/' },
  },
};

function CreativeCloudPage() {
  const category = getCategoryById('creative-cloud');
  const list = products['creative-cloud'] || [];

  return (
    <PageLayout title={category.name}>
      {/* 1) Hero — фирменный синий цвет Creative Cloud (#00A0DE) */}
      <Hero
        badge={T.hero.badge}
        title={T.hero.title}
        subtitle={T.hero.subtitle}
        backgroundColor={`linear-gradient(135deg, ${category.color} 0%, #0077B5 100%)`}
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

      {/* 3) Сетка продуктов */}
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
                className={`animate-fade-in-up delay-${Math.min((i + 1) * 100, 800)}`}
              />
            ))}
          </Grid>
        </Container>
      </section>

      {/* 4) CTA */}
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

export default CreativeCloudPage;
