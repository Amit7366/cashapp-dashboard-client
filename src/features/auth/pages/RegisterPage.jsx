import { Link } from 'react-router-dom'
import { ROUTES } from '@/constants/routes'

const FEATURES = [
  {
    icon: 'check',
    title: 'Instant Setup',
    description: 'Create your account in less than 2 minutes.',
  },
  {
    icon: 'lock',
    title: 'Bank-Level Security',
    description: 'Your account and transactions stay protected.',
  },
  {
    icon: 'bolt',
    title: 'Fast Payments',
    description: 'Send and receive payments instantly.',
  },
]

function FeatureIcon({ type }) {
  if (type === 'check') {
    return (
      <svg aria-hidden="true" className="size-8 shrink-0" viewBox="0 0 24 24">
        <circle cx="12" cy="12" fill="rgba(0,255,102,0.15)" r="10" />
        <path
          d="M8 12.5l2.5 2.5L16 9"
          fill="none"
          stroke="#00ff66"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    )
  }

  if (type === 'lock') {
    return (
      <svg aria-hidden="true" className="size-8 shrink-0" viewBox="0 0 24 24">
        <circle cx="12" cy="12" fill="rgba(0,255,102,0.15)" r="10" />
        <rect
          fill="none"
          height="7"
          rx="1"
          stroke="#00ff66"
          strokeWidth="1.8"
          width="8"
          x="8"
          y="11"
        />
        <path
          d="M9 11V9a3 3 0 0 1 6 0v2"
          fill="none"
          stroke="#00ff66"
          strokeLinecap="round"
          strokeWidth="1.8"
        />
      </svg>
    )
  }

  return (
    <svg aria-hidden="true" className="size-8 shrink-0" viewBox="0 0 24 24">
      <circle cx="12" cy="12" fill="rgba(0,255,102,0.15)" r="10" />
      <path
        d="M13 6L8 13h4l-1 5 6-8h-4l1-4z"
        fill="none"
        stroke="#00ff66"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  )
}

const inputClass =
  'w-full rounded-[0.65rem] border border-white/10 bg-white/4 px-3.5 py-2.5 text-sm text-white transition-[border-color,background-color,box-shadow] duration-150 placeholder:text-muted focus:border-primary focus:outline-none focus:shadow-[0_0_0_3px_rgba(0,255,102,0.12)]'

const inputLightClass =
  'w-full rounded-[0.65rem] border border-transparent bg-[#e8eaef] px-3.5 py-2.5 text-sm text-gray-900 transition-[border-color,background-color,box-shadow] duration-150 placeholder:text-muted focus:border-primary focus:bg-white focus:outline-none focus:shadow-[0_0_0_3px_rgba(0,255,102,0.12)]'

export function RegisterPage() {
  const handleSubmit = (event) => {
    event.preventDefault()
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
            <span className="text-base font-bold text-white">Create Account</span>
            <span className="text-[0.8125rem] text-gray-400">Join Thunder security</span>
          </span>
        </Link>

        <div className="grid overflow-hidden rounded-[1.25rem] border border-white/8 bg-[#0d0d0d] shadow-[0_24px_64px_rgba(0,0,0,0.45)] min-[901px]:grid-cols-2">
          <aside className="flex flex-col bg-linear-to-br from-primary/22 via-[rgba(0,120,60,0.35)] to-[rgba(0,40,25,0.95)] p-6 min-[901px]:p-10">
            <span className="mb-6 inline-flex self-start rounded-full border border-primary/25 bg-black/25 px-3 py-1.5 text-[0.6875rem] font-bold tracking-widest text-primary">
              APPPAY REGISTER
            </span>
            <h1 className="mb-4 text-[clamp(1.65rem,3.5vw,2.15rem)] leading-tight font-bold tracking-tight text-white">
              Start accepting payments in minutes
            </h1>
            <p className="mb-auto max-w-88 text-sm leading-relaxed text-white/72">
              Create your secure AppPay account and manage payments, invoices,
              transactions and payouts from one dashboard.
            </p>

            <ul className="mt-10 flex list-none flex-col gap-5 p-0">
              {FEATURES.map((feature) => (
                <li className="flex items-start gap-3.5" key={feature.title}>
                  <FeatureIcon type={feature.icon} />
                  <div>
                    <span className="mb-0.5 block text-[0.9375rem] font-semibold text-white">
                      {feature.title}
                    </span>
                    <span className="block text-[0.8125rem] leading-snug text-white/55">
                      {feature.description}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </aside>

          <section className="bg-[#111111] p-6 min-[901px]:p-10">
            <header className="mb-6">
              <h2 className="mb-1.5 text-[clamp(1.65rem,3vw,2rem)] font-bold text-white">
                Register
              </h2>
              <p className="text-sm text-gray-400">Create your AppPay account</p>
            </header>

            <form className="flex flex-col gap-3.5" onSubmit={handleSubmit}>
              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-medium text-gray-400">Invite Code</span>
                <input className={inputClass} name="inviteCode" placeholder="JN3MW6PI" type="text" />
              </label>

              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-medium text-gray-400">Full Name</span>
                <input className={inputClass} name="fullName" placeholder="Your full name" type="text" />
              </label>

              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-medium text-gray-400">Email Address</span>
                <input className={inputLightClass} name="email" placeholder="contact@gmail.com" type="email" />
              </label>

              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-medium text-gray-400">Phone Number</span>
                <input className={inputClass} name="phone" placeholder="+1 234 567 890" type="tel" />
              </label>

              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-medium text-gray-400">Facebook Profile</span>
                <input className={inputClass} name="facebook" placeholder="facebook.com/username" type="text" />
              </label>

              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-medium text-gray-400">Telegram</span>
                <input className={inputClass} name="telegram" placeholder="@username" type="text" />
              </label>

              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-medium text-gray-400">Password</span>
                <input className={inputLightClass} name="password" placeholder="••••••••" type="password" />
              </label>

              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-medium text-gray-400">Confirm Password</span>
                <input className={inputClass} name="confirmPassword" placeholder="••••••••" type="password" />
              </label>

              <button
                className="mt-2 rounded-[0.65rem] bg-primary px-4 py-3.5 text-[0.9375rem] font-bold text-primary-contrast transition-[transform,background-color,box-shadow] duration-150 hover:-translate-y-px hover:bg-primary-hover hover:shadow-[0_0_24px_rgba(0,255,102,0.25)] active:scale-[0.98]"
                type="submit"
              >
                Create Account
              </button>
            </form>

            <p className="mt-5 text-center text-[0.8125rem] text-gray-400">
              Already have an account?{' '}
              <Link
                className="font-semibold text-primary no-underline transition-colors duration-150 hover:text-primary-hover"
                to={ROUTES.LOGIN}
              >
                Sign in
              </Link>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
