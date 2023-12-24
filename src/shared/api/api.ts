import axios from 'axios'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage'

export const $api = axios.create({
  baseURL: __API__
})

$api.interceptors.request.use(function (config) {
  const token = localStorage.getItem(USER_LOCALSTORAGE_KEY)
  config.headers.authorization = token ?? ''
  return config
})
