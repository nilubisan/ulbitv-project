import { type Meta, type StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'

const meta = {
  title: 'shared/AppLink',
  component: AppLink,
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
} satisfies Meta<typeof AppLink>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY
  }
}

export const Secondary: Story = {
  args: {
    children: 'Text',
    theme: AppLinkTheme.SECONDARY
  }
}
