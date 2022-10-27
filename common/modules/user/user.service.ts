import { defineProvider } from '@yorjs/core'
import { IUserService } from './user.interface'

export const userService = defineProvider().implements(IUserService).build(() => ({
  signIn(_username, _password) {
    return Promise.resolve({ token: 'TOKEN' })
  }
}))