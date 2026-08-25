"use client"

import React, { useState } from "react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { clx } from "@medusajs/ui"

interface LineupItem {
  id: string
  name: string
  category: string
  price: string
  originalPrice?: string
  fabric: string
  tag: string
  handle: string
  image: string
  position: string // CSS position classes
  focalOffsetX: number // Percentage for popover offset
  details: string[]
  colors: string[]
}

const LINEUP_PRODUCTS: LineupItem[] = [
  {
    id: "item-1",
    name: "Heavy Boxy Denim Jacket",
    category: "Outerwear",
    price: "$280",
    fabric: "14oz Japanese Selvedge Denim",
    tag: "ARCHIVE 01",
    handle: "oversized-belgian-linen-blazer",
    image: "/images/model-portrait.webp",
    position: "left-[5%] sm:left-[8%]",
    focalOffsetX: 10,
    details: ["14oz Raw Selvedge", "Custom Matte Hardware", "Drop-Shoulder Cut"],
    colors: ["#1B263B", "#3D3D3D"],
  },
  {
    id: "item-2",
    name: "Oversized Graphic Heavyweight Tee",
    category: "Signature Tee",
    price: "$75",
    originalPrice: "$95",
    fabric: "240 GSM Organic Cotton",
    tag: "HERO PIECE",
    handle: "oversized-belgian-linen-blazer",
    image: "/images/model-main.webp",
    position: "left-[30%] sm:left-[32%]",
    focalOffsetX: 35,
    details: ["240 GSM Combed Cotton", "High-Density Screenprint", "Boxy Streetwear Fit"],
    colors: ["#5C4033", "#1A1A1A", "#FFFFFF"],
  },
  {
    id: "item-3",
    name: "Double-Pleated Wide Leg Trousers",
    category: "Tailoring",
    price: "$290",
    fabric: "Tropical High-Twist Wool",
    tag: "RESTOCKED",
    handle: "pleated-wide-leg-trousers",
    image: "/images/model-detail.webp",
    position: "left-[55%] sm:left-[56%]",
    focalOffsetX: 60,
    details: ["Virgin Wool Blend", "Deep Double Pleats", "Fluid Drape"],
    colors: ["#D8CFBC", "#1A1A1A", "#3E0B13"],
  },
  {
    id: "item-4",
    name: "Deconstructed Linen Chore Coat",
    category: "Outerwear",
    price: "$340",
    fabric: "100% Belgian Flax Linen",
    tag: "LIMITED RUN",
    handle: "oversized-belgian-linen-blazer",
    image: "/images/model-portrait.webp",
    position: "left-[78%] sm:left-[78%]",
    focalOffsetX: 80,
    details: ["Unlined Construction", "Horn Buttons", "Breathable Midweight"],
    colors: ["#E7DFD3", "#008000", "#1C1510"],
  },
]

