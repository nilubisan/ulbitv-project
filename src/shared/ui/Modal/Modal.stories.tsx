import type { StoryObj } from '@storybook/react'
import 'app/styles/index.scss'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Modal } from 'shared/ui/Modal/Modal'

const meta = {
  title: 'shared/Modal',
  component: Modal,
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
    isOpen: true,
    children: 'semiprecious semiprecious semiprecious semiprecious loremipsum loremipsum loremipsum loremipsum'
  }
}

export const Dark: Story = {
  args: {
    isOpen: true,
    children: 'semiprecious semiprecious semiprecious semiprecious loremipsum loremipsum loremipsum loremipsum'
  }
}

Dark.decorators = [ThemeDecorator(Theme.DARK)]
