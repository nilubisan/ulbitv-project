import { type StoryObj } from '@storybook/react'
import { CurrencySelect } from './CurrencySelect'

const meta = {
  title: 'entities/CurrencySelect',
  component: CurrencySelect,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  args: {
    to: '/'
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {}
}
