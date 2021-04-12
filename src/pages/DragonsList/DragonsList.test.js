import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { fireEvent, render, screen, act } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import DragonsList from '.'

const renderWithRouter = (children) =>
  render(<BrowserRouter>{children}</BrowserRouter>)

describe('Button', () => {
  test('should have render the list with card aspect', () => {
    renderWithRouter(<DragonsList />)
    expect(screen.getByRole('list')).toHaveClass('column')
  })

  test('should have render the list with item aspect', async () => {
    renderWithRouter(<DragonsList />)

    const input = screen.getAllByRole('checkbox')[1]

    act(() => {
      fireEvent.click(input)
    })

    expect(await screen.findByRole('list')).toHaveClass('row')
  })
})
