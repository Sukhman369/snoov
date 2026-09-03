"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import { clx } from "@medusajs/ui"
import { LOGO_VARIANTS, DEFAULT_LOGO_ID } from "@lib/data/logo-variants"

interface BrandLogoProps {
  variant?: "auto" | "icon" | "gold" | "script" | "custom"
  className?: string
  priority?: boolean
  width?: number
  height?: number
  dark?: boolean
  logoId?: string
  showSubtitle?: boolean
  subtitleText?: string
}

export default function BrandLogo({
  variant = "auto",
  className,
  priority = true,
  width,
  height,
  dark = false,
  logoId: explicitLogoId,
  showSubtitle = false,
  subtitleText = "Streetwear",
}: BrandLogoProps) {
  const [activeLogoId, setActiveLogoId] = useState<string>(explicitLogoId || DEFAULT_LOGO_ID)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (explicitLogoId) {
      setActiveLogoId(explicitLogoId)
      return
    }

    // Read stored logo from localStorage
    const saved = localStorage.getItem("snoov_logo")
    if (saved && LOGO_VARIANTS.some((l) => l.id === saved)) {
      setActiveLogoId(saved)
    }

    // Listen for real-time logo change events from LogoStudio
    const handleLogoChange = (e: CustomEvent<{ id: string }>) => {
      if (e.detail?.id) {
        setActiveLogoId(e.detail.id)
      }
    }

    window.addEventListener("snoov-logo-change", handleLogoChange as EventListener)
    return () => {
      window.removeEventListener("snoov-logo-change", handleLogoChange as EventListener)
    }
  }, [explicitLogoId])

  // If explicit fixed variant requested
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

  if (variant === "gold") {
    return (
      <div className={clx("relative inline-flex items-center justify-center", className)}>
        <Image
          src="/brand/snoov-logo-gold.webp"
          alt="SNOOV"
          width={width || 140}
          height={height || 54}
          priority={priority}
          className="object-contain filter drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
        />
      </div>
    )
  }

  // Dynamic active logo
  const logo = LOGO_VARIANTS.find((l) => l.id === activeLogoId) || LOGO_VARIANTS[0]

  // If "No Logo" is active, render nothing (clean minimal space)
  if (!logo.src || logo.id === "no-logo-clean") {
    return null
  }

  const imageSrc = dark && logo.srcDark ? logo.srcDark : logo.src
  const finalWidth = width || logo.width
  const finalHeight = height || logo.height

  return (
    <div
      className={clx(
        "relative inline-flex flex-col items-center justify-center text-center transition-all duration-300",
        className
      )}
    >
      <img
        src={imageSrc}
        alt={logo.name}
        width={finalWidth}
        height={finalHeight}
        className={clx(
          "object-contain filter drop-shadow-sm transition-transform duration-300 group-hover:scale-105",
          mounted ? "opacity-100 scale-100" : "opacity-90"
        )}
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
