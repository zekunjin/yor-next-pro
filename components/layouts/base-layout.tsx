import type { ReactNode } from 'react'
import Layout from './layout'

const BaseLayout = ({ children }: { children: ReactNode }) => (
  <Layout>
    <div className="w-screen h-screen">{children}</div>
  </Layout>
)

export default BaseLayout
