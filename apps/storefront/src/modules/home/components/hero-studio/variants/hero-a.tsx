import React from "react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import ImagePlaceholder from "@modules/common/components/image-placeholder"

export default function HeroA() {
  return (
    <section className="relative w-full bg-snoov-canvas pt-6 sm:pt-10 pb-16 sm:pb-24 border-b border-snoov-border">
      <div className="content-container">

        {/* Editorial Subheader */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-8">
          <div>
            <span className="text-[11px] font-mono tracking-widest text-snoov-green uppercase font-semibold">
              COLLECTION 04 / SPRING SUMMER 2026
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-snoov-charcoal font-normal tracking-tight mt-1">
              The Architecture of Ease
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-snoov-muted max-w-md font-sans leading-relaxed">
            Tailored restraint, unlined European linen, and fluid proportions designed for quiet confidence and enduring wear.
          </p>
        </div>

        {/* Hero Visual */}
        <div className="relative w-full aspect-[16/10] sm:aspect-[21/10] max-h-[700px] overflow-hidden rounded-[2px] border border-snoov-border">
          <ImagePlaceholder
            name="Main Seasonal Campaign Hero"
            desktop="2400 × 1400 px"
            mobile="1200 × 1600 px"
            aspectRatio="21:10 Desktop / 3:4 Mobile"
            purpose="Art-directed Spring/Summer 2026 campaign visual on Mediterranean coastal terrace"
            focalPoint="Center Right"
            className="w-full h-full"
          />
          <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 z-20 bg-white/90 backdrop-blur-md border border-snoov-border p-4 sm:p-6 max-w-[280px] sm:max-w-xs shadow-sm">
            <span className="text-[9px] uppercase tracking-widest font-mono text-snoov-green font-semibold block mb-1">
              SEASONAL EDITORIAL
            </span>
            <p className="font-serif text-sm sm:text-base text-snoov-charcoal leading-snug">
              "A wardrobe refined to pure tactile necessity."
            </p>
            <LocalizedClientLink
              href="/store"
              className="inline-flex items-center gap-1.5 text-[10px] tracking-editorial uppercase font-medium text-snoov-charcoal hover:text-snoov-green transition-colors mt-3"
            >
              <span>VIEW LOOKBOOK</span>
              <span>→</span>
            </LocalizedClientLink>
          </div>
        </div>

        {/* CTA Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mt-8 pt-6 border-t border-snoov-border/60">
          <div className="flex items-center gap-4 text-xs font-mono text-snoov-muted">
            <span className="inline-block w-2 h-2 rounded-full bg-snoov-green" />
            <span>LIMITED RUN OF 150 NUMBERED PIECES PER STYLE</span>
          </div>
          <div className="flex items-center gap-3 sm:gap-4">
            <LocalizedClientLink href="/store" className="btn-primary">
              EXPLORE COLLECTION
            </LocalizedClientLink>
            <LocalizedClientLink href="/store?category=tailoring" className="btn-secondary">
              DISCOVER TAILORING
            </LocalizedClientLink>
          </div>
        </div>

      </div>
    </section>
  )
}
