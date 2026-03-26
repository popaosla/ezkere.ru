import { useMemo } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { games } from '../data/games'
import { filterGames } from '../utils/filterGames'
import CatalogGrid from '../components/catalog/CatalogGrid'

const pageStyle = {
  maxWidth: 'var(--container-max)',
  margin: '0 auto',
  padding: 'var(--space-xl) var(--container-padding)'
}

export default function SearchResultsPage() {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q') || ''

  const results = useMemo(() =>
    query ? filterGames(games, { search: query }) : [],
    [query]
  )

  return (
    <div style={pageStyle}>
      <h1 style={{ fontSize: 'var(--font-size-2xl)', fontWeight: 700, marginBottom: 'var(--space-sm)' }}>
        Результаты поиска
      </h1>
      <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-muted)', marginBottom: 'var(--space-xl)' }}>
        По запросу &laquo;{query}&raquo; найдено: {results.length}
      </p>
      {results.length > 0 ? (
        <CatalogGrid games={results} />
      ) : (
        <div style={{ textAlign: 'center', padding: 'var(--space-3xl)', color: 'var(--text-muted)' }}>
          <p style={{ fontSize: 'var(--font-size-xl)', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: 'var(--space-sm)' }}>
            Ничего не найдено
          </p>
          <p>Попробуйте другой запрос или <Link to="/catalog" style={{ color: 'var(--accent-text)' }}>откройте каталог</Link></p>
        </div>
      )}
    </div>
  )
}
