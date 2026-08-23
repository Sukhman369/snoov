"use client"

import React, { useState, useMemo } from "react"
import FashionProductCard from "@modules/products/components/fashion-product-card"
import { FASHION_PRODUCTS, FashionProduct } from "@lib/data/fashion-mock-products"
import { clx } from "@medusajs/ui"

export default function FashionStoreView({
  initialCategory = "all",
}: {
  initialCategory?: string
}) {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory)
  const [selectedSize, setSelectedSize] = useState<string>("all")
  const [sortBy, setSortBy] = useState<"newest" | "price-asc" | "price-desc">("newest")
  const [gridCols, setGridCols] = useState<2 | 3 | 4>(3)
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false)

  const categories = [
    { id: "all", label: "All Items" },
    { id: "tailoring", label: "Tailoring & Blazers" },
    { id: "knitwear", label: "Knitwear" },
    { id: "outerwear", label: "Outerwear" },
    { id: "essentials", label: "Essentials" },
    { id: "accessories", label: "Leather & Accessories" },
  ]

  const sizes = ["all", "XS", "S", "M", "L", "XL"]

  const filteredProducts = useMemo(() => {
    let list = [...FASHION_PRODUCTS]

    if (selectedCategory !== "all") {
      list = list.filter((p) => p.category === selectedCategory)
    }

    if (selectedSize !== "all") {
      list = list.filter((p) => p.sizes.includes(selectedSize))
    }

    if (sortBy === "price-asc") {
      list.sort((a, b) => a.price - b.price)
    } else if (sortBy === "price-desc") {
      list.sort((a, b) => b.price - a.price)
    } else {
      list.sort((a, b) => (b.isNewArrival ? 1 : 0) - (a.isNewArrival ? 1 : 0))
    }

    return list
  }, [selectedCategory, selectedSize, sortBy])

  return (
    <div className="bg-snoov-canvas min-h-screen pb-24">
      {/* Editorial Header Banner */}
      <div className="border-b border-snoov-border py-12 sm:py-16 bg-snoov-sand/30">
        <div className="content-container">
          <div className="max-w-xl">
            <span className="text-[10px] font-mono tracking-widest text-snoov-green uppercase font-semibold block mb-2">
              CATALOGUE / 2026 EDITION
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl text-snoov-charcoal font-normal tracking-tight">
              The Permanent Collection
            </h1>
            <p className="mt-3 text-xs sm:text-sm text-snoov-muted leading-relaxed font-sans">
              Timeless garments engineered from organic French flax, Tasmanian merino wool, and vegetable-tanned leather.
            </p>
          </div>
        </div>
      </div>

      {/* Filter, Sort & View Bar */}
      <div className="sticky top-20 z-40 bg-snoov-canvas/95 backdrop-blur-md border-b border-snoov-border py-4">
        <div className="content-container flex flex-wrap items-center justify-between gap-4">
          
          {/* Category Navigation Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={clx(
                  "px-3 py-1.5 text-xs tracking-editorial uppercase transition-all rounded-[2px] whitespace-nowrap font-medium",
                  selectedCategory === cat.id
                    ? "bg-snoov-green text-white font-semibold"
                    : "bg-snoov-sand/80 text-snoov-muted hover:text-snoov-charcoal hover:bg-white border border-snoov-border"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Right Controls: Size, Sort & Grid Switcher */}
          <div className="flex items-center gap-4 text-xs font-mono text-snoov-charcoal ml-auto">
            
            {/* Size Filter Dropdown */}
            <div className="flex items-center gap-1.5">
              <span className="text-snoov-muted text-[10px] uppercase">Size:</span>
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="bg-white border border-snoov-border text-xs px-2 py-1 rounded-[2px] focus:outline-none focus:border-snoov-green uppercase cursor-pointer"
              >
                {sizes.map((s) => (
                  <option key={s} value={s}>
                    {s === "all" ? "ALL SIZES" : s}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-1.5">
              <span className="text-snoov-muted text-[10px] uppercase">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) =>
                  setSortBy(e.target.value as "newest" | "price-asc" | "price-desc")
                }
                className="bg-white border border-snoov-border text-xs px-2 py-1 rounded-[2px] focus:outline-none focus:border-snoov-green uppercase cursor-pointer"
              >
                <option value="newest">Newest First</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>

            {/* Grid Column Switcher (Desktop) */}
            <div className="hidden lg:flex items-center gap-1 pl-2 border-l border-snoov-border">
              <button
                onClick={() => setGridCols(2)}
                title="2 Columns"
                className={clx(
                  "p-1.5 rounded-[2px] border",
                  gridCols === 2
                    ? "border-snoov-charcoal bg-snoov-charcoal text-white"
                    : "border-snoov-border bg-white text-snoov-muted hover:text-snoov-charcoal"
                )}
              >
                <span className="text-[10px] font-mono font-bold">||</span>
              </button>
              <button
                onClick={() => setGridCols(3)}
                title="3 Columns"
                className={clx(
                  "p-1.5 rounded-[2px] border",
                  gridCols === 3
                    ? "border-snoov-charcoal bg-snoov-charcoal text-white"
                    : "border-snoov-border bg-white text-snoov-muted hover:text-snoov-charcoal"
                )}
              >
                <span className="text-[10px] font-mono font-bold">|||</span>
              </button>
              <button
                onClick={() => setGridCols(4)}
                title="4 Columns"
                className={clx(
                  "p-1.5 rounded-[2px] border",
                  gridCols === 4
                    ? "border-snoov-charcoal bg-snoov-charcoal text-white"
                    : "border-snoov-border bg-white text-snoov-muted hover:text-snoov-charcoal"
                )}
              >
                <span className="text-[10px] font-mono font-bold">||||</span>
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* Product Grid Area */}
      <div className="content-container pt-8">
        
        {/* Count Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-snoov-border/60 text-xs font-mono text-snoov-muted">
          <span>
            SHOWING <strong className="text-snoov-charcoal">{filteredProducts.length}</strong> STYLES
          </span>
          <span className="text-snoov-green">
            ✓ ALL ITEMS IN STOCK AT ATELIER
          </span>
        </div>

        {/* Dynamic Grid */}
        {filteredProducts.length > 0 ? (
          <div
            className={clx(
              "grid gap-8 sm:gap-10 pt-8",
              gridCols === 2
                ? "grid-cols-1 sm:grid-cols-2"
                : gridCols === 3
                ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            )}
          >
            {filteredProducts.map((product) => (
              <FashionProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="py-24 text-center">
            <p className="font-serif italic text-xl text-snoov-charcoal">
              No garments found matching the selected filters.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("all")
                setSelectedSize("all")
              }}
              className="btn-secondary mt-4 text-xs"
            >
              RESET ALL FILTERS
            </button>
          </div>
        )}

      </div>
    </div>
  )
}
