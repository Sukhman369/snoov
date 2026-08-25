import React from "react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const CATEGORIES = [
  { label: "TAILORING", href: "/store?category=tailoring", img: "/images/model-portrait.webp" },
  { label: "KNITWEAR", href: "/store?category=knitwear", img: "/images/model-detail.webp" },
  { label: "OUTERWEAR", href: "/store?category=outerwear", img: "/images/model-main.webp" },
  { label: "ESSENTIALS", href: "/store?category=essentials", img: "/images/model-portrait.webp" },
  { label: "ACCESSORIES", href: "/store?category=accessories", img: "/images/model-detail.webp" },
  { label: "LOOKBOOK", href: "/store", img: "/images/model-main.webp" },
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
        {/* Subtle background atmosphere with model silhouette in blend mode */}
        <div className="absolute right-0 top-0 bottom-0 w-full sm:w-1/2 opacity-25 mix-blend-luminosity pointer-events-none overflow-hidden">
          <img
            src="/images/model-main.webp"
            alt="SNOOV Model"
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Top-left: Small descriptor text */}
        <div className="relative z-10 px-6 sm:px-10 pt-10 sm:pt-14 max-w-[280px] sm:max-w-xs">
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
        <div className="relative z-10 w-full overflow-hidden leading-none">
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
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-5">
          {CATEGORIES.map((cat) => (
            <LocalizedClientLink
              key={cat.label}
              href={cat.href}
              className="flex flex-col items-center gap-2.5 group"
            >
              {/* Product image slot */}
              <div className="relative w-full aspect-[3/4] overflow-hidden rounded-[2px] bg-snoov-sand border border-snoov-border">
                <img
                  src={cat.img}
                  alt={cat.label}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
              </div>
              <span className="text-[10px] sm:text-[11px] font-sans font-semibold uppercase tracking-widest text-gray-900 group-hover:text-snoov-green transition-colors">
                {cat.label}
              </span>
            </LocalizedClientLink>
          ))}
        </div>
      </section>

    </div>
  )
}
