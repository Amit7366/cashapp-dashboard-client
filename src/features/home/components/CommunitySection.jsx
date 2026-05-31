const STEPS = [
  { number: '01', title: 'Create your profile' },
  { number: '02', title: 'Invite your audience' },
  { number: '03', title: 'Grow engagement' },
  { number: '04', title: 'Track progress' },
]

export function CommunitySection() {
  return (
    <section className="scroll-mt-[4.5rem] bg-black md:scroll-mt-[4.75rem] lg:scroll-mt-[5.25rem]" id="community">
      <div className="mx-auto max-w-304 px-5 pb-14 md:px-6 md:pb-16 lg:px-10 lg:pb-20">
        <div className="grid grid-cols-1 gap-5 min-[961px]:grid-cols-2">
          <article className="flex flex-col justify-center rounded-[1.35rem] border border-white/6 bg-card p-6 transition-[border-color,box-shadow] duration-250 hover:border-primary/15 hover:shadow-[0_12px_32px_rgba(0,0,0,0.3)] min-[961px]:px-8 min-[961px]:py-10 max-[480px]:px-5 max-[480px]:py-6">
            <span className="mb-5 block text-[0.8125rem] font-bold tracking-widest text-primary">
              COMMUNITY
            </span>
            <h2 className="mb-5 text-[clamp(1.65rem,3.5vw,2.5rem)] leading-tight font-bold tracking-tight text-white">
              A clean space for
              <br />
              creators and gamers
            </h2>
            <p className="max-w-104 text-[clamp(0.875rem,2vw,0.95rem)] leading-relaxed text-gray-400">
              Thunder Kits helps creators organize their audience, grow
              engagement, and keep their community experience simple, fast, and
              secure.
            </p>
          </article>

          <div className="grid grid-cols-1 gap-5 min-[561px]:grid-cols-2">
            {STEPS.map((step) => (
              <article
                className="flex min-h-34 flex-col justify-center gap-2.5 rounded-[1.35rem] border border-white/6 bg-card p-6 transition-[transform,border-color,box-shadow] duration-250 hover:-translate-y-0.5 hover:border-primary/15 hover:shadow-[0_12px_32px_rgba(0,0,0,0.3)] max-[480px]:min-h-0"
                key={step.number}
              >
                <span className="text-[clamp(1.15rem,2.5vw,1.35rem)] leading-none font-bold text-primary">
                  {step.number}
                </span>
                <h3 className="text-[clamp(0.95rem,2vw,1.05rem)] leading-snug font-semibold text-white">
                  {step.title}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
