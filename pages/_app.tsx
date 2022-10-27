import { RecoilRoot } from 'recoil'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

const App = ({ Component, pageProps }: AppProps) => (
  <RecoilRoot>
    <Component {...pageProps} />
  </RecoilRoot>
)

export default App
