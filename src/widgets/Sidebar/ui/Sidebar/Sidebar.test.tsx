import { Sidebar } from 'widgets/Sidebar'
import { fireEvent, render, screen } from '@testing-library/react'

describe('Sidebar', () => {
  test('show sidebar', () => {
    render(<Sidebar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  test('toggle sidebar', () => {
    render(<Sidebar />)
    const toggleButton = screen.getByTestId('sidebar-toggle')
    expect(toggleButton).toBeInTheDocument()
    fireEvent.click(toggleButton)
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  })
})
