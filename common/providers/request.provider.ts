import { defineInterface, defineProvider } from '@yorjs/core'
import type { AxiosInstance } from 'axios'
import axios from 'axios'
import { CookieKey } from '../enums/cookie-key.enum'
import { RequestHeader } from '../enums/request-header.enum'
import { ICookie } from './cookie.provider'

export const IRequest = defineInterface<AxiosInstance>()

export const request = defineProvider().implements(IRequest).inject(ICookie).setup(({ client: { get: getCookie } }) => {
  const axiosInstance = axios.create({ baseURL: '/' })

  axiosInstance.interceptors.request.use((config) => {
    if (config?.headers)
      config.headers[RequestHeader.AUTHORIZATION] = getCookie(CookieKey.ACCESS_TOKEN)

    return config
  })

  return axiosInstance
})
