export interface LogoVariant {
  id: string
  name: string
  subtitle: string
  tag: string
  description: string
  src: string
  srcDark?: string
  previewSrc?: string
  width: number
  height: number
  category: "script" | "serif" | "modern" | "monogram"
}

export const LOGO_VARIANTS: LogoVariant[] = [
  {
    id: "crimson-script",
    name: "01 — Crimson Calligraphic Script",
    subtitle: "Fluid, Expressive & Haute-Couture",
    tag: "SIGNATURE SCRIPT",
    description:
      "Handcrafted calligraphic signature script in rich deep crimson maroon. Flowing, expressive, and distinctly bespoke.",
    src: "/brand/snoov-logo-crimson-script.webp",
    srcDark: "/brand/snoov-logo-white-script.webp",
    previewSrc: "/brand/snoov-logo-crimson-script.png",
    width: 155,
    height: 58,
    category: "script",
  },
  {
    id: "gold-classic",
    name: "02 — Royal Gold Serif",
    subtitle: "Classic Heritage & High Luxury",
    tag: "ROYAL CLASSIC",
    description:
      "Architectural Roman serif lettering in radiant champagne gold with polished metallic luster and classic poise.",
    src: "/brand/snoov-logo-gold.webp",
    srcDark: "/brand/snoov-logo-gold.webp",
    previewSrc: "/brand/snoov-logo-gold.png",
    width: 145,
    height: 52,
    category: "serif",
  },
  {
    id: "editorial-bold-text",
    name: "03 — Editorial Bold Capitals",
    subtitle: "Big, Heavy & Architectural Text",
    tag: "TEXT ONLY / BOLD",
    description:
      "Bold, high-impact uppercase typographic wordmark with tight geometric kerning. Direct, uncompromising, and modern architectural luxury.",
    src: "/brand/snoov-logo-editorial-bold.svg",
    srcDark: "/brand/snoov-logo-editorial-bold-white.svg",
    previewSrc: "/brand/snoov-logo-editorial-bold.svg",
    width: 145,
    height: 38,
    category: "modern",
  },
  {
    id: "monogram-crest",
    name: "04 — SNOOV Heritage Monogram",
    subtitle: "Emblematic & Compact",
    tag: "ICON CREST",
    description:
      "Interlocked luxury S monogram emblem designed for seal embossing and minimal identity accents.",
    src: "/brand/snoov-icon.webp",
    srcDark: "/brand/snoov-icon.webp",
    previewSrc: "/brand/snoov-icon.png",
    width: 48,
    height: 48,
    category: "monogram",
  },
  {
    id: "no-logo-clean",
    name: "05 — No Logo (Clean Minimal Header)",
    subtitle: "Pure Restraint & Negative Space",
    tag: "CLEAN / NO LOGO",
    description:
      "Hides the brand logo completely, creating an ultra-clean, distraction-free editorial layout with elegant negative space.",
    src: "",
    srcDark: "",
    previewSrc: "",
    width: 0,
    height: 0,
    category: "modern",
  },
]

export const DEFAULT_LOGO_ID = "crimson-script"
