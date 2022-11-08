import { defineProvider } from '@yorjs/core'
import { IState } from '../../providers/state.provider'
import { IUserController, IUserService } from './user.interface'

export const userController = defineProvider().implements(IUserController).inject(IState, IUserService).setup(({ useRef }, userService) => {
  const username = useRef('')
  const password = useRef('')

  const signIn = async () => {
    return userService.clientSignIn(username.value, password.value)
  }

  return { username, password, signIn }
})
