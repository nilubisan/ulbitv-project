import { lazy } from 'react'

const ProfilePageAsync = lazy(async () => await new Promise((resolve) => {
  setTimeout(() => {
    resolve(import('./ProfilePage'))
  }, 1500)
}))

export default ProfilePageAsync
