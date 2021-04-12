import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import PrivateRoutes from './Private.routes'
import PublicRoutes from './Public.routes'
import { useSession } from 'context'

export default function Router() {
  const { user } = useSession()
  return (
    <BrowserRouter>
      <Switch>{user ? <PrivateRoutes /> : <PublicRoutes />}</Switch>
      {/* <Route path="*" exact>
        <Redirect to={user ? '/home' : '/'} />
      </Route> */}
    </BrowserRouter>
  )
}