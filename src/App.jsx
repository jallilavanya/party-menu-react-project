import { Navigate, Route, Routes } from 'react-router-dom'
import ProtectedRoute from './routes/ProtectedRoute'
import SignInPage from './pages/SignInPage'
import MenuPage from './pages/MenuPage'
import RecipeDetailPage from './pages/RecipeDetailPage'
import SavedRecipesPage from './pages/SavedRecipesPage'
<<<<<<< HEAD
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  return (
    <Routes>
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/login" element={<SignInPage />} />
      <Route path="/" element={<SignInPage />} />
      <Route
        path="/menu"
        element={
          <ProtectedRoute>
            <MenuPage />
          </ProtectedRoute>
        }
      />
      <Route path="/menu/:id" element={<RecipeDetailPage />} />
      <Route path="/saved-recipes" element={<SavedRecipesPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
=======

export default function App() {
  return <Routes>
    <Route path="/signin" element={<SignInPage />} />
    <Route path="/" element={<ProtectedRoute><MenuPage /></ProtectedRoute>} />
    <Route path="/menu/:id" element={<ProtectedRoute><RecipeDetailPage /></ProtectedRoute>} />
    <Route path="/saved-recipes" element={<ProtectedRoute><SavedRecipesPage /></ProtectedRoute>} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
>>>>>>> ff65ebb31bd781d137ffde87d22e7f163cb42e18
}
