import { Outlet } from 'react-router-dom'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'

export function MainLayout() {
  return (
    <div className="flex min-h-dvh flex-col bg-black">
      <Header />
      <main className="w-full flex-1 pt-[4.5rem] md:pt-[4.75rem] lg:pt-[5.25rem]">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
