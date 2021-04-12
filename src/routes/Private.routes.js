import React from 'react'
import { Route } from 'react-router-dom'
import { Home, DragonsList } from 'pages'
import { Header } from 'components'

export default function PrivateRoutes() {
  return (
    <>
      <Header />
      <Route path="/home" exact>
        <Home />
      </Route>
      <Route path="/list-dragons" exact>
        <DragonsList />
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
