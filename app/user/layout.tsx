'use client'

import type { ReactNode } from 'react'
import Image from 'next/image'
import illustrationDashboard from './illustration_dashboard.png'

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="w-screen h-screen flex flex-col items-center justify-center overflow-hidden">
    <div className="w-screen h-screen flex">
      <div className="flex flex-col items-center justify-center flex-1 bg-gray-100">
        <div className="text-3xl font-bold mb-12">Hi, Welcome back</div>
        <Image src={illustrationDashboard} priority={true} width={500} height={500} alt="illustration dashboard" />
      </div>

      {children}
    </div>
  </div>
)

export default Layout
