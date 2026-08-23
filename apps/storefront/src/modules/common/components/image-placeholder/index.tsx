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
 * Provides a high-fashion, art-directed placeholder with strict production specifications
 * for the graphic design team, matching the SNOOV warm ivory/ecru editorial aesthetic.
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
  showBadge = true,
}: ImagePlaceholderProps) {
  if (src) {
    return (
      <div className={clx("relative overflow-hidden bg-snoov-sand", className)}>
        <img
          src={src}
          alt={alt || name}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          loading="lazy"
        />
      </div>
    )
  }

  return (
    <div
      className={clx(
        "relative flex flex-col justify-between p-4 sm:p-6 overflow-hidden bg-snoov-sand border border-snoov-border select-none group transition-colors duration-300 hover:border-snoov-border-dark",
        className
      )}
      style={{
        backgroundImage: `radial-gradient(circle at 50% 50%, rgba(239, 233, 221, 0.6) 0%, rgba(245, 241, 232, 1) 100%)`,
      }}
    >
      {/* Subtle Grid / Texture Crosshair Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-snoov-muted" />
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[1px] bg-snoov-muted" />
      </div>

      {/* Top Meta Header */}
      <div className="relative z-10 flex items-start justify-between gap-2">
        {showBadge && (
          <span className="inline-flex items-center px-2 py-0.5 text-[9px] uppercase tracking-widest font-semibold bg-white/80 backdrop-blur-sm text-snoov-charcoal border border-snoov-border">
            {aspectRatio}
          </span>
        )}
        <span className="text-[10px] tracking-widest text-snoov-muted/80 uppercase font-mono">
          SLOT: {name}
        </span>
      </div>

      {/* Center Art Direction Notice */}
      <div className="relative z-10 my-auto text-center py-6 px-2">
        <div className="inline-block w-8 h-[1px] bg-snoov-green mb-3" />
        <p className="text-xs sm:text-sm font-serif italic text-snoov-charcoal">
          {purpose || name}
        </p>
        <p className="mt-1 text-[10px] tracking-wider uppercase text-snoov-muted font-sans font-medium">
          [ Production Asset Slot ]
        </p>
      </div>

      {/* Bottom Production Specifications */}
      <div className="relative z-10 pt-2 border-t border-snoov-border/60 flex flex-wrap items-center justify-between text-[9px] font-mono text-snoov-muted gap-x-3 gap-y-1">
        <div>
          <span className="text-snoov-charcoal font-medium">D:</span> {desktop}
        </div>
        {mobile && (
          <div>
            <span className="text-snoov-charcoal font-medium">M:</span> {mobile}
          </div>
        )}
        {focalPoint && (
          <div className="hidden sm:block">
            <span className="text-snoov-charcoal font-medium">Focal:</span> {focalPoint}
          </div>
        )}
      </div>
    </div>
  )
}
