import { type ReactNode } from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { type DeepPartial } from '@reduxjs/toolkit'

export interface componentRenderOptions {
  route?: string
  initialState?: DeepPartial<StateSchema>
}

export function componentRender (component: ReactNode, options: componentRenderOptions = {}) {
  const { route = '/', initialState } = options
  return render(
      <StoreProvider initialState={initialState}>
          <MemoryRouter initialEntries={[route]}>
              {/* <I18nextProvider i18n={i18n}> */}
              {component}
              {/* </I18nextProvider> */}
          </MemoryRouter>
      </StoreProvider>
  )
}
