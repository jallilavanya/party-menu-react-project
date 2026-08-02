import { createContext, useContext, useState } from 'react'
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
    setUser(result.user)
  }

  function logout() {
    localStorage.removeItem(STORAGE_KEYS.TOKEN)
    localStorage.removeItem(STORAGE_KEYS.USER)

    setToken(null)
    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}