import { defineWidgetConfig } from "@medusajs/admin-sdk"

const SnoovLoginBrandingWidget = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center text-center pb-3">
      {/* SNOOV Calligraphic Brandmark */}
      <div className="relative mb-3 flex items-center justify-center">
        <img
          src="/static/brand/snoov-logo-crimson-script.webp"
          alt="SNOOV Atelier"
          className="w-44 h-auto object-contain filter drop-shadow-md hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Brand Title */}
      <h1 className="font-serif text-2xl text-white font-normal tracking-wide mt-1">
        Welcome to SNOOV
      </h1>

      {/* Subtitle */}
      <p className="text-xs text-[#8E8E93] font-sans mt-1">
        Sign in to access your boutique & atelier console
      </p>

      {/* Brand Badge */}
      <span className="mt-2.5 inline-block text-[9px] font-mono tracking-[0.25em] text-[#1C3F32] uppercase font-bold bg-[#1C3F32]/20 text-emerald-400 px-3 py-0.5 rounded-[1px] border border-emerald-500/30">
        STUDIO & ATELIER · PARIS / PORTO
      </span>
    </div>
  )
}

export const config = defineWidgetConfig({
  zone: "login.before",
})

export default SnoovLoginBrandingWidget
