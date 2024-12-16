import { sponsors } from '@/data/sponsors'
import { SponsorImage } from './sponsor-image'
import Link from 'next/link'

export function Sponsors() {
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

        <div className="grid md:grid-cols-3 gap-12">
          {sponsors.map((sponsor, index) => (
            <div key={index} className="text-center">
              <SponsorImage src={sponsor.logo} alt={sponsor.name} size={180} />
              <h4 className="text-xl font-semibold mb-2">
                {sponsor.website ? (
                  <Link href={sponsor.website} className="hover:text-purple-600 dark:hover:text-purple-400">
                    {sponsor.name}
                  </Link>
                ) : (
                  sponsor.name
                )}
              </h4>
              <span className="inline-block px-4 py-1 bg-purple-100 dark:bg-purple-800 rounded-full text-purple-700 dark:text-purple-200 text-sm font-medium">
                {sponsor.tier}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
