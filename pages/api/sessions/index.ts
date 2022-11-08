import type { NextApiRequest, NextApiResponse } from 'next'
import { CookieKey } from 'common/enums/cookie-key.enum'
import { userModule } from 'common/modules/user/user.module'
import { userService } from 'common/modules/user/user.service'
import { utilsModule } from 'common/modules/utils/utils.module'
import { cookie } from 'common/providers/cookie.provider'
import { RequestMethod } from 'common/enums/request-method.enum'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== RequestMethod.GET) {
    res.status(405).end()
    return
  }

  const { server: { set: setCookie } } = utilsModule.useExport(cookie)
  const { serverSignIn } = userModule.useExport(userService)
  const { username, password } = await req.body

  try {
    const { token } = await serverSignIn(username, password)
    setCookie(res, CookieKey.ACCESS_TOKEN, token)
    res.end()
  }
  catch {
    res.status(500).end()
  }
}
