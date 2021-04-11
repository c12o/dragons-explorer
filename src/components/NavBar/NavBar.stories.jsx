import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import NavBar from '.'

export default {
  title: 'NavBar',
  component: NavBar,
  argTypes: {
    onClick: {
      action: 'clicked'
    }
  }
}

export const Basic = (args) => (
  <BrowserRouter>
    <NavBar {...args} />
  </BrowserRouter>
)
