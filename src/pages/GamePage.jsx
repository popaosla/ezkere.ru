import { useParams, Navigate } from 'react-router-dom'
import { games } from '../data/games'
import GameDetails from '../components/game/GameDetails'

export default function GamePage() {
  const { slug } = useParams()
  const game = games.find(g => g.slug === slug)

  if (!game) return <Navigate to="/404" replace />

  return <GameDetails game={game} />
}
