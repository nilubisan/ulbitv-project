import { type StateSchema } from 'app/providers/StoreProvider'

const profileSelector = (state: StateSchema) => state.profile
export const getProfileData = (state: StateSchema) => profileSelector(state)?.data
export const getProfileIsLoading = (state: StateSchema) => profileSelector(state)?.isLoading
export const getProfileError = (state: StateSchema) => profileSelector(state)?.error

