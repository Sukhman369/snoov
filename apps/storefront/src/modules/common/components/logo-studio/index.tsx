"use client"

import React, { useState, useEffect } from "react"
import { clx } from "@medusajs/ui"
import { LOGO_VARIANTS, DEFAULT_LOGO_ID, LogoVariant } from "@lib/data/logo-variants"

export default function LogoStudio() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeLogo, setActiveLogo] = useState(DEFAULT_LOGO_ID)
  const [previewDark, setPreviewDark] = useState(false)

  // Load saved logo from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("snoov_logo")
      if (saved && LOGO_VARIANTS.some((l) => l.id === saved)) {
        setActiveLogo(saved)
      }
    }
  }, [])

  const handleSelectLogo = (id: string) => {
    setActiveLogo(id)
    if (typeof window !== "undefined") {
      localStorage.setItem("snoov_logo", id)
      // Broadcast custom event so all BrandLogo components update immediately
      window.dispatchEvent(
        new CustomEvent("snoov-logo-change", {
          detail: { id },
        })
      )
    }
  }

  const currentVariant = LOGO_VARIANTS.find((l) => l.id === activeLogo) || LOGO_VARIANTS[0]

  return (
    <>
      {/* Floating Trigger Button (Bottom Left, above Palette Studio) */}
      <div className="fixed bottom-20 left-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group flex items-center gap-2.5 px-4 py-2.5 bg-snoov-charcoal text-white rounded-[2px] shadow-2xl border border-snoov-border hover:border-snoov-green transition-all duration-300 hover:scale-105 active:scale-95"
        >
          {/* Logo Icon / Indicator */}
          <span className="w-4 h-4 flex items-center justify-center text-[11px] text-snoov-green font-serif font-bold">
            ✦
          </span>
          <span className="text-[10px] font-mono uppercase tracking-widest font-semibold">
            {isOpen ? "CLOSE LOGOS" : `LOGO STUDIO (${LOGO_VARIANTS.length})`}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-snoov-green animate-pulse" />
        </button>
      </div>

      {/* Floating Modal / Studio Panel */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
          <div className="bg-snoov-canvas border border-snoov-border max-w-2xl w-full p-6 sm:p-8 rounded-[2px] shadow-2xl max-h-[90vh] overflow-y-auto relative">

            {/* Header */}
            <div className="flex items-start justify-between pb-4 border-b border-snoov-border">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-snoov-green uppercase font-semibold">
                  BRAND IDENTITY STUDIO
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-snoov-charcoal font-normal mt-0.5">
                  Select Brand Logo Direction
                </h2>
                <p className="text-xs text-snoov-muted mt-1 font-sans">
                  Choose your preferred logo. It updates live across the navbar, mobile drawer, and footer.
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-snoov-muted hover:text-snoov-charcoal font-mono text-sm p-2"
              >
                ✕
              </button>
            </div>

            {/* Preview Background Toggle */}
            <div className="flex items-center justify-between mt-4 py-2 px-3 bg-snoov-sand/60 border border-snoov-border rounded-[2px]">
              <span className="text-[11px] font-mono text-snoov-muted uppercase tracking-wider">
                Preview Canvas:
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setPreviewDark(false)}
                  className={clx(
                    "px-2.5 py-1 text-[10px] font-mono uppercase rounded-[2px] transition-colors",
                    !previewDark
                      ? "bg-white text-snoov-charcoal border border-snoov-border font-semibold shadow-xs"
                      : "text-snoov-muted hover:text-snoov-charcoal"
                  )}
                >
                  Light Canvas
                </button>
                <button
                  onClick={() => setPreviewDark(true)}
                  className={clx(
                    "px-2.5 py-1 text-[10px] font-mono uppercase rounded-[2px] transition-colors",
                    previewDark
                      ? "bg-snoov-charcoal text-white border border-black font-semibold shadow-xs"
                      : "text-snoov-muted hover:text-snoov-charcoal"
                  )}
                >
                  Dark Canvas
                </button>
              </div>
            </div>

            {/* Logo Options Grid */}
            <div className="grid grid-cols-1 gap-4 mt-5">
              {LOGO_VARIANTS.map((logo) => {
                const isSelected = activeLogo === logo.id
                const previewImg = previewDark && logo.srcDark ? logo.srcDark : logo.src

                return (
                  <div
                    key={logo.id}
                    onClick={() => handleSelectLogo(logo.id)}
                    className={clx(
                      "p-5 rounded-[2px] border cursor-pointer transition-all duration-300 relative group",
                      isSelected
                        ? "border-snoov-green bg-white shadow-md ring-1 ring-snoov-green"
                        : "border-snoov-border bg-snoov-sand/30 hover:border-snoov-border-dark hover:bg-white"
                    )}
                  >
                    {/* Active Selected Pill */}
                    {isSelected && (
                      <span className="absolute top-3 right-3 px-2 py-0.5 bg-snoov-green text-white text-[9px] font-mono uppercase tracking-widest font-semibold rounded-[1px]">
                        ACTIVE LOGO ✓
                      </span>
                    )}

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                      {/* Logo Visual Box */}
                      <div
                        className={clx(
                          "w-full sm:w-48 h-24 flex flex-col items-center justify-center p-3 rounded-[2px] border transition-colors flex-shrink-0",
                          previewDark
                            ? "bg-[#161616] border-[#333]"
                            : logo.src
                            ? "bg-[#FAF7F2] border-snoov-border"
                            : "bg-[#FAF7F2] border-dashed border-snoov-border-dark"
                        )}
                      >
                        {logo.src ? (
                          <img
                            src={previewImg}
                            alt={logo.name}
                            className="max-h-16 max-w-[170px] w-auto h-auto object-contain filter drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
                          />
                        ) : (
                          <div className="text-center py-1">
                            <span className="text-base opacity-40 block">∅</span>
                            <span className="text-[10px] font-mono uppercase tracking-widest block font-semibold text-snoov-muted">
                              Negative Space
                            </span>
                            <span className="text-[9px] font-sans text-snoov-muted/70 block mt-0.5">
                              Pure Clean Header
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Logo Details */}
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-[9px] font-mono uppercase tracking-widest text-snoov-green font-semibold">
                            {logo.tag}
                          </span>
                        </div>

                        <h3 className="font-serif text-lg text-snoov-charcoal font-medium mt-0.5">
                          {logo.name}
                        </h3>

                        <p className="text-xs text-snoov-muted mt-1 leading-relaxed font-sans">
                          {logo.description}
                        </p>

                        <div className="mt-3 flex items-center gap-3">
                          <span className="text-[10px] font-mono text-snoov-muted">
                            Format:{" "}
                            {logo.src
                              ? logo.src.endsWith(".svg")
                                ? "Crisp Vector SVG"
                                : "High-Res Lossless WebP"
                              : "Pure Negative Space"}
                          </span>
                          <span className="text-snoov-border">•</span>
                          <span className="text-[10px] font-mono font-medium text-snoov-charcoal uppercase underline">
                            {isSelected ? "Current Selection" : "Click to Apply →"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Note for future logos */}
            <div className="mt-6 p-4 bg-snoov-sand/50 border border-snoov-border/80 rounded-[2px] flex items-center gap-3 text-xs text-snoov-muted">
              <span className="text-base text-snoov-green">✦</span>
              <span>
                <strong>Ready for more logos:</strong> You can upload additional logo files at any time, and they will automatically appear in this switcher!
              </span>
            </div>

            {/* Footer Action */}
            <div className="mt-6 pt-4 border-t border-snoov-border flex items-center justify-between">
              <div className="text-xs text-snoov-muted font-sans">
                Active: <strong className="text-snoov-charcoal">{currentVariant.name}</strong>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="btn-primary py-2 px-6 text-[11px]"
              >
                DONE & EXPLORE
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  )
}
