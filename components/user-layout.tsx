import Layout from './layout'
import type { ReactNode } from 'react'

const UserLayout = ({ children }: { children: ReactNode }) => (
  <Layout>
    <div className='w-screen h-screen flex items-center justify-center'>
      {children}
    </div>
  </Layout>
)

export default UserLayout