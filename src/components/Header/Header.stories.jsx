import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from '.'

export default {
  title: 'Header',
  component: Header
}

export const Basic = (args) => (
  <BrowserRouter>
    <Header {...args} />
  </BrowserRouter>
)
