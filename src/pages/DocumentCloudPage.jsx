import PageLayout from '../components/layouts/PageLayout';
import Container from '../components/common/Container';
import Button from '../components/common/Button';
import { getCategoryById, products } from '../data/products';
import styles from '../styles/PagePlaceholder.module.css';

function DocumentCloudPage() {
  const category = getCategoryById('document-cloud');
  const list = products['document-cloud'] || [];

  return (
    <PageLayout title={category.name}>
      <section className={`${styles.section} animate-fade-in-up`}>
        <Container>
          <div className={styles.content}>
            <span
              className={styles.badge}
              style={{ background: `${category.color}1A`, color: category.color }}
            >
              {category.tagline}
            </span>
            <h1 className={styles.title}>{category.name}</h1>
            <p className={styles.description}>{category.description}</p>
            <p className="text-muted">
              В этой категории — {list.length} продукта:{' '}
              {list.map((p) => p.name).join(', ')}.
            </p>
            <div className={styles.actions} style={{ marginTop: 24 }}>
              <Button to="/" variant="outline">
                На главную
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}

export default DocumentCloudPage;
