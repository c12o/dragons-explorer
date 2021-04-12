import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { Home, DragonsList, DragonDetail, CreateDragon } from 'pages'
import { Header } from 'components'

export default function PrivateRoutes() {
  return (
    <>
      <Header />
      <Route path="/home" exact component={Home} />
      <Route path="/list-dragons" exact component={DragonsList} />
      <Route path="/dragon/:id" exact component={DragonDetail} />
      <Route path="/create-dragon" exact component={CreateDragon} />
      <Route path="*" exact>
        <Redirect to="/home" />
      </Route>
    </>
  )
}
