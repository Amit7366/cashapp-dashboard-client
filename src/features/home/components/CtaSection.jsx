import { Link } from 'react-router-dom'
import { ROUTES } from '@/constants/routes'

const btnPrimaryClass =
  'inline-flex items-center justify-center rounded-full bg-primary px-[1.65rem] py-[0.85rem] text-[0.95rem] font-bold text-primary-contrast no-underline shadow-[0_0_24px_rgba(0,255,102,0.2)] transition-[transform,background-color,box-shadow] duration-150 hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-[0_0_32px_rgba(0,255,102,0.3)] active:scale-[0.97]'

const btnSecondaryClass =
  'inline-flex items-center justify-center rounded-full border border-white/14 bg-white/4 px-[1.65rem] py-[0.85rem] text-[0.95rem] font-bold text-white no-underline transition-[transform,background-color,border-color] duration-150 hover:-translate-y-0.5 hover:border-white/22 hover:bg-white/8 active:scale-[0.97]'

export function CtaSection() {
  return (
    <section className="scroll-mt-[4.5rem] bg-black md:scroll-mt-[4.75rem] lg:scroll-mt-[5.25rem]" id="growth">
      <div className="mx-auto flex max-w-304 flex-col items-center px-5 py-14 text-center md:px-6 md:py-16 lg:px-10 lg:py-20">
        <h2 className="mb-5 max-w-md text-[clamp(1.85rem,4.5vw,2.85rem)] leading-tight font-bold tracking-tight text-white">
          Start growing with Thunder Kits
          <br />
          today
        </h2>
        <p className="mb-9 max-w-136 text-[clamp(0.9rem,2vw,0.98rem)] leading-relaxed text-gray-400">
          Connect your audience, grow your creator presence, and build stronger
          engagement with Thunder Kits.
        </p>
        <div className="flex w-full flex-wrap justify-center gap-3.5 max-[480px]:max-w-80 max-[480px]:flex-col max-[480px]:items-stretch">
          <Link className={btnPrimaryClass} to={ROUTES.REGISTER}>
            Create Account
          </Link>
          <Link className={btnSecondaryClass} to={ROUTES.LOGIN}>
            Member Login
          </Link>
        </div>
      </div>
    </section>
  )
}
