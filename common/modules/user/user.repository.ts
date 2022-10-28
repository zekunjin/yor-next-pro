import { defineProvider } from '@yorjs/core'
import { IUserRepository } from './user.interface'

export const userRepository = defineProvider().implements(IUserRepository).setup(() => ({
  signIn(_data) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ token: 'TOKEN' })
      }, 3 * 1000)
    })
  }
}))
