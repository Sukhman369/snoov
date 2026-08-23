import React from "react"
import Image from "next/image"
import { clx } from "@medusajs/ui"

interface BrandLogoProps {
  variant?: "gold" | "icon" | "full"
  className?: string
  priority?: boolean
  width?: number
  height?: number
}

export default function BrandLogo({
  variant = "gold",
  className,
  priority = true,
  width,
  height,
}: BrandLogoProps) {
  if (variant === "icon") {
    return (
      <div className={clx("relative inline-flex items-center justify-center", className)}>
        <Image
          src="/brand/snoov-icon.webp"
          alt="SNOOV Brand Monogram"
          width={width || 36}
          height={height || 36}
          priority={priority}
          className="object-contain"
        />
      </div>
    )
  }

  return (
    <div className={clx("relative inline-flex items-center justify-center", className)}>
      <Image
        src="/brand/snoov-logo-gold.webp"
        alt="SNOOV Atelier"
        width={width || 140}
        height={height || 54}
        priority={priority}
        className="object-contain filter drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
      />
    </div>
  )
}
