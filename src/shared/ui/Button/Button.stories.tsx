import type { StoryObj } from '@storybook/react'
import 'app/styles/index.scss'
import { Button, ThemeButton } from './Button'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta = {
  title: 'shared/Button',
  component: Button,
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
    children: 'Text'
  }
}

Primary.decorators = [ThemeDecorator(Theme.DARK)]

export const Clear: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.CLEAR
  }
}

Clear.decorators = [ThemeDecorator(Theme.LIGHT)]

export const Outlined: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.OUTLINE
  }
}

Outlined.decorators = [ThemeDecorator(Theme.DARK)]
