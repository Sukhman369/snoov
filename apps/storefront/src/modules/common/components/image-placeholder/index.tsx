import React from "react"
import { clx } from "@medusajs/ui"

interface ImagePlaceholderProps {
  name: string
  desktop: string
  mobile?: string
  aspectRatio?: string
  purpose?: string
  focalPoint?: string
  className?: string
  src?: string | null
  alt?: string
  priority?: boolean
  showBadge?: boolean
}

/**
 * ImagePlaceholder Component
 *
 * Renders luxury fashion imagery with editorial styling and fallback assets.
 */
export default function ImagePlaceholder({
  name,
  desktop,
  mobile,
  aspectRatio = "3:4",
  purpose,
  focalPoint = "Center",
  className,
  src,
  alt,
  showBadge = false,
}: ImagePlaceholderProps) {
  // Default to appropriate high-fashion model crop based on aspect ratio or explicit src
  const defaultSrc =
    aspectRatio.includes("21:10") ||
    aspectRatio.includes("16:10") ||
    aspectRatio.includes("16:11") ||
    aspectRatio.includes("Full Viewport")
      ? "/images/model-main.webp"
      : aspectRatio.includes("4:3") || aspectRatio.includes("square")
      ? "/images/model-detail.webp"
      : "/images/model-portrait.webp"

  const imageSrc = src || defaultSrc

  return (
    <div
      className={clx(
        "relative w-full h-full overflow-hidden bg-snoov-sand select-none group",
        className
      )}
    >
      <img
        src={imageSrc}
        alt={alt || name}
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        style={{
          objectPosition:
            focalPoint === "Top Center"
              ? "center top"
              : focalPoint === "Center Right"
              ? "right center"
              : "center center",
        }}
        loading="lazy"
      />

      {/* Subtle Luxury Gradient for visual depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none opacity-40 group-hover:opacity-20 transition-opacity" />

      {/* Optional Editorial Tag */}
      {showBadge && (
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-flex items-center px-2 py-0.5 text-[9px] uppercase tracking-widest font-semibold bg-white/90 backdrop-blur-sm text-snoov-charcoal border border-snoov-border shadow-xs">
            {aspectRatio}
          </span>
        </div>
      )}
    </div>
  )
}
