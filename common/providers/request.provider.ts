import { defineInterface, defineProvider } from '@yorjs/core'
import type { AxiosInstance } from 'axios'
import axios from 'axios'

export const IRequest = defineInterface<AxiosInstance>()

export const request = defineProvider().implements(IRequest).setup(() => {
  const axiosInstance = axios.create({ baseURL: '/' })
  return axiosInstance
})
