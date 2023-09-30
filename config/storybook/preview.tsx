import type { Preview } from '@storybook/react'
import StorybookWrapper from 'app/StorybookWrapper'
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import {RouterDecorator} from "shared/config/storybook/RouterDecorator/RouterDecorator";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  },
  decorators: [
    StoryFn => {
      return (
          <ThemeProvider>
            <StorybookWrapper>
              <StoryFn/>
            </StorybookWrapper>
          </ThemeProvider>
      )
    },
    ThemeDecorator(Theme.LIGHT),
    RouterDecorator
  ]
}

export default preview
