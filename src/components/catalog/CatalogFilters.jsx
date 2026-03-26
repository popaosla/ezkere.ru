import { genres, platforms } from '../../data/games'
import s from './CatalogFilters.module.css'

export default function CatalogFilters({ filters, onChange }) {
  const toggleGenre = (genre) => {
    onChange({ ...filters, genre: filters.genre === genre ? '' : genre })
  }

  const togglePlatform = (platform) => {
    onChange({ ...filters, platform: filters.platform === platform ? '' : platform })
  }

  const setSort = (sort) => {
    onChange({ ...filters, sort })
  }

  const resetAll = () => {
    onChange({ genre: '', platform: '', sort: 'popular', search: '' })
  }

  const hasFilters = filters.genre || filters.platform || filters.sort !== 'popular'

  return (
    <div className={s.filters}>
      <div className={s.filterGroup}>
        <span className={s.filterLabel}>Платформа</span>
        <div className={s.chips}>
          {platforms.map(p => (
            <button
              key={p.id}
              className={`${s.chip} ${filters.platform === p.id ? s.chipActive : ''}`}
              onClick={() => togglePlatform(p.id)}
            >
              {p.name}
            </button>
          ))}
        </div>
      </div>

      <div className={s.filterGroup}>
        <span className={s.filterLabel}>Жанр</span>
        <div className={s.chips}>
          {genres.map(g => (
            <button
              key={g}
              className={`${s.chip} ${filters.genre === g ? s.chipActive : ''}`}
              onClick={() => toggleGenre(g)}
            >
              {g}
            </button>
          ))}
        </div>
      </div>

      <div className={s.filterGroup}>
        <span className={s.filterLabel}>Сортировка</span>
        <select className={s.select} value={filters.sort || 'popular'} onChange={e => setSort(e.target.value)}>
          <option value="popular">Популярные</option>
          <option value="rating">По рейтингу</option>
          <option value="price_asc">Сначала дешёвые</option>
          <option value="price_desc">Сначала дорогие</option>
          <option value="date">По дате выхода</option>
          <option value="name">По названию</option>
        </select>
      </div>

      {hasFilters && (
        <button className={s.resetBtn} onClick={resetAll}>
          Сбросить фильтры
        </button>
      )}
    </div>
  )
}
