import React from 'react'
import { Route } from 'react-router-dom'
import { Login } from 'pages'

export default function PublicRoutes() {
  return (
    <Route path="/" exact>
      <Login />
    </Route>
  )
}
