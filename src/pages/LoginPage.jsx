import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

const styles = {
  page: { maxWidth: '440px', margin: '0 auto', padding: 'var(--space-2xl) var(--container-padding)' },
  card: { background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-2xl)' },
  title: { fontSize: 'var(--font-size-2xl)', fontWeight: 800, textAlign: 'center', marginBottom: 'var(--space-xl)' },
  form: { display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' },
  label: { fontSize: 'var(--font-size-sm)', fontWeight: 500, marginBottom: '4px', display: 'block' },
  input: { width: '100%', padding: 'var(--space-sm) var(--space-md)', background: 'var(--bg-input)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', fontSize: 'var(--font-size-base)', color: 'var(--text-primary)', outline: 'none' },
  btn: { width: '100%', padding: 'var(--space-md)', borderRadius: 'var(--radius-sm)', background: 'var(--accent-gradient)', color: 'white', fontSize: 'var(--font-size-base)', fontWeight: 600, marginTop: 'var(--space-sm)', border: 'none', cursor: 'pointer' },
  error: { color: 'var(--danger)', fontSize: 'var(--font-size-sm)', textAlign: 'center' },
  footer: { textAlign: 'center', marginTop: 'var(--space-lg)', fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' },
  link: { color: 'var(--accent-text)', fontWeight: 500 }
}

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await login(email, password)
      navigate('/profile')
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>Вход</h1>
        <form style={styles.form} onSubmit={handleSubmit}>
          <div>
            <label style={styles.label}>Email</label>
            <input style={styles.input} type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="you@mail.ru" />
          </div>
          <div>
            <label style={styles.label}>Пароль</label>
            <input style={styles.input} type="password" required value={password} onChange={e => setPassword(e.target.value)} placeholder="Введите пароль" />
          </div>
          {error && <p style={styles.error}>{error}</p>}
          <button style={styles.btn} type="submit">Войти</button>
        </form>
        <p style={styles.footer}>
          Нет аккаунта? <Link to="/register" style={styles.link}>Зарегистрироваться</Link>
        </p>
      </div>
    </div>
  )
}
