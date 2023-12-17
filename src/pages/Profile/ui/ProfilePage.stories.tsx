import Profile from './ProfilePage'
import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import {StoreDecorator} from "shared/config/storybook/StoreDecorator/StoreDecorator";

const meta = {
  title: 'pages/Profile',
  component: Profile,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Profile>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {}
}

Light.decorators = [StoreDecorator({})]

export const Dark: Story = {
  args: {}
}

Dark.decorators = [ThemeDecorator(Theme.DARK)]
