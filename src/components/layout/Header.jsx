import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useTheme } from '../../contexts/ThemeContext'
import { useAuth } from '../../contexts/AuthContext'
import { useCart } from '../../contexts/CartContext'
import SearchBar from '../common/SearchBar'
import s from './Header.module.css'

export default function Header({ onOpenSidebar }) {
  const { theme, toggleTheme } = useTheme()
  const { user, logout } = useAuth()
  const { cartCount } = useCart()
  const navigate = useNavigate()
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false)

  return (
    <header className={s.header}>
      <div className={s.headerInner}>
        <Link to="/" className={s.logo}>
          <span className={s.logoIcon}>E</span>
          EZKERE
        </Link>

        <nav className={s.nav}>
          <NavLink to="/" end className={({ isActive }) => `${s.navLink} ${isActive ? s.navLinkActive : ''}`}>
            Главная
          </NavLink>
          <NavLink to="/catalog" className={({ isActive }) => `${s.navLink} ${isActive ? s.navLinkActive : ''}`}>
            Каталог
          </NavLink>
        </nav>

        <div className={s.spacer} />

        <SearchBar />

        <div className={s.actions}>
          <button
            className={`${s.iconBtn} ${s.mobileSearchBtn}`}
            onClick={() => setMobileSearchOpen(v => !v)}
            aria-label="Поиск"
            title="Поиск"
          >
            {mobileSearchOpen ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
            )}
          </button>

          <button className={s.iconBtn} onClick={toggleTheme} title="Сменить тему" aria-label="Сменить тему">
            {theme === 'dark' ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>

          <button className={s.iconBtn} onClick={() => navigate('/cart')} title="Корзина" aria-label="Корзина">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
            {cartCount > 0 && <span className={s.cartBadge}>{cartCount}</span>}
          </button>

          {user ? (
            <>
              <Link to="/profile" className={s.userName}>{user.username}</Link>
              <button className={s.iconBtn} onClick={logout} title="Выйти" aria-label="Выйти">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>
                </svg>
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className={s.authBtnOutline}>Войти</Link>
              <Link to="/register" className={s.authBtn}>Регистрация</Link>
            </>
          )}

          <button className={`${s.iconBtn} ${s.burgerBtn}`} onClick={onOpenSidebar} aria-label="Меню">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          </button>
        </div>
      </div>

      {mobileSearchOpen && (
        <div className={s.mobileSearchRow}>
          <SearchBar autoFocus onClose={() => setMobileSearchOpen(false)} />
        </div>
      )}
    </header>
  )
}
