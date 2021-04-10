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
    onClick: {
      type: 'Função a ser executada quando o botão é clicado',
      action: 'Clicked'
    }
  }
}

export const Basic = (args) => <Button {...args} />

Basic.args = {
  children: 'Confirmar'
}
