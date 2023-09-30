import { type Meta, type StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'

const meta = {
  title: 'widgets/ThemeSwitcher',
  component: ThemeSwitcher,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} satisfies Meta<typeof ThemeSwitcher>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {}
}

export const Dark: Story = {
  args: {}
}

Dark.decorators = [ThemeDecorator(Theme.DARK)]
