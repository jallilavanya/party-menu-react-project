import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Header() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  function handleLogout() { logout(); navigate('/signin') }
  return <header className="app-header"><div><Link className="brand" to="/">Party Menu</Link><p>Welcome, {user?.name}</p></div><nav><Link className="button button-secondary" to="/saved-recipes">Saved Recipes</Link><button className="button button-secondary" onClick={handleLogout}>Logout</button></nav></header>
}
