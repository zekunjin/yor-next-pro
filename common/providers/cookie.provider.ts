import { parse, serialize } from 'cookie'
import { defineInterface, defineProvider } from '@yorjs/core'
import type { NextApiRequest, NextApiResponse } from 'next'
import type { CookieSerializeOptions } from 'cookie'

export const ICookie = defineInterface<{
  get: (req: NextApiRequest, key: string, def?: string) => any
  set: (res: NextApiResponse, key: string, value: any, expire?: number) => void
  remove: (key: string) => void
  clear: () => void
}>()

export const cookie = defineProvider().implements(ICookie).setup(() => ({
  get(req, key, def = '') {
    if (!req.headers.cookie)
      return def

    const item = parse(req.headers.cookie)?.[key]

    if (typeof item === 'string') {
      try {
        const { value } = JSON.parse(item)
        return value
      }
      catch (err) {
        return def
      }
    }

    return def
  },

  set(res, key, value, expire) {
    const options: CookieSerializeOptions = { path: '/', sameSite: false }
    const stringifyValue = JSON.stringify({ value })

    if (expire)
      options.expires = new Date(Date.now() + expire)

    res.setHeader('Set-Cookie', serialize(key, stringifyValue, options))
  },

  remove(_key: string) {
  },

  clear() {
  }
}))
