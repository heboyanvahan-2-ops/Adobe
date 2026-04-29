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
   HOMEPAGE — большие hero-иконки для CategoryCard

   Эти иконки рендерятся внутри цветного hero-блока CategoryCard
   на главной странице (фон = фирменный цвет категории, иконка белая).
   Размер по умолчанию 72px, чуть толще обводка для лучшей читаемости
   на цветном фоне. Каждая иконка — узнаваемый символ категории.
   ============================================================ */

/** Creative Cloud — палитра художника с 4 цветными мазками. */
export function CreativePaletteIcon(props) {
  return (
    <IconWrapper strokeWidth={2.4} {...props}>
      {/* Силуэт палитры (со скосом и отверстием для большого пальца) */}
      <path d="M48 8 a26 26 0 1 0 -8 50 c2 .3 3 -1 3 -3 v-4 a4 4 0 0 1 4 -4 h6 a13 13 0 0 0 13 -13 a26 26 0 0 0 -18 -26 z" />
      {/* 4 «мазка» краски — точки */}
      <circle cx="22" cy="22" r="3" fill="currentColor" stroke="none" />
      <circle cx="36" cy="16" r="3" fill="currentColor" stroke="none" />
      <circle cx="48" cy="22" r="3" fill="currentColor" stroke="none" />
      <circle cx="52" cy="36" r="3" fill="currentColor" stroke="none" />
    </IconWrapper>
  );
}

/** Document Cloud — стопка PDF-документов (3 листа со смещением). */
export function DocumentStackIcon(props) {
  return (
    <IconWrapper strokeWidth={2.4} {...props}>
      {/* Дальний лист (полупрозрачный) */}
      <path
        d="M22 6 H40 L52 18 V46 a2 2 0 0 1 -2 2 H22 a2 2 0 0 1 -2 -2 V8 a2 2 0 0 1 2 -2 z"
        strokeOpacity="0.45"
      />
      {/* Средний лист */}
      <path
        d="M16 12 H34 L46 24 V52 a2 2 0 0 1 -2 2 H16 a2 2 0 0 1 -2 -2 V14 a2 2 0 0 1 2 -2 z"
        strokeOpacity="0.7"
      />
      {/* Передний лист с углом-загибом */}
      <path d="M10 18 H28 L40 30 V58 a2 2 0 0 1 -2 2 H10 a2 2 0 0 1 -2 -2 V20 a2 2 0 0 1 2 -2 z" />
      <path d="M28 18 V30 H40" />
      <line x1="14" y1="40" x2="32" y2="40" />
      <line x1="14" y1="48" x2="34" y2="48" />
    </IconWrapper>
  );
}

/** Experience Cloud — экран дашборда с восходящей трендовой линией. */
export function DashboardChartIcon(props) {
  return (
    <IconWrapper strokeWidth={2.4} {...props}>
      {/* Рамка дашборда */}
      <rect x="6" y="10" width="52" height="44" rx="3" />
      {/* Шапка панели */}
      <line x1="6" y1="20" x2="58" y2="20" />
      <circle cx="11" cy="15" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="15" cy="15" r="1.2" fill="currentColor" stroke="none" />
      {/* Трендовая линия по 4 точкам */}
      <path d="M12 46 L 22 38 L 32 42 L 42 30 L 52 26" />
      {/* Точки данных */}
      <circle cx="22" cy="38" r="2.6" fill="currentColor" stroke="none" />
      <circle cx="32" cy="42" r="2.6" fill="currentColor" stroke="none" />
      <circle cx="42" cy="30" r="2.6" fill="currentColor" stroke="none" />
      <circle cx="52" cy="26" r="2.6" fill="currentColor" stroke="none" />
    </IconWrapper>
  );
}

/** Content & Commerce — витрина с навесом и звёздочкой. */
export function StorefrontBagIcon(props) {
  return (
    <IconWrapper strokeWidth={2.4} {...props}>
      {/* Корпус витрины */}
      <path d="M10 26 H54 V56 a2 2 0 0 1 -2 2 H12 a2 2 0 0 1 -2 -2 V26 z" />
      {/* Навес (фестон) */}
      <path d="M6 26 L12 14 H52 L58 26" />
      {/* Зигзаг навеса */}
      <path d="M14 26 l4 -8 m4 8 l4 -8 m4 8 l4 -8 m4 8 l4 -8 m4 8 l4 -8" />
      {/* Дверной проём с витриной */}
      <rect x="26" y="38" width="12" height="20" />
      {/* Звёздочка (новинка) */}
      <path
        d="M48 36 l1 3 l3 1 l-3 1 l-1 3 l-1 -3 l-3 -1 l3 -1 z"
        fill="currentColor"
        stroke="none"
      />
    </IconWrapper>
  );
}

/** 3D & AI — кристалл с искрой генеративного AI. */
export function AICrystalIcon(props) {
  return (
    <IconWrapper strokeWidth={2.4} {...props}>
      {/* Огранённый кристалл (брильянт) */}
      <path d="M14 22 L32 8 L50 22 L32 56 Z" />
      {/* Внутренняя огранка */}
      <line x1="14" y1="22" x2="50" y2="22" />
      <line x1="22" y1="22" x2="32" y2="8" />
      <line x1="42" y1="22" x2="32" y2="8" />
      <line x1="22" y1="22" x2="32" y2="56" />
      <line x1="42" y1="22" x2="32" y2="56" />
      {/* Искра-блик в углу (AI-генерация) */}
      <path
        d="M52 10 l1.4 4 l4 1.4 l-4 1.4 l-1.4 4 l-1.4 -4 l-4 -1.4 l4 -1.4 z"
        fill="currentColor"
        stroke="none"
      />
      <circle cx="48" cy="36" r="1.4" fill="currentColor" stroke="none" />
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
