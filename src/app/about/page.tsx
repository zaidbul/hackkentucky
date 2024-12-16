import { SiteHeader } from "@/components/site-header"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <SiteHeader />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-[#1a1a2e] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" 
               style={{
                 backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
                 backgroundSize: '40px 40px'
               }}
          />
        </div>

        <div className="container relative mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-6xl font-bold text-white mb-6">
              Join the Innovation
            </h1>
            <p className="text-xl leading-relaxed text-gray-300">
              HackKentucky is more than just a hackathon—it&apos;s a celebration of creativity, 
              collaboration, and technological innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Who Should Attend Section */}
      <section className="py-20 bg-background text-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Who Should Attend?</h2>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground">
                Whether you&apos;re a seasoned coder or just starting your tech journey, HackKentucky 
                welcomes all who are passionate about technology and innovation.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Computer Science and Engineering students looking to apply their skills</li>
                <li>Design students interested in creating user experiences</li>
                <li>Business students wanting to develop entrepreneurial tech solutions</li>
                <li>First-time hackers eager to learn and explore</li>
                <li>Experienced developers ready to mentor and lead</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Environment and Experience Section */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">The HackKentucky Experience</h2>
            <div className="space-y-6">
              <p className="text-lg">
                We&apos;ve created an environment that balances serious innovation with genuine fun. 
                You&apos;ll find:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">Work Hard Yes</h3>
                  <ul className="space-y-2">
                    <li>• State-of-the-art facilities</li>
                    <li>• High-speed internet</li>
                    <li>• Quiet spaces for focus</li>
                    <li>• Technical mentorship</li>
                  </ul>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">Play Hard Yes</h3>
                  <ul className="space-y-2">
                    <li>• Gaming breaks</li>
                    <li>• Social events</li>
                    <li>• Midnight snacks</li>
                    <li>• Fun competitions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bounty Program Section */}
      <section className="py-20 bg-background text-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Bounty Program</h2>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground">
                Our bounty program offers additional rewards for tackling specific challenges 
                set by our sponsors. These bounties:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-primary font-bold text-xl mr-2">•</span>
                  <div>
                    <span className="font-semibold">Range from $500 to $2000</span>
                    <p className="text-muted-foreground">Solve specific industry challenges for cash or in-kind prizes</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold text-xl mr-2">•</span>
                  <div>
                    <span className="font-semibold">Include Sponsor Mentorship</span>
                    <p className="text-muted-foreground">Get direct guidance from industry experts</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold text-xl mr-2">•</span>
                  <div>
                    <span className="font-semibold">Offer Real-World Impact</span>
                    <p className="text-muted-foreground">Work on problems that matter to leading companies</p>
                  </div>
                </li>
              </ul>
              <div className="text-center mt-8">
                <p className="text-lg mb-4">
                  Are you a company interested in sponsoring a bounty challenge? Help shape the future of tech in Kentucky!
                </p>
                <a 
                  href="https://kycombinator.typeform.com/sponsorhackky"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors"
                >
                  Sponsor a Bounty Challenge →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Formation Section */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Building Your Team</h2>
            <div className="space-y-6">
              <p className="text-lg">
                Don&apos;t have a team? No problem! We facilitate team formation through:
              </p>
              <div className="grid gap-6">
                <div className="bg-card p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">Team Formation Event</h3>
                  <p>
                    Participate in our structured team formation activities at the start of the 
                    hackathon to find the perfect match for your skills and interests.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">Flexible Team Sizes</h3>
                  <p>
                    Form teams of 2-5 people, mixing different skills and experience levels for 
                    the best results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
