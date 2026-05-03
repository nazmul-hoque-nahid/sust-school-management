import { createContext, useState, useEffect } from 'react'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(localStorage.getItem('token') || null)

  useEffect(() => {
    if (token) {
      // Decode token to get user info, assuming JWT
      try {
        const payload = JSON.parse(atob(token.split('.')[1]))
        setUser(payload)
      } catch (e) {
        console.error('Invalid token')
        logout()
      }
    }
  }, [token])

  const login = async (email, password) => {
    try {
      const response = await fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })

      const message = await response.text()
      if (response.ok) {
        localStorage.setItem('token', message)
        setToken(message)
        return { success: true }
      }

      return { success: false, message: message || 'Login failed' }
    } catch (error) {
      console.error('Login error:', error)
      return { success: false, message: 'Login failed. Please try again.' }
    }
  }

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setToken(null)
    setUser(null)
  }

  const isAdmin = () => user && user.role === 'ADMIN'

  return (
    <UserContext.Provider value={{ user, token, login, logout, isAdmin }}>
      {children}
    </UserContext.Provider>
  )
}