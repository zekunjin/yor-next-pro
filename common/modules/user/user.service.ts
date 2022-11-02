import { defineProvider } from '@yorjs/core'
import { IUserRepository, IUserService } from './user.interface'

export const userService = defineProvider().implements(IUserService).inject(IUserRepository).setup(repo => ({
  async clientSignIn(username, password) {
    await repo.clientSignIn({ username, password })
  },

  async serverSignIn(username, password) {
    const { data } = await repo.serverSignIn({ username, password })
    return data
  }
}))
