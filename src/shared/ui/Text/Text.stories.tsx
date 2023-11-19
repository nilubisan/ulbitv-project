import type { StoryObj } from '@storybook/react'
import 'app/styles/index.scss'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta = {
  title: 'shared/Text',
  component: Text,
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
    title: 'Lorem ipsum title',
    text: 'Description'
  }
}

export const Error: Story = {
  args: {
    title: 'Lorem ipsum title',
    text: 'Description',
    theme: TextTheme.ERROR
  }
}

export const OnlyTitle: Story = {
  args: {
    title: 'Lorem ipsum title'
  }
}

export const OnlyText: Story = {
  args: {
    text: 'Description'
  }
}

export const PrimaryDark: Story = {
  args: {
    title: 'Lorem ipsum title',
    text: 'Description'
  }
}

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OnlyTitleDark: Story = {
  args: {
    title: 'Lorem ipsum title'
  }
}

OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OnlyTextDark: Story = {
  args: {
    text: 'Description'
  }
}

OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)]
