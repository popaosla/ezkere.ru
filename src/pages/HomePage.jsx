import { useGames } from '../contexts/GamesContext'
import HeroBanner from '../components/home/HeroBanner'
import TrendingCarousel from '../components/home/TrendingCarousel'
import CategoryPreview from '../components/home/CategoryPreview'

export default function HomePage() {
  const { loading } = useGames()

  if (loading) return <div className="page-loading">Загрузка...</div>

  return (
    <div className="page">
      <div className="container">
        <HeroBanner />
        <TrendingCarousel />
        <CategoryPreview genre="RPG" count={4} />
        <CategoryPreview genre="Экшен" count={4} />
        <CategoryPreview genre="Шутер" count={4} />
        <CategoryPreview genre="Хоррор" count={4} />
        <CategoryPreview genre="Инди" count={4} />
      </div>
    </div>
  )
}
