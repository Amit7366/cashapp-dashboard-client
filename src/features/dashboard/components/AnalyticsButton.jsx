import { useNavigate } from 'react-router-dom'
import { linkAnalyticsPath } from '@/constants/routes'

function ChartIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path d="M6 18V10M12 18V6M18 18v-4" strokeLinecap="round" />
    </svg>
  )
}

export function AnalyticsButton({ slug }) {
  const navigate = useNavigate()

  return (
    <button
      aria-label="View analytics"
      className="group flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-gray-900 text-white transition-all duration-200 hover:w-[9.75rem] hover:bg-gray-800"
      title="Analytics"
      type="button"
      onClick={() => navigate(linkAnalyticsPath(slug))}
    >
      <span className="inline-flex items-center justify-center gap-0 group-hover:gap-2">
        <ChartIcon className="size-5 shrink-0" />
        <span className="max-w-0 overflow-hidden text-sm font-bold whitespace-nowrap opacity-0 transition-all duration-200 group-hover:max-w-24 group-hover:opacity-100">
          Analytics
        </span>
      </span>
    </button>
  )
}
