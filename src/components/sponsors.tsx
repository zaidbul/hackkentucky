import { sponsors } from '@/data/sponsors'
import { SponsorImage } from './sponsor-image'
import Link from 'next/link'
export function Sponsors() {
  const partnerSponsors = sponsors.filter(s => s.tier === "Partner")
  const corporateSponsors = sponsors.filter(s => s.tier === "Corporate")
  const communitySponsors = sponsors.filter(s => s.tier === "Community")

  return (
    <section id="sponsors" className="py-20 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 text-center">Our Sponsors</h2>
        <div className="text-center mb-8">
          <Link href="/sponsors" className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 font-medium">
            View All Sponsors →
          </Link>
        </div>

        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-lg mb-4">
            Sponsorship plays a crucial role in making HackKentucky possible. Your support helps us provide resources, 
            mentorship, and opportunities to the next generation of tech innovators. Join us in fostering technology 
            education and innovation in Kentucky.
          </p>
          <Link href="/sponsor-opportunities" className="inline-block text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 font-medium">
            Learn More About Sponsoring →
          </Link>
        </div>
        
        {/* Partners */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Partners</h3>
          <div className="grid md:grid-cols-2 gap-12 max-w-2xl mx-auto">
            {partnerSponsors.map((sponsor, index) => (
              <div key={index} className="text-center">
                <SponsorImage src={sponsor.logo} alt={sponsor.name} size={200} />
                <h4 className="text-xl font-semibold">{sponsor.name}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Corporate Sponsors */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Corporate Sponsors</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {corporateSponsors.map((sponsor, index) => (
              <div key={index} className="text-center">
                <SponsorImage src={sponsor.logo} alt={sponsor.name} size={150} />
                <h4 className="text-lg font-semibold">{sponsor.name}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Community Sponsors */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">Community Sponsors</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {communitySponsors.map((sponsor, index) => (
              <div key={index} className="text-center">
                <SponsorImage src={sponsor.logo} alt={sponsor.name} size={120} />
                <h4 className="text-lg font-semibold">{sponsor.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
