"use client"

import React, { useState } from "react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import ImagePlaceholder from "@modules/common/components/image-placeholder"
import FashionProductCard from "@modules/products/components/fashion-product-card"
import { FASHION_PRODUCTS, FashionProduct } from "@lib/data/fashion-mock-products"
import { clx } from "@medusajs/ui"

interface FashionPDPProps {
  product: FashionProduct
}

export default function FashionPDP({ product }: FashionPDPProps) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || "M")
  const [selectedColor, setSelectedColor] = useState(product.colorHex)
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false)
  const [isAdding, setIsAdding] = useState(false)
  const [showToast, setShowToast] = useState(false)

  // Accordion open states
  const [openSection, setOpenSection] = useState<string | null>("materials")

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section)
  }

  const handleAddToBag = () => {
    setIsAdding(true)
    setTimeout(() => {
      setIsAdding(false)
      setShowToast(true)
      setTimeout(() => setShowToast(false), 3500)
    }, 600)
  }

  const allColors = [
    { name: product.colorName, hex: product.colorHex },
    ...(product.additionalColors || []),
  ]

  const galleryImages = [
    {
      slot: product.imageSlot,
      title: "Front Silhouette",
      spec: "1200 × 1600 px (3:4 Ratio)",
      src: product.image || "/images/model-portrait.webp",
    },
    {
      slot: product.secondarySlot,
      title: "Craft & Detail",
      spec: "1200 × 1600 px (3:4 Ratio)",
      src: product.secondaryImage || "/images/model-detail.webp",
    },
    {
      slot: {
        name: `${product.title} — Movement`,
        desktop: "1200 × 1600 px",
        mobile: "900 × 1200 px",
        aspectRatio: "3:4",
        purpose: "Dynamic walking angle showing fabric drape",
      },
      title: "Lookbook Angle",
      spec: "1200 × 1600 px (3:4 Ratio)",
      src: "/images/model-main.webp",
    },
  ]

  const relatedProducts = FASHION_PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3)

  return (
    <div className="bg-snoov-canvas min-h-screen py-8 sm:py-12 border-b border-snoov-border">
      
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-snoov-charcoal text-white px-5 py-4 rounded-[2px] shadow-2xl border border-snoov-green/40 flex items-center gap-4 transition-all duration-300">
          <div className="w-2.5 h-2.5 rounded-full bg-snoov-green" />
          <div className="text-xs">
            <span className="font-medium block">{product.title} (Size {selectedSize})</span>
            <span className="text-snoov-sand/70 text-[10px] uppercase tracking-wider">Added to your shopping bag</span>
          </div>
          <LocalizedClientLink
            href="/cart"
            className="text-[10px] font-mono text-snoov-green uppercase font-semibold underline ml-2"
          >
            VIEW BAG →
          </LocalizedClientLink>
        </div>
      )}

      {/* Breadcrumb Bar */}
      <div className="content-container mb-8">
        <nav className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-snoov-muted">
          <LocalizedClientLink href="/" className="hover:text-snoov-charcoal transition-colors">
            HOME
          </LocalizedClientLink>
          <span>/</span>
          <LocalizedClientLink href="/store" className="hover:text-snoov-charcoal transition-colors">
            COLLECTION
          </LocalizedClientLink>
          <span>/</span>
          <span className="text-snoov-charcoal font-medium">{product.title}</span>
        </nav>
      </div>

      {/* Main PDP Grid */}
      <div className="content-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          
          {/* Left Column: Multi-Slot 3:4 Luxury Gallery (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col-reverse sm:flex-row gap-4">
            
            {/* Thumbnail Rail */}
            <div className="flex sm:flex-col gap-3 overflow-x-auto sm:overflow-visible">
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={clx(
                    "relative w-16 sm:w-20 aspect-[3/4] bg-snoov-sand border overflow-hidden rounded-[2px] flex-shrink-0 transition-all group",
                    activeImageIndex === idx
                      ? "border-snoov-charcoal ring-2 ring-snoov-charcoal ring-offset-1"
                      : "border-snoov-border opacity-70 hover:opacity-100"
                  )}
                >
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                </button>
              ))}
            </div>

            {/* Main Featured Image Slot */}
            <div className="flex-1 aspect-[3/4] overflow-hidden bg-snoov-sand border border-snoov-border rounded-[2px] shadow-sm relative">
              <ImagePlaceholder
                name={galleryImages[activeImageIndex].slot.name}
                desktop={galleryImages[activeImageIndex].slot.desktop}
                mobile={galleryImages[activeImageIndex].slot.mobile}
                aspectRatio="3:4"
                purpose={galleryImages[activeImageIndex].slot.purpose}
                src={galleryImages[activeImageIndex].src}
                className="w-full h-full"
              />

              {/* Tag Badge */}
              {product.tag && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-2.5 py-1 bg-white/90 backdrop-blur-sm text-snoov-charcoal text-[9px] uppercase tracking-widest font-mono border border-snoov-border">
                    {product.tag}
                  </span>
                </div>
              )}
            </div>

          </div>

          {/* Right Column: Product Meta, Variant Selection & Actions (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col justify-start lg:sticky lg:top-28">
            
            {/* Category & Origin */}
            <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-snoov-muted pb-2 border-b border-snoov-border/60">
              <span className="text-snoov-green font-semibold">{product.fabric}</span>
              <span>{product.details.origin}</span>
            </div>

            {/* Title & Price */}
            <h1 className="font-serif text-3xl sm:text-4xl text-snoov-charcoal font-normal tracking-tight mt-3">
              {product.title}
            </h1>

            <div className="mt-3 flex items-baseline gap-3">
              <span className="text-xl sm:text-2xl font-mono text-snoov-charcoal font-medium">
                ${product.price} {product.currency}
              </span>
              <span className="text-[10px] font-mono text-snoov-muted uppercase tracking-wider">
                Tax Included · Complimentary Shipping
              </span>
            </div>

            {/* Editorial Description */}
            <p className="mt-5 text-xs sm:text-sm text-snoov-muted leading-relaxed font-sans">
              {product.description}
            </p>

            {/* Color Selection */}
            <div className="mt-8 pt-6 border-t border-snoov-border">
              <div className="flex items-center justify-between text-xs font-mono mb-2.5">
                <span className="text-snoov-muted uppercase tracking-wider">Color:</span>
                <span className="text-snoov-charcoal font-medium">
                  {allColors.find((c) => c.hex === selectedColor)?.name}
                </span>
              </div>
              <div className="flex items-center gap-2">
                {allColors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.hex)}
                    className={clx(
                      "w-6 h-6 rounded-full border transition-all flex items-center justify-center",
                      selectedColor === color.hex
                        ? "ring-2 ring-snoov-charcoal ring-offset-2 scale-105 border-transparent"
                        : "border-black/20 hover:scale-105"
                    )}
                    style={{ backgroundColor: color.hex }}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection & Size Guide */}
            <div className="mt-6">
              <div className="flex items-center justify-between text-xs font-mono mb-2.5">
                <span className="text-snoov-muted uppercase tracking-wider">Size (EU/US):</span>
                <button
                  type="button"
                  onClick={() => setIsSizeGuideOpen(true)}
                  className="text-snoov-green underline text-[10px] uppercase tracking-wider hover:text-snoov-charcoal transition-colors font-medium"
                >
                  Size Guide & Measurements
                </button>
              </div>

              <div className="grid grid-cols-5 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={clx(
                      "py-2.5 text-xs font-mono uppercase tracking-wider transition-all rounded-[2px] border text-center font-medium",
                      selectedSize === size
                        ? "bg-snoov-charcoal text-white border-snoov-charcoal"
                        : "bg-white text-snoov-charcoal border-snoov-border hover:border-snoov-charcoal"
                    )}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Bag CTA Button */}
            <div className="mt-8 flex flex-col gap-3">
              <button
                onClick={handleAddToBag}
                disabled={isAdding}
                className="w-full btn-primary py-4 text-xs font-semibold tracking-editorial"
              >
                {isAdding ? "ADDING TO BAG..." : `ADD TO BAG — $${product.price * quantity} ${product.currency}`}
              </button>

              <div className="flex items-center justify-center gap-6 text-[10px] font-mono text-snoov-muted uppercase tracking-wider pt-2">
                <span>✓ Atelier Quality & Exchange Guarantee</span>
                <span>•</span>
                <span>✓ Free Delivery Over ₹7,000</span>
                <span>•</span>
                <span>✓ Atelier Box Included</span>
              </div>
            </div>

            {/* Accordion Specification Tabs */}
            <div className="mt-10 border-t border-snoov-border divide-y divide-snoov-border text-xs font-sans">
              
              {/* Materials & Composition */}
              <div>
                <button
                  onClick={() => toggleSection("materials")}
                  className="w-full py-4 flex items-center justify-between text-left font-serif text-base text-snoov-charcoal tracking-wide"
                >
                  <span>Materials & Textile Origin</span>
                  <span className="font-mono text-xs">{openSection === "materials" ? "—" : "+"}</span>
                </button>
                {openSection === "materials" && (
                  <div className="pb-4 text-snoov-muted space-y-2 leading-relaxed">
                    <p>• {product.details.composition}</p>
                    <p>• Dyed with low-impact certified ecological pigments.</p>
                    <p>• Certified European Flax® master weaver quality.</p>
                  </div>
                )}
              </div>

              {/* Fit & Silhouette */}
              <div>
                <button
                  onClick={() => toggleSection("fit")}
                  className="w-full py-4 flex items-center justify-between text-left font-serif text-base text-snoov-charcoal tracking-wide"
                >
                  <span>Fit & Proportions</span>
                  <span className="font-mono text-xs">{openSection === "fit" ? "—" : "+"}</span>
                </button>
                {openSection === "fit" && (
                  <div className="pb-4 text-snoov-muted space-y-2 leading-relaxed">
                    <p>{product.details.fit}</p>
                    <p>• Cut true to size for a relaxed, contemporary drape.</p>
                  </div>
                )}
              </div>

              {/* Care & Maintenance */}
              <div>
                <button
                  onClick={() => toggleSection("care")}
                  className="w-full py-4 flex items-center justify-between text-left font-serif text-base text-snoov-charcoal tracking-wide"
                >
                  <span>Garment Care & Longevity</span>
                  <span className="font-mono text-xs">{openSection === "care" ? "—" : "+"}</span>
                </button>
                {openSection === "care" && (
                  <div className="pb-4 text-snoov-muted space-y-2 leading-relaxed">
                    <p>{product.details.care}</p>
                    <p>• Natural flax fibres improve with gentle wear and steaming.</p>
                  </div>
                )}
              </div>

            </div>

          </div>

        </div>

        {/* Size Guide Modal */}
        {isSizeGuideOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
            <div className="bg-snoov-canvas border border-snoov-border p-6 sm:p-8 max-w-lg w-full rounded-[2px] shadow-2xl relative">
              <div className="flex items-center justify-between pb-4 border-b border-snoov-border">
                <h3 className="font-serif text-2xl text-snoov-charcoal font-medium">
                  Atelier Sizing Guide (CM)
                </h3>
                <button
                  onClick={() => setIsSizeGuideOpen(false)}
                  className="text-snoov-muted hover:text-snoov-charcoal font-mono text-sm"
                >
                  ✕
                </button>
              </div>

              <div className="mt-4 text-xs font-mono">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-snoov-border text-snoov-charcoal">
                      <th className="py-2">SIZE</th>
                      <th className="py-2">CHEST</th>
                      <th className="py-2">WAIST</th>
                      <th className="py-2">SHOULDER</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-snoov-border/60 text-snoov-muted">
                    <tr>
                      <td className="py-2 font-semibold text-snoov-charcoal">XS</td>
                      <td className="py-2">92 cm</td>
                      <td className="py-2">76 cm</td>
                      <td className="py-2">44 cm</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-semibold text-snoov-charcoal">S</td>
                      <td className="py-2">98 cm</td>
                      <td className="py-2">82 cm</td>
                      <td className="py-2">46 cm</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-semibold text-snoov-charcoal">M</td>
                      <td className="py-2">104 cm</td>
                      <td className="py-2">88 cm</td>
                      <td className="py-2">48 cm</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-semibold text-snoov-charcoal">L</td>
                      <td className="py-2">110 cm</td>
                      <td className="py-2">94 cm</td>
                      <td className="py-2">50 cm</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-semibold text-snoov-charcoal">XL</td>
                      <td className="py-2">116 cm</td>
                      <td className="py-2">100 cm</td>
                      <td className="py-2">52 cm</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <button
                onClick={() => setIsSizeGuideOpen(false)}
                className="w-full btn-secondary mt-6 py-2.5 text-[10px]"
              >
                CLOSE SIZING TABLE
              </button>
            </div>
          </div>
        )}

        {/* Complete the Look / Related Ensembles */}
        <div className="mt-24 pt-16 border-t border-snoov-border">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-snoov-green font-semibold">
                CURATED COMPANIONS
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-snoov-charcoal font-normal mt-1">
                Complete The Look
              </h2>
            </div>
            <LocalizedClientLink href="/store" className="editorial-link text-xs">
              VIEW ALL →
            </LocalizedClientLink>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedProducts.map((p) => (
              <FashionProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
