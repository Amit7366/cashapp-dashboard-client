import { cn } from '@/utils'

const sizes = {
  sm: 'size-4',
  md: 'size-6',
  lg: 'size-8',
}

export function Spinner({ size = 'md', label = 'Loading', className }) {
  return (
    <span
      aria-label={label}
      className={cn(
        'inline-block animate-spin rounded-full border-2 border-white/8 border-t-primary',
        sizes[size],
        className,
      )}
      role="status"
    />
  )
}
