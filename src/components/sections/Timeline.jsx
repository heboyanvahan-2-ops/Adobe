import Container from '../common/Container';
import styles from '../../styles/Timeline.module.css';

/**
 * Timeline — вертикальная временная шкала ключевых событий.
 *
 * Используется в AboutPage для показа истории Adobe.
 * Внешне напоминает классический timeline: центральная вертикальная линия,
 * по обе стороны от которой расположены карточки событий.
 *
 * На мобильных линия уходит влево, а все карточки выстраиваются справа от неё —
 * это удобнее для маленького экрана.
 *
 * Props:
 *  - title    (строка, опц.) — заголовок секции (h2);
 *  - subtitle (строка, опц.) — подзаголовок;
 *  - items    (массив)       — события на шкале:
 *      { year, title, description, color? }
 *
 * Пример:
 *   <Timeline
 *     title="Adobe-ի պատմություն"
 *     items={[
 *       { year: '1982', title: 'Հիմնադրումը', description: '...' },
 *       ...
 *     ]}
 *   />
 */
function Timeline({ title, subtitle, items = [] }) {
  if (items.length === 0) return null;

  return (
    <section className={styles.section}>
      <Container>
        {(title || subtitle) && (
          <div className={styles.header}>
            {title && <h2 className={`${styles.title} animate-fade-in-up`}>{title}</h2>}
            {subtitle && (
              <p className={`${styles.subtitle} animate-fade-in-up delay-100`}>
                {subtitle}
              </p>
            )}
          </div>
        )}

        <ol className={styles.list}>
          {items.map((item, i) => {
            const side = i % 2 === 0 ? 'left' : 'right';
            const cssVars = item.color ? { '--accent': item.color } : undefined;

            return (
              <li
                key={`${item.year}-${item.title}`}
                className={`${styles.item} ${styles[`side_${side}`]} animate-fade-in-up delay-${Math.min((i + 1) * 100, 600)}`}
                style={cssVars}
              >
                {/* Точка на самой линии (по центру в десктопе) */}
                <span className={styles.dot} aria-hidden="true" />

                {/* Карточка с текстом */}
                <article className={styles.card}>
                  <span className={styles.year}>{item.year}</span>
                  <h3 className={styles.eventTitle}>{item.title}</h3>
                  {item.description && (
                    <p className={styles.eventDesc}>{item.description}</p>
                  )}
                </article>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}

export default Timeline;
