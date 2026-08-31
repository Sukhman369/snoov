import React from "react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import BrandLogo from "@modules/common/components/brand-logo"

export default async function Footer() {
  return (
    <footer className="bg-snoov-canvas border-t border-snoov-border text-snoov-charcoal overflow-hidden select-none">
      <div className="content-container pt-16 sm:pt-24 pb-8">

        {/* Top Editorial Row: Brand Overview + Directory Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 sm:gap-16 pb-16 border-b border-snoov-border">

          {/* Brand Identity & Mission (4 Columns) */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <BrandLogo width={160} height={58} className="-ml-2" />
              <span className="text-[10px] font-mono tracking-widest text-snoov-green uppercase font-semibold block mt-1">
                STUDIO & ATELIER · MOHALI / TRICITY
              </span>
              <p className="mt-4 text-xs text-snoov-muted leading-relaxed font-sans max-w-sm">
                A conscious luxury streetwear & fashion house focused on architectural tailoring, tactile organic textiles, and enduring silhouette design.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-snoov-border/60">
              <span className="text-[10px] font-mono text-snoov-charcoal/80 uppercase tracking-widest">
                VERIFIED SUSTAINABLE STANDARDS · GOTS & EUROPEAN FLAX®
              </span>
            </div>
          </div>

          {/* Directory Columns (8 Columns) */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8 text-xs">

            {/* Column 1: Shop */}
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-snoov-charcoal font-semibold block mb-4">
                01 / CATALOGUE
              </span>
              <ul className="space-y-3 text-snoov-muted">
                <li>
                  <LocalizedClientLink href="/store" className="hover:text-snoov-green transition-colors">
                    All Collections
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink href="/store?filter=new" className="hover:text-snoov-green transition-colors text-snoov-green font-medium">
                    New Arrivals (SS26)
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink href="/store?category=tailoring" className="hover:text-snoov-green transition-colors">
                    Tailoring & Blazers
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink href="/store?category=knitwear" className="hover:text-snoov-green transition-colors">
                    Fine-Gauge Knitwear
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink href="/store?category=outerwear" className="hover:text-snoov-green transition-colors">
                    Outerwear & Trench
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink href="/store?category=accessories" className="hover:text-snoov-green transition-colors">
                    Vegetable-Tanned Leather
                  </LocalizedClientLink>
                </li>
              </ul>
            </div>

            {/* Column 2: Information */}
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-snoov-charcoal font-semibold block mb-4">
                02 / CLIENT CARE
              </span>
              <ul className="space-y-3 text-snoov-muted">
                <li>
                  <LocalizedClientLink href="/size-guide" className="hover:text-snoov-green transition-colors">
                    Atelier Sizing Guide
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink href="/shipping" className="hover:text-snoov-green transition-colors">
                    Complimentary Shipping
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink href="/returns" className="hover:text-snoov-green transition-colors">
                    30-Day Returns & Exchanges
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink href="/account" className="hover:text-snoov-green transition-colors">
                    Client Account Portal
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink href="/garment-care" className="hover:text-snoov-green transition-colors">
                    Garment Care & Longevity
                  </LocalizedClientLink>
                </li>
              </ul>
            </div>

            {/* Column 3: Atelier & Connect */}
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-snoov-charcoal font-semibold block mb-4">
                03 / ATELIER
              </span>
              <ul className="space-y-3 text-snoov-muted">
                <li>
                  <LocalizedClientLink href="/about" className="hover:text-snoov-green transition-colors">
                    Our Story
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink href="/lookbook" className="hover:text-snoov-green transition-colors">
                    Seasonal Lookbook
                  </LocalizedClientLink>
                </li>
                <li>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-snoov-green transition-colors flex items-center gap-1.5">
                    <span>Instagram</span>
                    <span className="text-[10px]">↗</span>
                  </a>
                </li>
                <li>
                  <a href="https://pinterest.com" target="_blank" rel="noreferrer" className="hover:text-snoov-green transition-colors flex items-center gap-1.5">
                    <span>Pinterest</span>
                    <span className="text-[10px]">↗</span>
                  </a>
                </li>
                <li>
                  <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-snoov-green transition-colors flex items-center gap-1.5">
                    <span>Runway Archive</span>
                    <span className="text-[10px]">↗</span>
                  </a>
                </li>
                <li>
                  <LocalizedClientLink href="/contact" className="hover:text-snoov-green transition-colors font-medium">
                    Client Concierge Desk
                  </LocalizedClientLink>
                </li>
                <li className="pt-2 text-[11px] font-mono text-snoov-charcoal">
                  concierge@snoov.com
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* ── Giant Static Bold SNOOV Brand Typography ── */}
        <div className="pt-12 sm:pt-16 pb-4 text-center select-none overflow-hidden">
          <span
            className="font-sans font-black uppercase text-snoov-charcoal block tracking-tighter transition-all duration-300 hover:opacity-90"
            style={{
              fontSize: "clamp(5rem, 20vw, 19rem)",
              letterSpacing: "-0.045em",
              lineHeight: "0.82",
            }}
          >
            SNOOV
          </span>
          <div className="flex items-center justify-center gap-4 mt-2 text-[10px] sm:text-xs font-mono uppercase tracking-[0.35em] text-snoov-muted">
            <span>STREETWEAR</span>
            <span>•</span>
            <span>REDEFINED</span>
            <span>•</span>
            <span>EST. 2026</span>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 mt-4 border-t border-snoov-border flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-snoov-muted uppercase tracking-wider">
          <div>
            © {new Date().getFullYear()} SNOOV STUDIO & ATELIER. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-6">
            <LocalizedClientLink href="/privacy" className="hover:text-snoov-charcoal transition-colors">
              Privacy Policy
            </LocalizedClientLink>
            <LocalizedClientLink href="/terms-and-conditions" className="hover:text-snoov-charcoal transition-colors">
              Terms & Conditions
            </LocalizedClientLink>
            <LocalizedClientLink href="/cookie-policy" className="hover:text-snoov-charcoal transition-colors">
              Cookie Policy
            </LocalizedClientLink>
            <LocalizedClientLink href="/accessibility" className="hover:text-snoov-charcoal transition-colors">
              Accessibility
            </LocalizedClientLink>
            <LocalizedClientLink href="/sustainability" className="hover:text-snoov-charcoal transition-colors">
              Traceability & Audit
            </LocalizedClientLink>
          </div>
        </div>

      </div>
    </footer>
  )
}
