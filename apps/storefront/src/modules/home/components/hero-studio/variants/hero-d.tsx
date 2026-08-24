import React from "react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import ImagePlaceholder from "@modules/common/components/image-placeholder"

export default function HeroD() {
  return (
    <section className="relative w-full bg-snoov-canvas border-b border-snoov-border overflow-hidden">
      <div className="content-container pt-10 pb-16 sm:pt-16 sm:pb-24">

        {/* Season tag */}
        <span className="text-[11px] font-mono tracking-widest text-snoov-green uppercase font-semibold block mb-4 sm:mb-6">
          COLLECTION 04 / SPRING SUMMER 2026
        </span>

        {/* Oversized headline + small accent image inline */}
        <div className="relative">
          <h1 className="font-serif text-[clamp(3rem,11vw,9.5rem)] text-snoov-charcoal font-normal tracking-tighter leading-[0.92]">
            The
          </h1>
          <h1 className="font-serif text-[clamp(3rem,11vw,9.5rem)] text-snoov-charcoal font-normal tracking-tighter leading-[0.92]">
            Architecture
          </h1>
          <div className="flex items-end justify-between">
            <h1 className="font-serif text-[clamp(3rem,11vw,9.5rem)] text-snoov-charcoal font-normal tracking-tighter leading-[0.92]">
              of Ease
            </h1>
            {/* Small accent image — floats at end of last headline */}
            <div className="hidden sm:block relative w-36 md:w-52 lg:w-64 aspect-[3/4] flex-shrink-0 mb-1 overflow-hidden border border-snoov-border">
              <ImagePlaceholder
                name="Typography Hero Accent"
                desktop="640 × 853 px"
                mobile="400 × 533 px"
                aspectRatio="3:4"
                purpose="Intimate close-up — fabric drape, single garment detail, or hands holding textile"
                focalPoint="Center"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Divider + CTA + Description row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mt-10 sm:mt-14 pt-8 border-t border-snoov-border">
          <p className="text-xs sm:text-sm text-snoov-muted max-w-xs font-sans leading-relaxed">
            Tailored restraint, unlined European linen, and fluid proportions for quiet confidence and enduring wear.
          </p>
          <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
            <LocalizedClientLink href="/store" className="btn-primary">
              SHOP NOW
            </LocalizedClientLink>
            <LocalizedClientLink href="/store?category=tailoring" className="btn-secondary">
              VIEW LOOKBOOK
            </LocalizedClientLink>
          </div>
        </div>

      </div>
    </section>
  )
}
