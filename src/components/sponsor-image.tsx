'use client'

import Image from 'next/image'
import { ImageOff } from 'lucide-react'

export function SponsorImage({ src, alt, size }: { src: string; alt: string; size: number }) {
  return (
    <div className="relative mx-auto mb-4" style={{ width: size, height: size }}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          width={size}
          height={size}
          className="object-contain"
          onError={(e) => {
            e.currentTarget.style.display = 'none'
            e.currentTarget.nextElementSibling?.classList.remove('hidden')
          }}
        />
      ) : null}
      <div className={`absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg ${src ? 'hidden' : ''}`}>
        <ImageOff className="w-1/3 h-1/3 text-gray-400" />
      </div>
    </div>
  )
} 