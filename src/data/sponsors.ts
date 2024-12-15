interface Sponsor {
  name: string
  tier: "Partner" | "Community" | "Corporate"
  logo: string
  website?: string
}

export const sponsors: Sponsor[] = [
  // Partners
  { name: "University of Kentucky", tier: "Partner", logo: "/sponsors/uk.svg" },
  { name: "MLH", tier: "Partner", logo: "/sponsors/mlh.svg" },
  
  // Corporate Sponsors
  { name: "Microsoft", tier: "Corporate", logo: "/sponsors/microsoft.svg" },
  { name: "Google", tier: "Corporate", logo: "/sponsors/google.svg" },
  { name: "Amazon", tier: "Corporate", logo: "/sponsors/amazon.svg" },
  
  // Community Sponsors
  { name: "Local Tech", tier: "Community", logo: "/sponsors/localtech.svg" },
  { name: "Startup KY", tier: "Community", logo: "/sponsors/startupky.svg" },
  { name: "Code Kentucky", tier: "Community", logo: "/sponsors/codekentucky.svg" },
] 