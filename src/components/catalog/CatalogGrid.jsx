import { useState } from 'react'
import GameCard from '../common/GameCard'
import s from './CatalogGrid.module.css'

const PAGE_SIZE = 12

export default function CatalogGrid({ games }) {
  const [visible, setVisible] = useState(PAGE_SIZE)

  const shown = games.slice(0, visible)
  const hasMore = visible < games.length

  return (
    <div className={s.grid}>
      {shown.length === 0 ? (
        <div className={s.empty}>
          <p className={s.emptyTitle}>Ничего не найдено</p>
          <p>Попробуйте изменить параметры поиска или фильтры</p>
        </div>
      ) : (
        <>
          {shown.map(game => (
            <GameCard key={game.id} game={game} />
          ))}
          {hasMore && (
            <div className={s.loadMore}>
              <button className={s.loadMoreBtn} onClick={() => setVisible(v => v + PAGE_SIZE)}>
                Показать ещё ({games.length - visible} шт.)
              </button>
            </div>
          )}
        </>
      )}
    </div>
  )
}
