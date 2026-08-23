"use client"

import React, { useState } from "react"

export default function AtelierNewsletter() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
    }
  }

  return (
    <section className="py-20 sm:py-28 bg-snoov-sand/70 border-b border-snoov-border">
      <div className="editorial-container text-center max-w-2xl mx-auto">
        
        <span className="text-[10px] font-mono uppercase tracking-widest text-snoov-green font-semibold">
          PRIVATE ATELIER DISPATCH
        </span>

        <h2 className="font-serif text-3xl sm:text-4xl text-snoov-charcoal font-normal tracking-tight mt-2">
          Join The SNOOV Society
        </h2>

        <p className="mt-4 text-xs sm:text-sm text-snoov-muted leading-relaxed font-sans max-w-md mx-auto">
          Receive confidential previews of upcoming numbered capsules, textile explorations, and private exhibition invites.
        </p>

        {!subscribed ? (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              placeholder="Enter your email address..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full sm:flex-1 px-4 py-3 text-xs bg-white text-snoov-charcoal border border-snoov-border rounded-[2px] focus:outline-none focus:border-snoov-green placeholder:text-snoov-muted/60 transition-colors"
            />
            <button
              type="submit"
              className="w-full sm:w-auto btn-primary py-3 px-6 whitespace-nowrap"
            >
              SUBSCRIBE
            </button>
          </form>
        ) : (
          <div className="mt-8 p-4 bg-white border border-snoov-green/30 rounded-[2px] inline-block">
            <p className="text-xs font-mono text-snoov-green font-semibold uppercase tracking-wider">
              ✓ Welcome to the Atelier Dispatch. Your private invitation is on its way.
            </p>
          </div>
        )}

        <p className="text-[10px] text-snoov-muted/70 font-mono tracking-wider uppercase mt-4">
          Strictly no spam · Unsubscribe anytime
        </p>

      </div>
    </section>
  )
}
