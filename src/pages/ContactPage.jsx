import PageLayout from '../components/layouts/PageLayout';
import Container from '../components/common/Container';
import Button from '../components/common/Button';
import { categories } from '../data/products';
import styles from '../styles/PagePlaceholder.module.css';

/**
 * ContactPage — заключительная страница презентации.
 * Заготовка с благодарностью и быстрыми ссылками на категории.
 */
function ContactPage() {
  return (
    <PageLayout title="Կապ">
      <section className={`${styles.section} animate-fade-in-up`}>
        <Container>
          <div className={styles.content}>
            <span className={styles.badge}>Շնորհակալություն ուշադրության համար։</span>
            <h1 className={styles.title}>Ներկայացումն ավարտված է</h1>
            <p className={styles.description}>
              Մենք անցանք ճանապարհ Adobe-ի պատմությունից մինչև Firefly-ի
              նորագույն ԱԲ-գործիքները։ Եթե ցանկանում եք կրկին վերադառնալ
              որևէ կատեգորիայի՝ ընտրեք ստորև։
            </p>

            <div className={styles.actions} style={{ marginTop: 24 }}>
              {categories.map((cat) => (
                <Button
                  key={cat.id}
                  to={`/${cat.id}`}
                  variant="outline"
                  size="sm"
                >
                  {cat.name}
                </Button>
              ))}
            </div>

            <div className={styles.actions} style={{ marginTop: 32 }}>
              <Button to="/" variant="primary" size="lg">
                Վերադառնալ գլխավոր էջ
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}

export default ContactPage;
