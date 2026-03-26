import { createContext, useContext, useState, useEffect } from 'react'
import pb from '../lib/pb'

const GamesContext = createContext()

const GENRES = ['Экшен', 'Шутер', 'Симулятор', 'Гонки', 'RPG', 'Казуальная', 'SoulsLike', 'Инди', 'Киберпанк', 'Слешер', 'Хоррор', 'Выживание', 'Файтинг', 'Стратегия', 'Платформер', 'Спорт']
const PLATFORMS = [
  { id: 'pc', name: 'PC' },
  { id: 'ps', name: 'PlayStation' },
  { id: 'xbox', name: 'Xbox' }
]

function normalizeGame(record) {
  return {
    id: record.id,
    slug: record.slug,
    title: record.title,
    titleRu: record.titleRu || '',
    description: record.description || '',
    shortDescription: record.shortDescription || '',
    developer: record.developer || '',
    publisher: record.publisher || '',
    releaseDate: record.releaseDate || '',
    price: record.price || 0,
    discountPercent: record.discountPercent || 0,
    platforms: Array.isArray(record.platforms) ? record.platforms : [],
    genres: Array.isArray(record.genres) ? record.genres : [],
    metacriticScore: record.metacriticScore || 0,
    coverImage: record.coverImage || '',
    screenshots: Array.isArray(record.screenshots) ? record.screenshots : [],
    storeLinks: record.storeLinks || {},
    systemRequirements: record.systemRequirements || {},
    isTrending: record.isTrending || false,
    isFeatured: record.isFeatured || false,
    tags: Array.isArray(record.tags) ? record.tags : []
  }
}

export function GamesProvider({ children }) {
  const [games, setGames] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false

    pb.collection('games').getFullList({ sort: 'title' })
      .then(records => {
        if (cancelled) return
        setGames(records.map(normalizeGame))
      })
      .catch(err => {
        console.error('Не удалось загрузить игры из PocketBase:', err.message)
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    return () => { cancelled = true }
  }, [])

  return (
    <GamesContext.Provider value={{ games, genres: GENRES, platforms: PLATFORMS, loading }}>
      {children}
    </GamesContext.Provider>
  )
}

export function useGames() {
  const ctx = useContext(GamesContext)
  if (!ctx) throw new Error('useGames must be used within GamesProvider')
  return ctx
}
