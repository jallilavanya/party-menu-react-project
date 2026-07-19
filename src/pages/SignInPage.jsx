import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function SignInPage() {
  const { user, login } = useAuth(); const navigate = useNavigate()
  const [email, setEmail] = useState('admin@example.com'); const [password, setPassword] = useState('password'); const [error, setError] = useState(''); const [isLoading, setIsLoading] = useState(false)
  if (user) return <Navigate to="/" replace />
  async function handleSubmit(event) { event.preventDefault(); setError(''); setIsLoading(true); try { await login(email, password); navigate('/') } catch (err) { setError(err.message) } finally { setIsLoading(false) } }
  return <main className="sign-in-page"><form className="sign-in-card" onSubmit={handleSubmit}><div className="food-icon">🍽️</div><h1>Party Menu</h1><p>Sign in to explore our delicious menu</p>{error && <p className="form-error">{error}</p>}<label>Email<input type="email" value={email} onChange={(event) => setEmail(event.target.value)} required /></label><label>Password<input type="password" value={password} onChange={(event) => setPassword(event.target.value)} required /></label><button className="button button-primary" disabled={isLoading}>{isLoading ? 'Signing in...' : 'Sign In'}</button></form></main>
}
