import { SiteHeader } from "@/components/site-header"
import { PrizeHero } from "./components/prize-hero"
import { PrizeSections } from "./components/prize-sections"
import { PrizeListings } from "./components/prize-listings"

export default function PrizesPage() {
  return (
    <main className="min-h-screen">
      <SiteHeader />
      <PrizeHero />
      <PrizeSections />
      <PrizeListings />
    </main>
  )
}