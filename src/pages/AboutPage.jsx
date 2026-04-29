import PageLayout from '../components/layouts/PageLayout';
import Container from '../components/common/Container';
import Button from '../components/common/Button';
import styles from '../styles/PagePlaceholder.module.css';

/**
 * AboutPage — страница «О компании Adobe».
 * Заготовка. Позже сюда добавим Timeline и StatCard.
 */
function AboutPage() {
  return (
    <PageLayout title="О Adobe">
      <section className={`${styles.section} animate-fade-in-up`}>
        <Container>
          <div className={styles.content}>
            <span className={styles.badge}>С 1982 года</span>
            <h1 className={styles.title}>О компании Adobe</h1>
            <p className={styles.description}>
              Adobe Inc. была основана в декабре 1982 года Чарльзом Гешке
              и Джоном Уорноком. Сегодня это глобальный лидер в области
              цифрового творчества, документооборота и маркетинга,
              чьими продуктами пользуются миллионы людей по всему миру.
            </p>
            <div className={styles.actions}>
              <Button to="/creative-cloud" variant="primary">
                Перейти к продуктам
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}

export default AboutPage;
