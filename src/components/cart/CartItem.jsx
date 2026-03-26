import { Link } from 'react-router-dom'
import { useCart } from '../../contexts/CartContext'
import { formatPrice, calcDiscount } from '../../utils/formatPrice'
import s from './CartItem.module.css'

export default function CartItem({ game }) {
  const { removeFromCart } = useCart()
  const price = calcDiscount(game.price, game.discountPercent)

  return (
    <div className={s.item}>
      <img src={game.coverImage} alt={game.title} className={s.image} loading="lazy" />
      <div className={s.info}>
        <Link to={`/game/${game.slug}`} className={`${s.title} ${s.titleLink}`}>{game.title}</Link>
        <span className={s.genres}>{game.genres.join(', ')}</span>
      </div>
      <div className={s.right}>
        <span className={s.price}>{game.price === 0 ? 'Бесплатно' : formatPrice(price)}</span>
        <button className={s.removeBtn} onClick={() => removeFromCart(game.id)}>Удалить</button>
      </div>
    </div>
  )
}
