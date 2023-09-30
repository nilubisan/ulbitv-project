import {render, screen} from '@testing-library/react'
import {Button, ThemeButton} from 'shared/ui/Button/Button'

describe('Button', () => {
  test('Button test', () => {
    render(<Button>Test</Button>)
    expect(screen.getByText('Test')).toBeInTheDocument()
  })

  test('Button theme test', () => {
    render(<Button theme={ThemeButton.CLEAR}>Test</Button>)
    expect(screen.getByText('Test')).toHaveClass('clear')
  })
})
