import React from "react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import FashionProductCard from "@modules/products/components/fashion-product-card"
import { FASHION_PRODUCTS } from "@lib/data/fashion-mock-products"

export default function EmptyCartMessage() {
  const suggestedPieces = FASHION_PRODUCTS.slice(0, 3)

  return (
    <div className="py-16 sm:py-24" data-testid="empty-cart-message">
      
      {/* Empty State Editorial Box */}
      <div className="max-w-xl mx-auto text-center p-8 sm:p-12 bg-white border border-snoov-border rounded-[2px] shadow-sm">
        <span className="text-[10px] font-mono tracking-widest text-snoov-green uppercase font-semibold">
          SHOPPING BAG
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl text-snoov-charcoal font-normal mt-2">
          Your Bag is Currently Empty
        </h1>
        <p className="mt-3 text-xs sm:text-sm text-snoov-muted leading-relaxed font-sans max-w-sm mx-auto">
          Explore our Spring/Summer 2026 capsule of organic French linen, deconstructed tailoring, and fine merino knits.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <LocalizedClientLink href="/store" className="btn-primary">
            EXPLORE COLLECTION
          </LocalizedClientLink>
          <LocalizedClientLink href="/store?category=tailoring" className="btn-secondary">
            DISCOVER TAILORING
          </LocalizedClientLink>
        </div>
      </div>

      {/* Suggested Pieces */}
      <div className="mt-20 pt-16 border-t border-snoov-border">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-snoov-green font-semibold">
              CURATED ESSENTIALS
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-snoov-charcoal font-normal mt-1">
              Seasonal Favorites
            </h2>
          </div>
          <LocalizedClientLink href="/store" className="editorial-link text-xs">
            VIEW ALL STYLES →
          </LocalizedClientLink>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {suggestedPieces.map((p) => (
            <FashionProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>

    </div>
  )
}
