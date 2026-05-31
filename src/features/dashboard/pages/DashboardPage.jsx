import { useState } from 'react'
import { CreateQrPaymentCard } from '@/features/dashboard/components/CreateQrPaymentCard'
import { MyTransactionsCard } from '@/features/dashboard/components/MyTransactionsCard'
import { PaymentLinkQrModal } from '@/features/dashboard/components/PaymentLinkQrModal'
import { PaymentLinksCard } from '@/features/dashboard/components/PaymentLinksCard'

const STATS = [
  { label: 'AVAILABLE MY BALANCE', value: '$225.00' },
  { label: 'TOTAL SETTLED', value: '35' },
  { label: 'TOTAL WITHDRAWN', value: '$2,210.00' },
]

export function DashboardPage() {
  const [activeQrUrl, setActiveQrUrl] = useState(null)

  return (
    <div>
      <PaymentLinkQrModal url={activeQrUrl} onClose={() => setActiveQrUrl(null)} />

      <header className="mb-6 lg:mb-8">
        <h1 className="text-[clamp(1.75rem,4vw,2.25rem)] font-bold text-gray-900">Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500">
          Overview of your activity · Last payment 9 hours ago
        </p>
      </header>

      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {STATS.map((stat) => (
          <article
            className="rounded-2xl border border-gray-100 bg-white px-5 py-5 shadow-[0_2px_12px_rgba(15,23,42,0.04)] sm:px-6 sm:py-6"
            key={stat.label}
          >
            <p className="text-[0.6875rem] font-semibold tracking-[0.08em] text-gray-400">
              {stat.label}
            </p>
            <p className="mt-2 text-[clamp(1.75rem,4vw,2.125rem)] leading-none font-bold text-gray-900">
              {stat.value}
            </p>
          </article>
        ))}
      </div>

      <div className="mb-6 grid grid-cols-1 gap-6 xl:grid-cols-2">
        <CreateQrPaymentCard />
        <PaymentLinksCard onShowQr={setActiveQrUrl} />
      </div>

      <MyTransactionsCard onShowQr={setActiveQrUrl} />
    </div>
  )
}
