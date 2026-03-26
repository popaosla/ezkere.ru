import { useState, useEffect } from 'react'
import { useSearchParams, Link, Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { formatPrice } from '../utils/formatPrice'

const s = {
  page: { maxWidth: '700px', margin: '0 auto', padding: 'var(--space-xl) var(--container-padding)' },
  card: { background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-2xl)', marginBottom: 'var(--space-lg)' },
  icon: { width: '80px', height: '80px', borderRadius: 'var(--radius-full)', background: 'var(--accent-gradient)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto var(--space-lg)', fontSize: '40px', color: 'white' },
  title: { fontSize: 'var(--font-size-2xl)', fontWeight: 800, textAlign: 'center', marginBottom: 'var(--space-sm)' },
  subtitle: { fontSize: 'var(--font-size-base)', color: 'var(--text-secondary)', textAlign: 'center', marginBottom: 'var(--space-xl)', lineHeight: 1.6 },
  sectionTitle: { fontSize: 'var(--font-size-lg)', fontWeight: 700, marginBottom: 'var(--space-md)' },
  tokenLabel: { fontSize: 'var(--font-size-sm)', color: 'var(--text-muted)', marginBottom: 'var(--space-sm)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600, textAlign: 'center' },
  token: { fontFamily: 'monospace', fontSize: 'var(--font-size-3xl)', fontWeight: 800, letterSpacing: '4px', color: 'var(--accent-text)', background: 'var(--bg-input)', padding: 'var(--space-md) var(--space-xl)', borderRadius: 'var(--radius-md)', border: '2px dashed var(--accent-end)', display: 'block', textAlign: 'center', marginBottom: 'var(--space-xl)', wordBreak: 'break-all' },
  itemRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 'var(--space-sm) 0', fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)', borderBottom: '1px solid var(--border-color)' },
  itemTitle: { flex: 1 },
  itemPrice: { fontWeight: 600, color: 'var(--text-primary)', whiteSpace: 'nowrap', marginLeft: 'var(--space-md)' },
  divider: { height: '1px', background: 'var(--border-color)', margin: 'var(--space-md) 0' },
  totalRow: { display: 'flex', justifyContent: 'space-between', fontSize: 'var(--font-size-xl)', fontWeight: 700 },
  dateRow: { fontSize: 'var(--font-size-sm)', color: 'var(--text-muted)', marginTop: 'var(--space-sm)' },
  instruction: { fontSize: 'var(--font-size-base)', color: 'var(--text-secondary)', lineHeight: 1.8, textAlign: 'left', background: 'var(--bg-input)', padding: 'var(--space-lg)', borderRadius: 'var(--radius-md)', marginBottom: 'var(--space-lg)' },
  step: { display: 'flex', gap: 'var(--space-sm)', marginBottom: 'var(--space-sm)', alignItems: 'flex-start' },
  stepNum: { width: '24px', height: '24px', borderRadius: 'var(--radius-full)', background: 'var(--accent-gradient)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 'var(--font-size-xs)', fontWeight: 700, flexShrink: 0, marginTop: '2px' },
  stepText: { flex: 1 },
  tgBtn: { display: 'inline-flex', alignItems: 'center', gap: 'var(--space-sm)', padding: 'var(--space-md) var(--space-xl)', borderRadius: 'var(--radius-sm)', background: '#229ED9', color: 'white', fontSize: 'var(--font-size-base)', fontWeight: 600, transition: 'opacity 150ms ease' },
  actions: { display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' },
  homeBtn: { display: 'inline-block', padding: 'var(--space-md) var(--space-xl)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)', fontWeight: 500 },
  profileBtn: { display: 'inline-block', padding: 'var(--space-md) var(--space-xl)', borderRadius: 'var(--radius-sm)', background: 'var(--accent-gradient)', color: 'white', fontSize: 'var(--font-size-sm)', fontWeight: 600 }
}

export default function OrderConfirmPage() {
  const [searchParams] = useSearchParams()
  const { user } = useAuth()
  const token = searchParams.get('token')
  const [order, setOrder] = useState(null)

  useEffect(() => {
    try {
      const saved = localStorage.getItem('ezkere_last_order')
      if (saved) setOrder(JSON.parse(saved))
    } catch {}
  }, [])

  if (!user) return <Navigate to="/login" replace />
  if (!token) return <Navigate to="/" replace />

  // Also try to find order from purchase history if localStorage was cleared
  const purchaseFromHistory = !order ? user.purchaseHistory.find(p => p.token === token) : null
  const orderData = order || purchaseFromHistory

  return (
    <div style={s.page}>
      {/* Success header */}
      <div style={s.card}>
        <div style={s.icon}>&#10003;</div>
        <h1 style={s.title}>Заказ оформлен!</h1>
        <p style={s.subtitle}>
          Спасибо за покупку! Ваш заказ успешно оплачен. Сохраните токен и свяжитесь с менеджером.
        </p>

        <div style={s.tokenLabel}>Ваш токен заказа</div>
        <div style={s.token}>{token}</div>
      </div>

      {/* Purchased items */}
      {orderData && (
        <div style={s.card}>
          <h2 style={s.sectionTitle}>Купленные товары</h2>
          {orderData.items.map((item, idx) => (
            <div key={idx} style={s.itemRow}>
              <span style={s.itemTitle}>{item.title}</span>
              <span style={s.itemPrice}>{formatPrice(item.price)}</span>
            </div>
          ))}
          <div style={s.divider} />
          <div style={s.totalRow}>
            <span>Итого:</span>
            <span>{formatPrice(orderData.total)}</span>
          </div>
          <div style={s.dateRow}>
            {new Date(orderData.date).toLocaleString('ru-RU')}
          </div>
        </div>
      )}

      {/* Instructions */}
      <div style={s.card}>
        <h2 style={s.sectionTitle}>Как получить заказ</h2>
        <div style={s.instruction}>
          <div style={s.step}>
            <span style={s.stepNum}>1</span>
            <span style={s.stepText}>Скопируйте токен заказа: <strong>{token}</strong></span>
          </div>
          <div style={s.step}>
            <span style={s.stepNum}>2</span>
            <span style={s.stepText}>Свяжитесь с нашим менеджером в Telegram по кнопке ниже</span>
          </div>
          <div style={s.step}>
            <span style={s.stepNum}>3</span>
            <span style={s.stepText}>Отправьте менеджеру ваш токен заказа</span>
          </div>
          <div style={s.step}>
            <span style={s.stepNum}>4</span>
            <span style={s.stepText}>Менеджер проверит оплату и передаст вам купленные товары (ключи активации, аккаунты или другой цифровой контент)</span>
          </div>
          <div style={s.step}>
            <span style={s.stepNum}>5</span>
            <span style={s.stepText}>Среднее время обработки заказа: <strong>5-30 минут</strong> в рабочее время (10:00 - 23:00 МСК)</span>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginBottom: 'var(--space-lg)' }}>
          <a href="https://t.me/ezkere_manager" target="_blank" rel="noopener noreferrer" style={s.tgBtn}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
            Написать менеджеру в Telegram
          </a>
        </div>

        <div style={s.actions}>
          <Link to="/profile" style={s.profileBtn}>История покупок</Link>
          <Link to="/" style={s.homeBtn}>На главную</Link>
          <Link to="/catalog" style={s.homeBtn}>В каталог</Link>
        </div>
      </div>
    </div>
  )
}
