import { Metadata } from "next"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export const metadata: Metadata = {
  title: "Terms & Conditions of Sale & Service | SNOOV Studio & Atelier",
  description:
    "Review the terms and conditions governing purchases, bespoke atelier services, delivery, damaged item exchanges, intellectual property, and client care at SNOOV.",
  alternates: {
    canonical: "https://snoovlifestyle.com/terms-and-conditions",
  },
}

export default async function TermsAndConditionsPage() {
  const lastUpdated = "August 31, 2026"
  const legalEntity = "SNOOV Studio & Atelier"
  const contactEmail = "concierge@snoov.com"

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://snoovlifestyle.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Terms & Conditions",
        item: "https://snoovlifestyle.com/terms-and-conditions",
      },
    ],
  }

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Terms & Conditions of Sale and Service",
    description:
      "General Terms and Conditions of Sale and Service for SNOOV Studio & Atelier.",
    publisher: {
      "@type": "Organization",
      name: "SNOOV",
      logo: "https://snoovlifestyle.com/logo.png",
    },
    dateModified: "2026-08-31",
  }

  return (
    <div className="bg-snoov-canvas text-snoov-charcoal min-h-screen">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
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
            <span className="text-snoov-charcoal font-semibold">Terms & Conditions</span>
          </nav>

          <div className="max-w-4xl">
            <span className="inline-block px-2.5 py-1 text-[10px] font-mono tracking-widest uppercase bg-snoov-sand text-snoov-charcoal/90 rounded-sm border border-snoov-border mb-4">
              Commercial Framework · Ref TC-2026.08
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-light tracking-tight text-snoov-charcoal leading-[1.1] mb-6">
              Terms & Conditions
            </h1>
            <p className="text-sm sm:text-base text-snoov-muted leading-relaxed max-w-2xl font-sans">
              These General Terms and Conditions govern the purchase of garments, accessories, and digital services offered by SNOOV Studio & Atelier across our global e-commerce storefront and atelier locations.
            </p>
            <div className="flex flex-wrap items-center gap-6 mt-8 pt-6 border-t border-snoov-border/60 text-xs font-mono text-snoov-muted">
              <div>
                <span className="text-snoov-charcoal font-semibold">LAST REVISED:</span> {lastUpdated}
              </div>
              <div className="hidden sm:block">•</div>
              <div>
                <span className="text-snoov-charcoal font-semibold">ENTITY:</span> {legalEntity}
              </div>
              <div className="hidden sm:block">•</div>
              <div>
                <span className="text-snoov-charcoal font-semibold">GOVERNING LAW:</span> French Commercial Code & EU Consumer Law
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Terms Content Grid ── */}
      <section className="content-container py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Quick Index / Sticky Sidebar */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-28 space-y-6">
              <div className="p-6 bg-snoov-sand/40 border border-snoov-border rounded-base">
                <span className="text-[11px] font-mono uppercase tracking-widest text-snoov-charcoal font-semibold block mb-4">
                  00 / Articles Index
                </span>
                <nav className="space-y-2.5 text-xs text-snoov-muted">
                  <a href="#article-1" className="block hover:text-snoov-green transition-colors">
                    01. Scope & Acceptance
                  </a>
                  <a href="#article-2" className="block hover:text-snoov-green transition-colors">
                    02. Client Accounts & Fair Drop Policy
                  </a>
                  <a href="#article-3" className="block hover:text-snoov-green transition-colors">
                    03. Pricing, Taxes & Currencies
                  </a>
                  <a href="#article-4" className="block hover:text-snoov-green transition-colors">
                    04. Order Process & Contract Formation
                  </a>
                  <a href="#article-5" className="block hover:text-snoov-green transition-colors">
                    05. Global Delivery & Customs (DDP)
                  </a>
                  <a href="#article-6" className="block hover:text-snoov-green transition-colors">
                    06. Final Sale & Damaged Item Exchanges
                  </a>
                  <a href="#article-7" className="block hover:text-snoov-green transition-colors">
                    07. Intellectual Property & Trademarks
                  </a>
                  <a href="#article-8" className="block hover:text-snoov-green transition-colors">
                    08. Conformance & Craftsmanship Warranty
                  </a>
                  <a href="#article-9" className="block hover:text-snoov-green transition-colors">
                    09. Limitation of Liability
                  </a>
                  <a href="#article-10" className="block hover:text-snoov-green transition-colors">
                    10. Dispute Resolution & Mediation
                  </a>
                </nav>
              </div>

              {/* Concierge Help Card */}
              <div className="p-6 bg-snoov-charcoal text-snoov-canvas rounded-base border border-snoov-charcoal space-y-3">
                <span className="text-[10px] font-mono tracking-widest uppercase text-snoov-sand/70 block">
                  LEGAL & CONCIERGE DESK
                </span>
                <h4 className="font-serif text-lg font-normal text-snoov-canvas">
                  Need Clarification?
                </h4>
                <p className="text-xs text-snoov-sand/80 leading-relaxed font-sans">
                  Our Atelier Concierge team is available to assist with inquiries regarding order agreements or international terms.
                </p>
                <a
                  href={`mailto:${contactEmail}?subject=Terms%20Inquiry`}
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-snoov-canvas underline decoration-snoov-sand/40 hover:decoration-snoov-canvas transition-colors pt-2"
                >
                  <span>Contact Atelier Concierge</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          </aside>

          {/* Detailed Legal Articles */}
          <article className="lg:col-span-8 space-y-16 text-sm text-snoov-muted leading-relaxed font-sans">
            
            {/* Article 1: Scope */}
            <div id="article-1" className="scroll-mt-28 space-y-4 border-b border-snoov-border pb-12">
              <span className="text-[11px] font-mono uppercase tracking-widest text-snoov-green font-semibold block">
                ARTICLE 01 / PREAMBLE
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-snoov-charcoal font-normal">
                1. Scope of Agreement & Acceptance
              </h2>
              <p>
                These General Terms and Conditions of Sale and Service (the &quot;Terms&quot;) apply exclusively between <strong>{legalEntity}</strong> (operating under the commercial trade name <strong>SNOOV</strong>, based in Chandigarh, India) and any individual consumer acting in a private capacity (the &quot;Client&quot;).
              </p>
              <p>
                By placing an order on our storefront (snoovlifestyle.com) or confirming a bespoke atelier commission, the Client unreservedly acknowledges and accepts these Terms in full.
              </p>
            </div>

            {/* Article 2: Client Accounts & Anti-Bot */}
            <div id="article-2" className="scroll-mt-28 space-y-4 border-b border-snoov-border pb-12">
              <span className="text-[11px] font-mono uppercase tracking-widest text-snoov-green font-semibold block">
                ARTICLE 02 / ELIGIBILITY & FAIR DROP POLICY
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-snoov-charcoal font-normal">
                2. Client Accounts & Fair Purchase Policy
              </h2>
              <p>
                To preserve equitable access for authentic patrons and collectors during limited-run seasonal releases and capsule drops, SNOOV enforces a strict <strong>Fair Purchase Standard</strong>:
              </p>
              
              <div className="space-y-3 pt-2">
                <div className="p-4 bg-snoov-sand/30 border border-snoov-border rounded-base text-xs space-y-1.5">
                  <strong className="text-snoov-charcoal block uppercase font-mono tracking-wide">
                    A. Prohibition of Automated Bots & Scalping
                  </strong>
                  <p>
                    The use of automated scripts, purchasing bots, multiple disposable identities, or proxy bidding engines is strictly prohibited. SNOOV reserves the unilateral right to cancel suspected bot orders without prior notice.
                  </p>
                </div>
                <div className="p-4 bg-snoov-sand/30 border border-snoov-border rounded-base text-xs space-y-1.5">
                  <strong className="text-snoov-charcoal block uppercase font-mono tracking-wide">
                    B. Household Quantity Limits
                  </strong>
                  <p>
                    Certain limited runway and archive garments are restricted to a maximum of two (2) units per household or billing address.
                  </p>
                </div>
              </div>
            </div>

            {/* Article 3: Pricing & Currencies */}
            <div id="article-3" className="scroll-mt-28 space-y-4 border-b border-snoov-border pb-12">
              <span className="text-[11px] font-mono uppercase tracking-widest text-snoov-green font-semibold block">
                ARTICLE 03 / FISCAL
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-snoov-charcoal font-normal">
                3. Pricing, Currencies & Payment Security
              </h2>
              <p>
                Prices are displayed in the local currency associated with your selected region (EUR, USD, GBP, JPY, DKK, etc.) and include statutory Value Added Tax (VAT) where applicable within the European Union and United Kingdom.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                <li>
                  <strong className="text-snoov-charcoal">Price Modifications:</strong> SNOOV reserves the right to adjust catalogue prices at any time. Orders are strictly billed at the price quoted at checkout completion.
                </li>
                <li>
                  <strong className="text-snoov-charcoal">Secure Tokenization:</strong> All payments are secured via 256-bit SSL encryption and processed via Stripe with 3D-Secure authentication. SNOOV does not store credit card credentials.
                </li>
                <li>
                  <strong className="text-snoov-charcoal">Payment Methods:</strong> We accept Visa, Mastercard, American Express, Apple Pay, Google Pay, and Klarna Pay-in-3 (subject to regional availability).
                </li>
              </ul>
            </div>

            {/* Article 4: Order Acceptance */}
            <div id="article-4" className="scroll-mt-28 space-y-4 border-b border-snoov-border pb-12">
              <span className="text-[11px] font-mono uppercase tracking-widest text-snoov-green font-semibold block">
                ARTICLE 04 / CONTRACT FORMATION
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-snoov-charcoal font-normal">
                4. Order Process & Acceptance
              </h2>
              <p>
                The purchase contract is formally concluded once:
              </p>
              <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm">
                <li>The Client verifies bag contents and completes the secure checkout payment.</li>
                <li>SNOOV issues an automated electronic <strong>Order Confirmation & Receipt</strong> containing the unique order identification number.</li>
              </ol>
              <p className="text-xs text-snoov-muted">
                In the rare event that an ordered garment is unavailable due to unexpected textile stock depletion, SNOOV will immediately notify the Client and issue a full refund within 48 hours.
              </p>
            </div>

            {/* Article 5: Delivery & Duties */}
            <div id="article-5" className="scroll-mt-28 space-y-4 border-b border-snoov-border pb-12">
              <span className="text-[11px] font-mono uppercase tracking-widest text-snoov-green font-semibold block">
                ARTICLE 05 / LOGISTICS
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-snoov-charcoal font-normal">
                5. Global Delivery & Customs (DDP)
              </h2>
              <p>
                Garments are dispatched from our flagship atelier hub in Chandigarh (Tricity), India.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 border border-snoov-border rounded-base">
                  <span className="text-[10px] font-mono uppercase text-snoov-green font-semibold block mb-1">
                    DELIVERY DUTY PAID (DDP)
                  </span>
                  <p className="text-xs text-snoov-muted">
                    For the US, UK, EU, Switzerland, and UAE, all import duties, customs tariffs, and local brokerage charges are prepaid by SNOOV. No unexpected fees will be requested upon arrival.
                  </p>
                </div>
                <div className="p-4 border border-snoov-border rounded-base">
                  <span className="text-[10px] font-mono uppercase text-snoov-green font-semibold block mb-1">
                    DISPATCH & SIGNATURE
                  </span>
                  <p className="text-xs text-snoov-muted">
                    Orders are shipped via DHL Express or FedEx Priority. High-value atelier parcels require an adult signature upon delivery to ensure chain of custody.
                  </p>
                </div>
              </div>
            </div>

            {/* Article 6: Final Sale & Damaged Item Exchanges */}
            <div id="article-6" className="scroll-mt-28 space-y-4 border-b border-snoov-border pb-12">
              <span className="text-[11px] font-mono uppercase tracking-widest text-snoov-green font-semibold block">
                ARTICLE 06 / FINAL SALE & EXCHANGES
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-snoov-charcoal font-normal">
                6. Final Sale & Damaged Item Exchange Policy
              </h2>
              <p>
                Due to the small-batch, made-to-order, and strictly disciplined capsule production at SNOOV, all sales are considered <strong>final upon delivery</strong>. SNOOV does not entertain standard returns, order cancellations post-dispatch, or cash refunds for change of mind, style preference, or sizing discrepancies.
              </p>
              <p>
                However, SNOOV guarantees that all pieces reach our patrons in pristine, immaculate condition. In the rare event that an item is received with <strong>transit damage or a verifiable craftsmanship defect</strong>, the Client is entitled to an immediate complimentary exchange for a replacement piece.
              </p>
              <div className="p-4 bg-snoov-sand/30 border border-snoov-border rounded-base text-xs space-y-2">
                <strong className="text-snoov-charcoal block uppercase font-mono tracking-wide">
                  Damage Claim Criteria & Protocol:
                </strong>
                <ul className="list-disc pl-4 space-y-1 text-snoov-muted">
                  <li>Transit damage or defects must be reported to our Concierge within <strong>48 hours</strong> of verified delivery.</li>
                  <li>Notice must include clear photographs or video documentation of the flaw alongside the original courier shipping label and packaging.</li>
                  <li>Garments must remain unworn, unwashed, and retain all original atelier tags, labels, and dust bags.</li>
                  <li>Upon approval, SNOOV will arrange complimentary courier pickup and dispatch a replacement with priority shipping. If the item is out of stock, full atelier store credit will be issued.</li>
                </ul>
              </div>
              <p className="text-xs">
                For complete step-by-step reporting protocols and concierge contact, consult our dedicated{" "}
                <LocalizedClientLink href="/returns" className="text-snoov-green font-medium underline underline-offset-4 hover:opacity-80">
                  Exchange & Replacement Policy
                </LocalizedClientLink>.
              </p>
            </div>

            {/* Article 7: Intellectual Property */}
            <div id="article-7" className="scroll-mt-28 space-y-4 border-b border-snoov-border pb-12">
              <span className="text-[11px] font-mono uppercase tracking-widest text-snoov-green font-semibold block">
                ARTICLE 07 / HERITAGE & IP
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-snoov-charcoal font-normal">
                7. Intellectual Property & Trademarks
              </h2>
              <p>
                All elements comprising the SNOOV universe—including but not limited to the brand name, logotypes, garment patterns, architectural silhouette cuts, lookbook photography, editorial text, and code—are the exclusive intellectual property of <strong>{legalEntity}</strong>.
              </p>
              <p>
                Any unauthorized reproduction, reverse engineering, digital scraping, or commercial exploitation is strictly prohibited and subject to international copyright enforcement.
              </p>
            </div>

            {/* Article 8: Conformance & Warranties */}
            <div id="article-8" className="scroll-mt-28 space-y-4 border-b border-snoov-border pb-12">
              <span className="text-[11px] font-mono uppercase tracking-widest text-snoov-green font-semibold block">
                ARTICLE 08 / QUALITY GUARANTEE
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-snoov-charcoal font-normal">
                8. Craftsmanship Conformance & Warranties
              </h2>
              <p>
                SNOOV garments are engineered from certified organic textiles (GOTS) and European Flax®. Clients benefit from the statutory guarantee of conformity under Articles L. 217-4 et seq. of the French Consumer Code and against hidden defects under Articles 1641 et seq. of the French Civil Code.
              </p>
              <p>
                If a garment exhibits a structural tailoring defect or transit damage, SNOOV provides complimentary atelier repairs or an immediate replacement exchange.
              </p>
            </div>

            {/* Article 9: Liability */}
            <div id="article-9" className="scroll-mt-28 space-y-4 border-b border-snoov-border pb-12">
              <span className="text-[11px] font-mono uppercase tracking-widest text-snoov-green font-semibold block">
                ARTICLE 09 / LEGAL LIMITS
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-snoov-charcoal font-normal">
                9. Limitation of Liability & Force Majeure
              </h2>
              <p>
                SNOOV shall not be held liable for failure or delay in fulfilling delivery obligations in cases of Force Majeure (including natural catastrophes, carrier strikes, customs blockades, or global logistics disruptions beyond reasonable control).
              </p>
            </div>

            {/* Article 10: Governing Law & Jurisdiction */}
            <div id="article-10" className="scroll-mt-28 space-y-4">
              <span className="text-[11px] font-mono uppercase tracking-widest text-snoov-green font-semibold block">
                ARTICLE 10 / JURISDICTION
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-snoov-charcoal font-normal">
                10. Governing Law, Jurisdiction & Dispute Resolution
              </h2>
              <p>
                These Terms are governed by and construed in accordance with the laws of <strong>India</strong>, under the exclusive jurisdiction of the competent courts of Chandigarh.
              </p>
              
              <div className="p-6 bg-snoov-sand/30 border border-snoov-border rounded-base space-y-3 font-mono text-xs text-snoov-charcoal">
                <div>
                  <span className="text-snoov-muted block text-[10px] uppercase">ATELIER HEADQUARTERS & LEGAL DESK</span>
                  <span>SNOOV Studio & Atelier</span>
                  <br />
                  <span>Industrial Area, Chandigarh 160002, India</span>
                  <br />
                  <span className="text-snoov-muted">Direct: {contactEmail}</span>
                </div>
              </div>
            </div>

          </article>
        </div>
      </section>
    </div>
  )
}
