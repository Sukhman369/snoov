import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "SNOOV | Drop 001 Coming Soon — Conscious Luxury Streetwear",
  description:
    "SNOOV measures the distance between fitting in and becoming unforgettable. It lives in the choices nobody asked you to make, the places nobody told you to go, and the version of yourself you haven't met yet. Because ordinary is only a starting point.",
}

export default function ComingSoonPage() {
  return (
    <div className="w-full min-h-screen bg-[#09090B] text-[#EDEDED] select-none scroll-smooth">
      {/* ── Screen 01: Fullscreen Image with Gotham Noir Bottom Shade & Scroll Indicator ── */}
      <section className="relative w-full h-screen flex flex-col justify-end items-center overflow-hidden bg-[#09090B]">
        {/* Fullscreen Image Container */}
        <div className="absolute inset-0 w-full h-full bg-[#09090B]">
          <Image
            src="/brand/coming-soon-hero.webp"
            alt="SNOOV Streetwear Editorial"
            fill
            priority
            className="object-cover object-top sm:object-center"
          />
        </div>

        {/* Batman Dark bottom shade gradient */}
        <div className="absolute inset-x-0 bottom-0 h-64 sm:h-96 bg-gradient-to-t from-[#09090B] via-[#09090B]/85 to-transparent pointer-events-none" />

        {/* Scroll Indicator at bottom */}
        <a
          href="#content"
          aria-label="Scroll to content"
          className="relative z-10 mb-8 sm:mb-12 flex flex-col items-center gap-2 group text-zinc-400 hover:text-white transition-all duration-300 cursor-pointer"
        >
          <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.35em] uppercase font-medium drop-shadow-md">
            SCROLL
          </span>
          <span className="text-xs font-mono transform group-hover:translate-y-1 transition-transform duration-300 animate-bounce text-zinc-400 group-hover:text-white drop-shadow-md">
            ↓
          </span>
        </a>
      </section>

      {/* ── Screen 02: Batman Dark Noir Coming Soon Page ── */}
      <section
        id="content"
        className="min-h-screen w-full bg-[#09090B] text-[#EDEDED] flex flex-col justify-between px-6 py-12 sm:px-12 sm:py-16 relative"
      >
        {/* Center Stage — Minimal, Sculptural, Obsidian Canvas */}
        <main className="relative z-10 my-auto py-12 sm:py-20 flex flex-col items-center text-center max-w-2xl mx-auto w-full">
          {/* Brand Logo: 02 — Royal Gold Serif */}
          <div className="mb-10 sm:mb-14 relative flex items-center justify-center">
            <div className="relative group">
              <Image
                src="/brand/snoov-logo-gold.webp"
                alt="SNOOV"
                width={210}
                height={75}
                priority
                className="object-contain filter drop-shadow-[0_0_20px_rgba(212,175,55,0.18)] transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>
          </div>

          {/* Editorial Subtitle — Inverted Pyramid Structure */}
          <div className="font-sans text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-xl mx-auto mb-10 font-normal text-center flex flex-col items-center gap-1.5 sm:gap-2">
            <p className="max-w-xl text-center text-zinc-200">
              SNOOV measures the distance between fitting in and becoming unforgettable. It lives,
            </p>
            <p className="max-w-lg text-center text-zinc-400">
              In the choices nobody asked you to make, the places nobody told you to go,
            </p>
            <p className="max-w-md text-center text-zinc-400">
              and the version of yourself you haven&apos;t met yet.
            </p>
            <p className="max-w-xs text-center font-medium text-white tracking-wide">
              Because ordinary is only a starting point.
            </p>
          </div>

          {/* Action Button: Register for Early Access */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link
              href="/early-access"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 bg-white text-black text-[11px] font-mono uppercase tracking-[0.25em] font-semibold border border-white rounded-[2px] transition-all duration-300 hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-black hover:shadow-[0_0_25px_rgba(212,175,55,0.35)] active:scale-[0.98]"
            >
              <span>REGISTER FOR EARLY ACCESS</span>
              <span className="text-black/60">→</span>
            </Link>
          </div>

          <span className="mt-4 text-[9px] font-mono tracking-[0.15em] text-zinc-600 uppercase">
            Invitation token and private archive access provided via registry
          </span>
        </main>

        {/* Bottom Bar — Minimalist Dark Footer */}
        <footer className="relative z-10 w-full flex items-center justify-center text-[10px] font-mono tracking-[0.2em] text-zinc-600 pt-6 border-t border-zinc-900/60">
          <span>SNOOV STUDIO &copy; 2026. ALL RIGHTS RESERVED.</span>
        </footer>
      </section>
    </div>
  )
}
