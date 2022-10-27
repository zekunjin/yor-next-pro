import { defineInterface } from '@yorjs/core'
import type { Ref } from '../providers/proxy.provider'

export const IUserController = defineInterface<{
  username: Ref<string>
  password: Ref<string>
  signIn: () => void
}>()
