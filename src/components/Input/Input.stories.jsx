import React from 'react'
import Input from '.'

export default {
  title: 'Input',
  component: Input,
  argTypes: {
    placeholder: {
      description: 'Conteúdo a ser exibido no campo'
    },
    type: {
      type: 'Tipo de input, pode ser `text` ou `password`',
      control: { type: 'select', options: ['text', 'password'] }
    }
  }
}

export const Basic = (args) => <Input {...args} />

Basic.args = {
  placeholder: 'Usuário',
  id: 'test-input',
  required: true
}

export const Password = (args) => <Input {...args} />

Password.args = {
  placeholder: 'Senha',
  id: 'test-input',
  type: 'password',
  required: true
}
