import PageLayout from '../components/layouts/PageLayout';
import Container from '../components/common/Container';
import Hero from '../components/sections/Hero';
import Highlights from '../components/sections/Highlights';
import CTASection from '../components/sections/CTASection';
import Grid from '../components/layouts/Grid';
import ProductCard from '../components/cards/ProductCard';
import {
  DocumentEditIcon,
  SignatureIcon,
  CloudSyncIcon,
} from '../components/common/CategoryIcons';
import { getCategoryById, products } from '../data/products';
import styles from '../styles/CategoryPage.module.css';

/**
 * DocumentCloudPage — страница категории «Document Cloud».
 *
 * Структура (одинакова для всех 4 страниц):
 *   1. Hero        — баннер с фирменным жёлтым цветом категории.
 *   2. Intro       — короткое описание категории.
 *   3. Highlights  — 3 ключевых преимущества с уникальными SVG-иконками.
 *   4. Products    — Grid с ProductCard (3 продукта: Acrobat, Sign, Scan).
 *   5. CTA         — финальный призыв к действию.
 */

const T = {
  hero: {
    badge: 'Կատեգորիա',
    title: 'Document Cloud',
    subtitle: 'PDF-ի և փաստաթղթերի հետ աշխատանք նոր մակարդակում',
  },
  intro: {
    title: 'Փաստաթղթերը՝ ձեր ձեռքում',
  },
  highlights: {
    title: 'Հիմնական հնարավորությունները',
    subtitle:
      'Adobe Document Cloud-ը միավորում է PDF-ի ստեղծման, ' +
      'խմբագրման և ստորագրման բոլոր գործիքները։',
    items: [
      {
        icon: <DocumentEditIcon />,
        title: 'PDF խմբագրում',
        description:
          'Ստեղծեք, խմբագրեք և փոխարկեք PDF-ը Word, Excel կամ ' +
          'PowerPoint ցանկացած ֆորմատի։',
      },
      {
        icon: <SignatureIcon />,
        title: 'Էլեկտրոնային ստորագրություն',
        description:
          'Իրավաբանորեն նշանակալից ստորագրություններ ցանկացած ' +
          'սարքից՝ համապատասխան eIDAS և ESIGN ստանդարտներին։',
      },
      {
        icon: <CloudSyncIcon />,
        title: 'Ամպային մուտք',
        description:
          'Աշխատեք փաստաթղթերի հետ ցանկացած կետից և սարքից՝ ' +
          'ինքնաշխատ սինխրոնիզացիայով։',
      },
    ],
  },
  products: {
    title: 'Կատեգորիայի արտադրանքները',
    countLabel: (n) => `${n} արտադրանք`,
  },
  cta: {
    title: 'Փաստաթղթերի հետ աշխատելու ապագան',
    subtitle:
      'Փորձեք Adobe Document Cloud-ը ձեր թիմի համար։ ' +
      'Կամ բացահայտեք Adobe-ի այլ կատեգորիաները։',
    primary: { text: 'Adobe-ի մասին', action: '/about' },
    secondary: { text: 'Բոլոր կատեգորիաները', action: '/' },
  },
};

function DocumentCloudPage() {
  const category = getCategoryById('document-cloud');
  const list = products['document-cloud'] || [];

  return (
    <PageLayout title={category.name}>
      {/* 1) Hero — фирменный жёлтый Document Cloud (#FFB800) */}
      <Hero
        badge={T.hero.badge}
        title={T.hero.title}
        subtitle={T.hero.subtitle}
        backgroundColor={`linear-gradient(135deg, ${category.color} 0%, #E89A00 100%)`}
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

      {/* 4) Сетка продуктов: 3 продукта */}
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

export default DocumentCloudPage;
