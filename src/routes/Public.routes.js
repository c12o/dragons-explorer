import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { Login } from 'pages'

export default function PublicRoutes() {
  return (
    <>
      <Route path="/" exact component={Login} />
      <Route path="*" exact>
        <Redirect to="/" />
      </Route>
    </>
  )
}
