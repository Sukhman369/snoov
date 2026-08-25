"use client"

import React, { useState } from "react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { clx } from "@medusajs/ui"

interface TeamModel {
  id: string
  name: string
  garmentName: string
  category: string
  price: string
  fabric: string
  tag: string
  handle: string
  // Clean transparent PNG/WebP path
  image: string
  // Relative position in the lineup
  zIndex: number
  scale?: number
  details: string[]
}

// Configurable Team Models Lineup
// Note: When you have your final team PNG cutouts, simply replace the 'image' paths below!
const TEAM_LINEUP: TeamModel[] = [
  {
    id: "model-1",
    name: "Look 01",
    garmentName: "Heavy Boxy Denim Chore",
    category: "Outerwear",
    price: "₹2,499",
    fabric: "14oz Raw Selvedge Denim",
    tag: "ARCHIVE",
    handle: "oversized-belgian-linen-blazer",
    image: "/images/model-cutout-1.webp",
    zIndex: 10,
    details: ["14oz Japanese Selvedge", "Custom Matte Hardware", "Drop Shoulder Cut"],
  },
  {
    id: "model-2",
    name: "Look 02",
    garmentName: "Deconstructed Linen Blazer",
    category: "Tailoring",
    price: "₹3,499",
    fabric: "100% Belgian Flax Linen",
    tag: "LIMITED RUN",
    handle: "oversized-belgian-linen-blazer",
    image: "/images/model-cutout-2.webp",
    zIndex: 12,
    details: ["Unlined Construction", "Horn Buttons", "Breathable Structure"],
  },
  {
    id: "model-3",
    name: "Look 03",
    garmentName: "Oversized Graphic Heavyweight Tee",
    category: "Signature Tee",
    price: "₹1,499",
    fabric: "240 GSM Organic Combed Cotton",
    tag: "HERO PIECE",
    handle: "oversized-belgian-linen-blazer",
    image: "/images/model-cutout-3.webp",
    zIndex: 30, // Stands in front of the logo in center
    details: ["240 GSM Heavy Weight", "High-Density Screenprint", "Unisex Boxy Fit", "Pre-Shrunk"],
  },
  {
    id: "model-4",
    name: "Look 04",
    garmentName: "Double-Pleated Wide Leg Pant",
    category: "Tailoring",
    price: "₹2,899",
    fabric: "High-Twist Tropical Wool",
    tag: "BESTSELLER",
    handle: "pleated-wide-leg-trousers",
    image: "/images/model-cutout-1.webp",
    zIndex: 15,
    details: ["Virgin Wool Blend", "Deep Double Pleats", "Fluid Architectural Drape"],
  },
  {
    id: "model-5",
    name: "Look 05",
    garmentName: "Heavyweight Boxy Hoodie",
    category: "Streetwear",
    price: "₹2,199",
    fabric: "450 GSM French Terry",
    tag: "RESTOCKED",
    handle: "oversized-belgian-linen-blazer",
    image: "/images/model-cutout-2.webp",
    zIndex: 10,
    details: ["450 GSM Heavy French Terry", "Double Layer Hood", "Hidden Kangaroo Pocket"],
  },
]

