import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import {
  DashboardSidebar,
  DashboardTopBar,
} from '@/features/dashboard/components/DashboardSidebar'

export function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="h-dvh overflow-hidden bg-[#eef0f3]">
      <DashboardSidebar onClose={() => setSidebarOpen(false)} open={sidebarOpen} />

      <main className="h-dvh overflow-y-auto lg:ml-64">
        <div className="px-5 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10">
          <DashboardTopBar onMenuClick={() => setSidebarOpen(true)} />
          <Outlet />
        </div>
      </main>
    </div>
  )
}
