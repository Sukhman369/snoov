"use client"

import React, { useState, useEffect } from "react"
import { clx } from "@medusajs/ui"

export interface PaletteOption {
  id: string
  name: string
  subtitle: string
  description: string
  tag: string
  variables: {
    "--snoov-primary": string
    "--snoov-primary-hover": string
    "--snoov-primary-light": string
    "--snoov-primary-subtle": string
    "--snoov-canvas": string
    "--snoov-sand": string
    "--snoov-ecru": string
    "--snoov-cream": string
    "--snoov-border": string
    "--snoov-border-dark": string
    "--snoov-charcoal": string
    "--snoov-muted": string
    "--snoov-light-muted": string
  }
}

export const PALETTES: PaletteOption[] = [
  {
    id: "hermes-sellier",
    name: "00 — Hermès Sellier Gold & Orange — A",
    subtitle: "Warm, Approachable & Timeless",
    description: "Inspired by Hermès. Signature gold-tan primary on pristine warm white, with rich burnt orange warmth flowing through every tint. Approachable luxury.",
    tag: "HERMÈS INSPIRED",
    variables: {
      "--snoov-primary": "#C4862A",
      "--snoov-primary-hover": "#A36B1A",
      "--snoov-primary-light": "#FFF1DF",
      "--snoov-primary-subtle": "rgba(196, 134, 42, 0.09)",
      "--snoov-canvas": "#FDFAF6",
      "--snoov-sand": "#F7F0E4",
      "--snoov-ecru": "#EDE3D3",
      "--snoov-cream": "#FFFFFF",
      "--snoov-border": "#E8DAC8",
      "--snoov-border-dark": "#D4C4AA",
      "--snoov-charcoal": "#1C1510",
      "--snoov-muted": "#7A6A58",
      "--snoov-light-muted": "#A09080",
    },
  },
  {
    id: "rouge-champagne-gold",
    name: "— Rouge Maroon & Champagne Gold — B",
    subtitle: "Deep Maroon, Gold Warmth & Off-White",
    description: "Bespoke luxury palette. Deep maroon hero paired with champagne gold warmth, soft taupe neutrals and warm off-white canvas. Refined, commanding, effortlessly elegant.",
    tag: "BESPOKE PALETTE",
    variables: {
      "--snoov-primary": "#6B1F3C",
      "--snoov-primary-hover": "#4E1529",
      "--snoov-primary-light": "#FAE8EF",
      "--snoov-primary-subtle": "rgba(107, 31, 60, 0.08)",
      "--snoov-canvas": "#FAF8F3",
      "--snoov-sand": "#F2EFE8",
      "--snoov-ecru": "#EAE5DC",
      "--snoov-cream": "#FDFCF9",
      "--snoov-border": "#E4DDD0",
      "--snoov-border-dark": "#D1C9BB",
      "--snoov-charcoal": "#2B2B2B",
      "--snoov-muted": "#7A6B6E",
      "--snoov-light-muted": "#A49598",
    },
  },
  {
    id: "taupe-ivory-terracotta",
    name: "— Warm Taupe & Soft Ivory — C",
    subtitle: "Understated, Refined & Earthy",
    description: "Brunello Cucinelli-inspired. Muted warm taupe on pristine ivory canvas with soft terracotta warmth. Effortlessly understated, deeply refined.",
    tag: "BRUNELLO INSPIRED",
    variables: {
      "--snoov-primary": "#A09485",
      "--snoov-primary-hover": "#867A6B",
      "--snoov-primary-light": "#F5EEE8",
      "--snoov-primary-subtle": "rgba(160, 148, 133, 0.09)",
      "--snoov-canvas": "#FFFFF0",
      "--snoov-sand": "#FAF9F7",
      "--snoov-ecru": "#F0EDE7",
      "--snoov-cream": "#FFFFFE",
      "--snoov-border": "#E8E2DA",
      "--snoov-border-dark": "#D5CEC4",
      "--snoov-charcoal": "#3D3D3D",
      "--snoov-muted": "#7A6E65",
      "--snoov-light-muted": "#A09088",
    },
  },
  {
    id: "royal-maroon-velvet",
    name: "01 — Royal Velvet Maroon & White",
    subtitle: "Regal Velvet & Pure White Contrast",
    description: "Deep luxury maroon covers the entire background canvas with crisp pure white typography and radiant gold accents. Magnifies the golden logo.",
    tag: "NEW: MAROON DOMINANT",
    variables: {
      "--snoov-primary": "#D4AF37",
      "--snoov-primary-hover": "#C59F2D",
      "--snoov-primary-light": "#5D1420",
      "--snoov-primary-subtle": "rgba(212, 175, 55, 0.15)",
      "--snoov-canvas": "#3E0B13",
      "--snoov-sand": "#30070D",
      "--snoov-ecru": "#4D111C",
      "--snoov-cream": "#571420",
      "--snoov-border": "#5E1823",
      "--snoov-border-dark": "#7A202E",
      "--snoov-charcoal": "#FFFFFF",
      "--snoov-muted": "#E2C8CC",
      "--snoov-light-muted": "#BA9B9F",
    },
  },
  {
    id: "imperial-maroon-white",
    name: "02 — Imperial Maroon & Pure White",
    subtitle: "High-Fashion Editorial Maroon",
    description: "Deep regal maroon as the primary dominant color paired with crisp porcelain white and rose-tinted ecru accents.",
    tag: "NEW: MAROON & WHITE",
    variables: {
      "--snoov-primary": "#660D1A",
      "--snoov-primary-hover": "#4F0812",
      "--snoov-primary-light": "#FBEBED",
      "--snoov-primary-subtle": "rgba(102, 13, 26, 0.08)",
      "--snoov-canvas": "#FAF8F8",
      "--snoov-sand": "#F3EAEA",
      "--snoov-ecru": "#EBDDDD",
      "--snoov-cream": "#FFFFFF",
      "--snoov-border": "#E4D1D4",
      "--snoov-border-dark": "#CCA8AD",
      "--snoov-charcoal": "#1A0609",
      "--snoov-muted": "#6E5256",
      "--snoov-light-muted": "#96787C",
    },
  },
  {
    id: "emerald-ivory",
    name: "03 — Signature Emerald & Ivory",
    subtitle: "Organic European Ateliers",
    description: "The founding identity. Core botanical emerald green with warm ivory linen canvas and sand accents.",
    tag: "CLASSIC EMERALD",
    variables: {
      "--snoov-primary": "#008000",
      "--snoov-primary-hover": "#006400",
      "--snoov-primary-light": "#EBF6EB",
      "--snoov-primary-subtle": "rgba(0, 128, 0, 0.08)",
      "--snoov-canvas": "#FBF9F5",
      "--snoov-sand": "#F5F1E8",
      "--snoov-ecru": "#EFE9DD",
      "--snoov-cream": "#FAF8F3",
      "--snoov-border": "#EAE4D7",
      "--snoov-border-dark": "#D8D0BF",
      "--snoov-charcoal": "#1A1A1A",
      "--snoov-muted": "#66625D",
      "--snoov-light-muted": "#8F8A82",
    },
  },
  {
    id: "champagne-noir",
    name: "02 — Champagne Gold & Alabaster",
    subtitle: "French Haute Couture",
    description: "Pairs harmoniously with your golden script logo. Warm amber gold accents with alabaster silk canvas.",
    tag: "MATCHES LOGO",
    variables: {
      "--snoov-primary": "#A67C1E",
      "--snoov-primary-hover": "#8B6514",
      "--snoov-primary-light": "#FAF3E3",
      "--snoov-primary-subtle": "rgba(166, 124, 30, 0.09)",
      "--snoov-canvas": "#FAF8F5",
      "--snoov-sand": "#F2ECE2",
      "--snoov-ecru": "#EAE2D3",
      "--snoov-cream": "#FDFCF9",
      "--snoov-border": "#E4DCD0",
      "--snoov-border-dark": "#D1C6B4",
      "--snoov-charcoal": "#1C1A17",
      "--snoov-muted": "#6E685E",
      "--snoov-light-muted": "#968F84",
    },
  },
  {
    id: "bordeaux-silk",
    name: "03 — Bordeaux Wine & Raw Silk",
    subtitle: "Tuscan Heritage Tailoring",
    description: "Deep Florentine wine burgundy with raw silk cream. High-fashion, commanding editorial presence.",
    tag: "RICH & LUXURIOUS",
    variables: {
      "--snoov-primary": "#7A1C28",
      "--snoov-primary-hover": "#5E121C",
      "--snoov-primary-light": "#FBECEE",
      "--snoov-primary-subtle": "rgba(122, 28, 40, 0.08)",
      "--snoov-canvas": "#FCFAF7",
      "--snoov-sand": "#F6EDE8",
      "--snoov-ecru": "#EDE2DB",
      "--snoov-cream": "#FFFDFB",
      "--snoov-border": "#E8DED8",
      "--snoov-border-dark": "#D5C8C0",
      "--snoov-charcoal": "#1F1718",
      "--snoov-muted": "#6E5F60",
      "--snoov-light-muted": "#968788",
    },
  },
  {
    id: "savile-midnight",
    name: "04 — Savile Midnight & Warm Stone",
    subtitle: "British Architectural Tailoring",
    description: "Deep midnight sapphire navy with warm stone neutrals. Razor-sharp tailoring, crisp and understated.",
    tag: "TIMELESS CLASSIC",
    variables: {
      "--snoov-primary": "#1E2F48",
      "--snoov-primary-hover": "#131F32",
      "--snoov-primary-light": "#EBF1F8",
      "--snoov-primary-subtle": "rgba(30, 47, 72, 0.08)",
      "--snoov-canvas": "#FAF9F6",
      "--snoov-sand": "#EDEBE3",
      "--snoov-ecru": "#E3E0D6",
      "--snoov-cream": "#FCFBF8",
      "--snoov-border": "#DED9CD",
      "--snoov-border-dark": "#C8C2B4",
      "--snoov-charcoal": "#131821",
      "--snoov-muted": "#5C6370",
      "--snoov-light-muted": "#8A919E",
    },
  },
  {
    id: "olive-travertine",
    name: "05 — Olive Moss & Travertine",
    subtitle: "Mediterranean Earth & Stone",
    description: "Vintage olive moss with travertine stone canvas. Earthy, textural harmony for natural flax & wool.",
    tag: "EARTHY & ORGANIC",
    variables: {
      "--snoov-primary": "#48532B",
      "--snoov-primary-hover": "#353D1E",
      "--snoov-primary-light": "#EFF4E6",
      "--snoov-primary-subtle": "rgba(72, 83, 43, 0.08)",
      "--snoov-canvas": "#F8F7F2",
      "--snoov-sand": "#ECE8DC",
      "--snoov-ecru": "#E2DDCF",
      "--snoov-cream": "#FCFAF5",
      "--snoov-border": "#DFDACB",
      "--snoov-border-dark": "#CCC5B3",
      "--snoov-charcoal": "#1A1C16",
      "--snoov-muted": "#636758",
      "--snoov-light-muted": "#8E9283",
    },
  },
  {
    id: "monochrome-obsidian",
    name: "06 — Obsidian Noir & Chalk White",
    subtitle: "Parisian Minimalist Runway",
    description: "High-contrast architectural black with crisp chalk background. Pure editorial minimalism.",
    tag: "MINIMALIST NOIR",
    variables: {
      "--snoov-primary": "#141414",
      "--snoov-primary-hover": "#000000",
      "--snoov-primary-light": "#EEEEEE",
      "--snoov-primary-subtle": "rgba(20, 20, 20, 0.08)",
      "--snoov-canvas": "#FAFAFA",
      "--snoov-sand": "#EFEFEF",
      "--snoov-ecru": "#E5E5E5",
      "--snoov-cream": "#FFFFFF",
      "--snoov-border": "#E0E0E0",
      "--snoov-border-dark": "#CCCCCC",
      "--snoov-charcoal": "#0D0D0D",
      "--snoov-muted": "#555555",
      "--snoov-light-muted": "#888888",
    },
  },
]

