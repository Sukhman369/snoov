import { Metadata } from "next"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export const metadata: Metadata = {
  title: "Our Story — The Orca Instinct & GenZ Collective | SNOOV",
  description:
    "Discover the origins of SNOOV. Driven by the instinctual power of the Orca whale and crafted as a conscious streetwear community for the next generation.",
  alternates: {
    canonical: "https://snoov.com/about",
  },
}

export default async function AboutStoryPage() {
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
        name: "Our Story",
        item: "https://snoov.com/about",
      },
    ],
  }

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SNOOV",
    url: "https://snoov.com",
    logo: "https://snoov.com/logo.png",
    description:
      "A conscious luxury streetwear community designed for GenZ, inspired by the instinctual strength and monochrome elegance of the Orca whale.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* ── Editorial Masthead ── */}
      <section className="border-b border-snoov-border pt-12 sm:pt-24 pb-16 sm:pb-24">
        <div className="content-container">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-snoov-muted mb-8">
            <LocalizedClientLink href="/" className="hover:text-snoov-green transition-colors">
              Atelier
            </LocalizedClientLink>
            <span>/</span>
            <span className="text-snoov-charcoal font-semibold">Our Story</span>
          </nav>

          <div className="max-w-4xl space-y-6">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 text-[10px] font-mono tracking-widest uppercase bg-snoov-charcoal text-snoov-canvas rounded-sm font-semibold">
                THE POD MANIFESTO
              </span>
              <span className="text-[11px] font-mono text-snoov-green font-semibold uppercase tracking-wider">
                GENZ STREETWEAR COLLECTIVE
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-light tracking-tight text-snoov-charcoal leading-[1.05]">
              Instinct Over Tradition.
            </h1>

            <p className="text-base sm:text-xl text-snoov-muted leading-relaxed max-w-3xl font-sans">
              SNOOV is not just another clothing brand. We are building a global community and a new visual dialect for GenZ—drawn from the raw instinct, high-contrast monochrome stealth, and unyielding pod loyalty of the <strong>Orca whale</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* ── Main Structured Narrative ── */}
      <section className="content-container py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Core Archetype & Pod Details */}
          <aside className="lg:col-span-4 space-y-8">
            
            {/* The Animal Instinct Archetype Card */}
            <div className="p-6 bg-snoov-charcoal text-snoov-canvas rounded-base border border-snoov-charcoal space-y-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-snoov-sand/70 block">
                ANIMAL INSPIRATION · ARCHETYPE
              </span>
              <h3 className="font-serif text-2xl font-normal text-snoov-canvas">
                The Orca (Killer Whale)
              </h3>
              <p className="text-xs text-snoov-sand/80 leading-relaxed font-sans">
                Apex predator. Intelligent. Hyper-social. Operating in fierce, coordinated pods. The Orca embodies our philosophy of unity, stark monochrome contrast, and natural power.
              </p>
              
              <div className="pt-4 border-t border-snoov-sand/20 space-y-2 text-[11px] font-mono text-snoov-sand/90">
                <div className="flex justify-between">
                  <span className="text-snoov-sand/60">COLOUR PROFILE</span>
                  <span>Deep Charcoal & Stark White</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-snoov-sand/60">CORE ATTRIBUTE</span>
                  <span>Instinctual Intelligence</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-snoov-sand/60">SOCIAL NATURE</span>
                  <span>The Pod (Community First)</span>
                </div>
              </div>
            </div>

            {/* GenZ Community Box */}
            <div className="p-6 bg-snoov-sand/40 border border-snoov-border rounded-base space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-snoov-green font-semibold block">
                02 / COMMUNITY DRIVEN
              </span>
              <h4 className="font-serif text-lg font-normal text-snoov-charcoal">
                Built For & By The Next Generation
              </h4>
              <p className="text-xs text-snoov-muted leading-relaxed font-sans">
                Rejecting outdated fashion gatekeeping. We create limited drops shaped by culture, digital aesthetics, music, and skate architecture.
              </p>
            </div>

          </aside>

          {/* Right Column: Structured Story Blueprint */}
          <article className="lg:col-span-8 space-y-16">
            
            {/* Chapter 01: The Orca Instinct */}
            <div className="space-y-4 border-b border-snoov-border pb-12">
              <span className="text-[11px] font-mono uppercase tracking-widest text-snoov-green font-semibold block">
                CHAPTER 01 / THE INSTINCT
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif text-snoov-charcoal font-normal">
                Drawn from the Apex of the Ocean
              </h2>
              <p className="text-sm sm:text-base text-snoov-muted leading-relaxed font-sans">
                Nature does not design with ornamentation; it designs with purpose. The Orca whale moves through the deepest waters with hydrodynamic stealth, striking contrast, and supreme confidence.
              </p>
              
              {/* Story Structure Placeholder Block */}
              <div className="p-6 bg-snoov-sand/20 border-2 border-dashed border-snoov-border rounded-base space-y-2">
                <span className="text-[10px] font-mono uppercase text-snoov-green font-semibold block tracking-wider">
                  [ EDITORIAL STORY SECTION: THE ORIGIN & INSPIRATION ]
                </span>
                <p className="text-xs text-snoov-muted italic">
                  *Section reserved for founder narrative: detailing the first concept sketch, the choice of the Orca as our brand emblem, and the transition from raw instinct into tangible streetwear silhouettes.*
                </p>
              </div>
            </div>

            {/* Chapter 02: The Community Pod */}
            <div className="space-y-4 border-b border-snoov-border pb-12">
              <span className="text-[11px] font-mono uppercase tracking-widest text-snoov-green font-semibold block">
                CHAPTER 02 / THE COLLECTIVE
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif text-snoov-charcoal font-normal">
                More Than Apparel. A Living Pod.
              </h2>
              <p className="text-sm sm:text-base text-snoov-muted leading-relaxed font-sans">
                An Orca never travels alone—its strength lies within the pod. SNOOV is engineered as a decentralized creative house where our audience directly influences our silhouettes, colorways, and capsule releases.
              </p>

              {/* Story Structure Placeholder Block */}
              <div className="p-6 bg-snoov-sand/20 border-2 border-dashed border-snoov-border rounded-base space-y-2">
                <span className="text-[10px] font-mono uppercase text-snoov-green font-semibold block tracking-wider">
                  [ COMMUNITY MANIFESTO SECTION: GENZ VOICE ]
                </span>
                <p className="text-xs text-snoov-muted italic">
                  *Section reserved for community ethos: co-creation events, underground culture, digital lookbooks, and why GenZ authenticity outlasts seasonal trends.*
                </p>
              </div>
            </div>

            {/* Chapter 03: The Silhouette & Craft */}
            <div className="space-y-4 border-b border-snoov-border pb-12">
              <span className="text-[11px] font-mono uppercase tracking-widest text-snoov-green font-semibold block">
                CHAPTER 03 / SILHOUETTE & ARCHITECTURE
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif text-snoov-charcoal font-normal">
                Architectural Oversized Tailoring
              </h2>
              <p className="text-sm sm:text-base text-snoov-muted leading-relaxed font-sans">
                Heavyweight organic cotton, drop-shoulder geometry, tactile ribbing, and enduring cuts. Designed to be lived in, skated in, and worn with effortless presence.
              </p>

              {/* Story Structure Placeholder Block */}
              <div className="p-6 bg-snoov-sand/20 border-2 border-dashed border-snoov-border rounded-base space-y-2">
                <span className="text-[10px] font-mono uppercase text-snoov-green font-semibold block tracking-wider">
                  [ FABRIC & ATELIER CRAFTSMANSHIP SECTION ]
                </span>
                <p className="text-xs text-snoov-muted italic">
                  *Section reserved for material selection: GSM weights, natural European & Indian organic textiles, sustainable dyeing, and tactile drape details.*
                </p>
              </div>
            </div>

            {/* Interactive Community CTA */}
            <div className="p-8 bg-snoov-sand/40 border border-snoov-border rounded-base flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-snoov-green font-semibold block">
                  JOIN THE POD
                </span>
                <h3 className="font-serif text-2xl font-normal text-snoov-charcoal">
                  Be Part of the SNOOV Community
                </h3>
                <p className="text-xs text-snoov-muted font-sans">
                  Get private access to limited experimental drops, pop-up events, and atelier lookbooks.
                </p>
              </div>

              <LocalizedClientLink
                href="/store"
                className="inline-flex items-center gap-2 px-6 py-3 bg-snoov-charcoal text-snoov-canvas text-xs font-mono uppercase tracking-wider font-semibold rounded-sm hover:bg-snoov-green transition-colors shrink-0"
              >
                <span>Explore The Collection</span>
                <span>→</span>
              </LocalizedClientLink>
            </div>

          </article>
        </div>
      </section>
    </div>
  )
}
