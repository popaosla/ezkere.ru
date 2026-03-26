import { Link } from 'react-router-dom'
import { useGames } from '../../contexts/GamesContext'
import { formatPrice, calcDiscount } from '../../utils/formatPrice'
import s from './HeroBanner.module.css'

export default function HeroBanner() {
  const { games } = useGames()
  const featured = games.find(g => g.isFeatured) || games[0]
  const price = calcDiscount(featured.price, featured.discountPercent)

  return (
    <div className={s.hero}>
      <img src={featured.coverImage} alt={featured.title} className={s.heroBg} />
      <div className={s.heroOverlay} />
      <div className={s.heroContent}>
        <span className={s.heroTag}>Рекомендуем</span>
        <h1 className={s.heroTitle}>{featured.title}</h1>
        <p className={s.heroDesc}>{featured.shortDescription}</p>
        <div className={s.heroActions}>
          <Link to={`/game/${featured.slug}`} className={`${s.heroBtn} ${s.heroBtnPrimary}`}>
            {featured.price === 0 ? 'Бесплатно' : formatPrice(price)}
          </Link>
          <Link to={`/game/${featured.slug}`} className={`${s.heroBtn} ${s.heroBtnSecondary}`}>
            Подробнее
          </Link>
        </div>
      </div>
    </div>
  )
}
