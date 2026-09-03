import React from "react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const PILLARS = [
  {
    num: "01",
    title: "Organic European Flax",
    subtitle: "Cultivated without artificial irrigation",
    description:
      "All linen is sourced from zero-waste European farms, using natural rainwater and traditional dew-retting processes that protect soil biodiversity.",
  },
  {
    num: "02",
    title: "Zero-Waste Patterning",
    subtitle: "Precision digital cutting",
    description:
      "Every pattern is geometrically engineered to minimize off-cuts. Remaining textile remnants are recycled into our archive pocket linings and care tags.",
  },
  {
    num: "03",
    title: "Ethical Craft Workshops",
    subtitle: "Generational craftsmanship heritage",
    description:
      "Produced in limited batches across ethical workshops in Northern Portugal and Tuscany, guaranteeing fair living wages and master craftsmanship.",
  },
]

export default function CraftsmanshipPillars() {
  return (
    <section className="py-20 sm:py-28 bg-snoov-canvas border-b border-snoov-border">
      <div className="content-container">
        
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-5 h-[1px] bg-snoov-green" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-snoov-green font-semibold">
              CRAFT STANDARDS
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-snoov-charcoal font-normal tracking-tight">
            Crafted for Decades, Not Seasons
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-snoov-muted font-sans leading-relaxed">
            We reject the disposable cycles of fast fashion in favor of tactile permanence, ethical accountability, and transparent sourcing.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.num}
              className="p-8 bg-snoov-sand/40 border border-snoov-border rounded-[2px] flex flex-col justify-between transition-all duration-300 hover:border-snoov-green/40 hover:bg-white"
            >
              <div>
                <span className="font-serif text-3xl text-snoov-green font-light block mb-4">
                  {pillar.num}
                </span>
                <h3 className="font-serif text-xl text-snoov-charcoal font-medium">
                  {pillar.title}
                </h3>
                <p className="text-[11px] font-mono uppercase tracking-wider text-snoov-muted mt-1">
                  {pillar.subtitle}
                </p>
                <p className="text-xs text-snoov-muted font-sans mt-4 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-snoov-border/60">
                <span className="text-[10px] font-mono text-snoov-charcoal/70 uppercase tracking-widest">
                  Verified Standard ✓
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
