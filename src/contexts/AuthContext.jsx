import { createContext, useContext, useState, useEffect } from 'react'
import pb from '../lib/pb'

const AuthContext = createContext()

// Приводим запись PocketBase к формату, который ожидает приложение
function normalize(record) {
  if (!record) return null
  return {
    id: record.id,
    username: record.username,
    email: record.email,
    balance: record.balance ?? 0,
    purchaseHistory: record.purchaseHistory ?? [],
    cart: record.cart ?? [],
    createdAt: record.created ?? new Date().toISOString()
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => normalize(pb.authStore.record))

  useEffect(() => {
    // Слушаем изменения авторизации (логин/логаут)
    const unsub = pb.authStore.onChange((_, model) => {
      setUser(normalize(model))
    })

    // При загрузке страницы обновляем токен если он есть
    if (pb.authStore.isValid) {
      pb.collection('users').authRefresh()
        .then(({ record }) => setUser(normalize(record)))
        .catch(() => pb.authStore.clear())
    }

    return unsub
  }, [])

  const register = async (username, email, password) => {
    try {
      await pb.collection('users').create({
        username,
        email,
        password,
        passwordConfirm: password,
        balance: 0,
        purchaseHistory: [],
        cart: []
      })
      const auth = await pb.collection('users').authWithPassword(email, password)
      setUser(normalize(auth.record))
    } catch (e) {
      if (e?.data?.data?.email) throw new Error('Пользователь с таким email уже существует')
      if (e?.data?.data?.username) throw new Error('Имя пользователя занято')
      throw new Error('Ошибка регистрации. Попробуйте ещё раз.')
    }
  }

  const login = async (email, password) => {
    try {
      const auth = await pb.collection('users').authWithPassword(email, password)
      setUser(normalize(auth.record))
    } catch {
      throw new Error('Неверный email или пароль')
    }
  }

  const logout = () => {
    pb.authStore.clear()
  }

  const updateBalance = async (amount) => {
    if (!user) return
    const updated = await pb.collection('users').update(user.id, {
      balance: user.balance + amount
    })
    setUser(prev => ({ ...prev, balance: updated.balance ?? prev.balance + amount }))
  }

  const addPurchase = async (purchase) => {
    if (!user) return
    const newHistory = [purchase, ...user.purchaseHistory]
    const updated = await pb.collection('users').update(user.id, {
      balance: user.balance - purchase.total,
      purchaseHistory: newHistory
    })
    setUser(prev => ({
      ...prev,
      balance: updated.balance ?? prev.balance - purchase.total,
      purchaseHistory: updated.purchaseHistory ?? newHistory
    }))
  }

  return (
    <AuthContext.Provider value={{ user, register, login, logout, updateBalance, addPurchase }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
