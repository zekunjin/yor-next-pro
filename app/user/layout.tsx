'use client'

import type { ReactNode } from 'react'
import { Box } from '@mui/material'
import Image from 'next/image'
import illustrationDashboard from '../../assets/illustration_dashboard.png'

const Layout = ({ children }: { children: ReactNode }) => (
  <Box className="w-screen h-screen flex flex-col items-center justify-center overflow-hidden">
    <Box className="w-screen h-screen flex">
      <Box className="flex flex-col items-center justify-center flex-1 bg-gray-100">
        <Box className="text-3xl font-bold mb-12">Hi, Welcome back</Box>
        <Image src={illustrationDashboard} priority={true} alt="illustration dashboard" />
      </Box>

      {children}
    </Box>
  </Box>
)

export default Layout
