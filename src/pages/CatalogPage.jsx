import { useState, useEffect, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { games } from '../data/games'
import { filterGames } from '../utils/filterGames'
import CatalogFilters from '../components/catalog/CatalogFilters'
import CatalogGrid from '../components/catalog/CatalogGrid'

const pageStyle = {
  maxWidth: 'var(--container-max)',
  margin: '0 auto',
  padding: 'var(--space-xl) var(--container-padding)'
}

const titleStyle = {
  fontSize: 'var(--font-size-3xl)',
  fontWeight: 800,
  marginBottom: 'var(--space-lg)'
}

const layoutStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--space-xl)'
}

const countStyle = {
  fontSize: 'var(--font-size-sm)',
  color: 'var(--text-muted)',
  marginBottom: 'var(--space-md)'
}

export default function CatalogPage() {
  const [searchParams, setSearchParams] = useSearchParams()

  const [filters, setFilters] = useState({
    genre: searchParams.get('genre') || '',
    platform: searchParams.get('platform') || '',
    sort: searchParams.get('sort') || 'popular',
    search: searchParams.get('q') || ''
  })

  useEffect(() => {
    const params = {}
    if (filters.genre) params.genre = filters.genre
    if (filters.platform) params.platform = filters.platform
    if (filters.sort && filters.sort !== 'popular') params.sort = filters.sort
    if (filters.search) params.q = filters.search
    setSearchParams(params, { replace: true })
  }, [filters, setSearchParams])

  useEffect(() => {
    const genre = searchParams.get('genre') || ''
    const platform = searchParams.get('platform') || ''
    const sort = searchParams.get('sort') || 'popular'
    const search = searchParams.get('q') || ''
    setFilters({ genre, platform, sort, search })
  }, [])

  const filtered = useMemo(() => filterGames(games, filters), [filters])

  return (
    <div style={pageStyle}>
      <h1 style={titleStyle}>Каталог игр</h1>
      <div style={layoutStyle}>
        <CatalogFilters filters={filters} onChange={setFilters} />
        <div style={countStyle}>Найдено: {filtered.length} игр</div>
        <CatalogGrid games={filtered} />
      </div>
    </div>
  )
}
