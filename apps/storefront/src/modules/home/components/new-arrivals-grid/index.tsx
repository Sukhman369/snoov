"use client"

import React, { useState } from "react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import FashionProductCard from "@modules/products/components/fashion-product-card"
import { FASHION_PRODUCTS } from "@lib/data/fashion-mock-products"
import { clx } from "@medusajs/ui"

const CATEGORIES = [
  { id: "all", label: "All Creations" },
  { id: "tailoring", label: "Tailoring & Blazers" },
  { id: "knitwear", label: "Fine Knitwear" },
  { id: "outerwear", label: "Outerwear & Coats" },
  { id: "essentials", label: "Daily Essentials" },
  { id: "accessories", label: "Leather Goods" },
]

export default function NewArrivalsGrid() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredProducts =
    activeCategory === "all"
      ? FASHION_PRODUCTS
      : FASHION_PRODUCTS.filter((p) => p.category === activeCategory)

  return (
    <section className="py-16 sm:py-24 bg-snoov-canvas border-b border-snoov-border">
      <div className="content-container">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-snoov-border">
          <div>
            <span className="text-[10px] font-mono tracking-widest text-snoov-green uppercase font-semibold">
              SECTION 02 / SPRING CAPSULE
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-snoov-charcoal font-normal tracking-tight mt-1">
              New Arrivals & Signature Silhouettes
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={clx(
                  "px-3.5 py-1.5 text-xs tracking-editorial uppercase transition-all duration-200 rounded-[2px] font-medium",
                  activeCategory === cat.id
                    ? "bg-snoov-green text-white font-semibold shadow-sm"
                    : "bg-snoov-sand/80 text-snoov-muted border border-snoov-border hover:text-snoov-charcoal hover:border-snoov-charcoal"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3-Column / 4-Column Luxury Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 pt-10">
          {filteredProducts.map((product) => (
            <FashionProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Bottom Editorial Callout */}
        <div className="mt-16 pt-8 border-t border-snoov-border flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-xs text-snoov-muted font-sans">
            Showing <span className="font-semibold text-snoov-charcoal">{filteredProducts.length}</span> curated garments from the SS26 Capsule release.
          </p>
          <LocalizedClientLink
            href="/store"
            className="btn-secondary text-xs tracking-editorial py-2.5"
          >
            VIEW COMPLETE CATALOGUE ({FASHION_PRODUCTS.length} STYLES)
          </LocalizedClientLink>
        </div>

      </div>
    </section>
  )
}
