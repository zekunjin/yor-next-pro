import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { utilsModule } from '../common/modules/utils/utils.module'
import { cookie } from '../common/providers/cookie.provider'
import { CookieKey } from '../common/enums/cookie-key.enum'

const App = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
)

App.getInitialProps = async ({ ctx }: any) => {
  const { get: getCookie } = utilsModule.useExport(cookie)
  const token = getCookie(ctx.req, CookieKey.ACCESS_TOKEN)
  return { pageProps: { token } }
}

export default App
