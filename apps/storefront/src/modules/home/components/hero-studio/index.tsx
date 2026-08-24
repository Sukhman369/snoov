"use client"

import React, { useState, useEffect } from "react"
import HeroA from "./variants/hero-a"
import HeroB from "./variants/hero-b"
import HeroC from "./variants/hero-c"
import HeroD from "./variants/hero-d"
import HeroE from "./variants/hero-e"
import HeroF from "./variants/hero-f"

const HERO_VARIANTS = [
  {
    id: "hero-a",
    label: "A — Magazine Editorial",
    desc: "Headline top · Wide image below · CTA bar",
  },
  {
    id: "hero-b",
    label: "B — Cinematic Fullscreen",
    desc: "Full-height image · Dark overlay · Text on image",
  },
  {
    id: "hero-c",
    label: "C — Split 50 / 50",
    desc: "Text left · Portrait image right",
  },
  {
    id: "hero-d",
    label: "D — Typography Dominant",
    desc: "Oversized fluid headline · Small accent image",
  },
  {
    id: "hero-e",
    label: "E — Lookbook Grid",
    desc: "Asymmetric multi-image · Editorial text card",
  },
  {
    id: "hero-f",
    label: "F — Maroon Bold Showcase",
    desc: "Full maroon bleed · Massive SNOOV · Category row",
  },
]

const HERO_MAP: Record<string, React.ComponentType> = {
  "hero-a": HeroA,
  "hero-b": HeroB,
  "hero-c": HeroC,
  "hero-d": HeroD,
  "hero-e": HeroE,
  "hero-f": HeroF,
}

export default function HeroStudio() {
  const [activeHero, setActiveHero] = useState("hero-a")
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("snoov_hero")
      if (saved && HERO_VARIANTS.some((v) => v.id === saved)) {
        setActiveHero(saved)
      }
    }
  }, [])

  const selectHero = (id: string) => {
    setActiveHero(id)
    if (typeof window !== "undefined") {
      localStorage.setItem("snoov_hero", id)
    }
    setIsOpen(false)
  }

  const ActiveHero = HERO_MAP[activeHero]
  const current = HERO_VARIANTS.find((v) => v.id === activeHero)!

  return (
    <>
      {/* Active Hero */}
      <ActiveHero />

      {/* Hero Studio Toggle — bottom right */}
      <div className="fixed bottom-6 right-6 z-50">

        {/* Dropdown panel */}
        {isOpen && (
          <div className="absolute bottom-full right-0 mb-3 w-[280px] bg-snoov-charcoal border border-white/10 rounded-[2px] shadow-2xl overflow-hidden">
            {/* Panel header */}
            <div className="px-4 py-3 border-b border-white/10">
              <span className="text-[9px] font-mono uppercase tracking-widest text-white/40 block">
                HERO STUDIO
              </span>
              <p className="text-[11px] font-mono text-white/70 mt-0.5">
                Click to switch layout
              </p>
            </div>
            {/* Variant list */}
            <div className="p-2 flex flex-col gap-1">
              {HERO_VARIANTS.map((v) => {
                const isActive = activeHero === v.id
                return (
                  <button
                    key={v.id}
                    onClick={() => selectHero(v.id)}
                    className={`w-full text-left px-3 py-2.5 rounded-[1px] transition-all duration-150 ${
                      isActive
                        ? "bg-white text-snoov-charcoal"
                        : "text-white/70 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <span className="text-[11px] font-mono font-semibold block">
                      {v.label}
                      {isActive && (
                        <span className="ml-2 text-[9px] opacity-60">ACTIVE</span>
                      )}
                    </span>
                    <span className="text-[10px] font-mono opacity-50 mt-0.5 block">
                      {v.desc}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
        )}

        {/* Toggle button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2.5 px-4 py-3 bg-snoov-charcoal text-white rounded-[2px] shadow-2xl border border-snoov-border hover:border-white/40 transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <span className="text-[11px] font-mono uppercase tracking-widest font-semibold">
            {isOpen ? "CLOSE STUDIO" : `HERO STUDIO — ${current.label.split(" — ")[0]}`}
          </span>
          <span className="text-white/40 font-mono text-xs ml-1">
            {isOpen ? "✕" : "▲"}
          </span>
        </button>
      </div>
    </>
  )
}
