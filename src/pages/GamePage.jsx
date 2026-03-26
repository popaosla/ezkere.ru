import { useParams, Navigate } from 'react-router-dom'
import { useGames } from '../contexts/GamesContext'
import GameDetails from '../components/game/GameDetails'

export default function GamePage() {
  const { games, loading } = useGames()
  const { slug } = useParams()
  const game = games.find(g => g.slug === slug)

  if (loading) return <div className="page-loading">Загрузка...</div>
  if (!game) return <Navigate to="/404" replace />

  return <GameDetails game={game} />
}
