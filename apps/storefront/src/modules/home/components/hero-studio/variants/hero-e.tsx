import React from "react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import ImagePlaceholder from "@modules/common/components/image-placeholder"

export default function HeroE() {
  return (
    <section className="relative w-full bg-snoov-canvas border-b border-snoov-border">
      <div className="content-container pt-8 sm:pt-12 pb-16 sm:pb-24">

        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8">
          <div>
            <span className="text-[11px] font-mono tracking-widest text-snoov-green uppercase font-semibold block mb-2">
              SS 2026 LOOKBOOK
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-snoov-charcoal font-normal tracking-tight">
              The Architecture of Ease
            </h1>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <LocalizedClientLink href="/store" className="btn-primary">
              SHOP COLLECTION
            </LocalizedClientLink>
          </div>
        </div>

        {/* Asymmetric image grid */}
        <div className="grid grid-cols-12 gap-3 sm:gap-4">

          {/* Main large image — left 7 columns */}
          <div className="col-span-12 sm:col-span-7 relative aspect-[4/5] sm:aspect-auto sm:min-h-[580px] overflow-hidden border border-snoov-border">
            <ImagePlaceholder
              name="Lookbook Hero — Main"
              desktop="1400 × 1800 px"
              mobile="800 × 1000 px"
              aspectRatio="4:5"
              purpose="Primary lookbook image — full outfit, clean negative space, editorial lighting"
              focalPoint="Center"
              className="w-full h-full absolute inset-0"
            />
          </div>

          {/* Right column — 5 columns, stacked */}
          <div className="col-span-12 sm:col-span-5 flex flex-row sm:flex-col gap-3 sm:gap-4">
            <div className="flex-1 sm:flex-none relative aspect-square sm:aspect-[4/3] overflow-hidden border border-snoov-border">
              <ImagePlaceholder
                name="Lookbook — Detail Shot"
                desktop="800 × 600 px"
                mobile="400 × 300 px"
                aspectRatio="4:3"
                purpose="Macro detail — fabric weave, stitching, or material texture close-up"
                focalPoint="Center"
                className="w-full h-full absolute inset-0"
              />
            </div>
            <div className="flex-1 sm:flex-none relative aspect-square sm:aspect-[4/3] overflow-hidden border border-snoov-border">
              <ImagePlaceholder
                name="Lookbook — Lifestyle Shot"
                desktop="800 × 600 px"
                mobile="400 × 300 px"
                aspectRatio="4:3"
                purpose="Lifestyle — model in motion or relaxed pose in natural environment"
                focalPoint="Center"
                className="w-full h-full absolute inset-0"
              />
            </div>
            {/* Editorial text card */}
            <div className="hidden sm:flex flex-col justify-between p-5 bg-snoov-sand border border-snoov-border flex-1">
              <p className="font-serif text-sm text-snoov-charcoal leading-relaxed italic">
                "A wardrobe refined to pure tactile necessity."
              </p>
              <div className="mt-4">
                <span className="text-[9px] font-mono text-snoov-muted uppercase tracking-widest block mb-1">
                  LIMITED EDITION
                </span>
                <span className="text-[10px] font-mono text-snoov-charcoal uppercase tracking-wide font-semibold">
                  150 PIECES / STYLE
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer description */}
        <div className="mt-6 pt-5 border-t border-snoov-border/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-xs text-snoov-muted font-sans leading-relaxed max-w-lg">
            Tailored restraint, unlined European linen, and fluid proportions designed for quiet confidence and enduring wear.
          </p>
          <LocalizedClientLink
            href="/store?category=tailoring"
            className="text-[11px] font-mono uppercase tracking-widest text-snoov-charcoal hover:text-snoov-green transition-colors flex-shrink-0"
          >
            DISCOVER TAILORING →
          </LocalizedClientLink>
        </div>

      </div>
    </section>
  )
}
