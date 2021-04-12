import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import Button from '.'

describe('Button', () => {
  test('should have render with text', () => {
    const text = 'Confirm'
    render(<Button data-testid="test">{text}</Button>)
    expect(screen.getByTestId('test')).toHaveTextContent(text)
  })
  test('should run the action passed by prop', () => {
    const text = 'Confirm'
    const onClick = jest.fn()
    render(
      <Button onClick={onClick} data-testid="test">
        {text}
      </Button>
    )
    const button = screen.getByTestId('test')
    fireEvent.click(button)

    expect(onClick).toHaveBeenCalledTimes(1)
  })
  test('should have the outline aspect when that is passed by props', () => {
    const text = 'Confirm'
    render(
      <Button variant="outlined" data-testid="test">
        {text}
      </Button>
    )

    const button = screen.getByTestId('test')
    expect(button).toHaveClass('outlined')
  })
})
