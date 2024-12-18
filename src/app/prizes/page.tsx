import { SiteHeader } from "@/components/site-header"

export default function PrizesPage() {
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
              Multiple Ways to Win
            </h1>
            <p className="text-xl leading-relaxed text-gray-300">
              From bounty challenges to grand prizes, your innovation could be rewarded in multiple ways
            </p>
          </div>
        </div>
      </section>

      {/* Prize Program Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Two-Stage Prize Structure</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Qualifier Round</h3>
                <p className="text-muted-foreground">
                  Complete bounty challenges or showcase your own innovations. Top teams advance to 
                  the finals for a shot at the grand prize.
                </p>
              </div>
              <div className="bg-card p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Grand Prize Finals</h3>
                <p className="text-muted-foreground">
                  Qualified teams compete for major prizes and recognition in the ultimate showcase 
                  of innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Bounty Program Sections */}
      <section className="relative">
        <div className="sticky top-0 h-screen flex items-center bg-secondary transform-gpu transition-transform duration-500">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold mb-6">Company Challenges</h2>
              <p className="text-xl">
                Leading companies present real-world problems with dedicated prize pools for innovative solutions.
              </p>
            </div>
          </div>
        </div>

        <div className="sticky top-0 h-screen flex items-center bg-background transform-gpu transition-transform duration-500">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold mb-6">Choose Your Path</h2>
              <p className="text-xl">
                Teams can tackle sponsored bounty challenges or pursue their own innovative projects.
                Both paths offer opportunities to qualify for the finals.
              </p>
            </div>
          </div>
        </div>

        <div className="sticky top-0 h-screen flex items-center bg-secondary transform-gpu transition-transform duration-500">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold mb-6">Judging Process</h2>
              <p className="text-xl">
                Bounty challenges are evaluated by company representatives, while independent projects
                are assessed by our panel of expert judges. All qualifying teams advance to compete
                for the grand prize.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}