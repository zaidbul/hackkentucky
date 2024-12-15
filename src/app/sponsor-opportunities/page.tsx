import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Mail, AlertCircle, ExternalLink } from "lucide-react"
import { sponsorTiers } from "@/data/sponsor-tiers"
import Link from "next/link"

export default function SponsorOpportunities() {
  return (
    <main className="min-h-screen">
      <SiteHeader />
      <div className="relative pt-20 bg-gradient-to-b from-purple-300 via-purple-200 to-purple-100 dark:from-purple-700 dark:via-purple-800 dark:to-purple-900 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                backgroundColor: 'currentColor',
                borderRadius: '50%',
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${Math.random() * 3 + 2}s`
              }}
            />
          ))}
        </div>

        <div className="container relative mx-auto px-4 py-24 text-center">
          <span className="inline-block mb-4 px-4 py-1.5 bg-purple-100 dark:bg-purple-800 rounded-full text-purple-700 dark:text-purple-200 text-sm font-medium">
            Partner with HackKentucky
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-purple-900 dark:text-white glow tracking-tight">
            Empower the Next Generation<br />of Tech Innovation
          </h1>
          <p className="text-xl md:text-2xl text-purple-800 dark:text-purple-200 max-w-3xl mx-auto mb-8 leading-relaxed">
            Join Kentucky&apos;s premier hackathon as a sponsor and help shape the future of technology while connecting with top talent
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg"
              asChild
            >
              <Link href="https://kycombinator.typeform.com/sponsorhackky" className="flex items-center gap-2">
                <span>Become a Sponsor</span>
                <ExternalLink className="w-5 h-5" />
              </Link>
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-purple-600 text-purple-700 dark:text-purple-200 hover:bg-purple-50 dark:hover:bg-purple-800/50 px-8 py-6 text-lg"
              asChild
            >
              <a href="mailto:sponsor@hackkentucky.com" className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span>Contact Us</span>
              </a>
            </Button>
          </div>
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