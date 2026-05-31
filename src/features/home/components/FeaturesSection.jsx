const FEATURES = [
  {
    id: 'squad-growth',
    icon: '🚀',
    title: 'SQUAD GROWTH',
    description:
      'Grow your audience with modern creator tools, community engagement, and Thunder Kits networking features.',
  },
  {
    id: 'gaming-community',
    icon: '🎮',
    title: 'GAMING COMMUNITY',
    description:
      'Build stronger connections with gamers, streamers, creators, and active online audiences.',
  },
  {
    id: 'live-stats',
    icon: '📈',
    title: 'LIVE STATS',
    description:
      'Track community growth, creator engagement, and audience activity from one modern dashboard.',
  },
]

export function FeaturesSection() {
  return (
    <section className="scroll-mt-[4.5rem] bg-black md:scroll-mt-[4.75rem] lg:scroll-mt-[5.25rem]" id="features">
      <div className="mx-auto max-w-304 px-5 py-14 md:px-6 md:py-16 lg:px-10 lg:py-20">
        <header className="mb-11 max-[640px]:mb-8">
          <span className="mb-4 block text-[0.8125rem] font-bold tracking-widest text-primary">
            FEATURES
          </span>
          <h2 className="max-w-136 text-[clamp(1.85rem,4vw,2.85rem)] leading-tight font-bold tracking-tight text-white">
            Everything you need to grow
            <br />
            with Thunder Kits
          </h2>
        </header>

        <div className="grid grid-cols-1 gap-5 min-[641px]:grid-cols-2 min-[961px]:grid-cols-3">
          {FEATURES.map((feature) => (
            <article
              className="group flex flex-col gap-4 rounded-[1.35rem] border border-white/6 bg-card p-7 transition-[transform,border-color,box-shadow] duration-250 hover:-translate-y-1 hover:border-primary/20 hover:shadow-[0_16px_40px_rgba(0,0,0,0.35)] max-[480px]:px-5 max-[480px]:py-6"
              key={feature.id}
            >
              <div className="flex size-11 items-center justify-center rounded-xl border border-white/8 bg-white/4 transition-colors duration-150 group-hover:bg-primary/8">
                <span aria-hidden="true" className="text-[1.15rem] leading-none">
                  {feature.icon}
                </span>
              </div>
              <h3 className="font-display text-[clamp(1.15rem,2.5vw,1.35rem)] leading-tight font-extrabold text-white italic">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-400">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
