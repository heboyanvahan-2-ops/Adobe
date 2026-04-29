import Container from '../common/Container';
import Grid from '../layouts/Grid';
import StatCard from '../cards/StatCard';
import styles from '../../styles/Stats.module.css';

/**
 * Stats — секция со статистикой (4–6 чисел в адаптивной сетке).
 *
 * Используется на HomePage и AboutPage.
 *
 * Props:
 *  - title    (строка, опц.) — заголовок секции (h2);
 *  - subtitle (строка, опц.) — подзаголовок;
 *  - items    (массив)       — список статистик; каждый элемент:
 *      { value, label, icon?, color? }  — см. StatCard;
 *  - background ('light' | 'dark' | 'transparent') — фон секции:
 *      • 'light'       — светло-серый (по умолчанию);
 *      • 'dark'        — тёмно-синий с белыми карточками;
 *      • 'transparent' — без фона.
 *
 * Пример:
 *   <Stats
 *     title="Adobe թվերով"
 *     items={[
 *       { value: '30+', label: 'արտադրանք', icon: '🎯' },
 *       { value: '5М+', label: 'օգտատեր', icon: '👥' },
 *       ...
 *     ]}
 *   />
 */
function Stats({
  title,
  subtitle,
  items = [],
  background = 'light',
}) {
  if (items.length === 0) return null;

  // Подбираем сетку: при 3 элементах — 3 колонки, при 4+ — до 4 колонок.
  const lg = items.length >= 4 ? 4 : items.length;
  const md = items.length >= 4 ? 2 : Math.min(items.length, 3);

  const sectionClass = [
    styles.section,
    styles[`bg_${background}`],
  ].join(' ');

  return (
    <section className={sectionClass}>
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

        <Grid columns={{ sm: 1, md, lg }} gap="md">
          {items.map((item, i) => (
            <StatCard
              key={`${item.value}-${item.label}`}
              value={item.value}
              label={item.label}
              icon={item.icon}
              color={item.color}
              className={`animate-fade-in-up delay-${Math.min((i + 1) * 100, 600)}`}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

export default Stats;
