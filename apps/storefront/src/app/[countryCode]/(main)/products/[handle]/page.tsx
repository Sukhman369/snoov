import { Metadata } from "next"
import { notFound } from "next/navigation"
import { listProducts } from "@lib/data/products"
import { getRegion, listRegions } from "@lib/data/regions"
import ProductTemplate from "@modules/products/templates"
import FashionPDP from "@modules/products/components/fashion-pdp"
import { FASHION_PRODUCTS } from "@lib/data/fashion-mock-products"
import { HttpTypes } from "@medusajs/types"

type Props = {
  params: Promise<{ countryCode: string; handle: string }>
  searchParams: Promise<{ v_id?: string }>
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params
  const { handle } = params

  const fashionProduct = FASHION_PRODUCTS.find((p) => p.handle === handle)
  if (fashionProduct) {
    return {
      title: `${fashionProduct.title} | SNOOV`,
      description: fashionProduct.description,
    }
  }

  try {
    const product = await listProducts({
      countryCode: params.countryCode,
      queryParams: { handle },
    }).then(({ response }) => response.products[0])

    if (product) {
      return {
        title: `${product.title} | SNOOV`,
        description: product.description || product.title,
      }
    }
  } catch {
    // fallback
  }

  return {
    title: "SNOOV Product",
  }
}

export default async function ProductPage(props: Props) {
  const params = await props.params
  const { handle, countryCode } = params

  // 1. Check if it's one of our high-fashion curated products
  const fashionProduct = FASHION_PRODUCTS.find((p) => p.handle === handle)
  if (fashionProduct) {
    return <FashionPDP product={fashionProduct} />
  }

  // 2. Fallback to Medusa backend database product
  const region = await getRegion(countryCode).catch(() => null)
  if (!region) {
    // If region not found, fallback to first fashion product
    return <FashionPDP product={FASHION_PRODUCTS[0]} />
  }

  try {
    const pricedProduct = await listProducts({
      countryCode,
      queryParams: { handle },
    }).then(({ response }) => response.products[0])

    if (pricedProduct) {
      return (
        <ProductTemplate
          product={pricedProduct}
          region={region}
          countryCode={countryCode}
          images={pricedProduct.images || []}
        />
      )
    }
  } catch (e) {
    console.error("Medusa product fetch error:", e)
  }

  // If no handle matched, render first product or 404
  return <FashionPDP product={FASHION_PRODUCTS[0]} />
}
