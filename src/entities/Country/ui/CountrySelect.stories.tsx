import { type StoryObj } from '@storybook/react'
import { CountrySelect } from './CountrySelect'

const meta = {
  title: 'entities/CountrySelect',
  component: CountrySelect,
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
