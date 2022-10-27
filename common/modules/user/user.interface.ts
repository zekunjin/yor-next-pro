import { defineInterface } from '@yorjs/core'
import type { Ref } from '../../providers/proxy.provider'
import type { AccessTokenDto } from './user.dto'

export const IUserController = defineInterface<{
  username: Ref<string>
  password: Ref<string>
  token: Ref<string>
  signIn: () => Promise<void>
}>()

export const IUserService = defineInterface<{
  signIn: (username: string, password: string) => Promise<AccessTokenDto>
}>()
