import React from 'react'
import Button from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      description: 'Conteúdo a ser exibido no botão'
    },
    type: {
      type: 'Tipo de botão, pode ser `button` ou `submit`',
      control: { type: 'select', options: ['button', 'submit'] }
    },
    variant: {
      type: 'Estilo do botão, pode ser `solid` ou `outlined`',
      control: { type: 'select', options: ['solid', 'outlined'] }
    },
    onClick: {
      type: 'Função a ser executada quando o botão é clicado',
      action: 'Clicked'
    }
  }
}

export const Solid = (args) => <Button {...args} />

Solid.args = {
  children: 'Confirmar'
}

export const Outlined = (args) => <Button {...args} />

Outlined.args = {
  children: 'Confirmar',
  variant: 'outlined'
}
