import { defineProvider } from '@yorjs/core'
import { IUserRepository, IUserService } from './user.interface'
import { userRepository } from './user.repository'

export const userService = defineProvider().implements(IUserService).inject(IUserRepository).setup(repo => ({
  async signIn(username, password) {
    const { token } = await repo.signIn({ username, password })
    return { token }
  }
})).dependencies(userRepository)
