interface Sponsor {
  name: string
  tier: "Partner" | "Community" | "Corporate"
  logo: string
  website?: string
}

export const sponsors: Sponsor[] = [
  // Partners
  { name: "Story Louisville", tier: "Partner", logo: "/sponsors/storylouisville.png", website: "https://www.storylouisville.com" },
  { name: "Citation Labs", tier: "Partner", logo: "/sponsors/citationlabs.jpg", website: "https://www.citationlabs.com" },
  
  // Community Sponsors
  { name: "Code Louisville", tier: "Community", logo: "/sponsors/codelouisville.png", website: "https://www.codelouisville.org" },
  { name: "Blue North", tier: "Community", logo: "/sponsors/bluenorth.jpg", website: "https://www.bluenorthky.com" },
  { name: "Sparkhaus", tier: "Community", logo: "/sponsors/sparkhaus.png", website: "https://www.sparkhaus.co" }
]