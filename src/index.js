import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { SessionProvider } from 'context'
import 'styles/global.scss'

ReactDOM.render(
  <SessionProvider>
    <App />
  </SessionProvider>,
  document.getElementById('root')
)
