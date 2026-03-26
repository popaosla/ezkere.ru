import { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ textAlign: 'center', padding: '80px 20px' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>Что-то пошло не так</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
            Произошла ошибка при загрузке страницы
          </p>
          <Link
            to="/"
            onClick={() => this.setState({ hasError: false })}
            style={{
              padding: '12px 24px',
              background: 'var(--accent-gradient)',
              color: 'white',
              borderRadius: '8px',
              fontWeight: 600
            }}
          >
            На главную
          </Link>
        </div>
      )
    }
    return this.props.children
  }
}
