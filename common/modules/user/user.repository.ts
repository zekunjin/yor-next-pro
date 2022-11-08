import { defineProvider } from '@yorjs/core'
import { IRequest } from '../../providers/request.provider'
import { IUserRepository } from './user.interface'

export const userRepository = defineProvider().implements(IUserRepository).inject(IRequest).setup(_req => ({
  async clientSignIn(data) {
    const parse = (r: Record<string, string>): string => {
      const arr = []
      for (const key in r)
        arr.push(`${key}=${r[key]}`)

      return arr.join('&')
    }

    const res = await fetch(`/api/sessions?${parse(data)}`)

    if (!res.ok)
      throw new Error(res.statusText)
  },

  serverSignIn(_data) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: { token: 'TOKEN' } })
      }, 3000)
    })
  }
}))
