import React from "react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const CATEGORIES = [
  { label: "KNITWEAR", href: "/store" },
  { label: "DRESSES", href: "/store" },
  { label: "DENIM", href: "/store" },
  { label: "BOTTOMS", href: "/store" },
  { label: "TOPS", href: "/store" },
  { label: "JACKETS", href: "/store" },
]

export default function HeroF() {
  return (
    <div className="w-full border-b border-snoov-border">

      {/* ── HERO — Maroon Full-Bleed ── */}
      <section
        className="relative w-full flex flex-col justify-between overflow-hidden"
        style={{
          backgroundColor: "#8C2535",
          minHeight: "88vh",
        }}
      >
        {/* Top-left: Small descriptor text */}
        <div className="px-6 sm:px-10 pt-10 sm:pt-14 max-w-[280px] sm:max-w-xs">
          <p
            className="text-[13px] sm:text-sm leading-relaxed font-sans"
            style={{ color: "#2D0A10" }}
          >
            Fashion for the restrained at heart. Build your edit
            and dress it with pieces that define quiet authority
            and lasting elegance.
          </p>
        </div>

        {/* Bottom: Massive SNOOV brand name */}
        <div className="w-full overflow-hidden leading-none">
          <h1
            className="font-sans font-black uppercase w-full block"
            style={{
              fontSize: "clamp(5rem, 22.5vw, 22rem)",
              lineHeight: "0.86",
              letterSpacing: "-0.03em",
              color: "#0D0D0D",
              paddingLeft: "0.08em",
            }}
          >
            SNOOV
          </h1>
        </div>
      </section>

      {/* ── CATEGORY BROWSE — White section ── */}
      <section className="w-full bg-white py-8 sm:py-10 px-6 sm:px-10">
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 sm:gap-5">
          {CATEGORIES.map((cat) => (
            <LocalizedClientLink
              key={cat.label}
              href={cat.href}
              className="flex flex-col items-center gap-2.5 group"
            >
              {/* Empty product image slot */}
              <div
                className="w-full aspect-[3/4] transition-colors duration-200"
                style={{ backgroundColor: "#F0ECEA" }}
              />
              <span className="text-[10px] sm:text-[11px] font-sans font-semibold uppercase tracking-widest text-gray-900 group-hover:text-gray-600 transition-colors">
                {cat.label}
              </span>
            </LocalizedClientLink>
          ))}
        </div>
      </section>

    </div>
  )
}
