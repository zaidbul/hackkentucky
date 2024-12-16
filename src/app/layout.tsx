import type { Metadata } from "next"
import { Space_Grotesk } from 'next/font/google'
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { PageTransition } from "@/components/page-transition"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { TechBackground } from "@/components/tech-background"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "KYCombinator Hackathon 2025",
  description: "Kentucky's Premier Hackathon Event",
  openGraph: {
    images: ['/hackkentuckyposter.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <TechBackground />
          <SiteHeader />
          <PageTransition>
            {children}
          </PageTransition>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  )
}

