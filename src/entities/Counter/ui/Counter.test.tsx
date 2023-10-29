import { componentRender } from 'shared/lib/componentRender/componentRender'
import { screen } from '@testing-library/react'
import { Counter } from './Counter'
import { userEvent } from '@storybook/testing-library'

describe('Counter', () => {
  test('show counter title', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } }
    })
    expect(screen.getByTestId('value-title')).toHaveTextContent('10')
  })

  test('increment', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } }
    })
    void userEvent.click(screen.getByTestId('increment-btn')).then(() => {
      expect(screen.getByTestId('value-title')).toHaveTextContent('11')
    })
  })

  test('decrement', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } }
    })
    void userEvent.click(screen.getByTestId('decrement-btn')).then(() => {
      expect(screen.getByTestId('value-title')).toHaveTextContent('9')
    })
  })
})
