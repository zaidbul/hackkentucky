import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const tiers = [
  {
    name: "Community Sponsor",
    price: "Free",
    description: "Support our mission",
    features: [
      "Help promote the event",
      "Market the hackathon",
      "Be part of our community"
    ]
  },
  {
    name: "Purple Sponsor",
    price: "Custom",
    description: "Bring a problem or sponsor a meal",
    features: [
      // Community features
      "Help promote the event",
      "Market the hackathon",
      "Be part of our community",
      // Purple specific features
      "Specify your problem and requirements",
      "Cover a meal (Breakfast/Lunch/Dinner)",
      "Customizable whiteboard promotion",
      "Bring banners and company showcase",
      "Track competition judge spot",
      "Network with participants"
    ],
    note: "Teams select problems to work on. Consider providing compelling problems and prizes to encourage participation."
  },
  {
    name: "Partner Sponsor",
    price: "$5,000+",
    description: "You bring the big lift to the event!",
    slots: "3 slots available",
    features: [
      // Community features
      "Help promote the event",
      "Market the hackathon",
      "Be part of our community",
      // Purple features
      "Specify your problem and requirements",
      "Cover meals",
      "Customizable whiteboard promotion",
      "Bring banners and company showcase",
      "Track competition judge spot",
      "Network with participants",
      // Partner specific features
      "1 Finals Judge spot",
      "Premium Resume Pack",
      "Sponsoring the space",
      "Funding the main prize",
      "Right of first refusal for future events",
      "Prominent banner / marketing placement",
      "Multiple event shout-outs"
    ],
    note: "Above $10K will be given 'Title Sponsor' along with all the above.",
    highlight: true
  }
]

export function Sponsors() {
  return (
    <>
      <div className="container py-10 flex flex-col items-center">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-4">Sponsorship Tiers</h2>
          <p className="text-xl text-muted-foreground">
            Support the next generation of Kentucky tech talent
          </p>
        </div>

        <div className="w-full flex justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 justify-items-center place-content-center">
            {tiers.map((tier) => (
              <Card key={tier.name} className={`flex flex-col w-full max-w-sm ${tier.highlight ? 'border-primary' : ''}`}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {tier.name}
                    {tier.slots && <Badge variant="secondary">{tier.slots}</Badge>}
                  </CardTitle>
                  <div className="text-2xl font-bold">{tier.price}</div>
                  <CardDescription>{tier.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <svg
                          className="h-5 w-5 text-primary shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="ml-2">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {tier.note && (
                    <p className="mt-4 text-sm text-muted-foreground italic">
                      Note: {tier.note}
                    </p>
                  )}
                </CardContent>
                <CardFooter>
                  <a
                    href="https://kycombinator.typeform.com/sponsorhackky"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                  >
                    Become a Sponsor
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
