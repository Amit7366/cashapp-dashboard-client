import { cn } from '@/utils'

const variants = {
  primary: 'bg-primary text-primary-contrast hover:bg-primary-hover',
  secondary:
    'border border-white/8 bg-surface text-white hover:bg-surface-hover',
  ghost: 'bg-transparent text-gray-400 hover:bg-surface-hover hover:text-white',
}

const sizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-[0.9375rem]',
  lg: 'px-5 py-2.5 text-base',
}

export function Button({
  children,
  className,
  variant = 'primary',
  size = 'md',
  type = 'button',
  ...props
}) {
  return (
    <button
      className={cn(
        'inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-transparent font-medium transition-[background-color,border-color,color] duration-150 disabled:cursor-not-allowed disabled:opacity-55',
        variants[variant],
        sizes[size],
        className,
      )}
      type={type}
      {...props}
    >
      {children}
    </button>
  )
}
