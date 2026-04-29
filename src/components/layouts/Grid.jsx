import styles from '../../styles/Grid.module.css';

/* ============================================================
   Размеры gap — переводим имена в реальные пиксели.
   Можно передать как ключ ('sm'|'md'|'lg'|'xl'), число или строку.
   ============================================================ */

const GAP_PRESETS = {
  none: '0',
  sm: '12px',
  md: '24px',
  lg: '32px',
  xl: '48px',
};

function resolveGap(gap) {
  if (gap == null) return GAP_PRESETS.md;
  if (typeof gap === 'number') return `${gap}px`;
  if (typeof gap === 'string' && GAP_PRESETS[gap]) return GAP_PRESETS[gap];
  return gap;
}

/* ============================================================
   Нормализуем columns:
   - число (например, 3) → одинаково на всех экранах;
   - объект { sm, md, lg, xl } → разное количество на брейкпоинтах.
   Возвращаем объект CSS-переменных для inline-style.
   ============================================================ */

function resolveColumns(columns) {
  if (columns == null) {
    return { '--cols-sm': 1, '--cols-md': 2, '--cols-lg': 3 };
  }

  if (typeof columns === 'number') {
    return {
      '--cols-sm': columns,
      '--cols-md': columns,
      '--cols-lg': columns,
      '--cols-xl': columns,
    };
  }

  const { sm, md, lg, xl } = columns;
  const css = {};
  if (sm != null) css['--cols-sm'] = sm;
  if (md != null) css['--cols-md'] = md;
  if (lg != null) css['--cols-lg'] = lg;
  if (xl != null) css['--cols-xl'] = xl;
  return css;
}

/* ============================================================
   Grid — адаптивная сетка для карточек.
   ============================================================ */

/**
 * Grid — адаптивная CSS Grid.
 *
 * Поведение по умолчанию (mobile-first):
 *   < 768px   — 1 колонка
 *   >= 768px  — 2 колонки
 *   >= 1024px — 3 колонки
 *
 * Props:
 *  - columns: число (одинаково на всех экранах)
 *             или объект { sm, md, lg, xl } для адаптивности.
 *  - gap:     'none' | 'sm' | 'md' | 'lg' | 'xl', число (пикселей)
 *             или строка ('1.5rem', '20px' и т. п.). По умолчанию 'md' = 24px.
 *  - as:      имя HTML-тега ('div', 'ul', 'section'). По умолчанию 'div'.
 *  - align:   'start' | 'center' | 'end' — вертикальное выравнивание.
 *  - justify: 'start' | 'center' | 'end' — горизонтальное выравнивание.
 *  - className, style, children, ...rest.
 *
 * Примеры:
 *   <Grid columns={3} gap="lg">...</Grid>
 *   <Grid columns={{ sm: 1, md: 2, lg: 4 }} gap={16}>...</Grid>
 *   <Grid as="ul" columns={2}>...</Grid>
 */
function Grid({
  children,
  columns,
  gap,
  as: Tag = 'div',
  align,
  justify,
  className = '',
  style,
  ...rest
}) {
  const cssVars = {
    ...resolveColumns(columns),
    '--grid-gap': resolveGap(gap),
    ...style,
  };

  const classes = [
    styles.grid,
    align === 'start'  && styles.alignStart,
    align === 'center' && styles.alignCenter,
    align === 'end'    && styles.alignEnd,
    justify === 'start'  && styles.justifyStart,
    justify === 'center' && styles.justifyCenter,
    justify === 'end'    && styles.justifyEnd,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag className={classes} style={cssVars} {...rest}>
      {children}
    </Tag>
  );
}

export default Grid;
