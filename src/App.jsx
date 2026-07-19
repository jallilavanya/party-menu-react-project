import { Navigate, Route, Routes } from 'react-router-dom'
import ProtectedRoute from './routes/ProtectedRoute'
import SignInPage from './pages/SignInPage'
import MenuPage from './pages/MenuPage'
import RecipeDetailPage from './pages/RecipeDetailPage'
import SavedRecipesPage from './pages/SavedRecipesPage'

export default function App() {
  return <Routes>
    <Route path="/signin" element={<SignInPage />} />
    <Route path="/" element={<ProtectedRoute><MenuPage /></ProtectedRoute>} />
    <Route path="/menu/:id" element={<ProtectedRoute><RecipeDetailPage /></ProtectedRoute>} />
    <Route path="/saved-recipes" element={<ProtectedRoute><SavedRecipesPage /></ProtectedRoute>} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
}
