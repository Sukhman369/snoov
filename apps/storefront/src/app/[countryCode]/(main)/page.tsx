import { Metadata } from "next"
import Hero from "@modules/home/components/hero"
import EditorialBrandStatement from "@modules/home/components/brand-statement"
import NewArrivalsGrid from "@modules/home/components/new-arrivals-grid"
import CollectionFeature from "@modules/home/components/collection-feature"
import CraftsmanshipPillars from "@modules/home/components/craftsmanship-pillars"
import AtelierNewsletter from "@modules/home/components/atelier-newsletter"

export const metadata: Metadata = {
  title: "SNOOV | Modern Editorial Fashion & Sustainable Luxury",
  description:
    "Art-directed clothing brand. Natural European textiles, tailored restraint, and timeless silhouettes.",
}

export default async function Home() {
  return (
    <div className="flex flex-col w-full bg-snoov-canvas">
      {/* 01 — Seasonal Campaign Hero */}
      <Hero />

      {/* 02 — Brand Editorial Manifesto */}
      <EditorialBrandStatement />

      {/* 03 — Curated New Arrivals Grid */}
      <NewArrivalsGrid />

      {/* 04 — Asymmetric Collection Feature */}
      <CollectionFeature />

      {/* 05 — Craftsmanship & Material Pillars */}
      <CraftsmanshipPillars />

      {/* 06 — Private Atelier Newsletter */}
      <AtelierNewsletter />
    </div>
  )
}
