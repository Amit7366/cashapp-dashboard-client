import { Link } from 'react-router-dom'
import { ROUTES } from '@/constants/routes'

const STATS = [
  { value: '120K+', label: 'Elite Players' },
  { value: '24/7', label: 'Team Support' },
  { value: '99.9%', label: 'Arena Stability' },
]

const btnPrimaryClass =
  'inline-flex items-center justify-center rounded-full bg-primary px-[1.65rem] py-[0.85rem] text-[0.95rem] font-bold text-primary-contrast no-underline shadow-[0_0_24px_rgba(0,255,102,0.25)] transition-[transform,background-color,box-shadow] duration-150 hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-[0_0_32px_rgba(0,255,102,0.35)] active:scale-[0.97]'

const btnSecondaryClass =
  'inline-flex items-center justify-center rounded-full border border-white/12 bg-white/6 px-[1.65rem] py-[0.85rem] text-[0.95rem] font-bold text-white no-underline transition-[transform,background-color,border-color] duration-150 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10 active:scale-[0.97]'

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100dvh-4.5rem)] overflow-hidden bg-black md:min-h-[calc(100dvh-4.75rem)] lg:min-h-[calc(100dvh-5.25rem)]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-40 size-88 rounded-full bg-[radial-gradient(circle,rgba(0,255,102,0.12)_0%,transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[8%] -right-24 size-144 rounded-full bg-[radial-gradient(circle,rgba(0,255,102,0.28)_0%,transparent_68%)]"
      />

      <div className="relative z-1 mx-auto grid max-w-304 grid-cols-1 items-center gap-6 px-5 py-8 min-[1025px]:grid-cols-[1.05fr_0.95fr] min-[1025px]:gap-12 min-[1025px]:px-10 min-[1025px]:py-14 min-[1025px]:pb-16 md:px-6">
        <div className="max-w-xl animate-fade-up min-[1025px]:max-w-none">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/4 px-3.5 py-1.5 text-[clamp(0.75rem,2vw,0.8125rem)] font-medium text-[#b8b8b8]">
            <span
              aria-hidden="true"
              className="size-[0.45rem] animate-pulse-dot rounded-full bg-primary shadow-[0_0_8px_rgba(0,255,102,0.8)]"
            />
            Thunder Kits esports creator network
          </div>

          <h1 className="mb-6 font-display text-[clamp(2.25rem,5.5vw,4.35rem)] leading-[0.95] font-extrabold tracking-tight text-white uppercase italic">
            <span className="block">BUILD YOUR</span>
            <span className="block text-primary">ELITE</span>
            <span className="block text-primary">CREATOR</span>
            <span className="block">
              <span className="text-primary">SQUAD</span> WITH
            </span>
            <span className="block">THUNDER</span>
            <span className="block">KITS</span>
          </h1>

          <p className="mb-8 max-w-124 text-[clamp(0.9rem,2vw,0.98rem)] leading-relaxed text-gray-400">
            Thunder Kits is a modern creator and gaming community built for
            streamers, creators, online audiences, and digital communities to
            connect, grow, and build stronger engagement together.
          </p>

          <div className="mb-8 flex flex-wrap gap-3.5 min-[641px]:mb-13 max-[640px]:flex-col">
            <Link className={btnPrimaryClass} to={ROUTES.REGISTER}>
              Start Free
            </Link>
            <a className={btnSecondaryClass} href="#features">
              Explore Features
            </a>
          </div>

          <div className="grid grid-cols-3 gap-4 min-[401px]:gap-6 max-[400px]:grid-cols-2">
            {STATS.map((stat, index) => (
              <div
                className={`flex flex-col gap-0.5 ${index === STATS.length - 1 ? 'max-[400px]:col-span-2' : ''}`}
                key={stat.label}
              >
                <span className="font-display text-[clamp(1.35rem,3vw,1.65rem)] leading-none font-extrabold text-white italic">
                  {stat.value}
                </span>
                <span className="text-[0.8125rem] text-muted max-[640px]:text-xs">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative min-h-72 animate-fade-up [animation-delay:0.15s] min-[641px]:min-h-[clamp(18rem,45vw,32rem)] min-[1025px]:mx-0 min-[1025px]:max-w-none mx-auto max-w-md max-[640px]:min-h-64 max-[640px]:max-w-full">
          <div
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 size-[min(22rem,80vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,255,102,0.55)_0%,rgba(0,255,102,0.08)_55%,transparent_72%)] blur-sm"
          />

          <div className="absolute top-1/2 left-1/2 z-2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex size-[clamp(10rem,28vw,15.5rem)] animate-float flex-col items-center justify-center rounded-full bg-linear-to-br from-primary to-[#00d955] shadow-[0_0_60px_rgba(0,255,102,0.45),0_0_120px_rgba(0,255,102,0.2)] max-[400px]:size-36">
              <span className="font-display text-[clamp(4rem,12vw,6.5rem)] leading-[0.85] font-black text-black/35 italic max-[400px]:text-[3.5rem]">
                T
              </span>
              <span className="mt-0.5 text-[0.72rem] font-bold tracking-[0.22em] text-black/55">
                ESPORTS
              </span>
            </div>
          </div>

          <div className="absolute top-[22%] left-[max(0%,calc(50%-14rem))] z-3 flex w-[min(13.5rem,42vw)] animate-float-delayed flex-col gap-2 rounded-2xl border border-white/8 bg-[rgba(18,18,18,0.92)] p-[1.15rem] shadow-[0_20px_40px_rgba(0,0,0,0.45)] backdrop-blur-md max-[640px]:left-0 max-[640px]:w-[min(11.5rem,38vw)] max-[640px]:p-4">
            <span className="text-xs text-muted">Thunder Access</span>
            <span className="text-[clamp(0.9rem,2.5vw,1.05rem)] leading-snug font-bold text-white">
              Join Thunder Kits
            </span>
            <Link
              className="mt-1 inline-flex self-start rounded-full bg-primary px-4 py-2 text-[0.72rem] font-bold tracking-wide text-primary-contrast no-underline transition-transform duration-150 hover:-translate-y-0.5 active:scale-[0.97]"
              to={ROUTES.REGISTER}
            >
              ENTER NOW
            </Link>
          </div>

          <div className="absolute top-[8%] right-[max(0%,calc(50%-13rem))] z-3 flex animate-float-fast flex-col gap-0.5 rounded-[0.85rem] bg-white px-4 py-3.5 shadow-[0_16px_32px_rgba(0,0,0,0.25)] max-[640px]:right-0 max-[640px]:px-3.5 max-[640px]:py-2.5">
            <span className="text-[0.72rem] text-muted">Growth Rate</span>
            <span className="font-display text-[1.35rem] leading-none font-extrabold text-primary italic max-[640px]:text-[1.15rem]">
              98%
            </span>
          </div>

          <div className="absolute right-[max(0%,calc(50%-14rem))] bottom-[14%] z-3 flex animate-float-slow flex-col gap-0.5 rounded-[0.85rem] bg-white px-4 py-3.5 shadow-[0_16px_32px_rgba(0,0,0,0.25)] max-[640px]:right-0 max-[640px]:bottom-[8%] max-[640px]:px-3.5 max-[640px]:py-2.5">
            <span className="text-[0.72rem] text-muted">Squad Status</span>
            <span className="text-[1.05rem] leading-none font-extrabold text-gray-900 max-[640px]:text-[0.95rem]">
              Active
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
