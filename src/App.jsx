import { useState } from 'react'
import { BrowserRouter, Routes, Route, Outlet, useLocation } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import { AuthProvider } from './contexts/AuthContext'
import { CartProvider } from './contexts/CartContext'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Sidebar from './components/layout/Sidebar'
import HomePage from './pages/HomePage'
import CatalogPage from './pages/CatalogPage'
import GamePage from './pages/GamePage'
import CartPage from './pages/CartPage'
import CheckoutPage from './pages/CheckoutPage'
import OrderConfirmPage from './pages/OrderConfirmPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ProfilePage from './pages/ProfilePage'
import SearchResultsPage from './pages/SearchResultsPage'
import NotFoundPage from './pages/NotFoundPage'
import { useEffect } from 'react'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <ScrollToTop />
      <Header onOpenSidebar={() => setSidebarOpen(true)} />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <CartProvider>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/catalog" element={<CatalogPage />} />
                <Route path="/game/:slug" element={<GamePage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/order/:orderId" element={<OrderConfirmPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/search" element={<SearchResultsPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Route>
            </Routes>
          </CartProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}
