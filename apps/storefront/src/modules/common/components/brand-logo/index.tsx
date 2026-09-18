import React from "react"
import Image from "next/image"
import { clx } from "@medusajs/ui"

interface BrandLogoProps {
  variant?: "auto" | "icon" | "gold"
  className?: string
  priority?: boolean
  width?: number
  height?: number
  dark?: boolean
  showSubtitle?: boolean
  subtitleText?: string
}

export default function BrandLogo({
  variant = "gold",
  className,
  priority = true,
  width,
  height,
  showSubtitle = false,
  subtitleText = "Streetwear",
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

  // Chosen Brand Logo: 02 — Royal Gold Serif
  const finalWidth = width || 145
  const finalHeight = height || 52

  return (
    <div
      className={clx(
        "relative inline-flex flex-col items-center justify-center text-center transition-all duration-300",
        className
      )}
    >
      <Image
        src="/brand/snoov-logo-gold.webp"
        alt="SNOOV"
        width={finalWidth}
        height={finalHeight}
        priority={priority}
        className="object-contain filter drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
        style={{
          maxHeight: height ? `${height}px` : "58px",
          width: "auto",
        }}
      />
      {showSubtitle && (
        <span className="text-[8px] tracking-[0.4em] text-snoov-muted uppercase font-sans font-medium -mt-0.5 group-hover:text-snoov-charcoal transition-colors duration-300">
          {subtitleText}
        </span>
      )}
    </div>
  )
}
