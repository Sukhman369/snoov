import { Metadata } from "next"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export const metadata: Metadata = {
  title: "Cookie Policy & Tracking Consent | SNOOV Studio & Atelier",
  description:
    "Review SNOOV's cookie policy. Learn how we handle essential session cookies, privacy-preserving performance telemetry, and browser consent controls.",
  alternates: {
    canonical: "https://snoov.com/cookie-policy",
  },
}

export default async function CookiePolicyPage() {
  const lastUpdated = "August 31, 2026"
  const contactEmail = "privacy@snoov.com"

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
        name: "Cookie Policy",
        item: "https://snoov.com/cookie-policy",
      },
    ],
  }

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Cookie Policy & Tracking Consent",
    description:
      "Cookie governance and consent framework for SNOOV Studio & Atelier.",
    publisher: {
      "@type": "Organization",
      name: "SNOOV",
      logo: "https://snoov.com/logo.png",
    },
    dateModified: "2026-08-31",
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
            <span className="text-snoov-charcoal font-semibold">Cookie Policy</span>
          </nav>

          <div className="max-w-4xl">
            <span className="inline-block px-2.5 py-1 text-[10px] font-mono tracking-widest uppercase bg-snoov-sand text-snoov-charcoal/90 rounded-sm border border-snoov-border mb-4">
              Digital Governance · ePrivacy & GDPR Compliant
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-light tracking-tight text-snoov-charcoal leading-[1.1] mb-6">
              Cookie Policy & Tracking Consent
            </h1>
            <p className="text-sm sm:text-base text-snoov-muted leading-relaxed max-w-2xl font-sans">
              At SNOOV, we respect your digital sanctuary. We do not employ predatory cross-site behavioral tracking. This document transparently breaks down every cookie and local token stored on your device.
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-snoov-border/60 text-xs font-mono">
              <div>
                <span className="text-snoov-muted block text-[10px] uppercase">THIRD-PARTY ADS</span>
                <span className="text-snoov-green font-semibold">Zero Ad Tracking</span>
              </div>
              <div>
                <span className="text-snoov-muted block text-[10px] uppercase">ESSENTIAL COOKIES</span>
                <span className="text-snoov-charcoal font-semibold">Cart & Session Only</span>
              </div>
              <div>
                <span className="text-snoov-muted block text-[10px] uppercase">TELEMETRY</span>
                <span className="text-snoov-charcoal font-semibold">Anonymized Diagnostics</span>
              </div>
              <div>
                <span className="text-snoov-muted block text-[10px] uppercase">LAST REVISED</span>
                <span className="text-snoov-charcoal font-semibold">{lastUpdated}</span>
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
                  00 / Cookie Index
                </span>
                <nav className="space-y-2.5 text-xs text-snoov-muted">
                  <a href="#what-are-cookies" className="block hover:text-snoov-green transition-colors">
                    01. What Are Cookies & Local Storage
                  </a>
                  <a href="#classification" className="block hover:text-snoov-green transition-colors">
                    02. Categories of Cookies We Use
                  </a>
                  <a href="#cookie-table" className="block hover:text-snoov-green transition-colors">
                    03. Specific Cookie Inventory Table
                  </a>
                  <a href="#browser-controls" className="block hover:text-snoov-green transition-colors">
                    04. Managing Browser Preferences
                  </a>
                  <a href="#privacy-contact" className="block hover:text-snoov-green transition-colors">
                    05. Privacy Desk & Inquiries
                  </a>
                </nav>
              </div>

              {/* Privacy Shield Card */}
              <div className="p-6 bg-snoov-charcoal text-snoov-canvas rounded-base border border-snoov-charcoal space-y-3">
                <span className="text-[10px] font-mono tracking-widest uppercase text-snoov-sand/70 block">
                  DATA SOVEREIGNTY
                </span>
                <h4 className="font-serif text-lg font-normal text-snoov-canvas">
                  Full Privacy Policy
                </h4>
                <p className="text-xs text-snoov-sand/80 leading-relaxed font-sans">
                  For full information on data access, erasure, retention, and international data transfers, consult our complete data protection document.
                </p>
                <LocalizedClientLink
                  href="/privacy"
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-snoov-canvas underline decoration-snoov-sand/40 hover:decoration-snoov-canvas transition-colors pt-2"
                >
                  <span>View Privacy Policy</span>
                  <span>→</span>
                </LocalizedClientLink>
              </div>
            </div>
          </aside>

          {/* Detailed Cookie Clauses */}
          <article className="lg:col-span-8 space-y-16 text-sm text-snoov-muted leading-relaxed font-sans">
            
            {/* 01. What Are Cookies */}
            <div id="what-are-cookies" className="scroll-mt-28 space-y-4 border-b border-snoov-border pb-12">
              <span className="text-[11px] font-mono uppercase tracking-widest text-snoov-green font-semibold block">
                01 / OVERVIEW
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-snoov-charcoal font-normal">
                1. What Are Cookies & Local Storage?
              </h2>
              <p>
                Cookies are small encrypted alphanumeric text files stored on your browser or device when you interact with modern web platforms. Similar storage mechanisms include <strong>HTML5 LocalStorage</strong> and <strong>SessionStorage</strong>.
              </p>
              <p>
                These technologies enable our storefront to remember which garments you have placed in your shopping bag, preserve your selected region or currency, and securely maintain authenticated atelier sessions without requesting repetitive logins.
              </p>
            </div>

            {/* 02. Cookie Categories */}
            <div id="classification" className="scroll-mt-28 space-y-4 border-b border-snoov-border pb-12">
              <span className="text-[11px] font-mono uppercase tracking-widest text-snoov-green font-semibold block">
                02 / TAXONOMY
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-snoov-charcoal font-normal">
                2. Categories of Cookies We Use
              </h2>
              <p>
                We classify local storage into three distinct categories:
              </p>

              <div className="space-y-4 pt-2">
                {/* Essential */}
                <div className="p-5 bg-snoov-sand/30 border border-snoov-border rounded-base space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-snoov-charcoal uppercase">
                      A. Strictly Essential Cookies (Mandatory)
                    </span>
                    <span className="text-[10px] font-mono bg-snoov-green/10 text-snoov-green px-2 py-0.5 rounded-sm font-semibold">
                      Always Active
                    </span>
                  </div>
                  <p className="text-xs text-snoov-muted">
                    Essential for the core operational functionality of the e-commerce storefront. They maintain your shopping cart ID, active country code routing, checkout session tokens, and security fraud mitigation. The storefront cannot function without these.
                  </p>
                </div>

                {/* Preferences */}
                <div className="p-5 bg-snoov-sand/30 border border-snoov-border rounded-base space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-snoov-charcoal uppercase">
                      B. Functional & Preference Storage
                    </span>
                    <span className="text-[10px] font-mono bg-snoov-sand text-snoov-charcoal px-2 py-0.5 rounded-sm">
                      12-Month Persistence
                    </span>
                  </div>
                  <p className="text-xs text-snoov-muted">
                    Remember your aesthetic display choices, preferred measurement units (inches vs. centimeters on the Size Guide), and currency preferences so you do not have to reconfigure them upon return.
                  </p>
                </div>

                {/* Diagnostics */}
                <div className="p-5 bg-snoov-sand/30 border border-snoov-border rounded-base space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-snoov-charcoal uppercase">
                      C. Anonymized Performance & Telemetry
                    </span>
                    <span className="text-[10px] font-mono bg-snoov-sand text-snoov-charcoal px-2 py-0.5 rounded-sm">
                      Aggregated / No PII
                    </span>
                  </div>
                  <p className="text-xs text-snoov-muted">
                    Measures storefront page speed, Largest Contentful Paint (LCP), and server response times. All metrics are strictly anonymized, aggregated, and contain zero Personally Identifiable Information (PII).
                  </p>
                </div>
              </div>
            </div>

            {/* 03. Inventory Table */}
            <div id="cookie-table" className="scroll-mt-28 space-y-4 border-b border-snoov-border pb-12">
              <span className="text-[11px] font-mono uppercase tracking-widest text-snoov-green font-semibold block">
                03 / INVENTORY
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-snoov-charcoal font-normal">
                3. Specific Cookie Inventory Table
              </h2>
              <p>
                Below is a comprehensive manifest of cookies and local tokens utilized across snoov.com:
              </p>

              {/* Table */}
              <div className="border border-snoov-border rounded-base overflow-hidden bg-snoov-sand/10">
                <div className="divide-y divide-snoov-border text-xs">
                  
                  {/* Item 1 */}
                  <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <strong className="font-mono text-snoov-charcoal text-[11px] block">
                        _medusa_cart_id
                      </strong>
                      <span className="text-snoov-muted text-[11px]">Stores the active shopping bag identifier</span>
                    </div>
                    <div className="sm:text-right font-mono text-[11px]">
                      <span className="text-snoov-green font-semibold block">Strictly Essential</span>
                      <span className="text-snoov-muted">Duration: 30 Days</span>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <strong className="font-mono text-snoov-charcoal text-[11px] block">
                        _medusa_jwt
                      </strong>
                      <span className="text-snoov-muted text-[11px]">Secure encrypted JWT for logged-in client account authentication</span>
                    </div>
                    <div className="sm:text-right font-mono text-[11px]">
                      <span className="text-snoov-green font-semibold block">Strictly Essential</span>
                      <span className="text-snoov-muted">Duration: Session / 7 Days</span>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <strong className="font-mono text-snoov-charcoal text-[11px] block">
                        _snoov_country
                      </strong>
                      <span className="text-snoov-muted text-[11px]">Persists the client&apos;s geographic localization prefix (e.g., /in, /us, /fr)</span>
                    </div>
                    <div className="sm:text-right font-mono text-[11px]">
                      <span className="text-snoov-charcoal font-semibold block">Functional</span>
                      <span className="text-snoov-muted">Duration: 12 Months</span>
                    </div>
                  </div>

                  {/* Item 4 */}
                  <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <strong className="font-mono text-snoov-charcoal text-[11px] block">
                        __stripe_mid / __stripe_sid
                      </strong>
                      <span className="text-snoov-muted text-[11px]">Fraud screening tokens deployed by Stripe during checkout</span>
                    </div>
                    <div className="sm:text-right font-mono text-[11px]">
                      <span className="text-snoov-green font-semibold block">Security / Essential</span>
                      <span className="text-snoov-muted">Duration: 1 Year / 30 Mins</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* 04. Browser Controls */}
            <div id="browser-controls" className="scroll-mt-28 space-y-4 border-b border-snoov-border pb-12">
              <span className="text-[11px] font-mono uppercase tracking-widest text-snoov-green font-semibold block">
                04 / CLIENT EMPOWERMENT
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-snoov-charcoal font-normal">
                4. Managing Browser Preferences
              </h2>
              <p>
                You retain ultimate authority over what files are permitted on your hardware. You can configure your browser to block, quarantine, or alert you upon receiving cookies:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-mono">
                <div className="p-3.5 bg-snoov-sand/30 border border-snoov-border rounded-sm">
                  <strong className="text-snoov-charcoal block mb-1">APPLE SAFARI</strong>
                  <span className="text-snoov-muted text-[11px]">Settings → Privacy → Block All Cookies / Prevent Cross-Site Tracking</span>
                </div>
                <div className="p-3.5 bg-snoov-sand/30 border border-snoov-border rounded-sm">
                  <strong className="text-snoov-charcoal block mb-1">GOOGLE CHROME</strong>
                  <span className="text-snoov-muted text-[11px]">Settings → Privacy and Security → Third-Party Cookies</span>
                </div>
                <div className="p-3.5 bg-snoov-sand/30 border border-snoov-border rounded-sm">
                  <strong className="text-snoov-charcoal block mb-1">MOZILLA FIREFOX</strong>
                  <span className="text-snoov-muted text-[11px]">Settings → Privacy & Security → Enhanced Tracking Protection</span>
                </div>
                <div className="p-3.5 bg-snoov-sand/30 border border-snoov-border rounded-sm">
                  <strong className="text-snoov-charcoal block mb-1">MICROSOFT EDGE</strong>
                  <span className="text-snoov-muted text-[11px]">Settings → Cookies and Site Permissions → Manage and Delete</span>
                </div>
              </div>
              <p className="text-xs text-snoov-muted pt-2">
                *Please note: Disabling strictly essential cookies will prevent items from persisting in your shopping bag and will disable secure checkout completion.
              </p>
            </div>

            {/* 05. Contact DPO */}
            <div id="privacy-contact" className="scroll-mt-28 space-y-4">
              <span className="text-[11px] font-mono uppercase tracking-widest text-snoov-green font-semibold block">
                05 / INQUIRIES
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-snoov-charcoal font-normal">
                5. Privacy Desk & Contact
              </h2>
              <p>
                If you require clarification on our cookie architecture or wish to request immediate deletion of session tokens, contact our governance desk:
              </p>
              
              <div className="p-6 bg-snoov-sand/30 border border-snoov-border rounded-base space-y-2 font-mono text-xs text-snoov-charcoal">
                <div>
                  <span className="text-snoov-muted block text-[10px] uppercase">DIRECT EMAIL</span>
                  <a href={`mailto:${contactEmail}`} className="text-snoov-green font-semibold hover:underline">
                    {contactEmail}
                  </a>
                </div>
                <div>
                  <span className="text-snoov-muted block text-[10px] uppercase">ATELIER PRIVACY DIRECTORATE</span>
                  <span>SNOOV Studio & Atelier SAS — Data Governance Desk</span>
                  <br />
                  <span>14 Rue de Turenne, 75004 Paris, France</span>
                </div>
              </div>
            </div>

          </article>
        </div>
      </section>
    </div>
  )
}
