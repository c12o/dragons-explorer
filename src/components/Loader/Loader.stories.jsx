import React from 'react'
import Loader from '.'

export default {
  title: 'Loader',
  component: Loader,
  argTypes: {
    primaryColor: {
      type: 'string'
    }
  }
}

export const Basic = () => <Loader primaryColor />
