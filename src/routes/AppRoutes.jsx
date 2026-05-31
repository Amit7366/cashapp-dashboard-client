import { Route, Routes } from 'react-router-dom'
import { AuthLayout } from '@/components/layout/AuthLayout'
import { DashboardLayout } from '@/components/layout/DashboardLayout'
import { MainLayout } from '@/components/layout/MainLayout'
import { LoginPage } from '@/features/auth/pages/LoginPage'
import { RegisterPage } from '@/features/auth/pages/RegisterPage'
import { CreateQrPage } from '@/features/dashboard/pages/CreateQrPage'
import { DashboardPage } from '@/features/dashboard/pages/DashboardPage'
import { InvoicePage } from '@/features/dashboard/pages/InvoicePage'
import { LinkAnalyticsPage } from '@/features/dashboard/pages/LinkAnalyticsPage'
import { HomePage } from '@/features/home/pages/HomePage'
import { NotFoundPage } from '@/features/not-found/pages/NotFoundPage'
import { ROUTES } from '@/constants/routes'

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route element={<LoginPage />} path={ROUTES.LOGIN} />
        <Route element={<RegisterPage />} path={ROUTES.REGISTER} />
      </Route>

      <Route element={<DashboardLayout />}>
        <Route element={<DashboardPage />} path={ROUTES.DASHBOARD} />
        <Route element={<CreateQrPage />} path={ROUTES.CREATE_QR} />
        <Route element={<InvoicePage />} path={ROUTES.INVOICE} />
        <Route element={<LinkAnalyticsPage />} path={ROUTES.LINK_ANALYTICS} />
      </Route>

      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route element={<NotFoundPage />} path="*" />
      </Route>
    </Routes>
  )
}
