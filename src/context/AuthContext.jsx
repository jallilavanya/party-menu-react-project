import { createContext, useContext, useState } from 'react'
<<<<<<< HEAD
import { STORAGE_KEYS } from '../constants/storageKeys'
import { signIn } from '../services/authService'

const AuthContext = createContext(null)

function getStoredToken() {
  return localStorage.getItem(STORAGE_KEYS.TOKEN)
}

function getStoredUser() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.USER))
  } catch {
    return null
  }
}

export function AuthProvider({ children }) {
  const [token, setToken] = useState(getStoredToken)
  const [user, setUser] = useState(getStoredUser)

  const isAuthenticated = Boolean(token)

  async function login(email, password) {
    const result = await signIn(email, password)
    localStorage.setItem(STORAGE_KEYS.TOKEN, result.token)
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(result.user))
    setToken(result.token)
=======
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
>>>>>>> ff65ebb31bd781d137ffde87d22e7f163cb42e18
    setUser(result.user)
  }

  function logout() {
<<<<<<< HEAD
    localStorage.removeItem(STORAGE_KEYS.TOKEN)
    localStorage.removeItem(STORAGE_KEYS.USER)
    setToken(null)
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, token, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
=======
    localStorage.removeItem(TOKEN_KEY)
    localStorage.removeItem(USER_KEY)
    setUser(null)
  }

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>
>>>>>>> ff65ebb31bd781d137ffde87d22e7f163cb42e18
}

export function useAuth() {
  return useContext(AuthContext)
}
