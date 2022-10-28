import { defineProvider } from '@yorjs/core'
import { IState } from '../../providers/state.provider'
import { IUserController, IUserService } from './user.interface'

export const userController = defineProvider().implements(IUserController).inject(IState, IUserService).setup(({ useRef }, userService) => {
  const username = useRef('')
  const password = useRef('')
  const token = useRef('')

  const signIn = async () => {
    const { token: t } = await userService.signIn(username.value, password.value)
    token.value = t
  }

  return { username, password, token, signIn }
})
