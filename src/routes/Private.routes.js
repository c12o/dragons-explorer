import React from 'react'
import { Route } from 'react-router-dom'
import { Home, DragonsList, DragonDetail } from 'pages'
import { Header } from 'components'

export default function PrivateRoutes() {
  return (
    <>
      <Header />
      <Route path="/home" exact component={Home} />
      <Route path="/list-dragons" exact component={DragonsList} />
      <Route path="/dragon/:id" exact component={DragonDetail} />
      {/* <Route path="/auth" exact>
        <pages.Auth />
      </Route>
      <Route path="/vote" exact>
        <pages.Vote />
      </Route> */}
    </>
  )
}
