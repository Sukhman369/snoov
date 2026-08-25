import { defineWidgetConfig } from "@medusajs/admin-sdk"

const SnoovLoginBrandingWidget = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center -mt-6 mb-3 text-center animate-fadeIn">
      {/* SNOOV Luxury Calligraphic Logo */}
      <img
        src="/static/brand/snoov-logo-crimson-script.webp"
        alt="SNOOV Atelier"
        className="w-36 h-auto object-contain filter drop-shadow-md mb-2"
      />
      <span className="text-[10px] font-mono tracking-[0.25em] text-[#1C3F32] uppercase font-bold bg-[#1C3F32]/10 px-2.5 py-1 rounded-[2px] border border-[#1C3F32]/20">
        STUDIO & ATELIER · MERCHANT CONSOLE
      </span>
    </div>
  )
}

export const config = defineWidgetConfig({
  zone: "login.before",
})

export default SnoovLoginBrandingWidget
