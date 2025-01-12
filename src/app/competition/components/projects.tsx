import Link from "next/link";

interface PrizeEntry {
  sponsor: string;
  prize: string;
  problem: string;
  requirements: string[];
  tracks: string[];
}

const prizes: PrizeEntry[] = [
  {
    sponsor: "Swell Health",
    prize: "$250",
    problem: "TBD",
    requirements: [
    ],
    tracks: ["Health", "Startup"]
  },
  {
    sponsor: "Sedrino Labs",
    prize: "$500",
    problem: "TBD",
    requirements: [
    ],
    tracks: ["AI", "Startup"]
  },
  // Add more prizes as they come in
]

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Sponsored Projects</h2>
            <p className="text-muted-foreground">
              Companies are offering dedicated prizes for solutions to their Projects
            </p>
          </div>

          <div className="space-y-6">
            {prizes.map((prize, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{prize.sponsor}</h3>
                  <span className="text-xl font-bold text-primary">{prize.prize}</span>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Problem:</h4>
                    <p className="text-muted-foreground">{prize.problem}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Requirements:</h4>
                    <ul className="list-disc pl-5 text-muted-foreground">
                      {prize.requirements.map((req, i) => (
                        <li key={i}>{req}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {prize.tracks.map((track) => (
                      <span
                        key={track}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {track}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="bg-primary/5 p-8 rounded-xl text-center">
            <h3 className="text-2xl font-bold mb-4">Want to Submit a Project?</h3>
            <p className="text-muted-foreground mb-6">
              Join other innovative companies in challenging our hackers with your problem.
            </p>
            <Link
              href="https://kycombinator.typeform.com/hackkyproject"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-all duration-300"
            >
              Submit Your Project
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
} 