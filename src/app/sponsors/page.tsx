import { SiteHeader } from "@/components/site-header"
import { Sponsors } from "./sponsors"
import { SponsorHero } from "./hero"
import { WhySponsor } from "./why-sponsor"
import { CursorSparkle } from "@/components/cursor-sparkle"

export default function SponsorsPage() {
  return (
    <main className="min-h-screen">
      <CursorSparkle />
      <SiteHeader />
      <SponsorHero />
      <WhySponsor />
      <Sponsors />
    </main>
  )
}

