import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import PrivateRoutes from './Private.routes'
import PublicRoutes from './Public.routes'
import { useSession } from 'context'

export default function Router() {
  const { user } = useSession()
  return (
    <BrowserRouter>
      <Switch>{user ? <PrivateRoutes /> : <PublicRoutes />}</Switch>
    </BrowserRouter>
  )
}
