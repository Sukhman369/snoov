import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "SNOOV | Drop 001 Coming Soon — Conscious Luxury Streetwear",
  description:
    "SNOOV Studio & Atelier, Mohali. Private archive formulation in progress. Register for VIP early access.",
}

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen w-full bg-[#FAF8F3] text-[#2B2B2B] flex flex-col justify-between px-6 py-8 sm:px-12 sm:py-12 relative overflow-hidden select-none">
      {/* Subtle architectural grid accents */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(to right, #E4DDD0 1px, transparent 1px), linear-gradient(to bottom, #E4DDD0 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Top Bar — Lean & Understated */}
      <header className="relative z-10 w-full flex items-center justify-between text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.25em] text-[#7A6B6E] border-b border-[#E4DDD0]/60 pb-5">
        <span className="font-semibold text-[#2B2B2B] flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#6B1F3C]" />
          SNOOV ATELIER
        </span>
        <span className="hidden sm:inline-block">MOHALI, PUNJAB — STUDIO ARCHIVE</span>
        <span>EDITION 001</span>
      </header>

      {/* Center Stage — Minimal, Sculptural, Empty Canvas */}
      <main className="relative z-10 my-auto py-16 flex flex-col items-center text-center max-w-2xl mx-auto">
        {/* Brand Logo: 02 — Royal Gold Serif */}
        <div className="mb-10 sm:mb-14 relative flex items-center justify-center">
          <div className="relative group">
            <Image
              src="/brand/snoov-logo-gold.webp"
              alt="SNOOV"
              width={210}
              height={75}
              priority
              className="object-contain filter drop-shadow-sm transition-transform duration-700 hover:scale-[1.03]"
            />
          </div>
        </div>

        {/* Status Micro-Badge */}
        <div className="inline-flex items-center gap-2.5 px-3 py-1 mb-6 rounded-full border border-[#E4DDD0] bg-white/60 backdrop-blur-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-[#6B1F3C] animate-pulse" />
          <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.25em] text-[#6B1F3C] font-semibold">
            PRIVATE RELEASE IN FORMULATION
          </span>
        </div>

        {/* Minimal Editorial Title */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#2B2B2B] font-light tracking-tight leading-[1.1] mb-6">
          Conscious Luxury Streetwear.
        </h1>

        {/* Editorial Subtitle */}
        <p className="font-sans text-xs sm:text-sm text-[#7A6B6E] leading-relaxed max-w-lg mb-10 font-normal">
          An intentional study in silhouette, natural European flax, and uncompromised form.
          The inaugural capsule is limited to strictly 150 numbered allocations worldwide.
        </p>

        {/* Action Button: Register for Early Access */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Link
            href="/early-access"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#2B2B2B] text-white text-[11px] font-mono uppercase tracking-[0.25em] font-medium border border-[#2B2B2B] rounded-[2px] transition-all duration-300 hover:bg-[#6B1F3C] hover:border-[#6B1F3C] hover:shadow-lg active:scale-[0.98]"
          >
            <span>REGISTER FOR EARLY ACCESS</span>
            <span className="text-white/60">→</span>
          </Link>
        </div>

        <span className="mt-4 text-[9px] font-mono tracking-[0.15em] text-[#A49598] uppercase">
          Invitation token and private archive access provided via registry
        </span>
      </main>

      {/* Bottom Bar — Minimalist Status */}
      <footer className="relative z-10 w-full flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono tracking-[0.2em] text-[#7A6B6E] border-t border-[#E4DDD0]/60 pt-5">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-emerald-700/80 animate-ping" />
          <span className="uppercase text-[#2B2B2B]">SIGNAL 01 · REGISTRY OPEN</span>
        </div>
        <div className="text-center sm:text-right">
          <span className="text-[#A49598]">SNOOV STUDIO & ATELIER &copy; 2026. ALL RIGHTS RESERVED.</span>
        </div>
      </footer>
    </div>
  )
}
