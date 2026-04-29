import PageLayout from '../components/layouts/PageLayout';
import Container from '../components/common/Container';
import Button from '../components/common/Button';
import styles from '../styles/PagePlaceholder.module.css';

/**
 * HomePage — главная страница.
 * Сейчас — заготовка с приветствием и CTA-кнопками.
 * Позже здесь появятся: Hero, 5 CategoryCard, секция Stats, CTASection.
 */
function HomePage() {
  return (
    <PageLayout title="Главная">
      <section className={`${styles.section} animate-fade-in`}>
        <Container>
          <div className={styles.content}>
            <span className={styles.badge}>Дипломная работа</span>
            <h1 className={styles.title}>Adobe Showcase</h1>
            <p className={styles.description}>
              Интерактивная демонстрация 30+ продуктов Adobe из 5 категорий —
              от классики Photoshop и Illustrator до новейшего ИИ Firefly.
            </p>
            <div className={styles.actions}>
              <Button to="/about" variant="primary" size="lg">
                О компании Adobe
              </Button>
              <Button to="/creative-cloud" variant="outline" size="lg">
                Смотреть продукты
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}

export default HomePage;
