'use client'

import type { ReactNode } from 'react'

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="w-screen h-screen">
    {children}
  </div>
)

export default Layout
