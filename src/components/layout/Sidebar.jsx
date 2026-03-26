import { NavLink, Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { genres } from '../../data/games'
import s from './Sidebar.module.css'

export default function Sidebar({ isOpen, onClose }) {
  const { user, logout } = useAuth()

  const handleClick = () => onClose()

  return (
    <>
      <div className={`${s.overlay} ${isOpen ? s.overlayOpen : ''}`} onClick={onClose} />
      <aside className={`${s.sidebar} ${isOpen ? s.sidebarOpen : ''}`}>
        <div className={s.sidebarHeader}>
          <span className={s.sidebarLogo}>EZKERE</span>
          <button className={s.closeBtn} onClick={onClose} aria-label="Закрыть меню">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        <nav className={s.sidebarNav}>
          <NavLink to="/" end className={({ isActive }) => `${s.sidebarLink} ${isActive ? s.sidebarLinkActive : ''}`} onClick={handleClick}>
            Главная
          </NavLink>
          <NavLink to="/catalog" className={({ isActive }) => `${s.sidebarLink} ${isActive ? s.sidebarLinkActive : ''}`} onClick={handleClick}>
            Каталог
          </NavLink>
          <NavLink to="/cart" className={({ isActive }) => `${s.sidebarLink} ${isActive ? s.sidebarLinkActive : ''}`} onClick={handleClick}>
            Корзина
          </NavLink>
          {user ? (
            <>
              <NavLink to="/profile" className={({ isActive }) => `${s.sidebarLink} ${isActive ? s.sidebarLinkActive : ''}`} onClick={handleClick}>
                {user.username}
              </NavLink>
              <button className={s.sidebarLink} onClick={() => { logout(); handleClick() }}>
                Выйти
              </button>
            </>
          ) : (
            <>
              <NavLink to="/login" className={({ isActive }) => `${s.sidebarLink} ${isActive ? s.sidebarLinkActive : ''}`} onClick={handleClick}>
                Войти
              </NavLink>
              <NavLink to="/register" className={({ isActive }) => `${s.sidebarLink} ${isActive ? s.sidebarLinkActive : ''}`} onClick={handleClick}>
                Регистрация
              </NavLink>
            </>
          )}
        </nav>

        <div className={s.section}>
          <div className={s.sectionTitle}>Жанры</div>
          {genres.map(genre => (
            <Link key={genre} to={`/catalog?genre=${genre}`} className={s.genreLink} onClick={handleClick}>
              {genre}
            </Link>
          ))}
        </div>
      </aside>
    </>
  )
}
