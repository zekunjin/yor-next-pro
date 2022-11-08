import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { utilsModule } from 'common/modules/utils/utils.module'
import { cookie } from 'common/providers/cookie.provider'
import { CookieKey } from 'common/enums/cookie-key.enum'

export const WHITELIST = ['/user/sign-in']

export const middleware = (request: NextRequest) => {
  if (WHITELIST.includes(request.nextUrl.pathname))
    return NextResponse.next()

  const { server: { get: getCookie } } = utilsModule.useExport(cookie)
  const token = getCookie(request.headers.get('cookie') || '', CookieKey.ACCESS_TOKEN)

  if (token)
    return NextResponse.next()

  return NextResponse.redirect(new URL('/user/sign-in', request.url))
}

export const config = {
  matcher: '/((?!api|_next/static|favicon.ico).*)'
}
