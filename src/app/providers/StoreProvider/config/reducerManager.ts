import { type AnyAction, combineReducers, type Reducer, type ReducersMapObject } from '@reduxjs/toolkit'
import { type StateSchema, type StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema'

export function createReducerManager (initialReducers: ReducersMapObject<StateSchema>) {
  const reducers = { ...initialReducers }

  let combinedReducer = combineReducers(reducers)

  let keysToRemove: StateSchemaKey[] = []

  return {
    getReducerMap: () => reducers,

    reduce: (state: StateSchema, action: AnyAction) => {
      console.log('reduce')
      if (keysToRemove.length > 0) {
        state = { ...state }
        keysToRemove.forEach((key) => {
          delete state[key]
        })

        keysToRemove = []
      }
      return combinedReducer(state, action)
    },

    add: (key: StateSchemaKey, reducer: Reducer) => {
      if (!key || reducers[key]) {
        return
      }

      reducers[key] = reducer

      combinedReducer = combineReducers(reducers)
      console.log('add')
    },

    remove: (key: StateSchemaKey) => {
      if (!key || !reducers[key]) {
        return
      }

      delete reducers[key]

      keysToRemove.push(key)

      combinedReducer = combineReducers(reducers)
    }
  }
}