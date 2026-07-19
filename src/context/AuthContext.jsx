import { createContext, useContext, useState } from 'react'
import { signIn } from '../services/authService'

const AuthContext = createContext(null)
const TOKEN_KEY = 'party-menu-token'
const USER_KEY = 'party-menu-user'

function getStoredUser() {
  try { return JSON.parse(localStorage.getItem(USER_KEY)) } catch { return null }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(getStoredUser)

  async function login(email, password) {
    const result = await signIn(email, password)
    localStorage.setItem(TOKEN_KEY, result.token)
    localStorage.setItem(USER_KEY, JSON.stringify(result.user))
    setUser(result.user)
  }

  function logout() {
    localStorage.removeItem(TOKEN_KEY)
    localStorage.removeItem(USER_KEY)
    setUser(null)
  }

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  return useContext(AuthContext)
}
