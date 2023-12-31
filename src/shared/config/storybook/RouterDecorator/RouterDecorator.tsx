import 'app/styles/index.scss'
import { type StoryFn } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

export const RouterDecorator = (Story: StoryFn) => (
    <BrowserRouter>
        <Story />
    </BrowserRouter>
)
