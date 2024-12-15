import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Mail, AlertCircle, ExternalLink } from "lucide-react"
import { sponsorTiers } from "@/data/sponsor-tiers"
import Link from "next/link"

export default function SponsorOpportunities() {
  return (
    <main className="min-h-screen">
      <SiteHeader />
      <div className="pt-20 bg-gradient-to-b from-purple-300 to-purple-100 dark:from-purple-700 dark:to-purple-900">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-purple-900 dark:text-white glow">
            Sponsor Opportunities
          </h1>
          <p className="text-xl text-purple-800 dark:text-purple-200 max-w-2xl mx-auto">
            Join us in fostering technology education and innovation in Kentucky
          </p>
        </div>
      </div>

      <section className="py-16 bg-white dark:bg-background">
        <div className="container mx-auto px-4">
          {/* Partner Tier */}
          <div className="mb-16">
            {sponsorTiers
              .filter(tier => tier.name.includes('Partner'))
              .map((tier, index) => (
                <div 
                  key={index}
                  className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-purple-100 dark:border-purple-900"
                >
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-purple-800 dark:text-purple-200 mb-2">
                      {tier.name}
                    </h3>
                    {tier.price && (
                      <p className="text-3xl font-bold mb-2">{tier.price}</p>
                    )}
                    {tier.slots && (
                      <p className="text-sm text-purple-600 dark:text-purple-400 mb-4">{tier.slots}</p>
                    )}
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      {tier.description}
                    </p>
                    {tier.benefits && (
                      <div className="mb-6">
                        <h4 className="font-semibold mb-2">You get:</h4>
                        <ul className="space-y-2">
                          {tier.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span className="text-purple-600 dark:text-purple-400">•</span>
                              <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {tier.note && (
                      <div className="mt-4 flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <p>{tier.note}</p>
                      </div>
                    )}
                  </div>
                  <Button 
                    className="w-full mt-6 bg-purple-600 hover:bg-purple-700"
                    asChild
                  >
                    <Link href="https://kycombinator.typeform.com/sponsorhackky" className="flex items-center justify-center gap-2">
                      <span>Become a {tier.name.split(' ')[0]} Sponsor</span>
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
            ))}
          </div>

          {/* Purple Tiers */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {sponsorTiers
              .filter(tier => tier.name.includes('Purple'))
              .map((tier, index) => (
                <div 
                  key={index}
                  className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-purple-100 dark:border-purple-900 flex flex-col"
                >
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-purple-800 dark:text-purple-200 mb-2">
                      {tier.name}
                    </h3>
                    {tier.price && (
                      <p className="text-3xl font-bold mb-2">{tier.price}</p>
                    )}
                    {tier.slots && (
                      <p className="text-sm text-purple-600 dark:text-purple-400 mb-4">{tier.slots}</p>
                    )}
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      {tier.description}
                    </p>
                    {tier.benefits && (
                      <div className="mb-6">
                        <h4 className="font-semibold mb-2">You get:</h4>
                        <ul className="space-y-2">
                          {tier.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span className="text-purple-600 dark:text-purple-400">•</span>
                              <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  <Button 
                    className="w-full mt-6 bg-purple-600 hover:bg-purple-700"
                    asChild
                  >
                    <Link href="https://kycombinator.typeform.com/sponsorhackky" className="flex items-center justify-center gap-2">
                      <span>Become a {tier.name.split(' ')[0]} Sponsor</span>
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
            ))}
          </div>

          {/* Community Tier */}
          <div>
            {sponsorTiers
              .filter(tier => tier.name.includes('Community'))
              .map((tier, index) => (
                <div 
                  key={index}
                  className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-purple-100 dark:border-purple-900"
                >
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-purple-800 dark:text-purple-200 mb-2">
                      {tier.name}
                    </h3>
                    {tier.price && (
                      <p className="text-3xl font-bold mb-2">{tier.price}</p>
                    )}
                    {tier.slots && (
                      <p className="text-sm text-purple-600 dark:text-purple-400 mb-4">{tier.slots}</p>
                    )}
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      {tier.description}
                    </p>
                    {tier.benefits && (
                      <div className="mb-6">
                        <h4 className="font-semibold mb-2">You get:</h4>
                        <ul className="space-y-2">
                          {tier.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span className="text-purple-600 dark:text-purple-400">•</span>
                              <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  <Button 
                    className="w-full mt-6 bg-purple-600 hover:bg-purple-700"
                    asChild
                  >
                    <Link href="https://kycombinator.typeform.com/sponsorhackky" className="flex items-center justify-center gap-2">
                      <span>Become a {tier.name.split(' ')[0]} Sponsor</span>
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">Interested in Sponsoring?</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              We&apos;re happy to discuss custom sponsorship packages that align with your goals. 
              Contact us to learn more about how you can support HackKentucky.
            </p>
            <Button asChild className="bg-purple-600 hover:bg-purple-700">
              <a href="mailto:sponsor@hackkentucky.com">
                <Mail className="w-4 h-4 mr-2" />
                Contact About Sponsorship
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}