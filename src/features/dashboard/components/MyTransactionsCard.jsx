import { Link } from 'react-router-dom'
import { ROUTES } from '@/constants/routes'

const TRANSACTIONS = [
  {
    id: '1',
    description: '/melissa03',
    datetime: '2026-05-31 06:29:44',
    hash: 'lnbc1366730n.....gq8axcpv',
    amount: '+$100.00',
    status: 'Pending',
    showQr: true,
    qrUrl: 'https://www.payin-cash.app/melissa03',
  },
  {
    id: '2',
    description: 'sdsd',
    datetime: '2026-05-31 06:28:12',
    hash: 'lnbc9823401n.....k2m9xwpq',
    amount: '+$50.00',
    status: 'Pending',
    showQr: true,
    qrUrl: 'https://www.payin-cash.app/sdsd',
  },
  {
    id: '3',
    description: 'No Description',
    datetime: '2026-05-31 05:15:33',
    hash: 'lnbc4451200n.....p7n3ytvr',
    amount: '+$25.00',
    status: 'Pending',
    showQr: false,
  },
  {
    id: '4',
    description: '/CashApp2',
    datetime: '2026-05-30 18:42:01',
    hash: 'lnbc7712300n.....h4k8zmnw',
    amount: '+$200.00',
    status: 'Pending',
    showQr: true,
    qrUrl: 'https://www.payin-cash.app/CashApp2',
  },
]

function ClockIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function QrIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <rect height="7" rx="1" width="7" x="3" y="3" />
      <rect height="7" rx="1" width="7" x="14" y="3" />
      <rect height="7" rx="1" width="7" x="3" y="14" />
      <rect fill="currentColor" height="3" rx="0.5" stroke="none" width="3" x="17" y="17" />
    </svg>
  )
}

function TransactionShowQrButton({ onClick }) {
  return (
    <button
      aria-label="Show QR code"
      className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-semibold text-gray-800 transition-colors hover:bg-gray-50"
      type="button"
      onClick={onClick}
    >
      <QrIcon className="size-4 shrink-0" />
      <span>Show QR</span>
    </button>
  )
}

function TransactionRow({ onShowQr, transaction }) {
  return (
    <li className="flex flex-col gap-3 border-b border-gray-100 py-4 last:border-0 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex min-w-0 flex-1 items-start gap-3">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-500">
          <ClockIcon className="size-5" />
        </span>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-gray-900">{transaction.description}</p>
          <p className="mt-0.5 truncate text-xs text-gray-400">
            {transaction.datetime} · {transaction.hash}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-end gap-4 sm:gap-6">
        {transaction.showQr ? (
          <TransactionShowQrButton onClick={() => onShowQr(transaction.qrUrl)} />
        ) : null}

        <div className="text-right">
          <p className="text-sm font-bold text-gray-900">{transaction.amount}</p>
          <span className="mt-1 inline-block rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-blue-600">
            {transaction.status}
          </span>
        </div>
      </div>
    </li>
  )
}

export function MyTransactionsCard({ onShowQr }) {
  return (
    <section className="mt-6 rounded-2xl border border-gray-100 bg-white p-5 shadow-[0_2px_12px_rgba(15,23,42,0.04)] sm:p-6">
      <div className="mb-1 flex items-center justify-between gap-4">
        <h2 className="text-lg font-bold text-gray-900">My Transactions</h2>
        <Link
          className="text-xs font-bold tracking-[0.08em] text-[#00d954] transition-colors hover:text-[#00c04d]"
          to={`${ROUTES.DASHBOARD}?tab=transactions`}
        >
          VIEW ALL
        </Link>
      </div>

      <ul>
        {TRANSACTIONS.map((transaction) => (
          <TransactionRow
            key={transaction.id}
            onShowQr={onShowQr}
            transaction={transaction}
          />
        ))}
      </ul>
    </section>
  )
}
