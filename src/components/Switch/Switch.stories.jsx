import React from 'react'
import Switch from '.'

export default {
  title: 'Switch',
  component: Switch
}

export const Basic = () => <Switch />

Basic.args = {
  placeholder: 'Usuário',
  id: 'test-input',
  required: true
}
