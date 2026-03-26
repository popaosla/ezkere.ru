import { createContext, useContext, useState, useEffect, useMemo } from 'react'
import pb from '../lib/pb'
import { useAuth } from './AuthContext'
import { useGames } from './GamesContext'
import { calcDiscount } from '../utils/formatPrice'

const CartContext = createContext()

export function CartProvider({ children }) {
  const { user } = useAuth()
  const { games } = useGames()
  const [cartItems, setCartItems] = useState([])

  // Загружаем корзину при смене пользователя (логин/логаут)
  useEffect(() => {
    if (user) {
      setCartItems(user.cart ?? [])
    } else {
      // Для неавторизованных — localStorage
      try {
        const saved = localStorage.getItem('ezkere_cart_guest')
        setCartItems(saved ? JSON.parse(saved) : [])
      } catch {
        setCartItems([])
      }
    }
  }, [user?.id])

  const saveCart = async (newItems) => {
    setCartItems(newItems)
    if (pb.authStore.isValid && pb.authStore.record?.id) {
      // Авторизован — сохраняем в PocketBase
      try {
        await pb.collection('users').update(pb.authStore.record.id, { cart: newItems })
      } catch {}
    } else {
      // Гость — сохраняем в localStorage
      localStorage.setItem('ezkere_cart_guest', JSON.stringify(newItems))
    }
  }

  const addToCart = (gameId) => {
    if (cartItems.some(item => item.gameId === gameId)) return
    saveCart([...cartItems, { gameId, addedAt: new Date().toISOString() }])
  }

  const removeFromCart = (gameId) => {
    saveCart(cartItems.filter(item => item.gameId !== gameId))
  }

  const clearCart = () => saveCart([])

  const isInCart = (gameId) => cartItems.some(item => item.gameId === gameId)

  const cartGames = useMemo(() => {
    return cartItems.map(item => {
      const game = games.find(g => g.id === item.gameId)
      return game ? { ...game, addedAt: item.addedAt } : null
    }).filter(Boolean)
  }, [cartItems, games])

  const cartTotal = useMemo(() => {
    return cartGames.reduce((sum, game) => sum + calcDiscount(game.price, game.discountPercent), 0)
  }, [cartGames])

  return (
    <CartContext.Provider value={{
      cartItems, cartGames, cartTotal, cartCount: cartItems.length,
      addToCart, removeFromCart, clearCart, isInCart
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
