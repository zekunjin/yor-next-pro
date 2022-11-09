import { Box } from '@mui/material'
import DashboardIcon from '@mui/icons-material/Dashboard'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts'
import Header from 'components/header'
import Sidebar from 'components/sidebar'
import type { ReactNode } from 'react'
import Layout from './layout'

const BaseLayout = ({ children }: { children: ReactNode }) => {
  const menus = [
    { path: '/dashboard', label: 'Dashboard', icon: (color: string) => <DashboardIcon sx={{ color }} /> },
    { path: '/account', label: 'Account', icon: (color: string) => <ManageAccountsIcon sx={{ color }} /> }
  ]

  return (
    <Layout>
      <Box className="w-screen h-screen flex">
        <Box className="w-64 ">
          <Sidebar items={menus} />
        </Box>

        <Box className="flex flex-col flex-1 w-full h-full">
          <Header />
          <Box className="flex-1 w-full h-full overflow-auto bg-gray-100">{children}</Box>
        </Box>
      </Box>
    </Layout>
  )
}

export default BaseLayout
