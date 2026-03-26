import { createContext, useContext, useState, useEffect } from 'react'
import pb from '../lib/pb'
// Фоллбэк — статические данные на случай если PocketBase недоступен
import { games as staticGames, genres as staticGenres, platforms as staticPlatforms } from '../data/games'

const GamesContext = createContext()

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
  const [games, setGames] = useState(staticGames)
  const [genres] = useState(staticGenres)
  const [platforms] = useState(staticPlatforms)
  const [loading, setLoading] = useState(true)
  const [fromDb, setFromDb] = useState(false)

  useEffect(() => {
    let cancelled = false

    pb.collection('games').getFullList({ sort: 'title' })
      .then(records => {
        if (cancelled) return
        if (records.length > 0) {
          setGames(records.map(normalizeGame))
          setFromDb(true)
        }
        // Если в базе пусто — оставляем статические данные
      })
      .catch(() => {
        // PocketBase недоступен — используем статические данные
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    return () => { cancelled = true }
  }, [])

  return (
    <GamesContext.Provider value={{ games, genres, platforms, loading, fromDb }}>
      {children}
    </GamesContext.Provider>
  )
}

export function useGames() {
  const ctx = useContext(GamesContext)
  if (!ctx) throw new Error('useGames must be used within GamesProvider')
  return ctx
}
