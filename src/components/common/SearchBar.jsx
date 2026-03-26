import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { games } from '../../data/games'
import { formatPrice, calcDiscount } from '../../utils/formatPrice'
import s from './SearchBar.module.css'

export default function SearchBar({ autoFocus, onClose }) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const wrapperRef = useRef(null)
  const inputRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus()
    }
  }, [autoFocus])

  useEffect(() => {
    if (query.trim().length < 2) {
      setResults([])
      setIsOpen(false)
      return
    }
    const timer = setTimeout(() => {
      const q = query.toLowerCase()
      const found = games.filter(g =>
        g.title.toLowerCase().includes(q) ||
        (g.titleRu && g.titleRu.toLowerCase().includes(q)) ||
        g.tags.some(t => t.toLowerCase().includes(q))
      ).slice(0, 5)
      setResults(found)
      setIsOpen(found.length > 0)
    }, 300)
    return () => clearTimeout(timer)
  }, [query])

  useEffect(() => {
    const handleClick = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`)
      setIsOpen(false)
      setQuery('')
      onClose?.()
    }
  }

  const goToGame = (slug) => {
    navigate(`/game/${slug}`)
    setIsOpen(false)
    setQuery('')
    onClose?.()
  }

  return (
    <form className={s.wrapper} ref={wrapperRef} onSubmit={handleSubmit}>
      <svg className={s.searchIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
      <input
        ref={inputRef}
        className={s.input}
        type="text"
        placeholder="Поиск игр..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        onFocus={() => results.length > 0 && setIsOpen(true)}
      />
      {isOpen && (
        <div className={s.dropdown}>
          {results.map(game => (
            <div key={game.id} className={s.dropdownItem} onClick={() => goToGame(game.slug)}>
              <img src={game.coverImage} alt="" className={s.dropdownImg} loading="lazy" />
              <span className={s.dropdownTitle}>{game.title}</span>
              <span className={s.dropdownPrice}>{formatPrice(calcDiscount(game.price, game.discountPercent))}</span>
            </div>
          ))}
          <button type="submit" className={s.dropdownAll}>
            Все результаты для &laquo;{query}&raquo;
          </button>
        </div>
      )}
    </form>
  )
}
