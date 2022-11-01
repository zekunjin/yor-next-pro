import { parse, serialize } from 'cookie'
import { defineInterface, defineProvider } from '@yorjs/core'
import type { NextApiRequest, NextApiResponse } from 'next'
import type { CookieSerializeOptions } from 'cookie'
import { RequestHeader } from '../enums/request-header.enum'

export const ICookie = defineInterface<{
  server: {
    get: (req: NextApiRequest, key: string, def?: string) => any
    set: (res: NextApiResponse, key: string, value: any, expire?: number) => void
  }
  client: {
    get: (key: string, def?: string) => any
  }
}>()

export const cookie = defineProvider().implements(ICookie).setup(() => {
  const getCookie = (str: string, key: string, def = ''): string => {
    const item = parse(str)?.[key]

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
  }

  return {
    server: {
      get(req, key, def = '') {
        if (!req.headers?.cookie)
          return def

        return getCookie(req.headers.cookie, key, def)
      },

      set(res, key, value, expire) {
        const options: CookieSerializeOptions = { path: '/', sameSite: false }
        const stringifyValue = JSON.stringify({ value })

        if (expire)
          options.expires = new Date(Date.now() + expire)

        res.setHeader(RequestHeader.SET_COOKIE, serialize(key, stringifyValue, options))
      }
    },
    client: {
      get(key, def = '') {
        if (!document || !document.cookie)
          return def

        return getCookie(document.cookie, key, def)
      }
    }
  }
})
