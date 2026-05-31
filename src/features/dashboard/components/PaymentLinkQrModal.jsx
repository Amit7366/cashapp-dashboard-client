import { useEffect } from 'react'
import { QRCode } from 'react-qr-code'

export function PaymentLinkQrModal({ url, onClose }) {
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleEscape)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleEscape)
    }
  }, [onClose])

  if (!url) return null

  return (
    <div
      aria-labelledby="qr-modal-title"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
    >
      <button
        aria-label="Close modal"
        className="absolute inset-0 bg-black/35 backdrop-blur-[2px]"
        type="button"
        onClick={onClose}
      />

      <div className="relative w-full max-w-md rounded-[1.75rem] bg-white px-6 py-6 shadow-[0_24px_64px_rgba(15,23,42,0.18)] sm:px-8 sm:py-8">
        <div className="mb-6 flex items-center justify-between gap-4">
          <h2 className="text-xl font-bold text-gray-900" id="qr-modal-title">
            Payment Link QR
          </h2>
          <button
            aria-label="Close"
            className="flex size-9 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
            type="button"
            onClick={onClose}
          >
            <svg className="size-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="mx-auto flex max-w-[17.5rem] justify-center rounded-2xl bg-white p-3">
          <div className="relative">
            <QRCode
              bgColor="#FFFFFF"
              fgColor="#000000"
              level="M"
              size={256}
              style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
              value={url}
            />
            <div className="absolute top-1/2 left-1/2 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-lg bg-[#00d954] shadow-sm">
              <span className="text-xl font-bold text-white">$</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
