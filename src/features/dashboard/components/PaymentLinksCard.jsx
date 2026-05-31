import { AnalyticsButton } from '@/features/dashboard/components/AnalyticsButton'
import { CopyLinkButton } from '@/features/dashboard/components/CopyLinkButton'
import { QrShowButton } from '@/features/dashboard/components/QrShowButton'
import { getPaymentUrl, PAYMENT_LINKS } from '@/features/dashboard/data/paymentLinks'

export function PaymentLinksCard({ onShowQr }) {
  return (
    <section className="rounded-2xl border border-gray-100 bg-white p-5 shadow-[0_2px_12px_rgba(15,23,42,0.04)] sm:p-6">
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-lg font-bold text-gray-900">Payment Link</h2>
        <select className="w-full rounded-full border border-gray-200 bg-[#eef1f4] px-4 py-2.5 text-sm text-gray-700 outline-none sm:max-w-xs">
          <option>Default (https://www.payin-cash.app)</option>
        </select>
      </div>

      <div className="flex flex-col gap-6">
        {PAYMENT_LINKS.map((link) => {
          const paymentUrl = getPaymentUrl(link.slug)

          return (
            <article key={link.slug}>
              <p className="text-xs text-gray-400">Share this link to accept payments directly</p>
              <p className="mt-0.5 text-xs text-gray-400">Last payment: {link.lastPayment}</p>

              <div className="mt-2 flex flex-col gap-2 lg:flex-row lg:items-center">
                <input
                  readOnly
                  className="min-w-0 flex-1 rounded-full bg-[#eef1f4] px-4 py-3 text-sm text-gray-700 outline-none"
                  value={paymentUrl}
                />
                <div className="flex shrink-0 items-center gap-2">
                  <QrShowButton onClick={() => onShowQr(paymentUrl)} />
                  <AnalyticsButton slug={link.slug} />
                  <CopyLinkButton url={paymentUrl} />
                </div>
              </div>

              <p className="mt-2 text-xs text-gray-400 lg:hidden">
                Share this link to accept payments directly
              </p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
