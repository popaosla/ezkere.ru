import { createContext, useContext, useState, useEffect, useRef } from 'react'
import pb from '../lib/pb'

const AuthContext = createContext()

// Приводим запись PocketBase к формату, который ожидает приложение
function normalize(record) {
  if (!record) return null
  return {
    id: record.id,
    username: record.name || record.username || record.email?.split('@')[0] || 'User',
    email: record.email || '',
    balance: typeof record.balance === 'number' ? record.balance : 0,
    purchaseHistory: Array.isArray(record.purchaseHistory) ? record.purchaseHistory : [],
    cart: Array.isArray(record.cart) ? record.cart : [],
    createdAt: record.created ?? new Date().toISOString()
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => normalize(pb.authStore.record))
  // Флаг: пропускать onChange пока идёт ручное обновление
  const skipOnChange = useRef(false)

  useEffect(() => {
    const unsub = pb.authStore.onChange((_, model) => {
      // Не перезаписывать state если мы сами обновляем пользователя
      if (skipOnChange.current) return
      setUser(normalize(model))
    })

    if (pb.authStore.isValid) {
      pb.collection('users').authRefresh()
        .then(({ record }) => setUser(normalize(record)))
        .catch(() => {
          pb.authStore.clear()
          setUser(null)
        })
    }

    return unsub
  }, [])

  const register = async (username, email, password) => {
    try {
      await pb.collection('users').create({
        name: username,
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
    setUser(null)
  }

  const updateBalance = async (amount) => {
    if (!user) return
    const newBalance = user.balance + amount
    skipOnChange.current = true
    try {
      await pb.collection('users').update(user.id, { balance: newBalance })
      setUser(prev => prev ? { ...prev, balance: newBalance } : prev)
    } catch {
      // Обновляем локально даже при ошибке
      setUser(prev => prev ? { ...prev, balance: newBalance } : prev)
    } finally {
      skipOnChange.current = false
    }
  }

  const addPurchase = async (purchase) => {
    if (!user) return
    const newBalance = user.balance - purchase.total
    const prevHistory = Array.isArray(user.purchaseHistory) ? user.purchaseHistory : []
    const newHistory = [purchase, ...prevHistory]

    skipOnChange.current = true
    try {
      await pb.collection('users').update(user.id, {
        balance: newBalance,
        purchaseHistory: newHistory,
        cart: []
      })
    } catch {
      // PocketBase не обновился — продолжаем локально
    } finally {
      setUser(prev => prev ? {
        ...prev,
        balance: newBalance,
        purchaseHistory: newHistory,
        cart: []
      } : prev)
      skipOnChange.current = false
    }
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
