import React from "react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import ImagePlaceholder from "@modules/common/components/image-placeholder"

export default function CollectionFeature() {
  return (
    <section className="py-20 sm:py-32 bg-snoov-sand/40 border-b border-snoov-border overflow-hidden">
      <div className="content-container">
        
        {/* Asymmetric 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Left Large Visual Campaign (7 Columns) */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[4/5] sm:aspect-[16/11] w-full overflow-hidden rounded-[2px] border border-snoov-border shadow-sm">
              <ImagePlaceholder
                name="Collection Spotlight Feature"
                desktop="2400 × 1200 px"
                mobile="1200 × 1500 px"
                aspectRatio="16:11 Desktop / 4:5 Mobile"
                purpose="Full-body model showcase featuring the Raw Ecru Linen Suit in movement on architectural concrete background"
                focalPoint="Center"
                className="w-full h-full"
              />
              
              {/* Corner Specification Tag */}
              <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm px-2.5 py-1 text-[9px] font-mono uppercase tracking-widest text-snoov-charcoal border border-snoov-border">
                FEATURED ENSEMBLE · LOOK 07
              </div>
            </div>
          </div>

          {/* Right Editorial Story & Details (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[1px] bg-snoov-green" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-snoov-green font-semibold">
                THE CAPSULE HIGHLIGHT
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-snoov-charcoal font-normal tracking-tight leading-[1.15]">
              The Monochrome Linen Suit
            </h2>

            <p className="mt-5 text-sm sm:text-base text-snoov-muted leading-relaxed font-sans">
              Crafted from 100% Normandy-grown flax, woven at a historic Flemish mill. Designed with soft, deconstructed shoulders and unlined breathability for effortless summer layering.
            </p>

            {/* Spec Breakdown Box */}
            <div className="mt-8 p-6 bg-white border border-snoov-border rounded-[2px] space-y-3.5 text-xs">
              <div className="flex justify-between items-center pb-2.5 border-b border-snoov-border/60">
                <span className="text-snoov-muted uppercase tracking-wider text-[10px] font-mono">Fibre Origin</span>
                <span className="font-medium text-snoov-charcoal">Normandy, France</span>
              </div>
              <div className="flex justify-between items-center pb-2.5 border-b border-snoov-border/60">
                <span className="text-snoov-muted uppercase tracking-wider text-[10px] font-mono">Weave Weight</span>
                <span className="font-medium text-snoov-charcoal">240 GSM Mid-Weight</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-snoov-muted uppercase tracking-wider text-[10px] font-mono">Buttons</span>
                <span className="font-medium text-snoov-charcoal">Natural Corozo Nut</span>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <LocalizedClientLink href="/products/oversized-belgian-linen-blazer" className="btn-primary">
                SHOP THE BLAZER ($380)
              </LocalizedClientLink>
              <LocalizedClientLink href="/products/pleated-wide-leg-trousers" className="btn-secondary">
                VIEW TROUSERS ($290)
              </LocalizedClientLink>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
