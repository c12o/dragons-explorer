import React from 'react'
import { Route } from 'react-router-dom'
import pages from 'pages'

export default function PublicRoutes() {
  return (
    <Route path="/" exact>
      {/* <pages.Login /> */}
      <h1>Login page</h1>
    </Route>
  )
}
