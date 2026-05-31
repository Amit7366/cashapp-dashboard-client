import { Link, useNavigate } from 'react-router-dom'
import { ROUTES } from '@/constants/routes'

const FEATURES = [
  'Fast and secure authentication',
  'Real-time dashboard access',
  'Protected sessions and data',
]

const inputLightClass =
  'w-full rounded-[0.65rem] border border-transparent bg-[#e8eaef] px-3.5 py-3 text-sm text-gray-900 transition-[border-color,background-color,box-shadow] duration-150 placeholder:text-muted focus:border-primary focus:bg-white focus:outline-none focus:shadow-[0_0_0_3px_rgba(0,255,102,0.12)]'

export function LoginPage() {
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    navigate(ROUTES.DASHBOARD)
  }

  return (
    <div className="relative min-h-dvh overflow-hidden px-5 py-6 max-[480px]:pt-5 md:px-6 md:py-8 lg:px-10 lg:py-10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-32 size-80 rounded-full bg-[radial-gradient(circle,rgba(0,255,102,0.1)_0%,transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -bottom-24 size-96 rounded-full bg-[radial-gradient(circle,rgba(0,255,102,0.12)_0%,transparent_70%)]"
      />

      <div className="relative z-1 mx-auto max-w-[68rem]">
        <Link
          className="mb-6 inline-flex items-center gap-3 no-underline transition-opacity duration-150 hover:opacity-85 md:mb-8"
          to={ROUTES.HOME}
        >
          <span
            aria-hidden="true"
            className="flex size-10 items-center justify-center rounded-full bg-primary font-display text-[1.1rem] font-black italic leading-none text-primary-contrast"
          >
            T
          </span>
          <span className="flex flex-col gap-0.5">
            <span className="text-base font-bold text-white">Welcome Back</span>
            <span className="text-[0.8125rem] text-gray-400">Secure account access</span>
          </span>
        </Link>

        <div className="grid overflow-hidden rounded-[1.25rem] border border-white/8 bg-[#0d0d0d] shadow-[0_24px_64px_rgba(0,0,0,0.45)] min-[901px]:grid-cols-2">
          <aside className="flex flex-col bg-linear-to-br from-primary/22 via-[rgba(0,120,60,0.35)] to-[rgba(0,40,25,0.95)] p-6 min-[901px]:p-10">
            <span className="mb-6 inline-flex self-start rounded-full border border-primary/25 bg-black/25 px-3 py-1.5 text-[0.6875rem] font-bold tracking-widest text-primary">
              SECURE LOGIN
            </span>
            <h1 className="mb-4 text-[clamp(1.65rem,3.5vw,2.15rem)] leading-tight font-bold tracking-tight text-white">
              Access your account instantly
            </h1>
            <p className="mb-auto max-w-88 text-sm leading-relaxed text-white/72">
              Manage your dashboard, payments, reports and everything securely
              from one place.
            </p>

            <ul className="mt-10 flex list-none flex-col gap-3.5 p-0">
              {FEATURES.map((feature) => (
                <li className="flex items-center gap-3 text-sm leading-snug text-white/88" key={feature}>
                  <span
                    aria-hidden="true"
                    className="flex size-[1.35rem] shrink-0 items-center justify-center rounded-full bg-primary text-primary-contrast"
                  >
                    <svg className="size-3" viewBox="0 0 24 24">
                      <path
                        d="M8 12.5l2.5 2.5L16 9"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                      />
                    </svg>
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </aside>

          <section className="flex flex-col justify-center bg-[#111111] p-6 min-[901px]:p-10">
            <header className="mb-6">
              <h2 className="mb-1.5 text-[clamp(1.65rem,3vw,2rem)] font-bold text-white">
                Sign In
              </h2>
              <p className="text-sm text-gray-400">Continue securely to your account.</p>
            </header>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-medium text-gray-400">Email</span>
                <input
                  className={inputLightClass}
                  name="email"
                  placeholder="contakt@gmail.com"
                  type="email"
                />
              </label>

              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-medium text-gray-400">Password</span>
                <input
                  className={inputLightClass}
                  name="password"
                  placeholder="••••••••"
                  type="password"
                />
              </label>

              <label className="flex cursor-pointer items-center gap-2 text-[0.8125rem] text-gray-400 select-none">
                <input
                  className="size-4 cursor-pointer accent-primary"
                  name="remember"
                  type="checkbox"
                />
                Remember me
              </label>

              <button
                className="mt-1 rounded-[0.65rem] bg-primary px-4 py-3.5 text-[0.9375rem] font-bold text-primary-contrast transition-[transform,background-color,box-shadow] duration-150 hover:-translate-y-px hover:bg-primary-hover hover:shadow-[0_0_24px_rgba(0,255,102,0.25)] active:scale-[0.98]"
                type="submit"
              >
                Sign In
              </button>
            </form>

            <p className="mt-5 text-center text-xs leading-relaxed text-muted">
              Protected with secure authentication and encrypted access.
            </p>

            <p className="mt-3.5 text-center text-[0.8125rem] text-gray-400">
              Don&apos;t have an account?{' '}
              <Link
                className="font-semibold text-primary no-underline transition-colors duration-150 hover:text-primary-hover"
                to={ROUTES.REGISTER}
              >
                Create Account
              </Link>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
