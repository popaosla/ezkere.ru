import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { formatPrice } from '../../utils/formatPrice'
import s from './ProfileInfo.module.css'

export default function ProfileInfo() {
  const { user, updateBalance, logout } = useAuth()
  const navigate = useNavigate()
  const [topUpAmount, setTopUpAmount] = useState('')

  if (!user) return null

  const history = Array.isArray(history) ? history : []

  const handleTopUp = () => {
    const amount = parseInt(topUpAmount)
    if (amount > 0) {
      updateBalance(amount)
      setTopUpAmount('')
    }
  }

  return (
    <>
      <div className={s.card}>
        <div className={s.header}>
          <div className={s.avatar}>{(user.username || '?')[0].toUpperCase()}</div>
          <div className={s.userInfo}>
            <h2>{user.username}</h2>
            <span className={s.email}>{user.email}</span>
          </div>
        </div>

        <div className={s.stats}>
          <div className={s.stat}>
            <div className={s.statValue}>{formatPrice(user.balance)}</div>
            <div className={s.statLabel}>Баланс</div>
          </div>
          <div className={s.stat}>
            <div className={s.statValue}>{history.length}</div>
            <div className={s.statLabel}>Покупок</div>
          </div>
          <div className={s.stat}>
            <div className={s.statValue}>{new Date(user.createdAt).toLocaleDateString('ru-RU')}</div>
            <div className={s.statLabel}>Регистрация</div>
          </div>
        </div>

        <div className={s.topUp}>
          <input
            type="number"
            className={s.topUpInput}
            placeholder="Сумма ₽"
            value={topUpAmount}
            onChange={e => setTopUpAmount(e.target.value)}
            min="1"
          />
          <button className={s.topUpBtn} onClick={handleTopUp}>Пополнить баланс</button>
          <button className={s.logoutBtn} onClick={logout}>Выйти</button>
        </div>
      </div>

      <div className={s.historySection}>
        <h2 className={s.sectionTitle}>История покупок</h2>
        {history.length === 0 ? (
          <div className={s.emptyHistory}>
            <p>У вас пока нет покупок</p>
          </div>
        ) : (
          <div className={s.historyList}>
            {history.map((purchase, idx) => (
              <div
                key={idx}
                className={s.historyItem}
                onClick={() => navigate(`/order/${purchase.orderId}?token=${purchase.token}`)}
                style={{ cursor: 'pointer' }}
                title="Нажмите для просмотра деталей заказа"
              >
                <div className={s.historyHeader}>
                  <span className={s.historyDate}>
                    {new Date(purchase.date).toLocaleString('ru-RU')}
                  </span>
                  <span className={s.historyToken}>Токен: {purchase.token}</span>
                </div>
                <div className={s.historyGames}>
                  {purchase.items.map(i => i.title).join(', ')}
                </div>
                <div className={s.historyTotal}>{formatPrice(purchase.total)}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  )
}
