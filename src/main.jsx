import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { AuthProvider } from './context/AuthContext'
import './styles/global.css'

const rootElement = document.getElementById('root')

createRoot(rootElement, {
  onUncaughtError(error) {
    rootElement.innerHTML = `<pre style="color:#ff9ca8;padding:24px;white-space:pre-wrap">${error.message}</pre>`
  }
}).render(
  <StrictMode><BrowserRouter><AuthProvider><App /></AuthProvider></BrowserRouter></StrictMode>
)
