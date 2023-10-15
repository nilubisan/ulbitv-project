import { Sidebar } from 'widgets/Sidebar'
import { fireEvent, screen } from '@testing-library/react'
import { componentRender } from 'shared/lib/componentRender/componentRender'

describe('Sidebar', () => {
  test('show sidebar', () => {
    componentRender(<Sidebar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  test('toggle sidebar', () => {
    componentRender(<Sidebar />)
    const toggleButton = screen.getByTestId('sidebar-toggle')
    expect(toggleButton).toBeInTheDocument()
    fireEvent.click(toggleButton)
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  })
})
