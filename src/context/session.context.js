import React, { useState, createContext, useEffect, useContext } from 'react'
import PropTypes from 'prop-types'
import { AuthenticationService } from 'services'

const sessionContext = createContext({
  user: null,
  login: () => {},
  logout: () => {}
})

const SessionProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const AuthenticationAPI = new AuthenticationService()

  useEffect(() => {
    if (!user) {
      const sessionData = AuthenticationAPI.getAuthenticatedUser()
      sessionData && setUser(sessionData)
    }
  }, [])

  function login(payload) {
    try {
      const loginData = AuthenticationAPI.login(payload)
      setUser(loginData)
    } catch (error) {
      return error
    }
  }

  function logout() {
    AuthenticationAPI.logout()
    setUser(null)
  }

  return (
    <sessionContext.Provider value={{ user, login, logout }}>
      {children}
    </sessionContext.Provider>
  )
}

SessionProvider.propTypes = {
  children: PropTypes.node.isRequired
}

const useSession = () => useContext(sessionContext)

export { useSession, SessionProvider }
