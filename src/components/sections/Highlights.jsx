import Container from '../common/Container';
import Grid from '../layouts/Grid';
import styles from '../../styles/Highlights.module.css';

/**
 * Highlights — секция «3 ключевых преимущества категории».
 *
 * Каждый highlight состоит из:
 *   • уникальной SVG-иконки (компонент из CategoryIcons.jsx);
 *   • заголовка (короткая ёмкая фраза);
 *   • описания (1–2 предложения).
 *
 * Иконки красятся в фирменный цвет категории через CSS-переменную --accent,
 * которая ставится на каждый item индивидуально (или общая на секции).
 *
 * Props:
 *   - title    (строка, опц.)  — заголовок секции;
 *   - subtitle (строка, опц.)  — подзаголовок;
 *   - accent   (строка, опц.)  — цвет акцента по умолчанию для всех иконок;
 *   - items    (массив)        — список highlight'ов:
 *       { icon: ReactNode, title: string, description: string, color?: string }
 *
 * Пример:
 *   <Highlights
 *     title="Հնարավորություններ"
 *     accent="#FFB800"
 *     items={[
 *       { icon: <DocumentEditIcon />, title: '...', description: '...' },
 *     ]}
 *   />
 */
function Highlights({ title, subtitle, accent, items = [] }) {
  if (items.length === 0) return null;

  // Кол-во колонок зависит от кол-ва items, но не больше 3 на десктопе.
  const lg = Math.min(items.length, 3);
  const md = items.length === 1 ? 1 : 2;

  return (
    <section className={styles.section}>
      <Container>
        {(title || subtitle) && (
          <div className={styles.header}>
            {title && (
              <h2 className={`${styles.title} animate-fade-in-up`}>{title}</h2>
            )}
            {subtitle && (
              <p className={`${styles.subtitle} animate-fade-in-up delay-100`}>
                {subtitle}
              </p>
            )}
          </div>
        )}

        <Grid columns={{ sm: 1, md, lg }} gap="lg">
          {items.map((item, i) => {
            const itemColor = item.color || accent;
            const cssVars = itemColor ? { '--accent': itemColor } : undefined;

            return (
              <article
                key={`${item.title}-${i}`}
                className={`${styles.card} animate-fade-in-up delay-${Math.min((i + 1) * 100, 600)}`}
                style={cssVars}
              >
                <div className={styles.iconWrap} aria-hidden="true">
                  {item.icon}
                </div>

                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.description}</p>
              </article>
            );
          })}
        </Grid>
      </Container>
    </section>
  );
}

export default Highlights;
