import { type StateSchema } from 'app/providers/StoreProvider'
import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState'

export const getLoginIsLoading = (state: StateSchema) => getLoginState(state)?.isLoading ?? false
