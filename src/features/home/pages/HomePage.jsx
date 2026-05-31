import { CommunitySection } from '@/features/home/components/CommunitySection'
import { CtaSection } from '@/features/home/components/CtaSection'
import { FaqSection } from '@/features/home/components/FaqSection'
import { FeaturesSection } from '@/features/home/components/FeaturesSection'
import { HeroSection } from '@/features/home/components/HeroSection'

export function HomePage() {
  return (
    <div className="w-full bg-black">
      <HeroSection />
      <FeaturesSection />
      <CommunitySection />
      <CtaSection />
      <FaqSection />
    </div>
  )
}
