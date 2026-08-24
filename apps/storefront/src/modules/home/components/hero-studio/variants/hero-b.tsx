import React from "react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import ImagePlaceholder from "@modules/common/components/image-placeholder"

export default function HeroB() {
  return (
    <section className="relative w-full min-h-[90vh] border-b border-snoov-border overflow-hidden">
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <ImagePlaceholder
          name="Cinematic Campaign Hero"
          desktop="2560 × 1440 px"
          mobile="1080 × 1920 px"
          aspectRatio="Full Viewport"
          purpose="Dark cinematic campaign — dramatic single-figure, low-key lighting, editorial atmosphere"
          focalPoint="Center"
          className="w-full h-full"
        />
        {/* Dark gradient — bottom heavy */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />
      </div>

      {/* Content — anchored to bottom */}
      <div className="relative z-10 flex flex-col justify-end min-h-[90vh] content-container pb-16 sm:pb-24">
        <div className="max-w-3xl">
          <span className="text-[11px] font-mono tracking-widest text-white/50 uppercase font-semibold block mb-5">
            COLLECTION 04 / SPRING SUMMER 2026
          </span>
          <h1 className="font-serif text-5xl sm:text-7xl md:text-[6.5rem] text-white font-normal tracking-tighter leading-none mb-6">
            The Architecture<br />of Ease
          </h1>
          <p className="text-sm text-white/65 max-w-md font-sans leading-relaxed mb-10">
            Tailored restraint, unlined European linen, and fluid proportions for quiet confidence.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <LocalizedClientLink
              href="/store"
              className="px-8 py-3.5 bg-white text-snoov-charcoal text-[11px] font-mono uppercase tracking-widest hover:bg-snoov-ecru transition-colors"
            >
              EXPLORE COLLECTION
            </LocalizedClientLink>
            <LocalizedClientLink
              href="/store?category=tailoring"
              className="px-8 py-3.5 border border-white/40 text-white text-[11px] font-mono uppercase tracking-widest hover:border-white transition-colors"
            >
              VIEW LOOKBOOK
            </LocalizedClientLink>
          </div>
        </div>
      </div>

      {/* Top-right metadata */}
      <div className="absolute top-8 right-8 z-10 text-right">
        <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest block">SS 2026</span>
        <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">150 PIECES / STYLE</span>
      </div>
    </section>
  )
}
