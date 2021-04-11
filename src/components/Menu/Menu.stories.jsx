import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Menu from '.'

export default {
  title: 'Menu',
  component: Menu,
  argTypes: {
    onClick: {
      action: 'clicked'
    }
  }
}

export const Basic = (args) => (
  <BrowserRouter>
    <Menu {...args} />
  </BrowserRouter>
)
