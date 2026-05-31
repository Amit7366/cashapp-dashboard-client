function QrIcon({ className }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      <rect height="7" rx="1" width="7" x="3" y="3" />
      <rect height="7" rx="1" width="7" x="14" y="3" />
      <rect height="7" rx="1" width="7" x="3" y="14" />
      <rect fill="currentColor" height="3" rx="0.5" stroke="none" width="3" x="17" y="17" />
    </svg>
  )
}

export function QrShowButton({ onClick }) {
  return (
    <button
      aria-label="Show QR code"
      className="group flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#eef1f4] text-gray-800 transition-all duration-200 hover:w-[8.5rem] hover:bg-[#e5e9ee]"
      title="Show QR"
      type="button"
      onClick={onClick}
    >
      <span className="inline-flex items-center justify-center gap-0 group-hover:gap-2">
        <QrIcon className="size-5 shrink-0 -translate-x-px" />
        <span className="max-w-0 overflow-hidden text-sm font-bold whitespace-nowrap opacity-0 transition-all duration-200 group-hover:max-w-20 group-hover:opacity-100">
          Show QR
        </span>
      </span>
    </button>
  )
}
