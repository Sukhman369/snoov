"use client"

import React, { useState } from "react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import ImagePlaceholder from "@modules/common/components/image-placeholder"
import { FashionProduct } from "@lib/data/fashion-mock-products"
import { clx } from "@medusajs/ui"

interface FashionProductCardProps {
  product: FashionProduct
  className?: string
}

export default function FashionProductCard({
  product,
  className,
}: FashionProductCardProps) {
  const [selectedColor, setSelectedColor] = useState(product.colorHex)
  const [isHovered, setIsHovered] = useState(false)
  const [added, setAdded] = useState(false)

  const handleQuickAdd = (e: React.MouseEvent, size: string) => {
    e.preventDefault()
    e.stopPropagation()
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const allColors = [
    { name: product.colorName, hex: product.colorHex },
    ...(product.additionalColors || []),
  ]

  const primaryImg = product.image || "/images/model-portrait.webp"
  const secondaryImg = product.secondaryImage || "/images/model-detail.webp"

  return (
    <div
      className={clx("group flex flex-col relative", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 3:4 Image Container */}
      <LocalizedClientLink
        href={`/products/${product.handle}`}
        className="relative block w-full aspect-[3/4] overflow-hidden bg-snoov-sand border border-snoov-border rounded-[2px]"
      >
        {/* Main vs Secondary Image Slot Toggle */}
        <div className="w-full h-full relative">
          <ImagePlaceholder
            name={product.imageSlot.name}
            desktop={product.imageSlot.desktop}
            mobile={product.imageSlot.mobile}
            aspectRatio="3:4"
            purpose={product.imageSlot.purpose}
            src={isHovered ? secondaryImg : primaryImg}
            className="w-full h-full"
          />
        </div>

        {/* Tag Pill (e.g. LIMITED EDITION / NEW ARRIVAL) */}
        {product.tag && (
          <div className="absolute top-3 left-3 z-20">
            <span className="px-2 py-1 bg-white/90 backdrop-blur-sm text-snoov-charcoal text-[9px] uppercase tracking-widest font-mono border border-snoov-border">
              {product.tag}
            </span>
          </div>
        )}

        {/* Quick Size Add Overlay on Hover */}
        <div
          className={clx(
            "absolute inset-x-0 bottom-0 z-20 p-3 bg-white/95 backdrop-blur-sm border-t border-snoov-border transition-all duration-300 transform",
            isHovered
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-0 pointer-events-none"
          )}
        >
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[9px] uppercase tracking-widest text-snoov-muted font-medium">
              QUICK ADD TO BAG
            </span>
            {added && (
              <span className="text-[9px] text-snoov-green font-semibold uppercase tracking-wider">
                ✓ ADDED
              </span>
            )}
          </div>
          <div className="flex flex-wrap gap-1">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={(e) => handleQuickAdd(e, size)}
                className="flex-1 min-w-[32px] py-1 text-[10px] font-mono text-snoov-charcoal bg-snoov-canvas border border-snoov-border hover:bg-snoov-green hover:text-white hover:border-snoov-green transition-colors rounded-[1px]"
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      </LocalizedClientLink>

      {/* Product Details Meta */}
      <div className="pt-4 pb-2 flex flex-col flex-1 justify-between">
        <div>
          {/* Fabric Subtitle */}
          <div className="flex items-center justify-between text-[10px] font-mono text-snoov-muted uppercase tracking-wider">
            <span>{product.fabric}</span>
            <span className="font-semibold text-snoov-charcoal">
              ${product.price} {product.currency}
            </span>
          </div>

          {/* Product Title */}
          <h3 className="font-serif text-base sm:text-lg text-snoov-charcoal font-medium mt-1 group-hover:text-snoov-green transition-colors">
            <LocalizedClientLink href={`/products/${product.handle}`}>
              {product.title}
            </LocalizedClientLink>
          </h3>
        </div>

        {/* Color Swatches */}
        <div className="flex items-center gap-1.5 mt-2.5">
          {allColors.map((color) => (
            <button
              key={color.name}
              title={color.name}
              onClick={() => setSelectedColor(color.hex)}
              className={clx(
                "w-3.5 h-3.5 rounded-full border transition-transform",
                selectedColor === color.hex
                  ? "ring-1 ring-snoov-charcoal ring-offset-1 scale-110 border-transparent"
                  : "border-black/20 hover:scale-105"
              )}
              style={{ backgroundColor: color.hex }}
            />
          ))}
          <span className="text-[10px] text-snoov-muted ml-1.5 font-mono">
            {allColors.find((c) => c.hex === selectedColor)?.name}
          </span>
        </div>
      </div>
    </div>
  )
}
