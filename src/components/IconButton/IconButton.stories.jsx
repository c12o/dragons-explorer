import React from 'react'
import IconButton from '.'
import { LightMode } from 'assets/icons'

export default {
  title: 'IconButton',
  component: IconButton,
  argTypes: {
    onClick: {
      action: 'clicked'
    }
  }
}

export const Basic = (args) => <IconButton {...args} />

Basic.args = {
  icon: <LightMode size="20" />,
  onClick: () => {},
  tooltipMessage: 'Alterar para tema claro'
}
