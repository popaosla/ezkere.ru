import { Link } from 'react-router-dom'

const styles = {
  page: { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', textAlign: 'center', padding: 'var(--space-xl)' },
  code: { fontSize: '120px', fontWeight: 800, lineHeight: 1, background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' },
  title: { fontSize: 'var(--font-size-2xl)', fontWeight: 700, marginBottom: 'var(--space-sm)' },
  desc: { color: 'var(--text-secondary)', marginBottom: 'var(--space-xl)' },
  btn: { display: 'inline-block', padding: 'var(--space-sm) var(--space-xl)', borderRadius: 'var(--radius-sm)', background: 'var(--accent-gradient)', color: 'white', fontWeight: 600, transition: 'opacity 150ms ease' }
}

export default function NotFoundPage() {
  return (
    <div style={styles.page}>
      <div style={styles.code}>404</div>
      <h1 style={styles.title}>Страница не найдена</h1>
      <p style={styles.desc}>Возможно, она была перемещена или удалена</p>
      <Link to="/" style={styles.btn}>На главную</Link>
    </div>
  )
}
