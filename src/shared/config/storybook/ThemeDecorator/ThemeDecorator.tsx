import 'app/styles/index.scss'
import { type StoryFn } from '@storybook/react'
import { type Theme } from 'app/providers/ThemeProvider'

export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) => (
    <div className={`app ${theme}`}>
        <StoryComponent />
    </div>

)
