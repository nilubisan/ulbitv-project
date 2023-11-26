import { type StateSchema } from 'app/providers/StoreProvider'
import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState'

export const getLoginUsername = (state: StateSchema) => getLoginState(state)?.username ?? ''
