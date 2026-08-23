import React from "react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default function EditorialBrandStatement() {
  return (
    <section className="py-20 sm:py-32 bg-snoov-canvas border-b border-snoov-border">
      <div className="editorial-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
          
          {/* Left Metadata */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-3">
              <span className="w-6 h-[1px] bg-snoov-green" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-snoov-green font-semibold">
                PHILOSOPHY 01
              </span>
            </div>
            <p className="text-xs uppercase tracking-editorial text-snoov-muted font-medium mt-3">
              The Art of Restraint
            </p>
          </div>

          {/* Center / Right Editorial Quote */}
          <div className="lg:col-span-9">
            <blockquote className="font-serif text-2xl sm:text-4xl md:text-5xl text-snoov-charcoal font-normal leading-[1.3] sm:leading-[1.25] tracking-tight">
              "We design garments with quiet conviction. Every piece is an exploration of organic European textiles, intentional proportion, and enduring craftsmanship meant to be worn for decades."
            </blockquote>

            <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-8 border-t border-snoov-border">
              <div className="flex items-center gap-8 text-xs font-mono text-snoov-muted">
                <div>
                  <span className="block text-snoov-charcoal font-medium text-sm font-sans">01 / FIBRE</span>
                  <span>100% Traceable European Flax</span>
                </div>
                <div>
                  <span className="block text-snoov-charcoal font-medium text-sm font-sans">02 / CRAFT</span>
                  <span>Artisanal Atelier Tailoring</span>
                </div>
              </div>

              <LocalizedClientLink
                href="/store"
                className="editorial-link text-xs tracking-editorial"
              >
                READ OUR ATELIER CHRONICLE →
              </LocalizedClientLink>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
