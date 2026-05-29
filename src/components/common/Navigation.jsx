import { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from '../../styles/Navigation.module.css';

/**
 * Структура навигации.
 *
 * Используется один источник правды и для десктопа, и для мобильной панели:
 *   • На десктопе   — 4 пункта верхнего уровня + dropdown-панель «Կատեգորիաներ».
 *   • На мобильных  — плоский список с заголовком-секцией для категорий.
 *
 * Чтобы добавить пункт меню — просто допишите новый узел сюда. Логика и
 * стилизация подхватят автоматически. Поле `color` нужно только для
 * категорий — оно отрисовывает фирменную цветную точку рядом с пунктом.
 */
const NAV_STRUCTURE = [
  { type: 'link', to: '/',       label: 'Գլխավոր',       end: true },
  { type: 'link', to: '/about',  label: 'Adobe Photoshop-ի Մասին' },

  { type: 'link', to: '/product/photoshop', label: 'Adobe Photoshop' },

  { type: 'link', to: '/video-lessons', label: 'Տեսադասեր' },

  { type: 'link', to: '/quiz', label: 'Թեստեր' },
];

/* ============================================================
   Helper: маленький chevron для дропдауна (inline SVG).
   ============================================================ */

function Chevron({ className }) {
  return (
    <svg
      className={className}
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M3 4.5L6 7.5L9 4.5" />
    </svg>
  );
}

/* ============================================================
   Navigation
   ============================================================ */

function Navigation() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState(null); // label открытой группы или null
  const location = useLocation();
  const groupRef = useRef(null);

  // ---- При смене маршрута закрываем мобильное меню и любые dropdown'ы.
  useEffect(() => {
    setIsMobileOpen(false);
    setOpenGroup(null);
  }, [location.pathname]);

  // ---- На мобильных блокируем прокрутку фона, когда меню открыто.
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  // ---- Закрываем dropdown по клику снаружи.
  useEffect(() => {
    if (!openGroup) return undefined;
    const handleClickOutside = (e) => {
      if (groupRef.current && !groupRef.current.contains(e.target)) {
        setOpenGroup(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [openGroup]);

  // ---- Закрываем dropdown по клавише Escape.
  useEffect(() => {
    if (!openGroup) return undefined;
    const handleKey = (e) => {
      if (e.key === 'Escape') setOpenGroup(null);
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [openGroup]);

  // ---- Считаем, активна ли любая «дочерняя» страница группы.
  const isGroupActive = (group) =>
    group.items.some((item) => location.pathname === item.to);

  return (
    <nav className={styles.nav} aria-label="Հիմնական նավիգացիա">
      {/* ---------- Бургер (только на мобильных) ---------- */}
      <button
        type="button"
        className={`${styles.burger} ${isMobileOpen ? styles.burgerOpen : ''}`}
        aria-label={isMobileOpen ? 'Փակել մենյուն' : 'Բացել մենյուն'}
        aria-expanded={isMobileOpen}
        onClick={() => setIsMobileOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>

      {/* ---------- Главный список ---------- */}
      <ul
        className={`${styles.list} ${isMobileOpen ? styles.listOpen : ''}`}
      >
        {NAV_STRUCTURE.map((node) => {
          /* ---- Обычная ссылка ---- */
          if (node.type === 'link') {
            return (
              <li key={node.to} className={styles.item}>
                <NavLink
                  to={node.to}
                  end={node.end}
                  className={({ isActive }) =>
                    `${styles.link} ${isActive ? styles.linkActive : ''}`
                  }
                >
                  {node.label}
                </NavLink>
              </li>
            );
          }

          /* ---- Группа категорий (dropdown на десктопе, плоско на мобиле) ---- */
          const isOpen = openGroup === node.label;
          const isActive = isGroupActive(node);

          return (
            <li
              key={node.label}
              ref={groupRef}
              className={styles.groupItem}
            >
              {/* Десктоп: триггер-кнопка для dropdown */}
              <button
                type="button"
                className={`${styles.link} ${styles.groupTrigger} ${
                  isActive ? styles.linkActive : ''
                } ${isOpen ? styles.groupTriggerOpen : ''}`}
                aria-haspopup="menu"
                aria-expanded={isOpen}
                onClick={() => setOpenGroup(isOpen ? null : node.label)}
              >
                {node.label}
                <Chevron className={styles.chevron} />
              </button>

              {/* Мобильная: заголовок секции (некликабельный) */}
              <span className={styles.mobileGroupTitle} aria-hidden="true">
                {node.label}
              </span>

              {/* Список пунктов группы */}
              <ul
                className={`${styles.groupList} ${
                  isOpen ? styles.groupListOpen : ''
                }`}
                role="menu"
              >
                {node.items.map((item) => (
                  <li key={item.to} role="none">
                    <NavLink
                      to={item.to}
                      role="menuitem"
                      className={({ isActive: childActive }) =>
                        `${styles.groupLink} ${
                          childActive ? styles.groupLinkActive : ''
                        }`
                      }
                      style={{ '--accent': item.color }}
                    >
                      <span
                        className={styles.colorDot}
                        aria-hidden="true"
                      />
                      <span className={styles.groupLinkLabel}>
                        {item.label}
                      </span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navigation;
