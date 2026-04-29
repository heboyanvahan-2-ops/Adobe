/**
 * CategoryIcons.jsx
 *
 * Набор уникальных SVG-иконок для секций «Highlights» на страницах
 * категорий. Эмодзи специально НЕ используются — каждая иконка
 * прорисована вручную, чтобы соответствовать брендовому минималистичному
 * outline-стилю.
 *
 * Все иконки:
 *   • viewBox 0 0 64 64 (квадратные);
 *   • stroke="currentColor"  → цвет наследуется из CSS (можно красить через --accent);
 *   • без сплошной заливки — только контур + редкие акценты;
 *   • размер задаётся пропом size (по умолчанию 56px) или через CSS.
 *
 * Использование:
 *   import { DocumentEditIcon } from '../components/common/CategoryIcons';
 *   <DocumentEditIcon size={48} />
 *   <DocumentEditIcon style={{ color: '#FFB800' }} />
 */

const BASE_PROPS = {
  viewBox: '0 0 64 64',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2.2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

function IconWrapper({ size = 56, children, ...rest }) {
  return (
    <svg
      width={size}
      height={size}
      {...BASE_PROPS}
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {children}
    </svg>
  );
}

/* ============================================================
   DOCUMENT CLOUD (#FFB800)
   ============================================================ */

/** Документ с углом-загибом и текстовыми строками. */
export function DocumentEditIcon(props) {
  return (
    <IconWrapper {...props}>
      <path d="M14 6h22l12 12v36a2 2 0 0 1-2 2H14a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
      <path d="M36 6v12h12" />
      <line x1="20" y1="30" x2="40" y2="30" />
      <line x1="20" y1="38" x2="44" y2="38" />
      <line x1="20" y1="46" x2="36" y2="46" />
    </IconWrapper>
  );
}

/** Перо/ручка над линией подписи. */
export function SignatureIcon(props) {
  return (
    <IconWrapper {...props}>
      <path d="M44 10 L54 20 L26 48 L14 50 L16 38 Z" />
      <line x1="40" y1="14" x2="50" y2="24" />
      <path d="M8 58 c8 -4 16 -4 24 0 c8 4 16 4 24 -2" />
    </IconWrapper>
  );
}

/** Облако со стрелкой (sync/upload). */
export function CloudSyncIcon(props) {
  return (
    <IconWrapper {...props}>
      <path d="M18 44 a10 10 0 0 1 2 -19.6 a14 14 0 0 1 27 3.6 a8 8 0 0 1 1 16 z" />
      <path d="M32 50 V32" />
      <path d="M26 38 l6 -6 6 6" />
    </IconWrapper>
  );
}

/* ============================================================
   EXPERIENCE CLOUD (#00CC66)
   ============================================================ */

/** Столбчатая диаграмма + восходящая стрелка-тренд. */
export function AnalyticsChartIcon(props) {
  return (
    <IconWrapper {...props}>
      <line x1="10" y1="54" x2="56" y2="54" />
      <line x1="10" y1="54" x2="10" y2="10" />
      <rect x="18" y="38" width="6" height="16" />
      <rect x="29" y="28" width="6" height="26" />
      <rect x="40" y="18" width="6" height="36" />
      <path d="M14 22 L 22 30 L 32 22 L 44 14" />
      <path d="M40 14 H 44 V 18" />
    </IconWrapper>
  );
}

/** Воронка конверсии. */
export function FunnelIcon(props) {
  return (
    <IconWrapper {...props}>
      <path d="M10 14 H54 L40 32 V52 L24 56 V32 L10 14 Z" />
      <line x1="18" y1="22" x2="46" y2="22" />
    </IconWrapper>
  );
}

/** Сеть людей (audience / CDP). */
export function AudienceIcon(props) {
  return (
    <IconWrapper {...props}>
      <circle cx="32" cy="14" r="5" />
      <path d="M22 28 a10 10 0 0 1 20 0" />
      <circle cx="14" cy="40" r="5" />
      <path d="M6 54 a8 8 0 0 1 16 0" />
      <circle cx="50" cy="40" r="5" />
      <path d="M42 54 a8 8 0 0 1 16 0" />
      <line x1="22" y1="22" x2="18" y2="34" />
      <line x1="42" y1="22" x2="46" y2="34" />
    </IconWrapper>
  );
}

/* ============================================================
   CONTENT & COMMERCE (#FF6B35)
   ============================================================ */

/** Стек слоёв-страниц (CMS). */
export function ContentLayersIcon(props) {
  return (
    <IconWrapper {...props}>
      <path d="M22 8 H46 a2 2 0 0 1 2 2 V40" strokeOpacity="0.55" />
      <path d="M18 12 H42 a2 2 0 0 1 2 2 V44" strokeOpacity="0.8" />
      <path
        d="M16 16 H40 a2 2 0 0 1 2 2 V46 a2 2 0 0 1 -2 2 H16 a2 2 0 0 1 -2 -2 V18 a2 2 0 0 1 2 -2 z"
      />
      <line x1="20" y1="26" x2="36" y2="26" />
      <line x1="20" y1="32" x2="36" y2="32" />
      <line x1="20" y1="38" x2="30" y2="38" />
    </IconWrapper>
  );
}

/** Сумка для покупок (commerce). */
export function ShoppingBagIcon(props) {
  return (
    <IconWrapper {...props}>
      <path d="M14 22 H50 L46 56 H18 L14 22 Z" />
      <path d="M22 22 V14 a10 10 0 0 1 20 0 V22" />
      <line x1="24" y1="34" x2="40" y2="34" />
    </IconWrapper>
  );
}

/** Глобус с меридианом и параллелями (omnichannel). */
export function GlobeIcon(props) {
  return (
    <IconWrapper {...props}>
      <circle cx="32" cy="32" r="22" />
      <ellipse cx="32" cy="32" rx="10" ry="22" />
      <line x1="10" y1="32" x2="54" y2="32" />
      <path d="M14.5 20 H49.5" />
      <path d="M14.5 44 H49.5" />
    </IconWrapper>
  );
}

/* ============================================================
   3D & AI (#9D4EDD)
   ============================================================ */

/** Изометрический куб (3D). */
export function Cube3DIcon(props) {
  return (
    <IconWrapper {...props}>
      <path d="M32 8 L52 18 L52 42 L32 52 L12 42 L12 18 Z" />
      <path d="M32 8 L32 32" />
      <path d="M12 18 L32 32" />
      <path d="M52 18 L32 32" />
      <path d="M32 32 L32 52" />
    </IconWrapper>
  );
}

/** Четырёхлучевая искра (generative AI). */
export function AISparkIcon(props) {
  return (
    <IconWrapper {...props}>
      <path d="M32 6 L36 26 L56 32 L36 38 L32 58 L28 38 L8 32 L28 26 Z" />
      <circle cx="14" cy="14" r="2" fill="currentColor" stroke="none" />
      <circle cx="52" cy="50" r="2" fill="currentColor" stroke="none" />
      <circle cx="50" cy="14" r="1.4" fill="currentColor" stroke="none" />
    </IconWrapper>
  );
}

/** Нейросеть — три слоя нейронов с соединениями. */
export function NeuralNetIcon(props) {
  return (
    <IconWrapper {...props}>
      <line x1="17" y1="18" x2="29" y2="22" />
      <line x1="17" y1="32" x2="29" y2="22" />
      <line x1="17" y1="32" x2="29" y2="42" />
      <line x1="17" y1="46" x2="29" y2="42" />
      <line x1="35" y1="22" x2="47" y2="32" />
      <line x1="35" y1="42" x2="47" y2="32" />

      <circle cx="14" cy="18" r="3" fill="var(--icon-bg, #fff)" />
      <circle cx="14" cy="32" r="3" fill="var(--icon-bg, #fff)" />
      <circle cx="14" cy="46" r="3" fill="var(--icon-bg, #fff)" />
      <circle cx="32" cy="22" r="3" fill="var(--icon-bg, #fff)" />
      <circle cx="32" cy="42" r="3" fill="var(--icon-bg, #fff)" />
      <circle cx="50" cy="32" r="3" fill="var(--icon-bg, #fff)" />
    </IconWrapper>
  );
}
