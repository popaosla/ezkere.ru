import { Link } from 'react-router-dom'
import { useGames } from '../../contexts/GamesContext'
import GameCard from '../common/GameCard'
import s from './CategoryPreview.module.css'

export default function CategoryPreview({ genre, count = 4 }) {
  const { games } = useGames()
  const filtered = games
    .filter(g => g.genres.some(gen => gen === genre))
    .sort((a, b) => b.metacriticScore - a.metacriticScore)
    .slice(0, count)

  if (filtered.length === 0) return null

  return (
    <section className={s.section}>
      <div className={s.header}>
        <h2 className={s.title}>{genre}</h2>
        <Link to={`/catalog?genre=${genre}`} className={s.seeAll}>Смотреть все &rarr;</Link>
      </div>
      <div className={s.grid}>
        {filtered.map(game => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </section>
  )
}
