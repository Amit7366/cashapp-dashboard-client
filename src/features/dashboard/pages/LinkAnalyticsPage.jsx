import { Link, useParams } from 'react-router-dom'
import { ROUTES } from '@/constants/routes'
import { getLinkAnalytics } from '@/features/dashboard/data/linkAnalytics'

function SummaryStat({ label, value }) {
  return (
    <article className="rounded-2xl border border-gray-100 bg-white px-5 py-5 shadow-[0_2px_12px_rgba(15,23,42,0.04)] sm:px-6 sm:py-6">
      <p className="text-[0.6875rem] font-semibold tracking-[0.08em] text-gray-400">{label}</p>
      <p className="mt-2 text-[clamp(1.75rem,4vw,2.125rem)] leading-none font-bold text-gray-900">
        {value}
      </p>
    </article>
  )
}

function BreakdownCard({ items, title }) {
  return (
    <article className="rounded-2xl border border-gray-100 bg-white p-5 shadow-[0_2px_12px_rgba(15,23,42,0.04)] sm:p-6">
      <h2 className="mb-4 text-lg font-bold text-gray-900">{title}</h2>
      <ul className="flex flex-col gap-3">
        {items.map((item) => (
          <li className="flex items-center justify-between gap-4 text-sm" key={item.label}>
            <span className="text-gray-700">{item.label}</span>
            <span className="font-semibold text-gray-900">{item.value}</span>
          </li>
        ))}
      </ul>
    </article>
  )
}

export function LinkAnalyticsPage() {
  const { slug: encodedSlug } = useParams()
  const slug = decodeURIComponent(encodedSlug ?? '')
  const analytics = getLinkAnalytics(slug)

  return (
    <div>
      <Link
        className="inline-flex items-center gap-1 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900"
        to={ROUTES.DASHBOARD}
      >
        <span aria-hidden="true">←</span>
        Dashboard
      </Link>

      <header className="mt-4 mb-6 lg:mb-8">
        <h1 className="text-[clamp(1.75rem,4vw,2.25rem)] font-bold text-gray-900">Link Analytics</h1>
        <p className="mt-1 text-sm text-gray-500">/{slug}</p>
      </header>

      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {analytics.summary.map((stat) => (
          <SummaryStat key={stat.label} label={stat.label} value={stat.value} />
        ))}
      </div>

      <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        <BreakdownCard items={analytics.browsers} title="Top Browsers" />
        <BreakdownCard items={analytics.devices} title="Device Breakdown" />
        <BreakdownCard items={analytics.countries} title="Top Countries" />
        <BreakdownCard items={analytics.states} title="Top States" />
      </div>

      <div className="flex flex-col gap-6">
        <BreakdownCard items={analytics.cities} title="Top Cities" />

        <article className="rounded-2xl border border-gray-100 bg-white p-5 shadow-[0_2px_12px_rgba(15,23,42,0.04)] sm:p-6">
          <h2 className="mb-4 text-lg font-bold text-gray-900">Recent Clicks</h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-gray-100 text-[0.6875rem] font-semibold tracking-[0.08em] text-gray-400">
                  <th className="pb-3 pr-4 font-semibold">TIME</th>
                  <th className="pb-3 pr-4 font-semibold">IP</th>
                  <th className="pb-3 pr-4 font-semibold">LOCATION</th>
                  <th className="pb-3 pr-4 font-semibold">BROWSER</th>
                  <th className="pb-3 font-semibold">DEVICE</th>
                </tr>
              </thead>
              <tbody>
                {analytics.recentClicks.map((click) => (
                  <tr className="border-b border-gray-50 last:border-0" key={`${click.time}-${click.ip}`}>
                    <td className="py-3.5 pr-4 text-gray-600">{click.time}</td>
                    <td className="py-3.5 pr-4 font-mono text-xs text-gray-700">{click.ip}</td>
                    <td className="py-3.5 pr-4 text-gray-700">{click.location}</td>
                    <td className="py-3.5 pr-4 text-gray-700">{click.browser}</td>
                    <td className="py-3.5 text-gray-700">{click.device}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>
      </div>
    </div>
  )
}
