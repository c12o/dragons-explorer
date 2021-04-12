import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import Input from '.'

describe('Input', () => {
  test('should render with label', () => {
    const label = 'Username'
    render(<Input placeholder={label} data-testid="test" />)
    expect(screen.getByText(label)).toBeInTheDocument()
  })

  test('should render input with password type and render show password button', () => {
    const placeholder = 'placeholder'
    render(
      <Input type="password" placeholder={placeholder} data-testid="test" />
    )
    expect(screen.getByTestId('test')).toHaveAttribute('type', 'password')
    expect(screen.getByRole('button', /mostrar senha/i)).toBeInTheDocument()
  })

  test('should change input type to text when show password button is clicked', async () => {
    const placeholder = 'placeholder'
    render(
      <Input type="password" placeholder={placeholder} data-testid="test" />
    )
    const showPasswordButton = screen.getByRole('button', /mostrar senha/i)
    fireEvent.click(showPasswordButton)
    expect(await screen.findByTestId('test')).toHaveAttribute('type', 'text')
  })

  test('should show inputed password correctly', async () => {
    const placeholder = 'placeholder'
    const inputedText = 'mhysa'
    render(
      <Input type="password" placeholder={placeholder} data-testid="test" />
    )
    const input = screen.getByTestId('test')
    const showPasswordButton = screen.getByRole('button', /mostrar senha/i)

    fireEvent.change(input, { target: { value: inputedText } })
    fireEvent.click(showPasswordButton)

    expect(await screen.findByTestId('test')).toHaveValue(inputedText)
  })
})
