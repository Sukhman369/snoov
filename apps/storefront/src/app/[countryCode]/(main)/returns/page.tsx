import { Metadata } from "next"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export const metadata: Metadata = {
  title: "30-Day Returns & Exchanges | SNOOV Studio & Atelier",
  description:
    "Discover SNOOV's complimentary 30-day return and exchange policy. Step-by-step return portal, DHL/FedEx courier pickup, and atelier inspection standards.",
  alternates: {
    canonical: "https://snoov.com/returns",
  },
}

export default async function ReturnsAndExchangesPage() {
  const returnWindow = "30 Days from Delivery"
  const processingTime = "48 Business Hours"
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
        name: "Returns & Exchanges",
        item: "https://snoov.com/returns",
      },
    ],
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is SNOOV's return window?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Clients have 30 calendar days from the date of package delivery to request an exchange or full refund.",
        },
      },
      {
        "@type": "Question",
        name: "Are return shipments complimentary?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, SNOOV provides prepaid DHL Express or FedEx return shipping labels for all eligible orders across the EU, UK, US, Canada, UAE, and Switzerland.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to process my refund?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Once the parcel reaches our Paris or Porto atelier, our artisans perform a quality check within 48 business hours and issue your refund to the original payment method.",
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
            <span className="text-snoov-charcoal font-semibold">Returns & Exchanges</span>
          </nav>

          <div className="max-w-4xl">
            <span className="inline-block px-2.5 py-1 text-[10px] font-mono tracking-widest uppercase bg-snoov-sand text-snoov-charcoal/90 rounded-sm border border-snoov-border mb-4">
              Client Care & Assurance · 30-Day Guarantee
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-light tracking-tight text-snoov-charcoal leading-[1.1] mb-6">
              Returns & Exchanges
            </h1>
            <p className="text-sm sm:text-base text-snoov-muted leading-relaxed max-w-2xl font-sans">
              We design every silhouette with uncompromising intention. If the fit, drape, or feel of your piece does not meet your personal expectations, we offer complimentary global returns and size exchanges within 30 days.
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-snoov-border/60 text-xs font-mono">
              <div>
                <span className="text-snoov-muted block text-[10px] uppercase">RETURN WINDOW</span>
                <span className="text-snoov-charcoal font-semibold">{returnWindow}</span>
              </div>
              <div>
                <span className="text-snoov-muted block text-[10px] uppercase">RETURN SHIPPING</span>
                <span className="text-snoov-green font-semibold">100% Complimentary</span>
              </div>
              <div>
                <span className="text-snoov-muted block text-[10px] uppercase">ATELIER AUDIT</span>
                <span className="text-snoov-charcoal font-semibold">{processingTime}</span>
              </div>
              <div>
                <span className="text-snoov-muted block text-[10px] uppercase">SIZE EXCHANGES</span>
                <span className="text-snoov-charcoal font-semibold">Priority Dispatch</span>
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
                  00 / Return Navigation
                </span>
                <nav className="space-y-2.5 text-xs text-snoov-muted">
                  <a href="#how-it-works" className="block hover:text-snoov-green transition-colors">
                    01. Step-by-Step Return Process
                  </a>
                  <a href="#eligibility" className="block hover:text-snoov-green transition-colors">
                    02. Condition & Eligibility Criteria
                  </a>
                  <a href="#exchanges" className="block hover:text-snoov-green transition-colors">
                    03. Complimentary Size Exchanges
                  </a>
                  <a href="#refunds" className="block hover:text-snoov-green transition-colors">
                    04. Refund Timelines & Settlement
                  </a>
                  <a href="#exclusions" className="block hover:text-snoov-green transition-colors">
                    05. Made-to-Measure & Archival Items
                  </a>
                </nav>
              </div>

              {/* Instant Return Portal Trigger Box */}
              <div className="p-6 bg-snoov-charcoal text-snoov-canvas rounded-base border border-snoov-charcoal space-y-4">
                <span className="text-[10px] font-mono tracking-widest uppercase text-snoov-sand/70 block">
                  DIGITAL RETURN DESK
                </span>
                <h4 className="font-serif text-lg font-normal text-snoov-canvas">
                  Initiate Return or Exchange
                </h4>
                <p className="text-xs text-snoov-sand/80 leading-relaxed font-sans">
                  Have your Order ID (e.g., #SNV-84920) and billing email ready to generate your prepaid courier label.
                </p>
                <div className="pt-2">
                  <LocalizedClientLink
                    href="/account"
                    className="inline-flex items-center justify-center w-full py-2.5 px-4 bg-snoov-canvas text-snoov-charcoal text-xs font-mono uppercase tracking-wider font-semibold rounded-sm hover:bg-snoov-sand transition-colors"
                  >
                    Open Client Portal
                  </LocalizedClientLink>
                  <a
                    href={`mailto:${contactEmail}?subject=Return%20Request`}
                    className="block text-center text-[11px] font-mono text-snoov-sand/60 hover:text-snoov-canvas transition-colors mt-3"
                  >
                    Or Email Concierge Desk ↗
                  </a>
                </div>
              </div>
            </div>
          </aside>

          {/* Detailed Return Protocols */}
          <article className="lg:col-span-8 space-y-16 text-sm text-snoov-muted leading-relaxed font-sans">
            
            {/* 01. Step-by-Step Return Process */}
            <div id="how-it-works" className="scroll-mt-28 space-y-6 border-b border-snoov-border pb-12">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-snoov-green font-semibold block">
                  01 / WORKFLOW
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif text-snoov-charcoal font-normal mt-1">
                  Step-by-Step Return Process
                </h2>
                <p className="mt-2">
                  We have structured our return protocol to be effortless and completely paperless.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {/* Step 1 */}
                <div className="p-5 bg-snoov-sand/30 border border-snoov-border rounded-base space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-snoov-green">STEP 01</span>
                    <span className="text-[10px] font-mono text-snoov-muted uppercase">ONLINE</span>
                  </div>
                  <h3 className="font-serif text-base font-normal text-snoov-charcoal">
                    Generate Prepaid Label
                  </h3>
                  <p className="text-xs text-snoov-muted">
                    Sign in to your client account or enter your order number on our return portal to receive an instant DHL Express / FedEx QR code & shipping label.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="p-5 bg-snoov-sand/30 border border-snoov-border rounded-base space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-snoov-green">STEP 02</span>
                    <span className="text-[10px] font-mono text-snoov-muted uppercase">PACKAGING</span>
                  </div>
                  <h3 className="font-serif text-base font-normal text-snoov-charcoal">
                    Prepare the Archival Box
                  </h3>
                  <p className="text-xs text-snoov-muted">
                    Place the unworn garment inside its protective organic cotton dust bag and back into the original SNOOV reusable shipment box.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="p-5 bg-snoov-sand/30 border border-snoov-border rounded-base space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-snoov-green">STEP 03</span>
                    <span className="text-[10px] font-mono text-snoov-muted uppercase">COURIER</span>
                  </div>
                  <h3 className="font-serif text-base font-normal text-snoov-charcoal">
                    Doorstep Pickup or Drop-Off
                  </h3>
                  <p className="text-xs text-snoov-muted">
                    Schedule a complimentary courier doorstep collection at your preferred hour or drop the package at any authorized DHL Express / FedEx service point.
                  </p>
                </div>

                {/* Step 4 */}
                <div className="p-5 bg-snoov-sand/30 border border-snoov-border rounded-base space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-snoov-green">STEP 04</span>
                    <span className="text-[10px] font-mono text-snoov-muted uppercase">SETTLEMENT</span>
                  </div>
                  <h3 className="font-serif text-base font-normal text-snoov-charcoal">
                    Atelier Audit & Refund
                  </h3>
                  <p className="text-xs text-snoov-muted">
                    Upon delivery to our Paris or Porto studio, our team verifies condition within 48 hours and automatically credits your account.
                  </p>
                </div>
              </div>
            </div>

            {/* 02. Condition & Eligibility Criteria */}
            <div id="eligibility" className="scroll-mt-28 space-y-4 border-b border-snoov-border pb-12">
              <span className="text-[11px] font-mono uppercase tracking-widest text-snoov-green font-semibold block">
                02 / QUALITY STANDARDS
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-snoov-charcoal font-normal">
                Condition & Eligibility Criteria
              </h2>
              <p>
                To maintain the integrity of our conscious luxury collections, all returned items undergo a microscopic craftsmanship inspection:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 border border-snoov-border bg-snoov-sand/10 rounded-base space-y-2">
                  <span className="text-xs font-mono text-snoov-green uppercase font-semibold block">
                    ✓ ELIGIBLE FOR FULL REFUND
                  </span>
                  <ul className="space-y-1.5 text-xs text-snoov-muted">
                    <li>• Unworn, unwashed, and unmarked garments.</li>
                    <li>• Original atelier security tags & care labels attached.</li>
                    <li>• Free of fragrance, deodorants, or makeup traces.</li>
                    <li>• Accompanied by original dust bags and archival box.</li>
                  </ul>
                </div>

                <div className="p-5 border border-snoov-border bg-snoov-sand/10 rounded-base space-y-2">
                  <span className="text-xs font-mono text-snoov-muted uppercase font-semibold block">
                    ✕ INELIGIBLE / NON-RETURNABLE
                  </span>
                  <ul className="space-y-1.5 text-xs text-snoov-muted">
                    <li>• Items showing visible signs of wear or laundering.</li>
                    <li>• Garments with severed or missing security tags.</li>
                    <li>• Customized, tailored, or bespoke monogrammed orders.</li>
                    <li>• Final archive sale pieces marked as non-returnable.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 03. Size Exchanges */}
            <div id="exchanges" className="scroll-mt-28 space-y-4 border-b border-snoov-border pb-12">
              <span className="text-[11px] font-mono uppercase tracking-widest text-snoov-green font-semibold block">
                03 / FIT PERFECTION
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-snoov-charcoal font-normal">
                Complimentary Size Exchanges
              </h2>
              <p>
                Finding your exact silhouette is essential. If you require a different size or fit variation:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                <li>
                  <strong className="text-snoov-charcoal">Instant Hold:</strong> When you select an exchange in our return portal, the replacement size is immediately reserved in our atelier inventory to prevent sell-out.
                </li>
                <li>
                  <strong className="text-snoov-charcoal">Priority Dispatch:</strong> Your replacement piece is dispatched via complimentary express shipping as soon as the carrier registers the return package in transit.
                </li>
                <li>
                  <strong className="text-snoov-charcoal">Fit Guidance:</strong> Need tailored advice before exchanging? Consult our{" "}
                  <LocalizedClientLink href="/size-guide" className="text-snoov-green font-medium underline underline-offset-4 hover:opacity-80">
                    Atelier Size & Fit Matrix
                  </LocalizedClientLink>{" "}
                  or contact our stylists.
                </li>
              </ul>
            </div>

            {/* 04. Refund Timelines */}
            <div id="refunds" className="scroll-mt-28 space-y-4 border-b border-snoov-border pb-12">
              <span className="text-[11px] font-mono uppercase tracking-widest text-snoov-green font-semibold block">
                04 / SETTLEMENT
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-snoov-charcoal font-normal">
                Refund Timelines & Settlement
              </h2>
              <p>
                Approved refunds are credited directly to the original method of payment:
              </p>
              <div className="space-y-3 pt-1 text-xs">
                <div className="flex justify-between items-center py-2.5 border-b border-snoov-border/60">
                  <span className="text-snoov-charcoal font-medium">Credit & Debit Cards (Visa, Mastercard, Amex)</span>
                  <span className="font-mono text-snoov-muted">3 – 5 Business Days</span>
                </div>
                <div className="flex justify-between items-center py-2.5 border-b border-snoov-border/60">
                  <span className="text-snoov-charcoal font-medium">Apple Pay & Digital Wallets</span>
                  <span className="font-mono text-snoov-muted">1 – 2 Business Days</span>
                </div>
                <div className="flex justify-between items-center py-2.5 border-b border-snoov-border/60">
                  <span className="text-snoov-charcoal font-medium">Klarna Pay in 3 / Installments</span>
                  <span className="font-mono text-snoov-muted">Immediate Schedule Adjustment</span>
                </div>
                <div className="flex justify-between items-center py-2.5">
                  <span className="text-snoov-charcoal font-medium">SNOOV Atelier Store Credit</span>
                  <span className="font-mono text-snoov-green font-semibold">Instantaneous (+5% Bonus Credit)</span>
                </div>
              </div>
            </div>

            {/* 05. Bespoke & Archival Exclusions */}
            <div id="exclusions" className="scroll-mt-28 space-y-4">
              <span className="text-[11px] font-mono uppercase tracking-widest text-snoov-green font-semibold block">
                05 / EXCEPTIONS
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-snoov-charcoal font-normal">
                Made-to-Measure & Archival Items
              </h2>
              <p>
                Garments commissioned under our bespoke tailoring program, customized with bespoke embroidery, or personalized sizing are crafted exclusively for the individual patron and are therefore non-returnable under Article L. 221-28 of the French Consumer Code.
              </p>
              <p>
                In the rare event of a craftsmanship defect on a custom commission, our Paris atelier provides complimentary alterations and repair adjustments until the garment fits impeccably.
              </p>
            </div>

          </article>
        </div>
      </section>
    </div>
  )
}
