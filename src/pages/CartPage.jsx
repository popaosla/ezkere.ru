import { Link } from 'react-router-dom'
import { useCart } from '../contexts/CartContext'
import CartItem from '../components/cart/CartItem'
import CartSummary from '../components/cart/CartSummary'

const pageStyle = {
  maxWidth: 'var(--container-max)',
  margin: '0 auto',
  padding: 'var(--space-xl) var(--container-padding)'
}

const titleStyle = {
  fontSize: 'var(--font-size-3xl)',
  fontWeight: 800,
  marginBottom: 'var(--space-lg)'
}

const emptyStyle = {
  textAlign: 'center',
  padding: 'var(--space-3xl) var(--space-md)',
  color: 'var(--text-muted)'
}

const emptyBtnStyle = {
  display: 'inline-block',
  marginTop: 'var(--space-lg)',
  padding: 'var(--space-sm) var(--space-xl)',
  borderRadius: 'var(--radius-sm)',
  background: 'var(--accent-gradient)',
  color: 'white',
  fontWeight: 600
}

export default function CartPage() {
  const { cartGames } = useCart()

  return (
    <div style={pageStyle}>
      <h1 style={titleStyle}>Корзина</h1>
      {cartGames.length === 0 ? (
        <div style={emptyStyle}>
          <p style={{ fontSize: 'var(--font-size-xl)', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: 'var(--space-sm)' }}>Корзина пуста</p>
          <p>Добавьте игры из каталога</p>
          <Link to="/catalog" style={emptyBtnStyle}>Перейти в каталог</Link>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--space-xl)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
            {cartGames.map(game => (
              <CartItem key={game.id} game={game} />
            ))}
          </div>
          <CartSummary />
        </div>
      )}
    </div>
  )
}
