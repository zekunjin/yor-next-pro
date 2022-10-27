import { defineProvider } from '@yorjs/core'
import { IProxy } from '../providers/proxy.provider'
import { IUserController } from './user.interface'

export const userController = defineProvider().implements(IUserController).inject(IProxy).build((proxy) => {
  const username = proxy.ref('')
  const password = proxy.ref('')

  const signIn = () => {
    const params = { username: username.value, password: password.value }
    console.log(params)
  }

  return { username, password, signIn }
})
