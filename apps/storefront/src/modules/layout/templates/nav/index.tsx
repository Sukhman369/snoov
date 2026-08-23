import React, { Suspense } from "react"
import { listLocales } from "@lib/data/locales"
import { getLocale } from "@lib/data/locale-actions"
import { listRegions } from "@lib/data/regions"
import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import BrandLogo from "@modules/common/components/brand-logo"

export default async function Nav() {
  const [regions, locales, currentLocale] = await Promise.all([
    listRegions().then((regions: StoreRegion[]) => regions).catch(() => []),
    listLocales().catch(() => []),
    getLocale().catch(() => "en"),
  ])

  return (
    <div className="sticky top-0 inset-x-0 z-50">
      {/* Top Announcement Ribbon */}
      <div className="bg-snoov-charcoal text-snoov-sand py-2 px-4 text-center border-b border-snoov-charcoal/40">
        <div className="content-container flex items-center justify-between text-[11px] font-sans tracking-widest uppercase">
          <span className="hidden sm:inline-block text-snoov-sand/60">
            SNOOV ATELIER · EST. 2026
          </span>
          <span className="mx-auto sm:mx-0 font-medium">
            SPRING / SUMMER 2026 — COMPLIMENTARY WORLDWIDE SHIPPING OVER $250
          </span>
          <span className="hidden sm:inline-block text-snoov-green font-medium">
            NEW CAPSULE LIVE
          </span>
        </div>
      </div>

      {/* Main Editorial Header */}
      <header className="relative bg-snoov-canvas/95 backdrop-blur-md border-b border-snoov-border transition-all duration-300">
        <nav className="content-container flex items-center justify-between h-20">
          
          {/* Left Navigation (Desktop) & Mobile Toggle */}
          <div className="flex items-center gap-x-8 flex-1 basis-0">
            <div className="lg:hidden">
              <SideMenu regions={regions} locales={locales} currentLocale={currentLocale} />
            </div>

            <div className="hidden lg:flex items-center gap-x-8 text-xs uppercase tracking-editorial font-medium text-snoov-charcoal">
              <LocalizedClientLink
                href="/store"
                className="editorial-link py-1"
                data-testid="nav-store-link"
              >
                Collection
              </LocalizedClientLink>
              <LocalizedClientLink
                href="/store?category=tailoring"
                className="editorial-link py-1 text-snoov-muted hover:text-snoov-charcoal"
              >
                Tailoring
              </LocalizedClientLink>
              <LocalizedClientLink
                href="/store?category=knitwear"
                className="editorial-link py-1 text-snoov-muted hover:text-snoov-charcoal"
              >
                Knitwear
              </LocalizedClientLink>
              <LocalizedClientLink
                href="/store?filter=new"
                className="editorial-link py-1 text-snoov-green"
              >
                New Arrivals
              </LocalizedClientLink>
            </div>
          </div>

          {/* Center Brand Identity (Official Snoov Golden Script) */}
          <div className="flex items-center justify-center">
            <LocalizedClientLink
              href="/"
              className="group flex flex-col items-center text-center py-1.5"
              data-testid="nav-store-link"
            >
              <BrandLogo variant="gold" width={145} height={52} priority />
              <span className="text-[8px] tracking-[0.4em] text-snoov-muted uppercase font-sans font-medium -mt-1 group-hover:text-snoov-charcoal transition-colors duration-300">
                Studio & Atelier
              </span>
            </LocalizedClientLink>
          </div>

          {/* Right Action Icons & Bag */}
          <div className="flex items-center justify-end gap-x-6 sm:gap-x-8 flex-1 basis-0 text-xs tracking-editorial uppercase font-medium">
            <LocalizedClientLink
              href="/store"
              className="hidden md:flex items-center gap-1.5 text-snoov-muted hover:text-snoov-charcoal transition-colors"
            >
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <span>Search</span>
            </LocalizedClientLink>

            <LocalizedClientLink
              href="/account"
              className="hidden sm:inline-block text-snoov-muted hover:text-snoov-charcoal transition-colors"
              data-testid="nav-account-link"
            >
              Account
            </LocalizedClientLink>

            <Suspense
              fallback={
                <LocalizedClientLink
                  className="flex items-center gap-2 text-snoov-charcoal font-semibold"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  <span>BAG (0)</span>
                </LocalizedClientLink>
              }
            >
              <div className="flex items-center">
                <CartButton />
              </div>
            </Suspense>
          </div>

        </nav>
      </header>
    </div>
  )
}
