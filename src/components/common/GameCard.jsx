import { Link } from 'react-router-dom'
import { formatPrice, calcDiscount } from '../../utils/formatPrice'
import s from './GameCard.module.css'

function getRatingClass(score) {
  if (score >= 75) return s.ratingGreen
  if (score >= 50) return s.ratingYellow
  return s.ratingRed
}

export default function GameCard({ game }) {
  const finalPrice = calcDiscount(game.price, game.discountPercent)

  return (
    <Link to={`/game/${game.slug}`} className={s.card}>
      <div className={s.imageWrapper}>
        <img src={game.coverImage} alt={game.title} className={s.image} loading="lazy" />
        {game.discountPercent > 0 && (
          <span className={s.discount}>-{game.discountPercent}%</span>
        )}
        <div className={s.platforms}>
          {game.platforms.map(p => (
            <span key={p} className={s.platformBadge}>{p}</span>
          ))}
        </div>
      </div>
      <div className={s.body}>
        <h3 className={s.title}>{game.title}</h3>
        <div className={s.genres}>
          {game.genres.slice(0, 3).map(g => (
            <span key={g} className={s.genre}>{g}</span>
          ))}
        </div>
        <div className={s.bottom}>
          <div className={s.priceBlock}>
            {game.price === 0 ? (
              <span className={s.freeTag}>Бесплатно</span>
            ) : (
              <>
                {game.discountPercent > 0 && (
                  <span className={s.oldPrice}>{formatPrice(game.price)}</span>
                )}
                <span className={s.price}>{formatPrice(finalPrice)}</span>
              </>
            )}
          </div>
          {game.metacriticScore > 0 && (
            <div className={s.ratingWrapper}>
              <span className={`${s.rating} ${getRatingClass(game.metacriticScore)}`}>
                {game.metacriticScore}
              </span>
              <span className={s.ratingTooltip}>Оценка Metacritic</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}
