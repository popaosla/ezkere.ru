import { useRef } from 'react'
import { useGames } from '../../contexts/GamesContext'
import GameCard from '../common/GameCard'
import s from './TrendingCarousel.module.css'

export default function TrendingCarousel() {
  const { games } = useGames()
  const trackRef = useRef(null)
  const trending = games.filter(g => g.isTrending)

  const scroll = (dir) => {
    if (!trackRef.current) return
    const amount = 300
    trackRef.current.scrollBy({ left: dir * amount, behavior: 'smooth' })
  }

  return (
    <section className={s.section}>
      <div className={s.header}>
        <h2 className={s.title}>Актуальное</h2>
        <div className={s.arrows}>
          <button className={s.arrowBtn} onClick={() => scroll(-1)} aria-label="Назад">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>
          <button className={s.arrowBtn} onClick={() => scroll(1)} aria-label="Вперёд">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
        </div>
      </div>
      <div className={s.track} ref={trackRef}>
        {trending.map(game => (
          <div key={game.id} className={s.trackItem}>
            <GameCard game={game} />
          </div>
        ))}
      </div>
    </section>
  )
}
