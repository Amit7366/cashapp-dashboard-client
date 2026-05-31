export function FaqSection() {
  return (
    <section className="scroll-mt-[4.5rem] bg-black md:scroll-mt-[4.75rem] lg:scroll-mt-[5.25rem]" id="faq">
      <div className="mx-auto flex max-w-304 flex-col items-center px-5 pb-14 text-center md:px-6 md:pb-16 lg:px-10 lg:pb-20">
        <span className="mb-5 block text-[0.8125rem] font-bold tracking-widest text-primary">
          FAQ
        </span>
        <h2 className="mb-5 max-w-xl text-[clamp(1.85rem,4.5vw,2.85rem)] leading-tight font-bold tracking-tight text-white">
          Simple, safe, and community focused
        </h2>
        <p className="max-w-152 text-[clamp(0.9rem,2vw,0.98rem)] leading-relaxed text-gray-400">
          Thunder Kits is designed for creators and communities who want a clean
          platform to grow, connect, and manage audience engagement.
        </p>
      </div>
    </section>
  )
}
