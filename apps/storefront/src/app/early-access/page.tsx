"use client"

import React, { useState } from "react"
import Image from "next/image"

export default function EarlyAccessPage() {
  const [name, setName] = useState("")
  const [countryCode, setCountryCode] = useState("+91")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [successData, setSuccessData] = useState<{
    name: string
    email: string
    phone: string
    queuePosition?: number
    alreadyRegistered?: boolean
  } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!name.trim()) {
      setError("Please enter your full name.")
      return
    }

    if (!email.trim() || !email.includes("@")) {
      setError("Please provide a valid email address.")
      return
    }

    if (!phone.trim() || phone.replace(/\D/g, "").length < 7) {
      setError("Please enter a valid mobile number.")
      return
    }

    setIsSubmitting(true)

    try {
      const fullPhone = `${countryCode} ${phone.trim()}`
      const res = await fetch("/api/early-access", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: fullPhone,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit request. Please try again.")
      }

      setSuccessData({
        name: data.subscriber?.name || name.trim(),
        email: data.subscriber?.email || email.trim(),
        phone: data.subscriber?.phone || fullPhone,
        queuePosition: data.queuePosition,
        alreadyRegistered: data.alreadyRegistered,
      })
    } catch (err: any) {
      setError(err.message || "An error occurred while connecting. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-[100dvh] w-full bg-[#09090B] text-[#EDEDED] flex flex-col justify-between px-4 py-8 sm:px-12 sm:py-16 relative overflow-hidden select-none">
      {/* Center Stage — Minimalist Dark Form */}
      <main className="relative z-10 my-auto py-8 sm:py-12 flex flex-col items-center justify-center max-w-md w-full mx-auto">
        {/* Brand Logo: Crimson Calligraphic Script */}
        <div className="mb-6 sm:mb-8 flex justify-center">
          <div className="relative group">
            <Image
              src="/brand/snoov-logo-crimson-script.webp"
              alt="SNOOV"
              width={220}
              height={95}
              priority
              className="w-[160px] sm:w-[200px] h-auto object-contain filter drop-shadow-[0_0_25px_rgba(220,38,38,0.25)] transition-transform duration-700 hover:scale-[1.03]"
            />
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center mb-8">
          <h1 className="font-serif text-2xl sm:text-3xl text-white font-normal tracking-tight">
            Reserve Your Allocation
          </h1>
          <p className="font-sans text-xs text-zinc-400 mt-2 max-w-xs mx-auto leading-relaxed">
            Strictly limited release. You will receive an exclusive direct pass prior to the public opening.
          </p>
        </div>

        {/* Early Access Form */}
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          {error && (
            <div className="p-3 bg-rose-950/60 border border-rose-800 text-rose-300 text-[11px] font-mono rounded-[2px] text-center">
              {error}
            </div>
          )}

          {/* Full Name */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400">
              Full Name
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Sahib Singh"
              className="w-full px-4 py-3.5 bg-[#121214] border border-zinc-800 rounded-[2px] text-xs font-sans text-white placeholder:text-zinc-600 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all shadow-xs"
            />
          </div>

          {/* Phone Number with Country Code */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400">
              Phone / WhatsApp Number
            </label>
            <div className="flex gap-2">
              <select
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                aria-label="Country Dial Code"
                className="px-2.5 py-3.5 bg-[#121214] border border-zinc-800 rounded-[2px] text-xs font-mono text-zinc-200 focus:outline-none focus:border-red-600 transition-all cursor-pointer shadow-xs"
              >
                <option value="+91">🇮🇳 +91 (IN)</option>
                <option value="+1">🇺🇸 +1 (US/CA)</option>
                <option value="+44">🇬🇧 +44 (UK)</option>
                <option value="+971">🇦🇪 +971 (UAE)</option>
                <option value="+61">🇦🇺 +61 (AU)</option>
                <option value="+49">🇩🇪 +49 (DE)</option>
                <option value="+33">🇫🇷 +33 (FR)</option>
                <option value="+65">🇸🇬 +65 (SG)</option>
              </select>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="98765 43210"
                className="flex-1 px-4 py-3.5 bg-[#121214] border border-zinc-800 rounded-[2px] text-xs font-sans text-white placeholder:text-zinc-600 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all shadow-xs"
              />
            </div>
          </div>

          {/* Email Address */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400">
              Email Address
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="sahib@snoov.com"
              className="w-full px-4 py-3.5 bg-[#121214] border border-zinc-800 rounded-[2px] text-xs font-sans text-white placeholder:text-zinc-600 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all shadow-xs"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-2 inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black text-[11px] font-mono uppercase tracking-[0.25em] font-semibold border border-white rounded-[2px] transition-all duration-300 hover:bg-red-600 hover:border-red-600 hover:text-white hover:shadow-[0_0_25px_rgba(220,38,38,0.35)] disabled:opacity-50 active:scale-[0.98] shadow-sm"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 border-2 border-black/40 border-t-black rounded-full animate-spin" />
                TRANSMITTING...
              </span>
            ) : (
              <>
                <span>REQUEST INVITATION</span>
                <span>→</span>
              </>
            )}
          </button>

          <p className="text-center text-[9px] font-mono text-zinc-600 uppercase tracking-[0.15em] mt-1">
            Zero spam. Private notification strictly upon drop availability.
          </p>
        </form>
      </main>

      {/* Bottom Bar */}
      <footer className="relative z-10 w-full flex items-center justify-between text-[10px] font-mono tracking-[0.2em] text-zinc-600 border-t border-zinc-800/60 pt-5">
        <span>SNOOV STUDIO &copy; 2026</span>
        <span className="text-zinc-600">ALL RIGHTS RESERVED</span>
      </footer>

      {/* Slide-Up Congrats / Success Modal Sheet */}
      {successData && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/80 backdrop-blur-md transition-opacity duration-300">
          <div className="w-full max-w-lg bg-[#121214] border-t sm:border border-zinc-800 sm:rounded-[2px] p-5 sm:p-10 shadow-2xl relative transform transition-transform duration-500 animate-slide-in max-h-[92dvh] overflow-y-auto">
            {/* Header emblem */}
            <div className="flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-red-500 font-serif text-lg mb-4 shadow-sm">
                ✦
              </div>

              <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-red-500 font-bold">
                {successData.alreadyRegistered ? "ALREADY ON VIP LIST" : "ALLOCATION CONFIRMED"}
              </span>

              <h2 className="font-serif text-2xl sm:text-3xl text-white font-normal mt-1">
                Welcome, {successData.name}.
              </h2>

              <p className="font-sans text-xs sm:text-sm text-zinc-400 mt-3 leading-relaxed max-w-sm">
                Your invitation request has been logged. Prior to the Drop 001 release, a private cryptographic access token will be transmitted to:
              </p>

              {/* Data Summary Card */}
              <div className="w-full my-6 p-4 bg-[#0A0A0C] border border-zinc-800/80 rounded-[2px] text-left flex flex-col gap-2 font-mono text-[11px]">
                <div className="flex items-center justify-between border-b border-zinc-800/50 pb-2">
                  <span className="text-zinc-500 uppercase">Email:</span>
                  <span className="text-zinc-200 font-semibold truncate max-w-[220px]">
                    {successData.email}
                  </span>
                </div>
                <div className="flex items-center justify-between border-b border-zinc-800/50 pb-2">
                  <span className="text-zinc-500 uppercase">Phone:</span>
                  <span className="text-zinc-200 font-semibold">{successData.phone}</span>
                </div>
                <div className="flex items-center justify-between pt-1">
                  <span className="text-zinc-500 uppercase">Registry Status:</span>
                  <span className="text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    CONFIRMED VIP
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <div className="w-full pt-2">
                <button
                  onClick={() => setSuccessData(null)}
                  className="w-full inline-flex items-center justify-center px-6 py-3.5 bg-white text-black text-[11px] font-mono uppercase tracking-[0.2em] font-semibold rounded-[2px] transition-all hover:bg-red-600 hover:text-white active:scale-[0.98]"
                >
                  DISMISS
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
