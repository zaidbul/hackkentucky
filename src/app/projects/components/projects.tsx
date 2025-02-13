"use client"

import Link from "next/link";

interface PrizeEntry {
  sponsor: string;
  prize: string[];
  problem: string;
  requirements: string[];
  tracks: string[];
}

const prizes: PrizeEntry[] = [
  {
    sponsor: "Swell Health",
    prize: [
      "$250 cash bounty (split if winner is a team)",
      "LinkedIn recommendation based on hackathon performance",
      "Swell merch (t-shirts & stickers)",
      "Guaranteed full round interview (screening skip) for next engineering opening"
    ],
    problem: "We partner with advocates, influencers & nonprofits to promote Swell. We need a central hub where we can track and share performance metrics, attribution, and scheduled payouts with partners. This is in essence an affiliate tracking app.",
    requirements: [
      "Solution must be built in Google Apps Script using Google sheets as its database",
      "AI is allowed and encouraged, just be prepared to explain your code",
      "Teams keep their code for portfolios, Swell gets a copy of winning code",
      "Admin dashboard for partner management, promo code generation, and stats tracking",
      "Partner dashboard with login, promo code viewing, and redemption tracking",
      "Leaderboard functionality in both admin and partner dashboards",
      "Redemptions sheet for manual promo code entry",
      "API for dynamic redemption data fetching",
      "Bonus: Partnership types (advocate, influencer, driver) with type-specific leaderboards",
      "Bonus: UI consistent with Swell's brand",
      "Bonus: Future development roadmap"
    ],
    tracks: ["Health", "Startup"]
  },
  {
    sponsor: "Sedrino Labs",
    prize: [
      "Prize amount $500 cash",
      "Recognition on hackathon website and social channels",
      "Potential collaboration or funding opportunities"
    ],
    problem: "We want to see you push the boundaries of multimodal AI by creatively fusing images with Large Language Models (LLMs)—with a special focus on generating high-value tokens. High-value tokens are those crucial pieces of text that deliver meaningful impact—such as life-saving medical information, breakthroughs in technical research, or transformative insights.",
    requirements: [
      "Use existing models like Google Gemini, OpenAI, or Anthropic (no building LLMs from scratch)",
      "Demonstrate high-value token generation through image-LLM integration",
      "Show innovation in model usage (e.g., bounding boxes, advanced APIs)",
      "Solve real-world, high-stakes problems with practical applications",
      "Implement robust technical methods (fine-tuning, embeddings, multimodal processing)",
      "Create user-friendly interface with clear documentation",
      "Submit demo video showing image-LLM integration",
      "Provide GitHub repository with setup instructions",
      "Include project write-up explaining technical implementation",
      "Bonus: Medical/Scientific image analysis implementation",
      "Bonus: Complex diagram/blueprint interpretation",
      "Bonus: Interactive educational/training tools",
      "Bonus: Advanced Visual Question-Answering (VQA)"
    ],
    tracks: ["AI", "Health", "Education"]
  },
  // Add more prizes as they come in
]

export function Projects() {
  const copyToClipboard = (sponsor: string) => {
    const url = `${window.location.origin}${window.location.pathname}#${sponsor.toLowerCase().replace(/\s+/g, '-')}`;
    navigator.clipboard.writeText(url);
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Sponsored Projects</h2>
            <p className="text-muted-foreground mb-8">
              Companies are offering dedicated prizes for solutions to their Projects
            </p>
            
            {/* Directory */}
            <div className="flex flex-wrap gap-3 justify-center mb-12">
              {prizes.map((prize, index) => (
                <Link
                  key={index}
                  href={`#${prize.sponsor.toLowerCase().replace(/\s+/g, '-')}`}
                  className="px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-full text-sm transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(`${prize.sponsor.toLowerCase().replace(/\s+/g, '-')}`)?.scrollIntoView({
                      behavior: 'smooth'
                    });
                  }}
                >
                  {prize.sponsor}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            {prizes.map((prize, index) => (
              <div
                id={prize.sponsor.toLowerCase().replace(/\s+/g, '-')}
                key={index}
                className="bg-card/50 backdrop-blur-sm rounded-xl shadow-lg border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="p-8">
                  <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-6">
                    <div className="flex items-center gap-2">
                      <h3 className="text-2xl font-bold">{prize.sponsor}</h3>
                      <button
                        onClick={() => copyToClipboard(prize.sponsor)}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        title="Copy link to clipboard"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="inline-block"
                        >
                          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                        </svg>
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {prize.tracks.map((track) => (
                        <span
                          key={track}
                          className="px-3 py-1 bg-primary/90 rounded-full text-sm"
                        >
                          {track}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="w-full md:w-auto">
                      <h4 className="font-semibold mb-2">Prize Package:</h4>
                      <ul className="list-none space-y-1">
                        {prize.prize.map((prizeItem, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span>•</span>
                            <span className="text-muted-foreground">{prizeItem}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Problem Statement:</h4>
                      <p className="text-muted-foreground">{prize.problem}</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-2">Requirements:</h4>
                      <ul className="grid gap-1">
                        {prize.requirements.map((req, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span>•</span>
                            <span className="text-muted-foreground">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
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