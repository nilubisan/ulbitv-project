import { type StoryObj } from '@storybook/react'
import { Avatar } from './Avatar'
import picture from './picture.png'

const meta = {
  title: 'shared/Avatar',
  component: Avatar,
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
    size: 150,
    alt: 'img',
    src: picture
  }
}

export const Small: Story = {
    args: {
      size: 50,
      alt: 'img',
      src: picture
    }
  }
