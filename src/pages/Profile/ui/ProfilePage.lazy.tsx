import { lazy } from 'react'

const ProfilePageLazy = lazy(async () => await import('./ProfilePage'))

export default ProfilePageLazy
