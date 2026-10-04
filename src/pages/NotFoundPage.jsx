import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function NotFoundPage() {
  const { isAuthenticated } = useAuth()

  return (
    <main className="page-container not-found-page" aria-labelledby="not-found-heading">
      <h1 id="not-found-heading">404 – Page Not Found</h1>
      {isAuthenticated ? (
        <Link className="button button-primary" to="/" aria-label="Back to Menu">
          Back to Menu
        </Link>
      ) : (
        <Link className="button button-primary" to="/signin" aria-label="Go to Sign In">
          Go to Sign In
        </Link>
      )}
    </main>
  )
}
