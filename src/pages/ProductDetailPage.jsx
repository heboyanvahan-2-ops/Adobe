import { useParams, Navigate, Link } from 'react-router-dom';
import PageLayout from '../components/layouts/PageLayout';
import Container from '../components/common/Container';
import Hero from '../components/sections/Hero';
import CTASection from '../components/sections/CTASection';
import Grid from '../components/layouts/Grid';
import ProductCard from '../components/cards/ProductCard';
import FeatureCard from '../components/cards/FeatureCard';
import {
  getProductById,
  getCategoryById,
  products as allProductsByCategory,
} from '../data/products';
import styles from '../styles/ProductDetailPage.module.css';

/**
 * ProductDetailPage — универсальная страница продукта.
 * Маршрут: /product/:productId
 *
 * Логика:
 *   1. Берём productId из URL (useParams).
 *   2. Ищем продукт через getProductById, иначе редирект на /.
 *   3. Получаем категорию и список «похожих» продуктов
 *      (3 других из той же категории).
 *
 * Структура страницы:
 *   1. Hero            — заголовок-баннер с цветом продукта.
 *   2. Main       — плашка кода, бейдж категории, краткое и полное описание.
 *   3. Lower       — возможности (FeatureCard), при наличии видео-блок
 *                    (локальные MP4 или встраиваемый первый YouTube), затем
 *                    «Համանման արտադրանքներ» (ProductCard).
 *   4. CTA         — пробная версия + ссылка на категорию.
 */

// Тексты-метки страницы (на армянском). Названия и описания продуктов
// уже переведены и хранятся в products.js.
const T = {
  hero: {
    badge: 'Արտադրանք',
  },
  features: {
    title: 'Հիմնական հնարավորությունները',
    subtitle: (n) =>
      `${n} առանցքային ֆունկցիա, որոնք օգնում են պրոֆեսիոնալներին ` +
      `հասնել առավելագույն արդյունքի։`,
  },
  similar: {
    title: 'Համանման արտադրանքներ',
    subtitle: 'Բացահայտեք նույն կատեգորիայի այլ լուծումներ։',
  },
  videos: {
    embedAria: 'Տեսանյութ',
  },
  cta: {
    title: (name) => `Փորձեք ${name}-ը անվճար`,
    subtitle:
      'Ներբեռնեք փորձնական տարբերակը և սկսեք օգտվել ' +
      'պրոֆեսիոնալ գործիքներից այսօր։',
    primary: { text: 'Ներբեռնել փորձնական տարբերակը' },
    secondary: (categoryName) => ({
      text: `${categoryName}-ի բոլոր արտադրանքները`,
    }),
  },
};

/**
 * Возвращает 3 «похожих» продукта из той же категории, исключая текущий.
 * Если в категории меньше продуктов — вернёт сколько есть.
 */
function getSimilarProducts(currentProduct, max = 3) {
  const list = allProductsByCategory[currentProduct.categoryId] || [];
  return list.filter((p) => p.id !== currentProduct.id).slice(0, max);
}

/**
 * Извлекает короткий код продукта (Ps, Ai, …) или генерирует его
 * из первых букв имени, если в данных shortCode отсутствует.
 */
function getShortCode(product) {
  if (product.shortCode) return product.shortCode;
  return product.name
    .replace(/[^A-Za-zА-Яа-яԱ-Ֆա-ֆ0-9]/g, '')
    .slice(0, 2)
    .padEnd(2, '·');
}

/**
 * Нормализует элемент массива features из products.js:
 *   - строка → только заголовок;
 *   - объект { title, description } → заголовок + подпись на карточке.
 */
function normalizeFeature(feature) {
  if (typeof feature === 'string') {
    return { title: feature, description: undefined };
  }
  if (feature && typeof feature === 'object' && feature.title) {
    return {
      title: feature.title,
      description: feature.description,
    };
  }
  return { title: String(feature), description: undefined };
}

/**
 * Parses a common video hosting URL and returns an embed `src`, or ''.
 */
