import { defineInterface } from '@yorjs/core'
import type { Ref } from '../../providers/state.provider'
import type { AccessTokenDto, SignInDto } from './user.dto'

export const IUserController = defineInterface<{
  username: Ref<string>
  password: Ref<string>
  token: Ref<string>
  signIn: () => Promise<void>
}>()

export const IUserService = defineInterface<{
  signIn: (username: string, password: string) => Promise<AccessTokenDto>
}>()

export const IUserRepository = defineInterface<{
  signIn: (data: SignInDto) => Promise<AccessTokenDto>
}>()
