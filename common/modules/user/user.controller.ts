import { defineProvider } from '@yorjs/core'
import { IProxy } from '../../providers/proxy.provider'
import { IUserController, IUserService } from './user.interface'

export const userController = defineProvider().implements(IUserController).inject(IProxy, IUserService).build((proxy, userService) => {
  const username = proxy.ref('')
  const password = proxy.ref('')
  const token = proxy.ref('')

  const signIn = async () => {
    const { token: t } = await userService.signIn(username.value, password.value)
    token.value = t
  }

  return { username, password, token, signIn }
})
