import { defineInterface, defineProvider } from '@yorjs/core'
import type { AxiosInstance } from 'axios'
import { axiosInstance } from '../../lib/axios'

export const IRequest = defineInterface<AxiosInstance>()

export const request = defineProvider().implements(IRequest).setup(() => {
  return axiosInstance
})
