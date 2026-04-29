import { useParams, Navigate } from 'react-router-dom';
import PageLayout from '../components/layouts/PageLayout';
import Container from '../components/common/Container';
import Button from '../components/common/Button';
import { getProductById, getCategoryById } from '../data/products';
import styles from '../styles/PagePlaceholder.module.css';

/**
 * ProductDetailPage — универсальная страница продукта.
 * Маршрут: /product/:productId
 *
 * Логика:
 *  1. Берём productId из URL.
 *  2. Ищем продукт через getProductById.
 *  3. Если продукт не найден — редирект на главную.
 *  4. Иначе — выводим имя, описание, фичи и аудиторию.
 */
function ProductDetailPage() {
  const { productId } = useParams();
  const product = getProductById(productId);

  if (!product) {
    return <Navigate to="/" replace />;
  }

  const category = getCategoryById(product.categoryId);

  return (
    <PageLayout title={product.name}>
      <section className={`${styles.section} animate-fade-in-up`}>
        <Container>
          <div className={styles.content}>
            <span
              className={styles.badge}
              style={{ background: `${product.color}1A`, color: product.color }}
            >
              {category ? category.name : 'Adobe'}
            </span>
            <h1 className={styles.title}>{product.name}</h1>
            <p className={styles.description}>{product.fullDesc}</p>

            <h3 style={{ marginTop: 24, marginBottom: 12 }}>Հիմնական հնարավորությունները</h3>
            <ul style={{ textAlign: 'left', maxWidth: 520, margin: '0 auto' }}>
              {product.features.map((f) => (
                <li key={f} style={{ padding: '4px 0' }}>• {f}</li>
              ))}
            </ul>

            <h3 style={{ marginTop: 24, marginBottom: 12 }}>Ում համար է</h3>
            <p className="text-muted">{product.usedBy.join(' · ')}</p>

            <p className="text-muted" style={{ marginTop: 12 }}>
              <strong>Գին՝</strong> {product.price}
            </p>

            <div className={styles.actions} style={{ marginTop: 32 }}>
              {category && (
                <Button to={`/${category.id}`} variant="primary">
                  {category.name}-ի բոլոր արտադրանքները
                </Button>
              )}
              <Button to="/" variant="outline">
                Դեպի գլխավոր
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}

export default ProductDetailPage;
