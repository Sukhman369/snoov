import { Metadata } from "next"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export const metadata: Metadata = {
  title: "Exchange & Replacement Policy | SNOOV Studio & Atelier",
  description:
    "Discover SNOOV's conscious craftsmanship policy and complimentary damaged goods exchange guarantee. Priority courier replacement for transit-damaged or defective pieces.",
  alternates: {
    canonical: "https://snoov.com/returns",
  },
}

export default async function ReturnsAndExchangesPage() {
  const reportingWindow = "Within 48 Hours"
  const verificationTime = "24–48 Business Hours"
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
        name: "Exchange & Replacement Policy",
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
        name: "What is SNOOV's return and exchange policy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "To eliminate deadstock waste and honor our conscious limited-capsule production, SNOOV operates on a final-sale model and does not accept standard returns or refunds. However, in the rare event that an item arrives damaged or flawed in transit, we provide an immediate, complimentary exchange for a pristine replacement.",
        },
      },
      {
        "@type": "Question",
        name: "How do I request an exchange for a damaged product?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Please inspect your order upon delivery and notify our Concierge Desk within 48 hours by emailing concierge@snoov.com with your Order ID and clear photographs of the damaged garment and packaging. Our atelier team will arrange a complimentary courier pickup and dispatch a replacement.",
        },
      },
      {
        "@type": "Question",
        name: "Can I exchange an item for a different size or color?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Because each capsule is crafted in strictly limited quantities, we cannot accommodate size or preference exchanges once an order has been delivered. We encourage patrons to consult our detailed Atelier Size Guide or contact our styling team before placing an order.",
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
            <span className="text-snoov-charcoal font-semibold">Exchange & Replacement Policy</span>
          </nav>

          <div className="max-w-4xl">
            <span className="inline-block px-2.5 py-1 text-[10px] font-mono tracking-widest uppercase bg-snoov-sand text-snoov-charcoal/90 rounded-sm border border-snoov-border mb-4">
              Client Care & Assurance · Conscious Atelier Standards
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-light tracking-tight text-snoov-charcoal leading-[1.1] mb-6">
              Exchange & Replacement Policy
            </h1>
            <p className="text-sm sm:text-base text-snoov-muted leading-relaxed max-w-2xl font-sans">
              Every SNOOV silhouette is cut, constructed, and finished with meticulous intentionality in our Chandigarh atelier. To honor our zero-deadstock commitment and artisanal production discipline, all purchases are final. However, your complete peace of mind remains sacred: if any piece arrives damaged in transit or compromised by a craftsmanship defect, we guarantee an immediate, complimentary exchange.
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-snoov-border/60 text-xs font-mono">
              <div>
                <span className="text-snoov-muted block text-[10px] uppercase">REPORT WINDOW</span>
                <span className="text-snoov-charcoal font-semibold">{reportingWindow}</span>
              </div>
              <div>
                <span className="text-snoov-muted block text-[10px] uppercase">EXCHANGE SHIPPING</span>
                <span className="text-snoov-green font-semibold">100% Complimentary</span>
              </div>
              <div>
                <span className="text-snoov-muted block text-[10px] uppercase">ATELIER AUDIT</span>
                <span className="text-snoov-charcoal font-semibold">{verificationTime}</span>
              </div>
              <div>
                <span className="text-snoov-muted block text-[10px] uppercase">REPLACEMENT DISPATCH</span>
                <span className="text-snoov-charcoal font-semibold">Priority Courier</span>
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
                  00 / Policy Overview
                </span>
                <nav className="space-y-2.5 text-xs text-snoov-muted">
                  <a href="#conscious-philosophy" className="block hover:text-snoov-green transition-colors">
                    01. Conscious Production & Final Sale
                  </a>
                  <a href="#damage-guarantee" className="block hover:text-snoov-green transition-colors">
                    02. Damaged Goods Exchange Guarantee
                  </a>
                  <a href="#how-to-report" className="block hover:text-snoov-green transition-colors">
                    03. 3-Step Damage Reporting Protocol
                  </a>
                  <a href="#eligibility" className="block hover:text-snoov-green transition-colors">
                    04. Defect & Quality Verification Standards
                  </a>
                  <a href="#fit-assistance" className="block hover:text-snoov-green transition-colors">
                    05. Pre-Purchase Sizing & Styling Advice
                  </a>
                </nav>
              </div>

              {/* Instant Exchange Desk Trigger Box */}
              <div className="p-6 bg-snoov-charcoal text-snoov-canvas rounded-base border border-snoov-charcoal space-y-4">
                <span className="text-[10px] font-mono tracking-widest uppercase text-snoov-sand/70 block">
                  CONCIERGE DESK
                </span>
                <h4 className="font-serif text-lg font-normal text-snoov-canvas">
                  Report Damaged Arrival
                </h4>
                <p className="text-xs text-snoov-sand/80 leading-relaxed font-sans">
                  Received a piece that was compromised in transit? Have your Order ID (e.g., #SNV-84920) and photos of the package ready for our team.
                </p>
                <div className="pt-2">
                  <LocalizedClientLink
                    href="/contact"
                    className="inline-flex items-center justify-center w-full py-2.5 px-4 bg-snoov-canvas text-snoov-charcoal text-xs font-mono uppercase tracking-wider font-semibold rounded-sm hover:bg-snoov-sand transition-colors"
                  >
                    Open Client Desk
                  </LocalizedClientLink>
                  <a
                    href={`mailto:${contactEmail}?subject=Damaged%20Item%20Exchange%20Request`}
                    className="block text-center text-[11px] font-mono text-snoov-sand/60 hover:text-snoov-canvas transition-colors mt-3"
                  >
                    Or Email Concierge Desk ↗
                  </a>
                </div>
              </div>
            </div>
          </aside>

          {/* Detailed Policy Protocols */}
          <article className="lg:col-span-8 space-y-16 text-sm text-snoov-muted leading-relaxed font-sans">
            
            {/* 01. Conscious Production & Final Sale */}
            <div id="conscious-philosophy" className="scroll-mt-28 space-y-6 border-b border-snoov-border pb-12">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-snoov-green font-semibold block">
                  01 / PHILOSOPHY
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif text-snoov-charcoal font-normal mt-1">
                  Conscious Production & Final Sale
                </h2>
                <p className="mt-2">
                  At SNOOV, our design philosophy revolves around intentionality, sustainability, and absolute reverence for artisan craft.
                </p>
              </div>

              <div className="p-5 bg-snoov-sand/30 border border-snoov-border rounded-base space-y-3">
                <h3 className="font-serif text-base text-snoov-charcoal font-medium">
                  Why We Operate on a Final-Sale Discipline
                </h3>
                <p className="text-xs text-snoov-muted leading-relaxed">
                  Unlike conventional fashion brands that rely on mass industrial overproduction, SNOOV creates in disciplined, limited-run capsules. Every garment is crafted from premium certified raw materials (380–550 GSM GOTS organic cotton, natural botanical dyes, and European linen).
                </p>
                <p className="text-xs text-snoov-muted leading-relaxed">
                  To eliminate deadstock inventory, reduce carbon emissions associated with frequent reverse logistics, and ensure that every customer receives an untouched, atelier-fresh garment, <strong className="text-snoov-charcoal">we do not accept standard returns, refunds, or cancellations for change of mind or personal preference</strong>.
                </p>
              </div>
            </div>

            {/* 02. Damaged Goods Exchange Guarantee */}
            <div id="damage-guarantee" className="scroll-mt-28 space-y-4 border-b border-snoov-border pb-12">
              <span className="text-[11px] font-mono uppercase tracking-widest text-snoov-green font-semibold block">
                02 / CLIENT REASSURANCE
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-snoov-charcoal font-normal">
                Damaged Goods Exchange Guarantee
              </h2>
              <p>
                While our final-sale model preserves atelier integrity, your satisfaction and receiving an immaculate garment are non-negotiable. If your order is compromised during transit or bears an unexpected manufacturing flaw:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 border border-snoov-border bg-snoov-sand/10 rounded-base space-y-2">
                  <span className="text-xs font-mono text-snoov-green uppercase font-semibold block">
                    ✓ 100% COMPLIMENTARY EXCHANGE
                  </span>
                  <p className="text-xs text-snoov-muted">
                    If an item arrives damaged or defective, SNOOV covers all return courier and replacement shipping charges. A pristine replacement will be expedited from our studio at zero cost to you.
                  </p>
                </div>

                <div className="p-5 border border-snoov-border bg-snoov-sand/10 rounded-base space-y-2">
                  <span className="text-xs font-mono text-snoov-charcoal uppercase font-semibold block">
                    ★ OUT-OF-STOCK PROTECTION
                  </span>
                  <p className="text-xs text-snoov-muted">
                    If the damaged silhouette or size is archived or completely sold out, our atelier will provide an immediate SNOOV Atelier Credit or work closely with you on an equivalent bespoke solution.
                  </p>
                </div>
              </div>
            </div>

            {/* 03. 3-Step Damage Reporting Protocol */}
            <div id="how-to-report" className="scroll-mt-28 space-y-6 border-b border-snoov-border pb-12">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-snoov-green font-semibold block">
                  03 / PROTOCOL
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif text-snoov-charcoal font-normal mt-1">
                  Step-by-Step Damage Reporting Process
                </h2>
                <p className="mt-2">
                  To ensure a seamless and prompt resolution, please follow these three simple steps upon receiving your delivery:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                {/* Step 1 */}
                <div className="p-5 bg-snoov-sand/30 border border-snoov-border rounded-base space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-snoov-green">STEP 01</span>
                    <span className="text-[10px] font-mono text-snoov-muted uppercase">WITHIN 48H</span>
                  </div>
                  <h3 className="font-serif text-base font-normal text-snoov-charcoal">
                    Inspect & Document
                  </h3>
                  <p className="text-xs text-snoov-muted">
                    Please inspect your parcel upon arrival. Take clear photographs or a short video highlighting the damaged area of the garment as well as the outer packaging box.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="p-5 bg-snoov-sand/30 border border-snoov-border rounded-base space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-snoov-green">STEP 02</span>
                    <span className="text-[10px] font-mono text-snoov-muted uppercase">NOTIFY</span>
                  </div>
                  <h3 className="font-serif text-base font-normal text-snoov-charcoal">
                    Contact Concierge
                  </h3>
                  <p className="text-xs text-snoov-muted">
                    Email <strong className="text-snoov-charcoal font-mono">{contactEmail}</strong> or reach us on WhatsApp with your Order ID and attached media within 48 hours of delivery.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="p-5 bg-snoov-sand/30 border border-snoov-border rounded-base space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-snoov-green">STEP 03</span>
                    <span className="text-[10px] font-mono text-snoov-muted uppercase">EXPEDITE</span>
                  </div>
                  <h3 className="font-serif text-base font-normal text-snoov-charcoal">
                    Courier Exchange
                  </h3>
                  <p className="text-xs text-snoov-muted">
                    Our team verifies the claim within 24–48 hours, coordinates a complimentary doorstep courier pickup, and dispatches your pristine replacement piece immediately.
                  </p>
                </div>
              </div>
            </div>

            {/* 04. Defect & Quality Verification Standards */}
            <div id="eligibility" className="scroll-mt-28 space-y-4 border-b border-snoov-border pb-12">
              <span className="text-[11px] font-mono uppercase tracking-widest text-snoov-green font-semibold block">
                04 / VERIFICATION CRITERIA
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-snoov-charcoal font-normal">
                Defect & Quality Verification Standards
              </h2>
              <p>
                To safeguard the integrity of our patrons and artisans, claims are assessed under transparent standards:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 border border-snoov-border bg-snoov-sand/10 rounded-base space-y-2">
                  <span className="text-xs font-mono text-snoov-green uppercase font-semibold block">
                    ✓ ELIGIBLE FOR IMMEDIATE EXCHANGE
                  </span>
                  <ul className="space-y-1.5 text-xs text-snoov-muted">
                    <li>• Visible transit damage, torn packaging affecting garment.</li>
                    <li>• Fabric tears, punctures, or indelible transit stains.</li>
                    <li>• Structural craftsmanship flaws (broken zipper, failed seam).</li>
                    <li>• Discrepancy between received item and order confirmation.</li>
                  </ul>
                </div>

                <div className="p-5 border border-snoov-border bg-snoov-sand/10 rounded-base space-y-2">
                  <span className="text-xs font-mono text-snoov-muted uppercase font-semibold block">
                    ✕ NOT ELIGIBLE FOR EXCHANGE / RETURN
                  </span>
                  <ul className="space-y-1.5 text-xs text-snoov-muted">
                    <li>• Normal handling or subjective change of mind.</li>
                    <li>• Sizing mismatches where the ordered size was delivered correctly.</li>
                    <li>• Garments worn, washed, or lacking original atelier tags.</li>
                    <li>• Damage reported beyond the 48-hour post-delivery window.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 05. Pre-Purchase Sizing & Styling Advice */}
            <div id="fit-assistance" className="scroll-mt-28 space-y-4">
              <span className="text-[11px] font-mono uppercase tracking-widest text-snoov-green font-semibold block">
                05 / CONFIDENCE IN FIT
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-snoov-charcoal font-normal">
                Pre-Purchase Sizing & Styling Advice
              </h2>
              <p>
                Because our pieces are final sale, we want you to feel completely confident before welcoming a SNOOV silhouette into your wardrobe:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                <li>
                  <strong className="text-snoov-charcoal">Atelier Size Matrix:</strong> Every piece features exact measurements in both centimeters and inches. Please refer to our{" "}
                  <LocalizedClientLink href="/size-guide" className="text-snoov-green font-medium underline underline-offset-4 hover:opacity-80">
                    Comprehensive Size Guide
                  </LocalizedClientLink>{" "}
                  before completing checkout.
                </li>
                <li>
                  <strong className="text-snoov-charcoal">Stylist Consultation:</strong> Unsure how a specific drop-shoulder hoodie or heavyweight tee drapes? Our Chandigarh atelier stylists are readily accessible via WhatsApp or email to provide personalized sizing guidance based on your height, weight, and preferred aesthetic.
                </li>
                <li>
                  <strong className="text-snoov-charcoal">Lifetime Garment Care:</strong> For long-term care and maintenance of your organic textiles, explore our{" "}
                  <LocalizedClientLink href="/garment-care" className="text-snoov-green font-medium underline underline-offset-4 hover:opacity-80">
                    Garment Care & Longevity Guide
                  </LocalizedClientLink>.
                </li>
              </ul>
            </div>

          </article>
        </div>
      </section>
    </div>
  )
}