export default function PaletteStudio() {
  const [isOpen, setIsOpen] = useState(false)
  const [activePalette, setActivePalette] = useState<string>("emerald-ivory")
  const [copied, setCopied] = useState(false)

  // Apply palette to DOM
  const applyPalette = (paletteId: string) => {
    const selected = PALETTES.find((p) => p.id === paletteId)
    if (!selected) return

    const root = document.documentElement
    Object.entries(selected.variables).forEach(([key, val]) => {
      root.style.setProperty(key, val)
    })

    setActivePalette(paletteId)
    if (typeof window !== "undefined") {
      localStorage.setItem("snoov_palette", paletteId)
    }
  }

  // Load saved palette from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("snoov_palette")
      if (saved && PALETTES.some((p) => p.id === saved)) {
        applyPalette(saved)
      }
    }
  }, [])

  const currentPalette = PALETTES.find((p) => p.id === activePalette) || PALETTES[0]

  const handleCopyChoice = () => {
    const text = `SNOOV Chosen Palette: ${currentPalette.name}\nPrimary Accent: ${currentPalette.variables["--snoov-primary"]}\nCanvas: ${currentPalette.variables["--snoov-canvas"]}\nText: ${currentPalette.variables["--snoov-charcoal"]}`
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <>
      {/* Floating Trigger Button (Bottom Left) */}
      <div className="fixed bottom-6 left-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group flex items-center gap-2.5 px-4 py-3 bg-snoov-charcoal text-white rounded-[2px] shadow-2xl border border-snoov-border hover:border-snoov-green transition-all duration-300 hover:scale-105 active:scale-95"
        >
          {/* Swatch Dot */}
          <span
            className="w-3.5 h-3.5 rounded-full border border-white/40 transition-colors shadow-inner"
            style={{ backgroundColor: currentPalette.variables["--snoov-primary"] }}
          />
          <span className="text-[11px] font-mono uppercase tracking-widest font-semibold">
            {isOpen ? "CLOSE STUDIO" : "PALETTE STUDIO (11 THEMES)"}
          </span>
        </button>
      </div>

      {/* Floating Modal / Studio Panel */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fadeIn">
          <div className="bg-snoov-canvas border border-snoov-border max-w-2xl w-full p-6 sm:p-8 rounded-[2px] shadow-2xl max-h-[90vh] overflow-y-auto relative">
            
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-snoov-border">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-snoov-green uppercase font-semibold">
                  LIVE COLOR PALETTE STUDIO
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-snoov-charcoal font-normal mt-0.5">
                  Select Brand Color Direction
                </h2>
                <p className="text-xs text-snoov-muted mt-1 font-sans">
                  Click any palette below to instantly preview the entire website live.
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-snoov-muted hover:text-snoov-charcoal font-mono text-sm p-2"
              >
                ✕
              </button>
            </div>

            {/* Palettes Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              {PALETTES.map((palette) => {
                const isSelected = activePalette === palette.id
                return (
                  <div
                    key={palette.id}
                    onClick={() => applyPalette(palette.id)}
                    className={clx(
                      "p-4 rounded-[2px] border cursor-pointer transition-all duration-200 relative flex flex-col justify-between",
                      isSelected
                        ? "bg-white border-snoov-charcoal ring-2 ring-snoov-charcoal shadow-md"
                        : "bg-snoov-sand/40 border-snoov-border hover:border-snoov-charcoal/60 hover:bg-white"
                    )}
                  >
                    <div>
                      {/* Badge & Title */}
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="text-[9px] font-mono tracking-widest uppercase font-semibold text-snoov-green">
                          {palette.tag}
                        </span>
                        {isSelected && (
                          <span className="text-[9px] font-mono text-white bg-snoov-charcoal px-1.5 py-0.5 rounded-[1px] uppercase font-bold">
                            ACTIVE
                          </span>
                        )}
                      </div>

                      <h3 className="font-serif text-base text-snoov-charcoal font-semibold">
                        {palette.name}
                      </h3>
                      <p className="text-[10px] font-mono text-snoov-muted uppercase tracking-wider mb-2">
                        {palette.subtitle}
                      </p>
                      <p className="text-xs text-snoov-muted leading-relaxed font-sans line-clamp-2">
                        {palette.description}
                      </p>
                    </div>

                    {/* Color Swatches */}
                    <div className="mt-4 pt-3 border-t border-snoov-border/60 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        {/* Primary Accent */}
                        <div
                          className="w-5 h-5 rounded-full border border-black/20 shadow-sm"
                          style={{ backgroundColor: palette.variables["--snoov-primary"] }}
                          title={`Primary: ${palette.variables["--snoov-primary"]}`}
                        />
                        {/* Canvas */}
                        <div
                          className="w-5 h-5 rounded-full border border-black/20 shadow-sm"
                          style={{ backgroundColor: palette.variables["--snoov-canvas"] }}
                          title={`Canvas: ${palette.variables["--snoov-canvas"]}`}
                        />
                        {/* Sand */}
                        <div
                          className="w-5 h-5 rounded-full border border-black/20 shadow-sm"
                          style={{ backgroundColor: palette.variables["--snoov-sand"] }}
                          title={`Sand: ${palette.variables["--snoov-sand"]}`}
                        />
                        {/* Charcoal */}
                        <div
                          className="w-5 h-5 rounded-full border border-black/20 shadow-sm"
                          style={{ backgroundColor: palette.variables["--snoov-charcoal"] }}
                          title={`Text: ${palette.variables["--snoov-charcoal"]}`}
                        />
                      </div>

                      <span className="text-[10px] font-mono font-medium text-snoov-charcoal uppercase underline">
                        {isSelected ? "Selected ✓" : "Preview →"}
                      </span>
                    </div>

                  </div>
                )
              })}
            </div>

            {/* Footer Action */}
            <div className="mt-8 pt-6 border-t border-snoov-border flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-snoov-muted font-sans">
                Active: <strong className="text-snoov-charcoal">{currentPalette.name}</strong>
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={handleCopyChoice}
                  className="flex-1 sm:flex-none btn-secondary py-2.5 text-[11px]"
                >
                  {copied ? "COPIED CONFIG ✓" : "COPY PALETTE CONFIG"}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex-1 sm:flex-none btn-primary py-2.5 text-[11px]"
                >
                  KEEP & EXPLORE
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  )
}
