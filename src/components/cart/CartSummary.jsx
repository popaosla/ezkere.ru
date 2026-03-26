import { useNavigate } from 'react-router-dom'
import { useCart } from '../../contexts/CartContext'
import { useAuth } from '../../contexts/AuthContext'
import { formatPrice } from '../../utils/formatPrice'
import s from './CartSummary.module.css'

export default function CartSummary() {
  const { cartGames, cartTotal, cartCount, clearCart } = useCart()
  const { user } = useAuth()
  const navigate = useNavigate()

  const handleCheckout = () => {
    if (!user) {
      navigate('/login')
      return
    }
    navigate('/checkout')
  }

  return (
    <div className={s.summary}>
      <h3 className={s.summaryTitle}>Итого</h3>
      <div className={s.row}>
        <span>Товаров:</span>
        <span>{cartCount}</span>
      </div>
      <div className={s.divider} />
      <div className={s.totalRow}>
        <span>К оплате:</span>
        <span>{formatPrice(cartTotal)}</span>
      </div>
      <button className={s.checkoutBtn} onClick={handleCheckout} disabled={cartCount === 0}>
        {user ? 'Перейти к оплате' : 'Войти и оплатить'}
      </button>
      {cartCount > 0 && (
        <button className={s.clearBtn} onClick={clearCart}>
          Очистить корзину
        </button>
      )}
    </div>
  )
}
