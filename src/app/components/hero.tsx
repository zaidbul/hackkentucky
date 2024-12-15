"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-purple-300 to-background dark:from-purple-700/50 dark:to-background">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Stars */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              backgroundColor: 'white',
              borderRadius: '50%',
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
        
        {/* Light Beams */}
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="beam"
            style={{
              left: `${Math.random() * 100}%`,
              top: '0',
              width: '1px',
              height: '100vh',
              transform: `rotate(${Math.random() * 360}deg)`,
              animationDuration: `${20 + Math.random() * 10}s`,
              animationDelay: `${Math.random() * -20}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
         <p className="text-lg md:text-xl mb-2 text-purple-900 dark:text-purple-300">KYCombinator x Story</p>
        <h1 className="text-7xl md:text-9xl font-bold mb-6 tracking-tighter text-purple-900 dark:text-white glow">
          Hack Kentucky
          <br />
          <span className="text-purple-500 dark:text-purple-300">2025</span>
        </h1>
        <p className="text-3xl md:text-4xl text-purple-900 dark:text-white mb-4 glow">
          02.21 - 02.23
        </p>
        <p className="text-xl md:text-2xl text-purple-900 dark:text-white mb-12">
          Story, 828 East Market Street, Louisville, KY
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <Button asChild size="lg" className="bg-purple-700 hover:bg-purple-600 text-white dark:bg-purple-600 dark:hover:bg-purple-500 font-semibold">
            <Link href="https://lu.ma/s9igbhj9" target="_blank">
              Join Now
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="bg-purple-100 text-purple-900 hover:bg-purple-200 border-purple-300 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 dark:border-white">
            <Link href="/about">
              Learn More
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

