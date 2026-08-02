import { Navigate } from 'react-router-dom'
<<<<<<< HEAD
import { STORAGE_KEYS } from '../constants/storageKeys'

export default function ProtectedRoute({ children }) {
  // Check auth token directly from localStorage as the source of truth
  const token = localStorage.getItem(STORAGE_KEYS.TOKEN)
  return token ? children : <Navigate to="/signin" replace />
=======
import { useAuth } from '../context/AuthContext'

export default function ProtectedRoute({ children }) {
  const { user } = useAuth()
  return user ? children : <Navigate to="/signin" replace />
>>>>>>> ff65ebb31bd781d137ffde87d22e7f163cb42e18
}
