import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function SignInPage() {
  const { isAuthenticated, login } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('admin@example.com')
  const [password, setPassword] = useState('admin123')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  if (isAuthenticated) return <Navigate to="/" replace />

  async function handleSubmit(event) {
    event.preventDefault()
    setError('')
    setIsLoading(true)
    try {
      await login(email, password)
      navigate('/')
    } catch (err) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="sign-in-page" aria-labelledby="sign-in-heading">
      <form className="sign-in-card" onSubmit={handleSubmit} aria-label="Sign in form">
        <div className="food-icon" aria-hidden="true">🍽️</div>
        <h1 id="sign-in-heading">Party Menu</h1>
        <p>Sign in to explore our delicious menu</p>
        {error && (
          <p className="form-error" role="alert">
            {error}
          </p>
        )}
        <label htmlFor="email">
          Email
          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            aria-label="Email address"
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            id="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            aria-label="Password"
          />
        </label>
        <button
          type="submit"
          className="button button-primary"
          disabled={isLoading}
          aria-label={isLoading ? 'Signing in' : 'Sign in'}
        >
          {isLoading ? 'Signing in...' : 'Sign In'}
        </button>
      </form>
    </main>
  )
}
