import { defineWidgetConfig } from "@medusajs/admin-sdk"
import { Container, Text, Badge } from "@medusajs/ui"

const SnoovProductWidget = () => {
  return (
    <Container className="p-5 border-l-4 border-l-[#1C3F32] bg-ui-bg-base shadow-xs mb-4">
      <div className="flex items-center justify-between">
        <div className="space-y-0.5">
          <Text size="small" weight="plus" className="text-[#1C3F32] uppercase tracking-wider font-mono text-[11px]">
            ✦ SNOOV ATELIER · STOREFRONT SYNC
          </Text>
          <Text size="small" className="text-ui-fg-subtle text-xs">
            Product inventory, pricing, and media are actively synced to the SNOOV Storefront.
          </Text>
        </div>
        <Badge color="green" size="small" className="font-mono text-[10px] uppercase">
          LIVE ON STOREFRONT
        </Badge>
      </div>
    </Container>
  )
}

export const config = defineWidgetConfig({
  zone: "product.details.before",
})

export default SnoovProductWidget