function getVideoEmbedSrc(url) {
  if (!url || typeof url !== 'string') return '';
  try {
    const parsed = new URL(url.trim(), 'https://example.com');
    let id = '';

    const host = parsed.hostname.toLowerCase();
    const isKnownVideoHost =
      host === 'youtu.be' || host.endsWith('youtube.com') || host.endsWith('youtube-nocookie.com');

    if (!isKnownVideoHost) return '';

    if (host === 'youtu.be') {
      id = parsed.pathname.replace(/^\//, '').split(/[/?#]/)[0];
    } else if (parsed.pathname.startsWith('/embed/')) {
      id = parsed.pathname.slice('/embed/'.length).split(/[/?#]/)[0];
    } else if (parsed.pathname.startsWith('/shorts/')) {
      id = parsed.pathname.slice('/shorts/'.length).split(/[/?#]/)[0];
    } else if (
      parsed.pathname === '/watch' ||
      parsed.pathname.startsWith('/watch/')
    ) {
      id = parsed.searchParams.get('v') || '';
    }

    return /^[\w-]{8,}$/i.test(id)
      ? `https://www.youtube-nocookie.com/embed/${id}`
      : '';
  } catch {
    return '';
  }
}

/**
 * @param {string} url
 */
function isLessonLocalMediaUrl(url) {
  if (!url || typeof url !== 'string') return false;
  const u = url.trim();
  if (/youtube\.com|youtu\.be/i.test(u)) return false;
  return /^\/[^?\s]+\.(mp4|webm|ogg|mov)(\?[^\s]*)?$/i.test(u);
}

/** Убирает разделители между частями названия урока (точка, тире) для единообразного UI. */
function formatVideoLessonTitle(title) {
  if (typeof title !== 'string') return '';
  return title
    .replace(/\s*[\u2014\u2013]\s*/g, ' ')
    .replace(/\s*\.\s+/g, ' ')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

function ProductDetailPage() {
  const { productId } = useParams();
  const product = getProductById(productId);

  // Если продукт не найден — мягкий редирект на главную.
  if (!product) {
    return <Navigate to="/" replace />;
  }

  const category = getCategoryById(product.categoryId);
  const similar = getSimilarProducts(product, 3);
  const shortCode = getShortCode(product);

  const videoLessons = Array.isArray(product.videoLessons) ? product.videoLessons : [];
  const localLessons = videoLessons.filter((l) => isLessonLocalMediaUrl(l.url));
  const firstYoutubeLesson = videoLessons.find((l) => Boolean(getVideoEmbedSrc(l.url)));
  const featuredVideoEmbed = firstYoutubeLesson
    ? getVideoEmbedSrc(firstYoutubeLesson.url)
    : '';
  const showVideoBlock = localLessons.length > 0 || Boolean(featuredVideoEmbed);

  // Пробная версия: пока только UX-демонстрация.
  const handleDownloadTrial = () => {
    // Реальная интеграция (например, открытие лендинга) добавится позже.
    // Сейчас просто скроллим в верх страницы.
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <PageLayout title={product.name}>
      <div className={styles.page}>
      {/* 1) Hero — фирменный цвет продукта в виде градиента */}
      <Hero
        badge={T.hero.badge}
        title={product.name}
        subtitle={product.shortDesc}
        backgroundColor={`linear-gradient(135deg, ${product.color} 0%, ${shadeColor(product.color, -25)} 100%)`}
        height="medium"
        align="center"
      />

      {/* 2) Главная информация — двухколоночный layout */}
      <section className={styles.main}>
        <Container>
          <div
            className={styles.mainGrid}
            style={{ '--accent': product.color }}
          >
            {/* Левая колонка: только компактная фирменная плашка */}
            <aside className={`${styles.brandColumn} animate-fade-in-up`}>
              <div className={styles.brandPlate} aria-hidden="true">
                {shortCode}
              </div>
            </aside>

            {/* Правая колонка: бейдж категории и описания */}
            <div className={`${styles.infoColumn} animate-fade-in-up delay-100`}>
              {category && (
                <Link to={`/${category.id}`} className={styles.categoryBadge}>
                  {category.name}
                </Link>
              )}
              <p className={styles.shortDesc}>{product.shortDesc}</p>

              <p className={styles.fullDesc}>{product.fullDesc}</p>
            </div>
          </div>
        </Container>
      </section>

      {/* 3) Возможности + похожие продукты — одна секция, общий фон */}
      <section
        className={styles.lower}
        style={{ '--accent': product.color }}
      >
        <Container>
          <div className={styles.featuresBlock}>
            <div className={styles.sectionHeader}>
              <h2 className={`${styles.sectionTitle} animate-fade-in-up`}>
                {T.features.title}
              </h2>
              <p className={`${styles.sectionSubtitle} animate-fade-in-up delay-100`}>
                {T.features.subtitle(product.features.length)}
              </p>
            </div>

            <Grid columns={{ sm: 1, md: 2, lg: 3 }} gap="lg">
              {product.features.map((feature, i) => {
                const { title, description } = normalizeFeature(feature);
                return (
                  <FeatureCard
                    key={`${product.id}-feat-${i}`}
                    index={i + 1}
                    title={title}
                    description={description}
                    color={product.color}
                    className={`animate-fade-in-up delay-${Math.min((i + 1) * 100, 700)}`}
                  />
                );
              })}
            </Grid>
          </div>

          {showVideoBlock ? (
            <div className={styles.videoLessons}>
              {localLessons.length > 0 && (
                <div className={styles.localVideosRow}>
                  {localLessons.map((lesson, idx) => {
                    const formatted =
                      formatVideoLessonTitle(lesson.title) ||
                      `${T.videos.embedAria} ${idx + 1}`;
                    return (
                      <figure key={`${product.id}-local-${idx}`} className={styles.videoFigure}>
                        <div className={styles.embedWrap}>
                          <div className={styles.embedInnerCompact}>
                            <video
                              className={styles.nativeVideo}
                              controls
                              playsInline
                              preload="metadata"
                              aria-label={formatted}
                              title={formatted}
                            >
                              <source src={lesson.url} />
                            </video>
                          </div>
                        </div>
                        <figcaption className={styles.videoCaption}>{formatted}</figcaption>
                      </figure>
                    );
                  })}
                </div>
              )}

              {featuredVideoEmbed ? (
                <div className={styles.embedWrap}>
                  <div className={styles.embedInner}>
                    <iframe
                      className={styles.embedFrame}
                      title={
                        formatVideoLessonTitle(firstYoutubeLesson?.title) || T.videos.embedAria
                      }
                      src={featuredVideoEmbed}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      referrerPolicy="strict-origin-when-cross-origin"
                      loading="lazy"
                    />
                  </div>
                </div>
              ) : null}
            </div>
          ) : null}

          {similar.length > 0 && (
            <div className={styles.similarBlock}>
              <div className={styles.sectionHeader}>
                <h2 className={`${styles.sectionTitle} animate-fade-in-up`}>
                  {T.similar.title}
                </h2>
                <p className={`${styles.sectionSubtitle} animate-fade-in-up delay-100`}>
                  {T.similar.subtitle}
                </p>
              </div>

              <Grid columns={{ sm: 1, md: 2, lg: 3 }} gap="lg">
                {similar.map((p, i) => (
                  <ProductCard
                    key={p.id}
                    product={p}
                    className={`animate-fade-in-up delay-${Math.min((i + 1) * 100, 400)}`}
                  />
                ))}
              </Grid>
            </div>
          )}
        </Container>
      </section>

      {/* 4) CTA — пробная версия */}
      <CTASection
        title={T.cta.title(product.name)}
        subtitle={T.cta.subtitle}
        cta={{ ...T.cta.primary, action: handleDownloadTrial }}
        secondaryCta={
          category
            ? { ...T.cta.secondary(category.name), action: `/${category.id}` }
            : undefined
        }
        background="dark"
      />
      </div>
    </PageLayout>
  );
}

/**
 * shadeColor — затемняет/осветляет hex-цвет на заданный процент.
 *   shadeColor('#00A0DE', -25) → темнее на 25%.
 * Используется для построения градиента от основного цвета к более тёмному.
 */
function shadeColor(hex, percent) {
  const cleaned = hex.replace('#', '');
  const num = parseInt(cleaned, 16);
  let r = (num >> 16) + Math.round((255 * percent) / 100);
  let g = ((num >> 8) & 0xff) + Math.round((255 * percent) / 100);
  let b = (num & 0xff) + Math.round((255 * percent) / 100);

  r = Math.max(0, Math.min(255, r));
  g = Math.max(0, Math.min(255, g));
  b = Math.max(0, Math.min(255, b));

  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;
}

export default ProductDetailPage;