export default function HeroG() {
  const [activeModel, setActiveModel] = useState<TeamModel | null>(null)
  const [quickAdded, setQuickAdded] = useState(false)

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setQuickAdded(true)
    setTimeout(() => setQuickAdded(false), 2200)
  }

  const isModelSelected = activeModel !== null

  return (
    <section className="relative w-full min-h-[92vh] bg-[#0E0E11] text-white overflow-hidden border-b border-[#222] select-none flex flex-col justify-between">
      
      {/* ── Background Atmosphere ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Dark studio spotlight background gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(45,45,55,0.45),rgba(14,14,17,0.98))]" />
        {/* Floor shadow and baseline */}
        <div className="absolute bottom-0 inset-x-0 h-44 bg-gradient-to-t from-[#0E0E11] via-[#0E0E11]/90 to-transparent z-30" />
      </div>

      {/* ── Top Status Bar ── */}
      <div className="relative z-30 content-container pt-6 sm:pt-8 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-snoov-green animate-pulse" />
          <span className="text-[10px] font-mono tracking-[0.2em] text-white/70 uppercase font-semibold">
            {isModelSelected
              ? `SELECTED: ${activeModel?.garmentName.toUpperCase()} — CLICK TO VIEW`
              : "TAP OR HOVER ANY MODEL TO EXPLORE GARMENTS"}
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-4 text-[10px] font-mono text-white/40">
          <span>STREETWEAR ARCHIVE SS26</span>
          <span>•</span>
          <span className="text-white/80 font-medium">5 LOOKS</span>
        </div>
      </div>

      {/* ── Main Interactive Stage ── */}
      <div className="relative w-full flex-1 flex items-center justify-center min-h-[500px] sm:min-h-[620px] my-auto">
        
        {/* ── Big Bold White SNOOV Wordmark (Exact match to Frame 01 & 02) ── */}
        <div
          className={clx(
            "absolute inset-x-0 top-[38%] -translate-y-1/2 text-center pointer-events-none z-20 transition-all duration-700 select-none",
            isModelSelected ? "opacity-20 scale-[0.98] blur-[0.5px]" : "opacity-100 scale-100"
          )}
        >
          {/* Main Solid White SNOOV Text */}
          <h1
            className="font-sans font-black uppercase text-center tracking-tighter text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)]"
            style={{
              fontSize: "clamp(5rem, 21vw, 20rem)",
              lineHeight: "0.85",
              letterSpacing: "-0.045em",
            }}
          >
            SNOOV
          </h1>

          {/* Subheader and Tagline right below SNOOV */}
          <div className="mt-2 sm:mt-4 flex flex-col items-center justify-center">
            <p className="text-xs sm:text-sm font-mono tracking-[0.35em] uppercase text-white/90 font-medium">
              LIVE DIFFERENT. WEAR SNOOV.
            </p>

            {/* Explore Collection Button directly below subheader (Frame 01) */}
            <div className="mt-5 pointer-events-auto">
              <LocalizedClientLink
                href="/store"
                className="inline-block px-7 py-3 border border-white/50 text-white text-xs font-mono uppercase tracking-[0.25em] font-semibold hover:bg-white hover:text-black hover:border-white transition-all duration-300 backdrop-blur-xs shadow-lg"
              >
                EXPLORE COLLECTION
              </LocalizedClientLink>
            </div>
          </div>
        </div>

        {/* ── Models Crew Lineup (Layered across the stage) ── */}
        <div className="relative z-25 w-full max-w-6xl mx-auto px-4 h-[440px] sm:h-[560px] flex items-end justify-center">
          <div className="relative w-full h-full flex items-end justify-center">
            
            {TEAM_LINEUP.map((model, index) => {
              const isSelected = activeModel?.id === model.id
              const isAnyActive = activeModel !== null

              // Spread models horizontally across the stage
              const offsets = [
                "left-[2%] sm:left-[6%]",    // Look 1 (Left flank)
                "left-[20%] sm:left-[24%]",  // Look 2 (Mid-left)
                "left-[40%] sm:left-[43%]",  // Look 3 (Center foreground)
                "left-[60%] sm:left-[62%]",  // Look 4 (Mid-right)
                "left-[78%] sm:left-[80%]",  // Look 5 (Right flank)
              ]

              return (
                <div
                  key={model.id}
                  onClick={() => setActiveModel(isSelected ? null : model)}
                  onMouseEnter={() => setActiveModel(model)}
                  className={clx(
                    "absolute bottom-0 w-[36%] sm:w-[25%] md:w-[22%] max-w-[260px] cursor-pointer transition-all duration-500 ease-out transform origin-bottom",
                    offsets[index] || "left-1/2",
                    isSelected
                      ? "z-40 scale-105"
                      : isAnyActive
                      ? "z-10 opacity-35 grayscale-[50%] hover:opacity-90 hover:grayscale-0 scale-95"
                      : "z-25 opacity-95 hover:opacity-100 hover:scale-100"
                  )}
                  style={{
                    zIndex: isSelected ? 40 : model.zIndex,
                  }}
                >
                  {/* Model Image with Crisp Glowing Silhouette Contour (Frame 02) */}
                  <div
                    className={clx(
                      "relative w-full aspect-[3/4.2] transition-all duration-500",
                      isSelected
                        ? "filter drop-shadow-[0_0_12px_rgba(255,255,255,1)] drop-shadow-[0_0_30px_rgba(255,255,255,0.7)]"
                        : "filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
                    )}
                  >
                    <img
                      src={model.image}
                      alt={model.garmentName}
                      className="w-full h-full object-contain object-bottom select-none pointer-events-none"
                    />

                    {/* Interactive Cursor Indicator */}
                    <div
                      className={clx(
                        "absolute top-6 right-6 z-30 flex items-center justify-center transition-all duration-300",
                        isSelected
                          ? "scale-110 bg-white text-black font-bold shadow-xl"
                          : "bg-black/70 backdrop-blur-md text-white/80 border border-white/30 hover:border-white"
                      )}
                      style={{ width: "26px", height: "26px", borderRadius: "50%" }}
                    >
                      <span className="text-[12px] leading-none">
                        {isSelected ? "✓" : "+"}
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}

          </div>
        </div>

        {/* ── Floating Product HUD Popover (Frame 02) ── */}
        {activeModel && (
          <div className="absolute bottom-8 right-4 sm:right-12 z-50 max-w-[320px] sm:max-w-xs w-full animate-fadeIn">
            <div className="bg-[#141418]/95 backdrop-blur-2xl border border-white/25 p-5 rounded-[2px] shadow-[0_25px_60px_rgba(0,0,0,0.9)] relative">
              
              {/* Top Tag & Close */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="px-2 py-0.5 bg-white text-black text-[9px] font-mono uppercase tracking-widest font-bold rounded-[1px]">
                  {activeModel.tag}
                </span>
                <button
                  onClick={() => setActiveModel(null)}
                  className="text-white/40 hover:text-white text-xs font-mono p-1"
                >
                  ✕
                </button>
              </div>

              {/* Garment Details */}
              <div className="pt-3">
                <span className="text-[10px] font-mono uppercase tracking-wider text-white/50">
                  {activeModel.category}
                </span>
                <h3 className="font-serif text-lg text-white font-medium mt-0.5 leading-snug">
                  {activeModel.garmentName}
                </h3>
                
                <div className="flex items-baseline gap-2 mt-1.5">
                  <span className="text-base font-mono font-bold text-white">
                    {activeModel.price}
                  </span>
                  <span className="text-[10px] font-sans text-white/60 ml-auto">
                    {activeModel.fabric}
                  </span>
                </div>
              </div>

              {/* Garment Specs */}
              <div className="mt-3 py-2 px-3 bg-white/5 rounded-[2px] border border-white/5 space-y-1">
                {activeModel.details.map((detail, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 text-[10px] font-mono text-white/80">
                    <span className="text-white text-[8px]">▪</span>
                    <span>{detail}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="mt-4 flex items-center gap-2">
                <LocalizedClientLink
                  href={`/products/${activeModel.handle}`}
                  className="flex-1 text-center py-2.5 px-3 bg-white text-black text-[10px] font-mono uppercase tracking-widest font-bold hover:bg-snoov-ecru transition-colors rounded-[1px]"
                >
                  VIEW PIECE →
                </LocalizedClientLink>

                <button
                  onClick={handleQuickAdd}
                  className="py-2.5 px-3 border border-white/40 text-white hover:border-white text-[10px] font-mono uppercase tracking-wider transition-colors rounded-[1px]"
                >
                  {quickAdded ? "ADDED ✓" : "QUICK ADD"}
                </button>
              </div>

            </div>
          </div>
        )}

      </div>

      {/* ── Bottom Selector Strip (Frame 01 / 02) ── */}
      <div className="relative z-30 content-container pb-6 sm:pb-8 pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Model Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-1 sm:pb-0">
          <span className="text-[10px] font-mono uppercase tracking-wider text-white/40 mr-2 hidden md:inline">
            MODELS:
          </span>
          {TEAM_LINEUP.map((model, idx) => (
            <button
              key={model.id}
              onClick={() => setActiveModel(activeModel?.id === model.id ? null : model)}
              className={clx(
                "px-3 py-1.5 text-[10px] font-mono uppercase tracking-wider transition-all rounded-[1px]",
                activeModel?.id === model.id
                  ? "bg-white text-black font-bold shadow-xs"
                  : "bg-white/5 text-white/60 hover:text-white hover:bg-white/10 border border-white/10"
              )}
            >
              0{idx + 1} · {model.name}
            </button>
          ))}
        </div>

        {/* Brand statement */}
        <div className="text-[10px] font-mono text-white/50 uppercase tracking-widest">
          SNOOV STUDIO · CRAFTED FOR STREETWEAR DISRUPTORS
        </div>

      </div>

    </section>
  )
}
