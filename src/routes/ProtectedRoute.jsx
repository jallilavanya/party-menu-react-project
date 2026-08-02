import { Navigate } from 'react-router-dom'
import { STORAGE_KEYS } from '../constants/storageKeys'

export default function ProtectedRoute({ children }) {
  // Check auth token directly from localStorage as the source of truth
  const token = localStorage.getItem(STORAGE_KEYS.TOKEN)
  return token ? children : <Navigate to="/signin" replace />
}
