import { Metadata } from "next"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export const metadata: Metadata = {
  title: "Shipping, Duties & Fulfillment | SNOOV Studio & Atelier",
  description:
    "Explore SNOOV's global shipping standards, delivery timelines, prepaid customs (DDP), signature courier protocols, and sustainable archival packaging.",
  alternates: {
    canonical: "https://snoov.com/shipping",
  },
}

export default async function ShippingAndDutiesPage() {
  const contactEmail = "concierge@snoov.com"

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://snoov.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Shipping & Duties",
        item: "https://snoov.com/shipping",
      },
    ],
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Will I have to pay unexpected customs duties upon delivery?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. SNOOV ships on a Delivery Duty Paid (DDP) basis to the US, UK, EU, UAE, Switzerland, and Canada. All customs tariffs, local taxes, and clearance fees are prepaid at checkout.",
        },
      },
      {
        "@type": "Question",
        name: "Which couriers do you partner with?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "All atelier orders are dispatched exclusively via DHL Express Priority, FedEx International Priority, or UPS Carbon Neutral.",
        },
      },
      {
        "@type": "Question",
        name: "Is a signature required upon delivery?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, to ensure complete chain of custody for luxury garments, an adult signature is required upon delivery.",
        },
      },
    ],
  }

  return (
    <div className="bg-snoov-canvas text-snoov-charcoal min-h-screen">
      {/* Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── Page Header / Editorial Masthead ── */}
      <section className="border-b border-snoov-border pt-12 sm:pt-20 pb-12 sm:pb-16">
        <div className="content-container">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-snoov-muted mb-6">
            <LocalizedClientLink href="/" className="hover:text-snoov-green transition-colors">
              Atelier
            </LocalizedClientLink>
            <span>/</span>
            <span className="text-snoov-charcoal font-semibold">Shipping & Duties</span>
          </nav>

          <div className="max-w-4xl">
            <span className="inline-block px-2.5 py-1 text-[10px] font-mono tracking-widest uppercase bg-snoov-sand text-snoov-charcoal/90 rounded-sm border border-snoov-border mb-4">
              Global Logistics · DDP Customs Guaranteed
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-light tracking-tight text-snoov-charcoal leading-[1.1] mb-6">
              Shipping, Duties & Delivery
            </h1>
            <p className="text-sm sm:text-base text-snoov-muted leading-relaxed max-w-2xl font-sans">
              Every SNOOV garment is packaged by hand in our European fulfillment studios and dispatched worldwide through carbon-neutral priority couriers with end-to-end signature security.
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-snoov-border/60 text-xs font-mono">
              <div>
                <span className="text-snoov-muted block text-[10px] uppercase">COURIER PARTNERS</span>
                <span className="text-snoov-charcoal font-semibold">DHL Express & FedEx</span>
              </div>
              <div>
                <span className="text-snoov-muted block text-[10px] uppercase">CUSTOMS & TARIFFS</span>
                <span className="text-snoov-green font-semibold">DDP (Prepaid Duties)</span>
              </div>
              <div>
                <span className="text-snoov-muted block text-[10px] uppercase">EU / UK TRANSIT</span>
                <span className="text-snoov-charcoal font-semibold">1 – 3 Business Days</span>
              </div>
              <div>
                <span className="text-snoov-muted block text-[10px] uppercase">GLOBAL TRANSIT</span>
                <span className="text-snoov-charcoal font-semibold">2 – 5 Business Days</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Content Grid ── */}
      <section className="content-container py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Quick Index / Sticky Sidebar */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-28 space-y-6">
              <div className="p-6 bg-snoov-sand/40 border border-snoov-border rounded-base">
                <span className="text-[11px] font-mono uppercase tracking-widest text-snoov-charcoal font-semibold block mb-4">
                  00 / Shipping Index
                </span>
                <nav className="space-y-2.5 text-xs text-snoov-muted">
                  <a href="#destinations" className="block hover:text-snoov-green transition-colors">
                    01. Destinations & Transit Timelines
                  </a>
                  <a href="#ddp-customs" className="block hover:text-snoov-green transition-colors">
                    02. Delivery Duty Paid (DDP) Guarantee
                  </a>
                  <a href="#chain-of-custody" className="block hover:text-snoov-green transition-colors">
                    03. Signature Security & Chain of Custody
                  </a>
                  <a href="#packaging" className="block hover:text-snoov-green transition-colors">
                    04. Archival Sustainable Packaging
                  </a>
                  <a href="#tracking" className="block hover:text-snoov-green transition-colors">
                    05. Live Courier Tracking & Updates
                  </a>
                </nav>
              </div>

              {/* Courier Tracking Action Box */}
              <div className="p-6 bg-snoov-charcoal text-snoov-canvas rounded-base border border-snoov-charcoal space-y-4">
                <span className="text-[10px] font-mono tracking-widest uppercase text-snoov-sand/70 block">
                  REAL-TIME DISPATCH DESK
                </span>
                <h4 className="font-serif text-lg font-normal text-snoov-canvas">
                  Track an Active Order
                </h4>
                <p className="text-xs text-snoov-sand/80 leading-relaxed font-sans">
                  Enter your order confirmation number to view direct GPS vehicle status and live carrier milestones.
                </p>
                <div className="pt-2">
                  <LocalizedClientLink
                    href="/track-order"
                    className="inline-flex items-center justify-center w-full py-2.5 px-4 bg-snoov-canvas text-snoov-charcoal text-xs font-mono uppercase tracking-wider font-semibold rounded-sm hover:bg-snoov-sand transition-colors"
                  >
                    Track Shipment
                  </LocalizedClientLink>
                  <a
                    href={`mailto:${contactEmail}?subject=Logistics%20Inquiry`}
                    className="block text-center text-[11px] font-mono text-snoov-sand/60 hover:text-snoov-canvas transition-colors mt-3"
                  >
                    Contact Logistics Concierge ↗
                  </a>
                </div>
              </div>
            </div>
          </aside>

          {/* Detailed Shipping Protocols */}
          <article className="lg:col-span-8 space-y-16 text-sm text-snoov-muted leading-relaxed font-sans">
            
            {/* 01. Destinations & Timelines */}
            <div id="destinations" className="scroll-mt-28 space-y-6 border-b border-snoov-border pb-12">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-snoov-green font-semibold block">
                  01 / GLOBAL COVERAGE
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif text-snoov-charcoal font-normal mt-1">
                  Destinations & Transit Timelines
                </h2>
                <p className="mt-2">
                  Orders placed before 14:00 CET are dispatched on the same business day from our Paris or Porto atelier.
                </p>
              </div>

              {/* Transit Rates Table */}
              <div className="border border-snoov-border rounded-base overflow-hidden bg-snoov-sand/10">
                <div className="divide-y divide-snoov-border text-xs">
                  
                  {/* EU */}
                  <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <strong className="text-snoov-charcoal block font-mono uppercase text-[11px]">
                        EUROPEAN UNION & FRANCE
                      </strong>
                      <span className="text-snoov-muted text-[11px]">DHL Express / Standard Ground</span>
                    </div>
                    <div className="sm:text-right font-mono">
                      <span className="text-snoov-charcoal block font-medium">1 – 2 Business Days</span>
                      <span className="text-snoov-green font-semibold">Complimentary</span>
                    </div>
                  </div>

                  {/* UK & Switzerland */}
                  <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <strong className="text-snoov-charcoal block font-mono uppercase text-[11px]">
                        UNITED KINGDOM & SWITZERLAND
                      </strong>
                      <span className="text-snoov-muted text-[11px]">DHL Express Priority (All Taxes Included)</span>
                    </div>
                    <div className="sm:text-right font-mono">
                      <span className="text-snoov-charcoal block font-medium">2 – 3 Business Days</span>
                      <span className="text-snoov-green font-semibold">Complimentary on orders &gt; £200 / 250 CHF</span>
                    </div>
                  </div>

                  {/* US & Canada */}
                  <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <strong className="text-snoov-charcoal block font-mono uppercase text-[11px]">
                        UNITED STATES & CANADA
                      </strong>
                      <span className="text-snoov-muted text-[11px]">FedEx International Priority / DHL Express</span>
                    </div>
                    <div className="sm:text-right font-mono">
                      <span className="text-snoov-charcoal block font-medium">2 – 4 Business Days</span>
                      <span className="text-snoov-green font-semibold">Complimentary on orders &gt; $250</span>
                    </div>
                  </div>

                  {/* Middle East & Gulf */}
                  <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <strong className="text-snoov-charcoal block font-mono uppercase text-[11px]">
                        MIDDLE EAST (UAE, SAUDI ARABIA, QATAR)
                      </strong>
                      <span className="text-snoov-muted text-[11px]">DHL Express Air Priority</span>
                    </div>
                    <div className="sm:text-right font-mono">
                      <span className="text-snoov-charcoal block font-medium">2 – 4 Business Days</span>
                      <span className="text-snoov-charcoal font-medium">Complimentary on orders &gt; €350</span>
                    </div>
                  </div>

                  {/* Asia-Pacific */}
                  <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <strong className="text-snoov-charcoal block font-mono uppercase text-[11px]">
                        ASIA-PACIFIC (JAPAN, S. KOREA, AUSTRALIA, SINGAPORE)
                      </strong>
                      <span className="text-snoov-muted text-[11px]">DHL Express Worldwide</span>
                    </div>
                    <div className="sm:text-right font-mono">
                      <span className="text-snoov-charcoal block font-medium">3 – 5 Business Days</span>
                      <span className="text-snoov-charcoal font-medium">Complimentary on orders &gt; $300</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* 02. DDP Customs */}
            <div id="ddp-customs" className="scroll-mt-28 space-y-4 border-b border-snoov-border pb-12">
              <span className="text-[11px] font-mono uppercase tracking-widest text-snoov-green font-semibold block">
                02 / DUTIES & TARIFFS
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-snoov-charcoal font-normal">
                Delivery Duty Paid (DDP) Guarantee
              </h2>
              <p>
                We believe the luxury experience should never be interrupted by unexpected bureaucratic customs charges. SNOOV ships on a <strong>Delivery Duty Paid (DDP)</strong> basis to over 50 countries.
              </p>
              
              <div className="p-5 bg-snoov-sand/30 border border-snoov-border rounded-base space-y-3 text-xs">
                <div className="flex items-start gap-3">
                  <span className="text-snoov-green text-sm font-bold">✓</span>
                  <div>
                    <strong className="text-snoov-charcoal block mb-0.5">Zero Surprise Invoices</strong>
                    All local VAT, GST, import tariffs, and customs brokerage fees are calculated and prepaid directly during checkout.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-snoov-green text-sm font-bold">✓</span>
                  <div>
                    <strong className="text-snoov-charcoal block mb-0.5">Expedited Customs Clearance</strong>
                    Pre-cleared digital customs manifests ensure your parcel does not experience border holds or processing bottlenecks.
                  </div>
                </div>
              </div>
            </div>

            {/* 03. Signature Security */}
            <div id="chain-of-custody" className="scroll-mt-28 space-y-4 border-b border-snoov-border pb-12">
              <span className="text-[11px] font-mono uppercase tracking-widest text-snoov-green font-semibold block">
                03 / CHAIN OF CUSTODY
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-snoov-charcoal font-normal">
                Signature Security & Chain of Custody
              </h2>
              <p>
                To protect against parcel interception or doorstep theft, every SNOOV delivery requires an <strong>adult signature upon receipt</strong>.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                <li>
                  <strong className="text-snoov-charcoal">Delivery Attempts:</strong> If you are unavailable, the carrier will re-attempt delivery on the next business day or hold the parcel at a secure local depot for 7 days.
                </li>
                <li>
                  <strong className="text-snoov-charcoal">Delivery Instructions:</strong> You can manage delivery time slots or authorize a trusted neighbor via the DHL On Demand Delivery (ODD) or FedEx Delivery Manager portals.
                </li>
              </ul>
            </div>

            {/* 04. Packaging */}
            <div id="packaging" className="scroll-mt-28 space-y-4 border-b border-snoov-border pb-12">
              <span className="text-[11px] font-mono uppercase tracking-widest text-snoov-green font-semibold block">
                04 / ATELIER PRESENTATION
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-snoov-charcoal font-normal">
                Archival Sustainable Packaging
              </h2>
              <p>
                Your unboxing experience is an integral part of our atelier ethos:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs">
                <div className="p-4 border border-snoov-border rounded-base bg-snoov-sand/20">
                  <span className="font-mono text-snoov-green font-semibold block mb-1 text-[10px] uppercase">
                    BOX STRUCTURE
                  </span>
                  <strong className="text-snoov-charcoal block mb-1">100% Recycled Kraft</strong>
                  <p className="text-snoov-muted">FSC-certified rigid unbleached structural cardboard.</p>
                </div>
                <div className="p-4 border border-snoov-border rounded-base bg-snoov-sand/20">
                  <span className="font-mono text-snoov-green font-semibold block mb-1 text-[10px] uppercase">
                    GARMENT PROTECTION
                  </span>
                  <strong className="text-snoov-charcoal block mb-1">Organic Cotton Dust Bags</strong>
                  <p className="text-snoov-muted">Reusable GOTS-certified textile storage pouches.</p>
                </div>
                <div className="p-4 border border-snoov-border rounded-base bg-snoov-sand/20">
                  <span className="font-mono text-snoov-green font-semibold block mb-1 text-[10px] uppercase">
                    CIRCULAR RETURNS
                  </span>
                  <strong className="text-snoov-charcoal block mb-1">Dual Adhesive Strip</strong>
                  <p className="text-snoov-muted">Pre-integrated resealable tape for effortless circular returns.</p>
                </div>
              </div>
            </div>

            {/* 05. Tracking */}
            <div id="tracking" className="scroll-mt-28 space-y-4">
              <span className="text-[11px] font-mono uppercase tracking-widest text-snoov-green font-semibold block">
                05 / TRANSPARENCY
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-snoov-charcoal font-normal">
                Live Courier Tracking & Updates
              </h2>
              <p>
                The moment your parcel is scanned by our carrier partners, you will receive an encrypted tracking link via email and SMS.
              </p>
              <p>
                You can also track your active shipment directly on our{" "}
                <LocalizedClientLink href="/track-order" className="text-snoov-green font-medium underline underline-offset-4 hover:opacity-80">
                  Order Tracking Portal
                </LocalizedClientLink>{" "}
                at any time.
              </p>
            </div>

          </article>
        </div>
      </section>
    </div>
  )
}
