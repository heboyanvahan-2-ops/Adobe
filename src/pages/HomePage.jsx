import PageLayout from '../components/layouts/PageLayout';
import Container from '../components/common/Container';
import Hero from '../components/sections/Hero';
import WaveBackground from '../components/sections/WaveBackground';
import CTASection from '../components/sections/CTASection';
import Grid from '../components/layouts/Grid';
import CategoryCard from '../components/cards/CategoryCard';
import { categories } from '../data/products';
import styles from '../styles/HomePage.module.css';

/**
 * HomePage — главная страница Adobe Showcase.
 *
 * Структура:
 *   1. Hero       — большой светлый баннер с заголовком и двумя CTA-кнопками.
 *   2. Categories — сетка из 5 CategoryCard (по данным из products.js).
 *   3. CTASection — финальный «Сегодня же приступайте» с кнопкой к Creative Cloud.
 *
 * Все армянские тексты вынесены в один объект T внутри файла —
 * легко поддерживать и переводить на другие языки в будущем.
 */

// Тексты страницы (на армянском, как договорились).
// Названия продуктов и брендов остаются в латинице (Adobe, Creative Cloud).
const T = {
  hero: {
    badge: 'Դիպլոմային աշխատանք',
    title: 'Adobe Creative Cloud',
    subtitle:
      'Մասնագիտական մակարդակի ստեղծագործական գործիքներ՝ դիզայնի, ' +
      'լուսանկարչության, տեսանյութի և բրենդինգի համար։',
    primary: { text: 'Adobe-ի մասին', action: '/about' },
    secondary: {
      text: 'Դիտել արտադրանքները',
      action: '/creative-cloud',
    },
  },

  categories: {
    title: 'Արտադրանքի 5 կատեգորիա',
    subtitle:
      'Յուրաքանչյուր կատեգորիա Adobe-ի առանձին տիեզերք է։ ' +
      'Ընտրեք հետաքրքիրը և սուզվեք։',
  },

  cta: {
    title: 'Սկսեք օգտագործել Adobe-ն այսօր',
    subtitle:
      'Ընտրեք առաջին կատեգորիան և բացահայտեք ստեղծագործության ' +
      'ու նորարարության համաշխարհային ստանդարտը։',
    primary: {
      text: 'Անցնել Creative Cloud',
      action: '/creative-cloud',
    },
    secondary: {
      text: 'Կապ հաստատել',
      action: '/contact',
    },
  },
};

function HomePage() {
  return (
    <PageLayout title="Գլխավոր">
      {/* 1) Hero — светлый, с фирменным акцентом
            + кастомный декоративный слой: волны, частицы и цветные орбы. */}
      <Hero
        badge={T.hero.badge}
        title={T.hero.title}
        subtitle={T.hero.subtitle}
        cta={T.hero.primary}
        secondaryCta={T.hero.secondary}
        height="full"
        theme="light"
        backgroundColor="linear-gradient(135deg, #ffffff 0%, #f7f7f9 55%, #fff5f5 100%)"
        decoration={<WaveBackground />}
      />

      {/* 2) Категории */}
      <section className={styles.categoriesSection}>
        <Container>
          <div className={styles.sectionHeader}>
            <h2 className={`${styles.sectionTitle} animate-fade-in-up`}>
              {T.categories.title}
            </h2>
            <p className={`${styles.sectionSubtitle} animate-fade-in-up delay-100`}>
              {T.categories.subtitle}
            </p>
          </div>

          <Grid columns={{ sm: 1, md: 2, lg: 3 }} gap="lg">
            {categories.map((category, i) => (
              <CategoryCard
                key={category.id}
                category={category}
                className={`animate-fade-in-up delay-${Math.min((i + 1) * 100, 600)}`}
              />
            ))}
          </Grid>
        </Container>
      </section>

      {/* 3) CTA — финальный призыв */}
      <CTASection
        title={T.cta.title}
        subtitle={T.cta.subtitle}
        cta={T.cta.primary}
        secondaryCta={T.cta.secondary}
        background="gradient"
      />
    </PageLayout>
  );
}

export default HomePage;
