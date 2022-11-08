import { Box } from '@mui/material'
import SideBar from 'components/side-bar'
import type { ReactNode } from 'react'
import Layout from './layout'

const BaseLayout = ({ children }: { children: ReactNode }) => {
  const menus = [{ path: '/dashboard', label: 'Dashboard' }]

  return (
    <Layout>
      <Box className="w-screen h-screen flex">
        <Box className="w-64">
          <SideBar items={menus} />
        </Box>

        <Box className="flex-1 w-full h-full overflow-auto bg-gray-100">{children}</Box>
      </Box>
    </Layout>
  )
}

export default BaseLayout
