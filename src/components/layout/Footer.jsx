import { Link } from 'react-router-dom'
import { ROUTES } from '@/constants/routes'

const COMPANY_LINKS = [
  { label: 'About', href: ROUTES.HOME },
  { label: 'Community', href: '#community' },
  { label: 'Updates', href: ROUTES.HOME },
]

const PLATFORM_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'Dashboard', href: ROUTES.HOME },
  { label: 'Growth', href: '#growth' },
]

const LEGAL_LINKS = ['Privacy', 'Terms', 'Security']

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/8 bg-black">
      <div className="mx-auto max-w-304 px-5 py-10 md:px-6 md:py-12 lg:px-10 lg:py-14">
        <div className="mb-8 grid grid-cols-1 gap-8 min-[560px]:gap-8 min-[961px]:mb-12 min-[961px]:grid-cols-2 min-[961px]:gap-10 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div className="max-w-88 min-[961px]:col-span-2 min-[961px]:max-w-none lg:col-span-1 lg:max-w-88">
            <Link
              className="mb-5 inline-flex items-center gap-3 no-underline transition-opacity duration-150 hover:opacity-90"
              to={ROUTES.HOME}
            >
              <span
                aria-hidden="true"
                className="flex size-[2.35rem] shrink-0 items-center justify-center rounded-[0.55rem] bg-primary font-display text-xl font-black italic leading-none text-primary-contrast"
              >
                T
              </span>
              <span className="flex flex-col gap-0.5">
                <span className="text-base font-bold text-white">Thunder Kits</span>
                <span className="text-xs font-medium text-gray-400">
                  Gaming &amp; Creator Community
                </span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              Modern creator platform for gamers, streamers, online creators, and
              digital communities.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-[0.9375rem] font-bold text-white">Company</h3>
            <ul className="flex list-none flex-col gap-2.5 p-0">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    className="text-sm leading-snug text-gray-400 no-underline transition-colors duration-150 hover:text-white"
                    href={link.href}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-[0.9375rem] font-bold text-white">Platform</h3>
            <ul className="flex list-none flex-col gap-2.5 p-0">
              {PLATFORM_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    className="text-sm leading-snug text-gray-400 no-underline transition-colors duration-150 hover:text-white"
                    href={link.href}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-[0.9375rem] font-bold text-white">Support</h3>
            <ul className="flex list-none flex-col gap-2.5 p-0">
              <li>
                <a
                  className="text-sm leading-snug text-gray-400 no-underline transition-colors duration-150 hover:text-white"
                  href="mailto:support@thunderkits.com"
                >
                  support@thunderkits.com
                </a>
              </li>
              <li>
                <span className="text-sm leading-snug text-gray-400">
                  24/7 Community Support
                </span>
              </li>
              <li>
                <span className="text-sm font-bold leading-snug text-primary">
                  Safe &amp; Trusted
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-6 border-t border-white/8 pt-6 min-[560px]:flex-row min-[560px]:items-center md:pt-8">
          <p className="text-[0.8125rem] text-muted">
            &copy; {year} Thunder Kits. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-5 max-[400px]:flex-col max-[400px]:gap-2.5">
            {LEGAL_LINKS.map((item) => (
              <a
                className="text-[0.8125rem] text-muted no-underline transition-colors duration-150 hover:text-white"
                href="#"
                key={item}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
