import type { ReactNode } from 'react'
import Layout from './layout'

const UserLayout = ({ children }: { children: ReactNode }) => (
  <Layout>
    <div className='w-screen h-screen flex items-center justify-center'>
      {children}
    </div>
  </Layout>
)

export default UserLayout
