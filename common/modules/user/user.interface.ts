import { defineInterface } from '@yorjs/core'
import type { Ref } from '../../providers/state.provider'
import type { AccessTokenDto, SignInDto } from './user.dto'

export const IUserController = defineInterface<{
  username: Ref<string>
  password: Ref<string>
  signIn: () => Promise<void>
}>()

export const IUserService = defineInterface<{
  clientSignIn: (username: string, password: string) => Promise<void>
  serverSignIn: (username: string, password: string) => Promise<AccessTokenDto>
}>()

export const IUserRepository = defineInterface<{
  clientSignIn: (data: SignInDto) => Promise<void>
  serverSignIn: (data: SignInDto) => Promise<{ data: AccessTokenDto }>
}>()
