import type { NextApiRequest, NextApiResponse } from 'next'
import { CookieKey } from 'common/enums/cookie-key.enum'
import { userModule } from 'common/modules/user/user.module'
import { userService } from 'common/modules/user/user.service'
import { utilsModule } from 'common/modules/utils/utils.module'
import { cookie } from 'common/providers/cookie.provider'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { server: { set: setCookie } } = utilsModule.useExport(cookie)
  const { serverSignIn } = userModule.useExport(userService)
  const { username, password } = await req.body
  const { token } = await serverSignIn(username, password)
  setCookie(res, CookieKey.ACCESS_TOKEN, token)
  res.end()
}
