import { useEffect, useRef, useState } from 'react'
import { cn } from '@/utils'

function CopyIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <rect height="12" rx="2" width="12" x="8" y="8" />
      <path d="M6 16H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  )
}

function CheckIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function CopyLinkButton({ url }) {
  const [copied, setCopied] = useState(false)
  const timeoutRef = useRef(null)

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      timeoutRef.current = setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <button
      aria-label={copied ? 'Link copied' : 'Copy link'}
      className={cn(
        'group flex h-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#00d954] text-white transition-all duration-200 hover:bg-[#00c04d]',
        copied
          ? 'w-[8.25rem] shadow-[0_4px_14px_rgba(0,217,84,0.35)] ring-2 ring-gray-900'
          : 'w-11 hover:w-[7.25rem]',
      )}
      title={copied ? 'Copied!' : 'Copy link'}
      type="button"
      onClick={handleCopy}
    >
      <span
        className={cn(
          'inline-flex items-center justify-center',
          copied ? 'gap-2' : 'gap-0 group-hover:gap-2',
        )}
      >
        {copied ? (
          <>
            <CheckIcon className="size-4 shrink-0" />
            <span className="text-sm font-bold whitespace-nowrap">Copied!</span>
          </>
        ) : (
          <>
            <CopyIcon className="size-5 shrink-0" />
            <span className="max-w-0 overflow-hidden text-sm font-bold whitespace-nowrap opacity-0 transition-all duration-200 group-hover:max-w-16 group-hover:opacity-100">
              Copy
            </span>
          </>
        )}
      </span>
    </button>
  )
}
