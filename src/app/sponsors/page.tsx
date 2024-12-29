import { SiteHeader } from "@/components/site-header"
import { Sponsors } from "./sponsors"
import { SponsorHero } from "./hero"
import { WhySponsor } from "./why-sponsor"

export default function SponsorsPage() {
  return (
    <main className="min-h-screen">
      <SiteHeader />
      <SponsorHero />
      <WhySponsor />
      <Sponsors />
    </main>
  )
}

