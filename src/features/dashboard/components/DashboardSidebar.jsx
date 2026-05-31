import { Link, useLocation } from 'react-router-dom'
import { ROUTES } from '@/constants/routes'
import { cn } from '@/utils'

const NAV_ITEMS = [
  {
    label: 'Dashboard',
    to: ROUTES.DASHBOARD,
    isActive: (location) =>
      location.pathname === ROUTES.DASHBOARD && !location.search,
    icon: (
      <svg className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M4 20V10M12 20V4M20 20v-6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: 'Create QR',
    to: ROUTES.CREATE_QR,
    isActive: (location) =>
      location.pathname === ROUTES.CREATE_QR || location.pathname === ROUTES.INVOICE,
    icon: (
      <svg className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <rect height="7" rx="1" width="7" x="3" y="3" />
        <rect height="7" rx="1" width="7" x="14" y="3" />
        <rect height="7" rx="1" width="7" x="3" y="14" />
        <path d="M17 14h3v3h-3zM14 17h3v3h-3z" />
      </svg>
    ),
  },
  {
    label: 'Transactions',
    to: `${ROUTES.DASHBOARD}?tab=transactions`,
    isActive: (location) =>
      location.pathname === ROUTES.DASHBOARD && location.search === '?tab=transactions',
    icon: (
      <svg className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <rect height="14" rx="2" width="18" x="3" y="5" />
        <path d="M3 10h18" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: 'Withdrawals',
    to: `${ROUTES.DASHBOARD}?tab=withdrawals`,
    isActive: (location) =>
      location.pathname === ROUTES.DASHBOARD && location.search === '?tab=withdrawals',
    icon: (
      <svg className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v8M9.5 10.5 12 8l2.5 2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

const BOTTOM_ITEMS = [
  {
    label: 'Profile',
    to: `${ROUTES.DASHBOARD}?tab=profile`,
    icon: (
      <svg className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <circle cx="12" cy="8" r="3.5" />
        <path d="M5 20c1.5-3 4-4.5 7-4.5s5.5 1.5 7 4.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: 'Logout',
    to: ROUTES.LOGIN,
    icon: (
      <svg className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M10 7V5a2 2 0 0 1 2-2h5v18h-5a2 2 0 0 1-2-2v-2" />
        <path d="M3 12h10M14 9l3 3-3 3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

function NotificationButton({ className }) {
  return (
    <button
      aria-label="Notifications"
      className={cn(
        'relative flex size-10 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition-colors hover:bg-gray-50',
        className,
      )}
      type="button"
    >
      <svg className="size-[1.15rem]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M15 17H9l-1 2h8l-1-2z" strokeLinejoin="round" />
        <path d="M18 8a6 6 0 1 0-12 0c0 7-3 7-3 7h18s-3 0-3-7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="absolute -top-1 -right-1 flex size-[1.125rem] items-center justify-center rounded-full bg-red-500 text-[0.5625rem] font-bold text-white">
        46
      </span>
    </button>
  )
}

function SidebarNavLink({ children, icon, isActive, onNavigate, to }) {
  const location = useLocation()
  const active = isActive(location)

  return (
    <Link
      className={cn(
        'flex items-center gap-3 rounded-full px-4 py-3 text-[0.9375rem] font-semibold no-underline transition-colors duration-150',
        active
          ? 'bg-[#00d954] text-white'
          : 'bg-transparent text-gray-900 hover:bg-transparent',
      )}
      to={to}
      onClick={onNavigate}
    >
      {icon}
      {children}
    </Link>
  )
}

function SidebarContent({ onNavigate }) {
  return (
    <>
      <div className="mb-8 flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2.5">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#00d954] text-sm font-black text-white">
            T
          </span>
          <span className="truncate text-xl font-bold text-gray-900">Thunder</span>
        </div>
        <NotificationButton className="hidden lg:flex" />
      </div>

      <nav className="flex flex-1 flex-col gap-2">
        {NAV_ITEMS.map((item) => (
          <SidebarNavLink
            isActive={item.isActive}
            icon={item.icon}
            key={item.label}
            to={item.to}
            onNavigate={onNavigate}
          >
            {item.label}
          </SidebarNavLink>
        ))}
      </nav>

      <div className="mt-auto flex flex-col gap-2 border-t border-gray-200/60 pt-4">
        {BOTTOM_ITEMS.map((item) => (
          <Link
            className="flex items-center gap-3 rounded-full bg-transparent px-4 py-3 text-[0.9375rem] font-semibold text-gray-900 no-underline transition-colors duration-150 hover:bg-transparent"
            key={item.label}
            to={item.to}
            onClick={onNavigate}
          >
            {item.icon}
            {item.label}
          </Link>
        ))}
      </div>
    </>
  )
}

export function DashboardSidebar({ open, onClose }) {
  return (
    <>
      <div
        aria-hidden={!open}
        className={cn(
          'fixed inset-0 z-40 bg-black/40 transition-opacity duration-200 lg:hidden',
          open ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
        onClick={onClose}
      />

      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-50 flex h-dvh w-72 flex-col border-r border-gray-200 bg-white p-6 transition-transform duration-250 lg:w-64',
          open ? 'translate-x-0' : '-translate-x-full lg:translate-x-0',
        )}
      >
        <SidebarContent onNavigate={onClose} />
      </aside>
    </>
  )
}

export function DashboardTopBar({ onMenuClick }) {
  return (
    <div className="mb-6 flex items-center justify-between gap-4 lg:hidden">
      <button
        aria-label="Open menu"
        className="flex size-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-700"
        type="button"
        onClick={onMenuClick}
      >
        <svg className="size-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
        </svg>
      </button>

      <NotificationButton />
    </div>
  )
}
