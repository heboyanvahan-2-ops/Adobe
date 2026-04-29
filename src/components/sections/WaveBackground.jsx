import { memo } from 'react';
import styles from '../../styles/WaveBackground.module.css';

/**
 * WaveBackground — атмосферный декоративный слой для Hero.
 *
 * Состоит из трёх артистических элементов, наложенных друг на друга:
 *
 *   1. Drifting orbs (3 шт.) — крупные размытые круги в фирменных
 *      цветах Adobe, медленно дрейфующие по эллипсу.
 *      Создают ощущение «студийной подсветки» цветом.
 *
 *   2. Floating particles (16 шт.) — мелкие сияющие точки разных
 *      размеров и цветов, поднимающиеся снизу вверх с разной скоростью.
 *      Лёгкая «пыльца» Adobe-палитры.
 *
 *   3. Wave layers (3 SVG) — анимированные волны в нижней части блока.
 *      Каждая волна — отдельный SVG с собственным линейным градиентом и
 *      бесконечным переносом по X через transform: translateX(0 → -50%).
 *      Волны имеют разные скорости, амплитуды и направления — на стыке
 *      создаётся живая игра цвета без морфинга путей (только GPU-transform).
 *
 * Все анимации — чистый CSS (никакого JS, никаких setTimeout/RAF).
 * Использует только compositor-friendly свойства (transform, opacity)
 * и `prefers-reduced-motion: reduce` уважается в CSS.
 *
 * Компонент aria-hidden — это чистая декорация, скринридер её игнорирует.
 */

/* Палитра Adobe для частиц. Используется циклически по индексу. */
const PARTICLE_COLORS = [
  '#FF0000', // primary red
  '#00A0DE', // creative cloud blue
  '#FFB800', // document cloud yellow
  '#00CC66', // experience cloud green
  '#FF6B35', // content & commerce orange
  '#9D4EDD', // 3d & ai purple
];

/* Псевдо-случайные параметры для каждой частицы.
   Берём их детерминированно (по индексу), чтобы не было проблем
   с перерендером React (значения стабильны). */
const PARTICLES = Array.from({ length: 16 }, (_, i) => ({
  x:        (i * 23) % 100,                      // 0–100% по горизонтали
  size:     4 + (i * 5) % 9,                     // 4–13px
  delay:    ((i * 1.3) % 9).toFixed(2),          // 0–9с задержка
  duration: 12 + ((i * 7) % 8),                  // 12–19с одна итерация
  color:    PARTICLE_COLORS[i % PARTICLE_COLORS.length],
}));

function WaveBackground() {
  return (
    <>
      {/* ------- 1. Drifting orbs (фоновое цветное свечение) ------- */}
      <span
        className={`${styles.orb} ${styles.orbBlue}`}
        aria-hidden="true"
      />
      <span
        className={`${styles.orb} ${styles.orbOrange}`}
        aria-hidden="true"
      />
      <span
        className={`${styles.orb} ${styles.orbPurple}`}
        aria-hidden="true"
      />

      {/* ------- 2. Floating particles ------- */}
      <div className={styles.particles} aria-hidden="true">
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className={styles.particle}
            style={{
              '--x':        `${p.x}%`,
              '--size':     `${p.size}px`,
              '--delay':    `${p.delay}s`,
              '--duration': `${p.duration}s`,
              '--color':    p.color,
            }}
          />
        ))}
      </div>

      {/* ------- 3. Animated waves (3 SVG-слоя) ------- */}
      <div className={styles.waves} aria-hidden="true">
        {/* Дальняя волна — синяя, самая медленная и самая высокая */}
        <svg
          className={`${styles.wave} ${styles.waveBack}`}
          viewBox="0 0 2400 240"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradBack" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%"   stopColor="#00A0DE" stopOpacity="0.18" />
              <stop offset="50%"  stopColor="#9D4EDD" stopOpacity="0.16" />
              <stop offset="100%" stopColor="#00A0DE" stopOpacity="0.18" />
            </linearGradient>
          </defs>
          <path
            d="M 0,140 Q 150,90 300,140 T 600,140 T 900,140 T 1200,140 T 1500,140 T 1800,140 T 2100,140 T 2400,140 V 240 H 0 Z"
            fill="url(#waveGradBack)"
          />
        </svg>

        {/* Средняя волна — оранжево-красная, средняя скорость, в обратную сторону */}
        <svg
          className={`${styles.wave} ${styles.waveMid}`}
          viewBox="0 0 2400 200"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradMid" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%"   stopColor="#FF6B35" stopOpacity="0.14" />
              <stop offset="50%"  stopColor="#FF0000" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#FFB800" stopOpacity="0.14" />
            </linearGradient>
          </defs>
          <path
            d="M 0,110 Q 200,40 400,110 T 800,110 T 1200,110 T 1600,110 T 2000,110 T 2400,110 V 200 H 0 Z"
            fill="url(#waveGradMid)"
          />
        </svg>

        {/* Передняя волна — зелёно-сине-фиолетовая, самая быстрая и невысокая */}
        <svg
          className={`${styles.wave} ${styles.waveFront}`}
          viewBox="0 0 2400 160"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradFront" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%"   stopColor="#00CC66" stopOpacity="0.12" />
              <stop offset="50%"  stopColor="#00A0DE" stopOpacity="0.10" />
              <stop offset="100%" stopColor="#9D4EDD" stopOpacity="0.12" />
            </linearGradient>
          </defs>
          <path
            d="M 0,80 Q 100,30 200,80 T 400,80 T 600,80 T 800,80 T 1000,80 T 1200,80 T 1400,80 T 1600,80 T 1800,80 T 2000,80 T 2200,80 T 2400,80 V 160 H 0 Z"
            fill="url(#waveGradFront)"
          />
        </svg>
      </div>
    </>
  );
}

// memo — у компонента нет пропсов, нет повода перерендеривать.
export default memo(WaveBackground);
