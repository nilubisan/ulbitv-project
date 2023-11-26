import { type StateSchema } from 'app/providers/StoreProvider'
import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState'

export const getLoginError = (state: StateSchema) => getLoginState(state)?.error ?? ''
