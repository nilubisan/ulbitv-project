import { type StoryObj } from '@storybook/react'
import { Select } from './Select'

const meta = {
  title: 'shared/Select',
  component: Select,
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
  args: {
    label: 'Укажите значение',
    options: [
      { content: '1 пункт', value: '1' },
      { content: '2 пункт', value: '2' }
    ]
  }
}
