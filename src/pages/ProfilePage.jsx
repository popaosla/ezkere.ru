import { Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import ProfileInfo from '../components/profile/ProfileInfo'

const pageStyle = {
  maxWidth: '900px',
  margin: '0 auto',
  padding: 'var(--space-xl) var(--container-padding)'
}

const titleStyle = {
  fontSize: 'var(--font-size-3xl)',
  fontWeight: 800,
  marginBottom: 'var(--space-lg)'
}

export default function ProfilePage() {
  const { user } = useAuth()

  if (!user) return <Navigate to="/login" replace />

  return (
    <div style={pageStyle}>
      <h1 style={titleStyle}>Личный кабинет</h1>
      <ProfileInfo />
    </div>
  )
}
