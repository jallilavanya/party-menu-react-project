import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { AuthProvider } from './context/AuthContext'
<<<<<<< HEAD
import { SavedRecipesProvider } from './context/SavedRecipesContext'
=======
>>>>>>> ff65ebb31bd781d137ffde87d22e7f163cb42e18
import './styles/global.css'

const rootElement = document.getElementById('root')

createRoot(rootElement, {
  onUncaughtError(error) {
    rootElement.innerHTML = `<pre style="color:#ff9ca8;padding:24px;white-space:pre-wrap">${error.message}</pre>`
  }
}).render(
<<<<<<< HEAD
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <SavedRecipesProvider>
          <App />
        </SavedRecipesProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
=======
  <StrictMode><BrowserRouter><AuthProvider><App /></AuthProvider></BrowserRouter></StrictMode>
>>>>>>> ff65ebb31bd781d137ffde87d22e7f163cb42e18
)
