import { type StateSchema } from 'app/providers/StoreProvider'
import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState'

export const getLoginPassword = (state: StateSchema) => getLoginState(state)?.password ?? ''
