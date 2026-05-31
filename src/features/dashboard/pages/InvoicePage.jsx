import { Link, useSearchParams } from 'react-router-dom'
import { QRCode } from 'react-qr-code'
import { ROUTES } from '@/constants/routes'
import { formatUsdAmount, LIGHTNING_PAYMENT_URL } from '@/features/dashboard/constants/payment'

export function InvoicePage() {
  const [searchParams] = useSearchParams()
  const amount = searchParams.get('amount') ?? '0'
  const formattedAmount = formatUsdAmount(amount)

  return (
    <div className="mx-auto max-w-lg">
      <Link
        className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900"
        to={ROUTES.CREATE_QR}
      >
        <span aria-hidden="true">←</span>
        Create another
      </Link>

      <article className="mt-5 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_2px_12px_rgba(15,23,42,0.04)]">
        <div className="flex items-start justify-between gap-4 border-b border-gray-100 px-6 py-6 sm:px-8">
          <div>
            <p className="text-[0.6875rem] font-semibold tracking-[0.08em] text-gray-400">INVOICE</p>
            <p className="mt-2 text-[clamp(2rem,5vw,2.75rem)] leading-none font-bold text-gray-900">
              {formattedAmount}
            </p>
          </div>
          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
            Pending
          </span>
        </div>

        <div className="flex flex-col items-center px-6 py-8 sm:px-8 sm:py-10">
          <div className="relative">
            <QRCode
              bgColor="#FFFFFF"
              fgColor="#000000"
              level="M"
              size={280}
              style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
              value={LIGHTNING_PAYMENT_URL}
            />
            <div className="absolute top-1/2 left-1/2 flex size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl bg-[#00d632] shadow-sm">
              <span className="text-2xl font-bold text-white">$</span>
            </div>
          </div>
          <p className="mt-6 text-sm text-gray-500">Scan the QR code to pay</p>
        </div>
      </article>
    </div>
  )
}
