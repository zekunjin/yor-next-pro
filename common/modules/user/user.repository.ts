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

    await fetch(`/api/sign-in?${parse(data)}`)
  },

  serverSignIn(_data) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: { token: 'TOKEN' } })
      }, 3000)
    })
  }
}))
