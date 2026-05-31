import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { invoicePath } from '@/constants/routes'
import { cn } from '@/utils'

const QUICK_AMOUNTS = ['$10', '$50', '$100', '$200']

export function CreateQrPaymentCard() {
  const navigate = useNavigate()
  const [amount, setAmount] = useState('0')
  const [selectedQuickAmount, setSelectedQuickAmount] = useState(null)
  const [description, setDescription] = useState('')

  function handleQuickAmountSelect(quickAmount) {
    setAmount(quickAmount.replace('$', ''))
    setSelectedQuickAmount(quickAmount)
  }

  function handleAmountChange(event) {
    setAmount(event.target.value)
    setSelectedQuickAmount(null)
  }

  function handleGenerateQr(event) {
    event.preventDefault()
    const numericAmount = Number.parseFloat(amount) || 0

    if (numericAmount <= 0) return

    navigate(invoicePath({ amount: numericAmount, description }))
  }

  return (
    <section className="rounded-2xl border border-gray-100 bg-white p-5 shadow-[0_2px_12px_rgba(15,23,42,0.04)] sm:p-6">
      <h2 className="mb-5 text-lg font-bold text-gray-900">Create New QR Payment</h2>

      <form className="flex flex-col gap-5" onSubmit={handleGenerateQr}>
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-gray-700">Amount (USD)</span>
          <div className="flex items-center gap-2 rounded-xl bg-[#eef1f4] px-4 py-3.5">
            <span className="text-lg font-medium text-gray-500">$</span>
            <input
              className="w-full bg-transparent text-2xl font-semibold text-gray-900 outline-none placeholder:text-gray-400"
              inputMode="decimal"
              name="amount"
              type="text"
              value={amount}
              onChange={handleAmountChange}
            />
          </div>
        </label>

        <div>
          <div className="flex flex-wrap gap-2.5">
            {QUICK_AMOUNTS.map((quickAmount) => (
              <button
                className={cn(
                  'rounded-full border px-4 py-2 text-sm font-medium transition-colors',
                  selectedQuickAmount === quickAmount
                    ? 'border-[#00d954] bg-[#00d954]/10 text-[#00d954]'
                    : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50',
                )}
                key={quickAmount}
                type="button"
                onClick={() => handleQuickAmountSelect(quickAmount)}
              >
                {quickAmount}
              </button>
            ))}
          </div>
          <button
            className="mt-3 text-sm font-semibold text-[#00d954] transition-colors hover:text-[#00c04d]"
            type="button"
          >
            More amounts
          </button>
        </div>

        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-gray-700">Description (optional)</span>
          <input
            className="rounded-xl bg-[#eef1f4] px-4 py-3.5 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-[#00d954]/20"
            name="description"
            placeholder="e.g. NewYork traffic or Texus traffic"
            type="text"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
          <span className="text-xs text-gray-400">
            This is for you to remember the transaction.
          </span>
        </label>

        <button
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#00d954] px-4 py-3.5 text-base font-bold text-white transition-[background-color,transform] duration-150 hover:bg-[#00c04d] active:scale-[0.99]"
          type="submit"
        >
          <svg className="size-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <rect height="7" rx="1" width="7" x="3" y="3" />
            <rect height="7" rx="1" width="7" x="14" y="3" />
            <rect height="7" rx="1" width="7" x="3" y="14" />
            <path d="M17 14h3v3h-3z" />
          </svg>
          Generate QR
        </button>
      </form>
    </section>
  )
}
