import React from 'react'
import { Route } from 'react-router-dom'
import pages from 'pages'
import { Header } from 'components'

export default function PrivateRoutes() {
  return (
    <>
      <Header />
      <Route path="/home" exact>
        <h1>authenticated page</h1>
      </Route>
      {/* <Route path="/auth" exact>
        <pages.Auth />
      </Route>
      <Route path="/vote" exact>
        <pages.Vote />
      </Route> */}
    </>
  )
}
