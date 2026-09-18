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
      {/* ── Screen 01: Hero Concept Board with Gotham Noir Ambience & Mobile Optimization ── */}
      <section className="relative w-full h-[100dvh] min-h-[560px] flex flex-col justify-between items-center overflow-hidden bg-[#09090B]">
        {/* Top subtle vignette */}
        <div className="absolute inset-x-0 top-0 h-20 sm:h-32 bg-gradient-to-b from-[#09090B]/90 via-[#09090B]/40 to-transparent z-10 pointer-events-none" />

        {/* Top Subtitle Badge */}
        <div className="relative z-20 pt-6 sm:pt-10 w-full flex justify-center">
          <span className="text-[8.5px] sm:text-[10px] font-mono tracking-[0.3em] uppercase text-zinc-500/80">
            DROP 001 · CONCEPT ARCHIVE
          </span>
        </div>

        {/* Concept Board Image Container: object-contain on mobile ensures 100% of sketches & text are visible; object-cover on sm+ fills desktop */}
        <div className="absolute inset-0 w-full h-full bg-[#09090B] flex items-center justify-center">
          <Image
            src="/brand/coming-soon-hero.webp"
            alt="SNOOV Concept Board & Streetwear Design"
            fill
            priority
            className="object-contain sm:object-cover object-center"
          />
        </div>

        {/* Batman Dark bottom shade gradient */}
        <div className="absolute inset-x-0 bottom-0 h-32 sm:h-64 bg-gradient-to-t from-[#09090B] via-[#09090B]/85 to-transparent z-10 pointer-events-none" />

        {/* Scroll Indicator at bottom */}
        <a
          href="#content"
          aria-label="Scroll to content"
          className="relative z-20 mb-6 sm:mb-12 flex flex-col items-center gap-1.5 sm:gap-2 group text-zinc-400 hover:text-white transition-all duration-300 cursor-pointer"
        >
          <span className="text-[9px] sm:text-[11px] font-mono tracking-[0.35em] uppercase font-medium drop-shadow-md">
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
        className="min-h-[100dvh] w-full bg-[#09090B] text-[#EDEDED] flex flex-col justify-between px-5 py-8 sm:px-12 sm:py-16 relative"
      >
        {/* Center Stage — Minimal, Sculptural, Obsidian Canvas */}
        <main className="relative z-10 my-auto py-8 sm:py-16 flex flex-col items-center text-center max-w-2xl mx-auto w-full">
          {/* Brand Logo: SNOOV Bold Serif Wordmark */}
          <div className="mb-8 sm:mb-12 relative flex items-center justify-center">
            <div className="relative group">
              <Image
                src="/brand/snoov-logo-red.webp"
                alt="SNOOV"
                width={260}
                height={62}
                priority
                className="w-[200px] sm:w-[260px] h-auto object-contain filter drop-shadow-[0_0_25px_rgba(238,27,36,0.25)] transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>
          </div>

          {/* Editorial Subtitle — Responsive Inverted Pyramid Structure */}
          <div className="font-sans text-[11.5px] sm:text-sm text-zinc-400 leading-relaxed max-w-xl mx-auto mb-8 sm:mb-10 font-normal text-center flex flex-col items-center gap-1.5 sm:gap-2">
            <p className="text-zinc-200 text-center max-w-[310px] sm:max-w-xl">
              SNOOV measures the distance between fitting in and becoming unforgettable. It lives,
            </p>
            <p className="text-zinc-400 text-center max-w-[280px] sm:max-w-lg">
              In the choices nobody asked you to make, the places nobody told you to go,
            </p>
            <p className="text-zinc-400 text-center max-w-[245px] sm:max-w-md">
              and the version of yourself you haven&apos;t met yet.
            </p>
            <p className="text-white font-medium text-center tracking-wide max-w-[220px] sm:max-w-xs mt-0.5">
              Because ordinary is only a starting point.
            </p>
          </div>

          {/* Action Button: Register for Early Access */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto px-3 sm:px-0">
            <Link
              href="/early-access"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 bg-white text-black text-[10.5px] sm:text-[11px] font-mono uppercase tracking-[0.25em] font-semibold border border-white rounded-[2px] transition-all duration-300 hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-black hover:shadow-[0_0_25px_rgba(212,175,55,0.35)] active:scale-[0.98]"
            >
              <span>REGISTER FOR EARLY ACCESS</span>
              <span className="text-black/60">→</span>
            </Link>
          </div>

          <span className="mt-3.5 sm:mt-4 text-[8.5px] sm:text-[9px] font-mono tracking-[0.15em] text-zinc-600 uppercase">
            Invitation token and private archive access provided via registry
          </span>
        </main>

        {/* Bottom Bar — Minimalist Dark Footer */}
        <footer className="relative z-10 w-full flex items-center justify-center text-[9px] sm:text-[10px] font-mono tracking-[0.2em] text-zinc-600 pt-5 sm:pt-6 border-t border-zinc-900/60">
          <span>SNOOV STUDIO &copy; 2026. ALL RIGHTS RESERVED.</span>
        </footer>
      </section>
    </div>
  )
}
