import React from "react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import ImagePlaceholder from "@modules/common/components/image-placeholder"

export default function HeroC() {
  return (
    <section className="relative w-full border-b border-snoov-border bg-snoov-canvas">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[88vh]">

        {/* Left — Text content */}
        <div className="flex flex-col justify-between p-8 sm:p-12 md:p-16 pt-12 md:pt-20 border-b md:border-b-0 md:border-r border-snoov-border order-2 md:order-1">
          <div>
            <span className="text-[10px] font-mono tracking-widest text-snoov-green uppercase font-semibold block mb-8 sm:mb-12">
              COLLECTION 04 / SS 2026
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-snoov-charcoal font-normal tracking-tight leading-[1.05] mb-6">
              The<br />Architecture<br />of Ease
            </h1>
            <p className="text-xs sm:text-sm text-snoov-muted max-w-sm font-sans leading-relaxed">
              Tailored restraint, unlined European linen, and fluid proportions designed for quiet confidence and enduring wear.
            </p>
          </div>
          <div>
            <div className="flex items-center gap-4 text-[11px] font-mono text-snoov-muted mb-6 pb-6 border-t border-snoov-border/60 pt-6">
              <span className="inline-block w-2 h-2 rounded-full bg-snoov-green flex-shrink-0" />
              <span>LIMITED — 150 NUMBERED PIECES PER STYLE</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <LocalizedClientLink href="/store" className="btn-primary">
                EXPLORE COLLECTION
              </LocalizedClientLink>
              <LocalizedClientLink href="/store?category=tailoring" className="btn-secondary">
                DISCOVER TAILORING
              </LocalizedClientLink>
            </div>
          </div>
        </div>

        {/* Right — Image */}
        <div className="relative min-h-[70vw] md:min-h-full overflow-hidden order-1 md:order-2">
          <ImagePlaceholder
            name="Split Hero Campaign Image"
            desktop="1200 × 1600 px"
            mobile="800 × 1000 px"
            aspectRatio="3:4 Portrait"
            purpose="Editorial portrait — single model, natural light, neutral backdrop, full silhouette visible"
            focalPoint="Top Center"
            className="w-full h-full absolute inset-0"
          />
          {/* Bottom-right quote */}
          <div className="absolute bottom-6 right-6 z-10 max-w-[180px] text-right">
            <p className="font-serif text-xs text-white/80 leading-relaxed italic">
              "A wardrobe refined to pure tactile necessity."
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
