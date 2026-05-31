export const ROUTES = {
  HOME: '/',
  REGISTER: '/register',
  LOGIN: '/login',
  DASHBOARD: '/dashboard',
  CREATE_QR: '/dashboard/create-qr',
  LINK_ANALYTICS: '/dashboard/analytics/:slug',
  INVOICE: '/dashboard/invoice',
}

export function linkAnalyticsPath(slug) {
  return `/dashboard/analytics/${encodeURIComponent(slug)}`
}

export function invoicePath({ amount, description }) {
  const params = new URLSearchParams()
  params.set('amount', String(amount))

  if (description?.trim()) {
    params.set('description', description.trim())
  }

  return `${ROUTES.INVOICE}?${params.toString()}`
}
