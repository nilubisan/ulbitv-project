import type { StoryObj } from '@storybook/react'
import 'app/styles/index.scss'
import { Input } from 'shared/ui/Input/Input'

const meta = {
  title: 'shared/Input',
  component: Input,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    placeholder: 'Test placeholder',
    value: 'Test value'
  }
}
