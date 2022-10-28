import type { ReactNode } from 'react'
import { Box } from '@mui/material'
import Image from 'next/image'
import illustrationDashboard from '../assets/illustration_dashboard.png'
import Layout from './layout'

const UserLayout = ({ children }: { children: ReactNode }) => (
  <Layout>
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <Box className="w-screen h-screen flex">
        <Box className="flex flex-col items-center justify-center flex-1 bg-gray-100">
          <Box className="text-3xl font-bold mb-12">Hi, Welcome back</Box>
          <Image src={illustrationDashboard} alt="illustration dashboard" />
        </Box>

        <Box sx={{ width: '480px' }} className="h-full">
          {children}
        </Box>
      </Box>
    </div>
  </Layout>
)

export default UserLayout
