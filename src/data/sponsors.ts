interface Sponsor {
  name: string
  tier: "Partner" | "Community" | "Corporate"
  logo: string
  website?: string
}

export const sponsors: Sponsor[] = [
  // Partners
  { name: "Story Louisville", tier: "Partner", logo: "/sponsors/storylouisville.png" },
  { name: "Citation Labs", tier: "Partner", logo: "/sponsors/citationlabs.jpg" },
  
  // Community Sponsors
  { name: "Code Louisville", tier: "Community", logo: "/sponsors/codelouisville.png" }
]