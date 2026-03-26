export function filterGames(games, filters = {}) {
  let result = [...games]

  if (filters.search) {
    const q = filters.search.toLowerCase()
    result = result.filter(g =>
      g.title.toLowerCase().includes(q) ||
      (g.titleRu && g.titleRu.toLowerCase().includes(q)) ||
      g.tags.some(t => t.toLowerCase().includes(q)) ||
      g.genres.some(gen => gen.toLowerCase().includes(q)) ||
      g.developer.toLowerCase().includes(q)
    )
  }

  if (filters.genre) {
    result = result.filter(g =>
      g.genres.some(gen => gen.toLowerCase() === filters.genre.toLowerCase())
    )
  }

  if (filters.platform) {
    result = result.filter(g =>
      g.platforms.includes(filters.platform.toLowerCase())
    )
  }

  if (filters.minPrice !== undefined) {
    result = result.filter(g => g.price >= filters.minPrice)
  }
  if (filters.maxPrice !== undefined) {
    result = result.filter(g => g.price <= filters.maxPrice)
  }

  const sortBy = filters.sort || 'popular'
  switch (sortBy) {
    case 'price_asc':
      result.sort((a, b) => a.price - b.price)
      break
    case 'price_desc':
      result.sort((a, b) => b.price - a.price)
      break
    case 'rating':
      result.sort((a, b) => b.metacriticScore - a.metacriticScore)
      break
    case 'name':
      result.sort((a, b) => a.title.localeCompare(b.title))
      break
    case 'date':
      result.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate))
      break
    default:
      // popular: trending first, then by rating
      result.sort((a, b) => (b.isTrending ? 1 : 0) - (a.isTrending ? 1 : 0) || b.metacriticScore - a.metacriticScore)
  }

  return result
}