export default function HeroG() {
  const [activeItem, setActiveItem] = useState<LineupItem | null>(LINEUP_PRODUCTS[1]) // Default to center tee
  const [quickAdded, setQuickAdded] = useState(false)

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setQuickAdded(true)
    setTimeout(() => setQuickAdded(false), 2200)
  }

  return (
    <section className="relative w-full min-h-[92vh] bg-[#0A0A0C] text-white overflow-hidden border-b border-[#222] select-none flex flex-col justify-between">
      
      {/* ── Background Atmosphere & Ambient Lighting ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle radial center spotlight */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[500px] bg-gradient-to-b from-white/10 via-white/5 to-transparent rounded-full blur-3xl opacity-60" />
        {/* Floor shadow and grid baseline */}
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#0A0A0C] via-[#0A0A0C]/80 to-transparent z-20" />
        <div className="absolute bottom-16 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent z-10" />
      </div>

      {/* ── Top Header Navigation Badge ── */}
      <div className="relative z-30 content-container pt-8 sm:pt-10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-snoov-green animate-pulse" />
          <span className="text-[10px] font-mono tracking-[0.25em] text-white/70 uppercase font-semibold">
            INTERACTIVE CAPSULE · TAP ANY MODEL TO EXPLORE
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-[10px] font-mono text-white/50">
          <span>SS26 STREETWEAR ARCHIVE</span>
          <span>•</span>
          <span className="text-white/80 font-medium">4 LOOKS LIVE</span>
        </div>
      </div>

      {/* ── Layered 2.5D Stage: Huge Typography Behind Models ── */}
      <div className="relative w-full flex-1 flex items-center justify-center min-h-[480px] sm:min-h-[580px] my-auto">
        
        {/* Layer 1 (Midground): Giant SNOOV Brandmark behind models */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center pointer-events-none z-10 overflow-hidden leading-none select-none">
          <h1
            className="font-sans font-black uppercase text-center block tracking-tighter"
            style={{
              fontSize: "clamp(6rem, 24vw, 24rem)",
              lineHeight: "0.82",
              letterSpacing: "-0.04em",
              background: "linear-gradient(180deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.06) 65%, rgba(255,255,255,0.01) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 2px 20px rgba(0,0,0,0.8))",
            }}
          >
            SNOOV
          </h1>
          <p className="text-[11px] sm:text-xs font-mono tracking-[0.4em] uppercase text-white/30 -mt-2 sm:-mt-6">
            LIVE DIFFERENT. WEAR SNOOV.
          </p>
        </div>

        {/* Layer 2 (Foreground): Interactive Model Lineup */}
        <div className="relative z-20 w-full max-w-6xl mx-auto px-4 h-[440px] sm:h-[540px] flex items-end justify-center">
          <div className="relative w-full h-full">
            {LINEUP_PRODUCTS.map((item, index) => {
              const isSelected = activeItem?.id === item.id
              const isAnySelected = activeItem !== null

              return (
                <div
                  key={item.id}
                  onClick={() => setActiveItem(isSelected ? null : item)}
                  onMouseEnter={() => setActiveItem(item)}
                  className={clx(
                    "absolute bottom-0 w-[42%] sm:w-[28%] md:w-[24%] max-w-[280px] cursor-pointer transition-all duration-500 ease-out transform origin-bottom",
                    item.position,
                    isSelected
                      ? "z-30 scale-105"
                      : isAnySelected
                      ? "z-20 opacity-60 grayscale-[35%] hover:opacity-100 hover:grayscale-0 hover:scale-100 scale-95"
                      : "z-20 opacity-95 hover:opacity-100 hover:scale-100"
                  )}
                >
                  {/* Model Image Frame with Glow Highlight on active */}
                  <div
                    className={clx(
                      "relative aspect-[3/4] rounded-[2px] overflow-hidden transition-all duration-500",
                      isSelected
                        ? "ring-2 ring-white/90 shadow-[0_0_35px_rgba(255,255,255,0.4)]"
                        : "ring-1 ring-white/10 hover:ring-white/40"
                    )}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover object-top filter brightness-95"
                    />

                    {/* Dark gradient base on model feet */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-transparent to-transparent opacity-80" />

                    {/* Interactive Hotspot Target Pill */}
                    <div
                      className={clx(
                        "absolute top-4 right-4 z-20 flex items-center justify-center transition-all duration-300",
                        isSelected
                          ? "scale-110 bg-white text-black font-bold shadow-lg"
                          : "bg-black/60 backdrop-blur-md text-white/90 border border-white/20 hover:border-white"
                      )}
                      style={{ width: "26px", height: "26px", borderRadius: "50%" }}
                    >
                      <span className="text-[12px] leading-none">
                        {isSelected ? "✓" : "+"}
                      </span>
                    </div>

                    {/* Number Badge */}
                    <div className="absolute bottom-3 left-3 z-20">
                      <span className="text-[9px] font-mono uppercase tracking-widest text-white/60 bg-black/60 px-2 py-0.5 rounded-[1px] border border-white/10 backdrop-blur-xs">
                        LOOK 0{index + 1}
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Layer 3: Floating Interactive Product Card Popover (Frame 02) */}
        {activeItem && (
          <div className="absolute bottom-6 right-4 sm:right-10 z-40 max-w-[320px] sm:max-w-xs w-full animate-fadeIn">
            <div className="bg-[#121216]/95 backdrop-blur-xl border border-white/20 p-5 rounded-[2px] shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative">
              
              {/* Card Top Tag */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="px-2 py-0.5 bg-snoov-green text-white text-[9px] font-mono uppercase tracking-widest font-semibold rounded-[1px]">
                  {activeItem.tag}
                </span>
                <button
                  onClick={() => setActiveItem(null)}
                  className="text-white/40 hover:text-white text-xs font-mono"
                >
                  ✕
                </button>
              </div>

              {/* Title & Price */}
              <div className="pt-3">
                <span className="text-[10px] font-mono uppercase tracking-wider text-white/50">
                  {activeItem.category}
                </span>
                <h3 className="font-serif text-lg text-white font-medium mt-0.5 leading-snug">
                  {activeItem.name}
                </h3>
                
                <div className="flex items-baseline gap-2 mt-1.5">
                  <span className="text-base font-mono font-semibold text-white">
                    {activeItem.price}
                  </span>
                  {activeItem.originalPrice && (
                    <span className="text-xs font-mono text-white/40 line-through">
                      {activeItem.originalPrice}
                    </span>
                  )}
                  <span className="text-[10px] font-sans text-white/50 ml-auto">
                    {activeItem.fabric}
                  </span>
                </div>
              </div>

              {/* Specs Bullet Points */}
              <div className="mt-3 py-2.5 px-3 bg-white/5 rounded-[2px] border border-white/5 space-y-1">
                {activeItem.details.map((detail, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 text-[10px] font-mono text-white/70">
                    <span className="text-snoov-green text-[8px]">▪</span>
                    <span>{detail}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="mt-4 flex items-center gap-2">
                <LocalizedClientLink
                  href={`/products/${activeItem.handle}`}
                  className="flex-1 text-center py-2.5 px-3 bg-white text-black text-[10px] font-mono uppercase tracking-widest font-semibold hover:bg-snoov-ecru transition-colors rounded-[1px]"
                >
                  VIEW PIECE →
                </LocalizedClientLink>

                <button
                  onClick={handleQuickAdd}
                  className="py-2.5 px-3 border border-white/30 text-white hover:border-white text-[10px] font-mono uppercase tracking-wider transition-colors rounded-[1px]"
                >
                  {quickAdded ? "ADDED ✓" : "QUICK ADD"}
                </button>
              </div>

            </div>
          </div>
        )}

      </div>

      {/* ── Bottom Navigation & Look Selector Bar ── */}
      <div className="relative z-30 content-container pb-8 sm:pb-12 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Look Switcher Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-1 sm:pb-0">
          <span className="text-[10px] font-mono uppercase tracking-wider text-white/40 mr-2 hidden md:inline">
            SELECT LOOK:
          </span>
          {LINEUP_PRODUCTS.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveItem(item)}
              className={clx(
                "px-3 py-1.5 text-[10px] font-mono uppercase tracking-wider transition-all rounded-[1px]",
                activeItem?.id === item.id
                  ? "bg-white text-black font-semibold shadow-xs"
                  : "bg-white/5 text-white/60 hover:text-white hover:bg-white/10 border border-white/10"
              )}
            >
              0{idx + 1} · {item.name.split(" ")[0]}
            </button>
          ))}
        </div>

        {/* Bottom CTAs */}
        <div className="flex items-center gap-3">
          <LocalizedClientLink
            href="/store"
            className="px-6 py-2.5 bg-white text-black text-[11px] font-mono uppercase tracking-widest font-semibold hover:bg-snoov-ecru transition-colors"
          >
            EXPLORE COLLECTION
          </LocalizedClientLink>
          <LocalizedClientLink
            href="/store?category=tailoring"
            className="px-6 py-2.5 border border-white/30 text-white text-[11px] font-mono uppercase tracking-widest hover:border-white transition-colors"
          >
            VIEW LOOKBOOK
          </LocalizedClientLink>
        </div>

      </div>

    </section>
  )
}
