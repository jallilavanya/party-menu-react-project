import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useSavedRecipes } from '../context/SavedRecipesContext'

export default function Header() {
  const { user, logout } = useAuth()
  const { count } = useSavedRecipes()
  const navigate = useNavigate()

  function handleLogout() {
    logout()
    navigate('/signin')
  }

  return (
    <header className="app-header">
      <div>
        <Link className="brand" to="/" aria-label="Party Menu Home">
          Party Menu
        </Link>
        <p aria-live="polite">Welcome, {user?.name}</p>
      </div>
      <nav>
        <Link
          className="button button-secondary"
          to="/saved-recipes"
          aria-label={`Saved Recipes, ${count} recipe${count !== 1 ? 's' : ''} saved`}
        >
          Saved Recipes ({count})
        </Link>
        <button
          type="button"
          className="button button-secondary"
          onClick={handleLogout}
          aria-label="Logout"
        >
          Logout
        </button>
      </nav>
    </header>
  )
}
