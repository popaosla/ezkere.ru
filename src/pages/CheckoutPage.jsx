import { useState } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { useCart } from '../contexts/CartContext'
import { formatPrice, calcDiscount } from '../utils/formatPrice'
import { generateToken } from '../utils/generateToken'

const styles = {
  page: { maxWidth: '700px', margin: '0 auto', padding: 'var(--space-xl) var(--container-padding)' },
  title: { fontSize: 'var(--font-size-3xl)', fontWeight: 800, marginBottom: 'var(--space-lg)' },
  card: { background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: 'var(--space-xl)', marginBottom: 'var(--space-lg)' },
  sectionTitle: { fontSize: 'var(--font-size-lg)', fontWeight: 700, marginBottom: 'var(--space-md)' },
  item: { display: 'flex', justifyContent: 'space-between', padding: 'var(--space-sm) 0', fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' },
  divider: { height: '1px', background: 'var(--border-color)', margin: 'var(--space-md) 0' },
  totalRow: { display: 'flex', justifyContent: 'space-between', fontSize: 'var(--font-size-xl)', fontWeight: 700 },
  balanceRow: { display: 'flex', justifyContent: 'space-between', fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)', marginTop: 'var(--space-sm)' },
  radioGroup: { display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' },
  radio: { display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', padding: 'var(--space-sm) var(--space-md)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', cursor: 'pointer', fontSize: 'var(--font-size-sm)' },
  radioActive: { borderColor: 'var(--accent-end)', background: 'rgba(13,122,62,0.1)' },
  payBtn: { width: '100%', padding: 'var(--space-md)', borderRadius: 'var(--radius-sm)', background: 'var(--accent-gradient)', color: 'white', fontSize: 'var(--font-size-base)', fontWeight: 600, marginTop: 'var(--space-lg)', transition: 'opacity 150ms ease' },
  error: { color: 'var(--danger)', fontSize: 'var(--font-size-sm)', marginTop: 'var(--space-sm)' },
  note: { fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)', marginTop: 'var(--space-md)', lineHeight: 1.6 }
}

export default function CheckoutPage() {
  const { user, addPurchase } = useAuth()
  const { cartGames, cartTotal, clearCart } = useCart()
  const navigate = useNavigate()
  const [payMethod, setPayMethod] = useState('balance')
  const [error, setError] = useState('')

  if (!user) return <Navigate to="/login" replace />
  if (cartGames.length === 0) return <Navigate to="/cart" replace />

  const [loading, setLoading] = useState(false)

  const handlePay = async () => {
    setError('')
    if (payMethod === 'balance' && user.balance < cartTotal) {
      setError('Недостаточно средств на балансе. Пополните баланс в профиле.')
      return
    }

    setLoading(true)
    try {
      const token = generateToken(10)
      const orderId = 'ord_' + Date.now().toString(36)

      const purchase = {
        orderId,
        date: new Date().toISOString(),
        items: cartGames.map(g => ({
          gameId: g.id,
          title: g.title,
          price: calcDiscount(g.price, g.discountPercent)
        })),
        total: cartTotal,
        token,
        status: 'completed'
      }

      await addPurchase(purchase)
      await clearCart()
      try { localStorage.setItem('ezkere_last_order', JSON.stringify(purchase)) } catch {}
      navigate(`/order/${orderId}?token=${token}`)
    } catch (err) {
      setError('Ошибка оплаты: ' + (err.message || 'попробуйте ещё раз'))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Оформление заказа</h1>

      <div style={styles.card}>
        <h2 style={styles.sectionTitle}>Ваш заказ</h2>
        {cartGames.map(game => (
          <div key={game.id} style={styles.item}>
            <span>{game.title}</span>
            <span>{formatPrice(calcDiscount(game.price, game.discountPercent))}</span>
          </div>
        ))}
        <div style={styles.divider} />
        <div style={styles.totalRow}>
          <span>Итого:</span>
          <span>{formatPrice(cartTotal)}</span>
        </div>
        <div style={styles.balanceRow}>
          <span>Ваш баланс:</span>
          <span>{formatPrice(user.balance)}</span>
        </div>
      </div>

      <div style={styles.card}>
        <h2 style={styles.sectionTitle}>Способ оплаты</h2>
        <div style={styles.radioGroup}>
          {[
            { id: 'balance', label: 'Баланс аккаунта' },
            { id: 'card', label: 'Банковская карта (демо)' },
            { id: 'sbp', label: 'СБП (демо)' },
          ].map(m => (
            <label
              key={m.id}
              style={{ ...styles.radio, ...(payMethod === m.id ? styles.radioActive : {}) }}
            >
              <input
                type="radio"
                name="payMethod"
                value={m.id}
                checked={payMethod === m.id}
                onChange={() => setPayMethod(m.id)}
              />
              {m.label}
            </label>
          ))}
        </div>
        <p style={styles.note}>
          В данной версии сайта оплата списывается с баланса аккаунта.
        </p>
      </div>

      <button style={{...styles.payBtn, opacity: loading ? 0.6 : 1}} onClick={handlePay} disabled={loading}>
        {loading ? 'Обработка...' : `Оплатить ${formatPrice(cartTotal)}`}
      </button>
      {error && <p style={styles.error}>{error}</p>}
    </div>
  )
}
