import type { NextApiRequest, NextApiResponse } from 'next'
import { CookieKey } from '../../common/enums/cookie-key.enum'
import { utilsModule } from '../../common/modules/utils/utils.module'
import { cookie } from '../../common/providers/cookie.provider'

const fakeSignIn = (_u: string, _p: string): Promise<{ data: { token: string } }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: { token: 'TOKEN' } })
    }, 3000)
  })
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { server: { set: setCookie } } = utilsModule.useExport(cookie)
  const { username, password } = await req.body
  const { data: { token } } = await fakeSignIn(username, password)
  setCookie(res, CookieKey.ACCESS_TOKEN, token)
  res.status(200).json({})
}
