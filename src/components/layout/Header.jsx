import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '@/constants/routes'
import { cn } from '@/utils'

const NAV_LINKS = ['Features', 'Community', 'Growth', 'FAQ']

const loginBtnClass =
  'inline-flex items-center justify-center whitespace-nowrap rounded-full px-[1.1rem] py-[0.55rem] text-[0.8125rem] font-semibold text-white no-underline transition-[background-color,border-color,color,transform,box-shadow] duration-150 hover:text-primary active:scale-[0.97]'

const joinBtnClass =
  'inline-flex items-center justify-center whitespace-nowrap rounded-full bg-primary px-[1.15rem] py-[0.55rem] text-[0.8125rem] font-bold tracking-wide text-primary-contrast no-underline transition-[background-color,transform,box-shadow] duration-150 hover:bg-primary-hover hover:shadow-[0_0_20px_rgba(0,255,102,0.25)] active:scale-[0.97]'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="fixed inset-x-0 top-0 z-100 border-b border-white/6 bg-black/88 backdrop-blur-md">
      <div className="mx-auto flex h-[4.5rem] max-w-304 items-center justify-between gap-6 px-5 md:h-[4.75rem] md:px-6 lg:h-[5.25rem] lg:px-10">
        <Link
          className="group flex min-w-0 shrink-0 items-center gap-3 no-underline"
          to={ROUTES.HOME}
          onClick={closeMenu}
        >
          <span
            aria-hidden="true"
            className="flex size-[2.35rem] shrink-0 items-center justify-center rounded-[0.55rem] bg-primary font-display text-xl font-black italic leading-none text-primary-contrast transition-transform duration-150 group-hover:scale-104 max-[380px]:size-[2.1rem] max-[380px]:text-[1.1rem]"
          >
            T
          </span>
          <span className="flex min-w-0 flex-col gap-0.5">
            <span className="truncate font-display text-[0.95rem] font-extrabold italic tracking-wide text-white max-[380px]:text-[0.85rem]">
              THUNDER KITS™
            </span>
            <span className="text-[0.68rem] font-medium text-gray-400 max-[520px]:hidden">
              Creator &amp; Gaming Community
            </span>
          </span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-8 min-[961px]:flex"
        >
          {NAV_LINKS.map((link) => (
            <a
              className="text-sm font-medium text-white no-underline transition-colors duration-150 hover:text-primary"
              href={`#${link.toLowerCase()}`}
              key={link}
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-3 min-[961px]:flex">
          <Link className={loginBtnClass} to={ROUTES.LOGIN}>
            Login
          </Link>
          <Link className={joinBtnClass} to={ROUTES.REGISTER}>
            JOIN NOW
          </Link>
        </div>

        <button
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          className="flex size-10 items-center justify-center rounded-[0.65rem] bg-white/6 transition-colors duration-150 hover:bg-white/10 min-[961px]:hidden"
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <div className="relative h-3 w-[1.15rem]">
            <span
              className={cn(
                'absolute left-0 block h-0.5 w-full rounded-full bg-white transition-all duration-250',
                menuOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0',
              )}
            />
            <span
              className={cn(
                'absolute left-0 top-1/2 block h-0.5 w-full -translate-y-1/2 rounded-full bg-white transition-all duration-250',
                menuOpen && 'opacity-0',
              )}
            />
            <span
              className={cn(
                'absolute left-0 block h-0.5 w-full rounded-full bg-white transition-all duration-250',
                menuOpen ? 'bottom-1/2 translate-y-1/2 -rotate-45' : 'bottom-0',
              )}
            />
          </div>
        </button>
      </div>

      <div
        aria-hidden={!menuOpen}
        className={cn(
          'flex flex-col gap-6 overflow-hidden border-t border-white/6 px-5 transition-all duration-250 min-[961px]:hidden md:px-6',
          menuOpen ? 'max-h-96 px-5 py-5 opacity-100 md:px-6' : 'max-h-0 opacity-0',
        )}
      >
        <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <a
              className="border-b border-white/6 py-3 text-base font-medium text-white no-underline transition-colors duration-150 hover:text-primary"
              href={`#${link.toLowerCase()}`}
              key={link}
              onClick={closeMenu}
            >
              {link}
            </a>
          ))}
        </nav>
        <div className="flex flex-col gap-2.5">
          <Link
            className={cn(loginBtnClass, 'w-full py-3 text-center')}
            to={ROUTES.LOGIN}
            onClick={closeMenu}
          >
            Login
          </Link>
          <Link
            className={cn(joinBtnClass, 'w-full py-3 text-center')}
            to={ROUTES.REGISTER}
            onClick={closeMenu}
          >
            JOIN NOW
          </Link>
        </div>
      </div>
    </header>
  )
}
