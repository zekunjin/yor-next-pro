import { defineInterface, defineProvider } from '@yorjs/core'

export const ICookie = defineInterface<{}>()

export const cookie = defineProvider().implements(ICookie).setup(() => ({}))
