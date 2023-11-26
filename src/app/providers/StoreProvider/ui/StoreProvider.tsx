import { type ReactNode } from 'react'
import { Provider } from 'react-redux'
import { createReduxStore } from 'app/providers/StoreProvider/config/store'
import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema'
import { type DeepPartial, type ReducersMapObject } from '@reduxjs/toolkit'

interface StoreProviderProps {
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
  children?: ReactNode
  initialState?: DeepPartial<StateSchema>
}

export const StoreProvider = ({ children, initialState, asyncReducers }: StoreProviderProps) => {
  const store = createReduxStore(initialState as StateSchema, asyncReducers as ReducersMapObject<StateSchema>)

  return (
        <Provider store={store}>
            {children}
        </Provider>
  )
}
