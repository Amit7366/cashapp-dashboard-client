import { useState } from 'react'
import { CreateQrPaymentCard } from '@/features/dashboard/components/CreateQrPaymentCard'
import { PaymentLinkQrModal } from '@/features/dashboard/components/PaymentLinkQrModal'
import { PaymentLinksCard } from '@/features/dashboard/components/PaymentLinksCard'

export function CreateQrPage() {
  const [activeQrUrl, setActiveQrUrl] = useState(null)

  return (
    <div>
      <PaymentLinkQrModal url={activeQrUrl} onClose={() => setActiveQrUrl(null)} />

      <header className="mb-6 lg:mb-8">
        <h1 className="text-[clamp(1.75rem,4vw,2.25rem)] font-bold text-gray-900">Create QR</h1>
        <p className="mt-1 text-sm text-gray-500">
          Generate payment QR codes and manage your payment links
        </p>
      </header>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <CreateQrPaymentCard />
        <PaymentLinksCard onShowQr={setActiveQrUrl} />
      </div>
    </div>
  )
}
