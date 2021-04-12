import React, { useState, createContext, useEffect, useContext } from 'react'
import PropTypes from 'prop-types'
import { AuthenticationService } from 'services'

const sessionContext = createContext({
  user: null,
  theme: '',
  login: () => {},
  logout: () => {},
  handleTheme: () => {}
})

const LOCALSTORAGE_THEME_KEY = '@dragon:theme'

const SessionProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [theme, setTheme] = useState()
  const AuthenticationAPI = new AuthenticationService()

  useEffect(() => {
    if (!user) {
      const sessionData = AuthenticationAPI.getAuthenticatedUser()
      sessionData && setUser(sessionData)
    }
  }, [])

  useEffect(() => {
    const themeSelected = localStorage.getItem(LOCALSTORAGE_THEME_KEY)
    if (themeSelected) {
      handleTheme(themeSelected)
      setTheme(themeSelected)
    } else {
      handleTheme('dark')
      setTheme(themeSelected)
    }
  }, [])

  function login(payload) {
    try {
      const loginData = AuthenticationAPI.login(payload)
      setUser(loginData)
      return { success: true }
    } catch (error) {
      return { success: false, message: error.message }
    }
  }

  function logout() {
    AuthenticationAPI.logout()
    setUser(null)
  }

  function handleTheme(theme) {
    const html = document.documentElement
    html.className = ''
    html.classList.add(`${theme}-theme`)

    localStorage.setItem(LOCALSTORAGE_THEME_KEY, theme)
    setTheme(theme)
  }

  return (
    <sessionContext.Provider
      value={{ user, login, logout, handleTheme, theme }}
    >
      {children}
    </sessionContext.Provider>
  )
}

SessionProvider.propTypes = {
  children: PropTypes.node.isRequired
}

const useSession = () => useContext(sessionContext)

export { useSession, SessionProvider }
