import type { StoryObj } from '@storybook/react'
import 'app/styles/index.scss'
import { LoginForm } from './LoginForm'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
  title: 'features/LoginForm',
  component: LoginForm,
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
  }
}

Primary.decorators = [StoreDecorator({
  loginForm: {
    username: 'admin',
    password: '123'
  }
})]

export const WithError: Story = {
  args: {
  }
}

WithError.decorators = [StoreDecorator({
  loginForm: {
    username: 'admin',
    password: '123',
    error: 'Error'
  }
})]

export const WithLoading: Story = {
  args: {
  }
}

WithLoading.decorators = [StoreDecorator({
  loginForm: {
    isLoading: true
  }
})]
