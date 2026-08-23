export interface FashionProduct {
  id: string
  handle: string
  title: string
  category: "outerwear" | "tailoring" | "knitwear" | "essentials" | "accessories"
  fabric: string
  price: number
  currency: string
  colorName: string
  colorHex: string
  additionalColors?: { name: string; hex: string }[]
  sizes: string[]
  description: string
  details: {
    composition: string
    fit: string
    care: string
    origin: string
  }
  imageSlot: {
    name: string
    desktop: string
    mobile: string
    aspectRatio: string
    purpose: string
  }
  secondarySlot: {
    name: string
    desktop: string
    mobile: string
    aspectRatio: string
    purpose: string
  }
  isNewArrival?: boolean
  isFeatured?: boolean
  tag?: string
}

export const FASHION_PRODUCTS: FashionProduct[] = [
  {
    id: "prod_snoov_01",
    handle: "oversized-belgian-linen-blazer",
    title: "Oversized Belgian Linen Blazer",
    category: "tailoring",
    fabric: "100% Washed Belgian Flax",
    price: 380,
    currency: "USD",
    colorName: "Raw Ecru",
    colorHex: "#E7DFD3",
    additionalColors: [
      { name: "Forest Green", hex: "#008000" },
      { name: "Charcoal Slate", hex: "#2C2F33" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "Sculpted with relaxed shoulder construction and unstructured lapels. Crafted from breathable, long-staple European linen that softens with time and wear.",
    details: {
      composition: "100% Certified Belgian Linen, Cupro lining",
      fit: "Relaxed tailored cut. Designed for an effortless, drapey silhouette.",
      care: "Dry clean only or delicate hand wash in cold water. Lay flat to dry.",
      origin: "Crafted in Porto, Portugal",
    },
    imageSlot: {
      name: "Belgian Linen Blazer — Front",
      desktop: "1200 × 1600 px",
      mobile: "900 × 1200 px",
      aspectRatio: "3:4",
      purpose: "Full front studio editorial on model",
    },
    secondarySlot: {
      name: "Belgian Linen Blazer — Detail",
      desktop: "1200 × 1600 px",
      mobile: "900 × 1200 px",
      aspectRatio: "3:4",
      purpose: "Close-up button & horn detail",
    },
    isNewArrival: true,
    isFeatured: true,
    tag: "SPRING / SUMMER 26",
  },
  {
    id: "prod_snoov_02",
    handle: "pleated-wide-leg-trousers",
    title: "Double-Pleated Wide Leg Trousers",
    category: "tailoring",
    fabric: "Tropical High-Twist Wool",
    price: 290,
    currency: "USD",
    colorName: "Sand Stone",
    colorHex: "#D8CFBC",
    additionalColors: [
      { name: "Olive Tint", hex: "#556B2F" },
      { name: "Deep Charcoal", hex: "#1A1A1A" },
    ],
    sizes: ["28", "30", "32", "34", "36"],
    description:
      "High-waisted trousers featuring deep front pleats, clean welt pockets, and a fluid silhouette engineered for unrestricted movement.",
    details: {
      composition: "98% Virgin Wool, 2% Elastane",
      fit: "High rise with wide leg taper. Model is 6'1\" wearing size 32.",
      care: "Specialist dry clean only. Warm iron with pressing cloth.",
      origin: "Tailored in Biella, Italy",
    },
    imageSlot: {
      name: "Wide Leg Trousers — Front",
      desktop: "1200 × 1600 px",
      mobile: "900 × 1200 px",
      aspectRatio: "3:4",
      purpose: "Full length trouser movement shot",
    },
    secondarySlot: {
      name: "Wide Leg Trousers — Waistband",
      desktop: "1200 × 1600 px",
      mobile: "900 × 1200 px",
      aspectRatio: "3:4",
      purpose: "Tab closure and pleat detail",
    },
    isNewArrival: true,
    isFeatured: true,
    tag: "SIGNATURE PIECE",
  },
  {
    id: "prod_snoov_03",
    handle: "merino-open-collar-polo",
    title: "Fine-Gauge Merino Open Collar Knit",
    category: "knitwear",
    fabric: "Extra-Fine 18.5µ Merino Wool",
    price: 240,
    currency: "USD",
    colorName: "Forest Accent",
    colorHex: "#008000",
    additionalColors: [
      { name: "Ivory Cream", hex: "#FDFBF7" },
      { name: "Heather Gray", hex: "#9E9E9E" },
    ],
    sizes: ["S", "M", "L", "XL"],
    description:
      "Spun from non-mulesed Tasmanian merino wool. Features a seamless Johnny collar, ribbed hem, and subtle textural contrast.",
    details: {
      composition: "100% Extra-Fine Australian Merino Wool",
      fit: "Regular modern fit. True to size.",
      care: "Hand wash cold with wool detergent. Dry flat in shade.",
      origin: "Knitted in Florence, Italy",
    },
    imageSlot: {
      name: "Merino Polo — Studio",
      desktop: "1200 × 1600 px",
      mobile: "900 × 1200 px",
      aspectRatio: "3:4",
      purpose: "Upper body portrait on model",
    },
    secondarySlot: {
      name: "Merino Polo — Knit Texture",
      desktop: "1200 × 1600 px",
      mobile: "900 × 1200 px",
      aspectRatio: "3:4",
      purpose: "Macro stitch & collar structure",
    },
    isNewArrival: true,
    isFeatured: true,
    tag: "BESTSELLER",
  },
  {
    id: "prod_snoov_04",
    handle: "minimalist-trench-coat",
    title: "Raglan Storm Trench Coat",
    category: "outerwear",
    fabric: "Water-Repellent Cotton Gabardine",
    price: 590,
    currency: "USD",
    colorName: "Muted Khaki",
    colorHex: "#C2B69D",
    additionalColors: [
      { name: "Deep Navy", hex: "#1A2536" },
      { name: "Snoov Olive", hex: "#2E4F2E" },
    ],
    sizes: ["XS", "S", "M", "L"],
    description:
      "A reductionist take on the military trench. Hidden horn button placket, storm flap back vent, and removable belt with nickel-free buckle.",
    details: {
      composition: "100% Organic Compact Cotton Twill",
      fit: "Generous overcoat silhouette with raglan sleeves for easy layering.",
      care: "Specialist clean only.",
      origin: "Crafted in Yorkshire, UK",
    },
    imageSlot: {
      name: "Raglan Trench — Full Look",
      desktop: "1200 × 1600 px",
      mobile: "900 × 1200 px",
      aspectRatio: "3:4",
      purpose: "Full silhouette lifestyle shot",
    },
    secondarySlot: {
      name: "Raglan Trench — Back Vent",
      desktop: "1200 × 1600 px",
      mobile: "900 × 1200 px",
      aspectRatio: "3:4",
      purpose: "Back umbrella vent & belt detail",
    },
    isNewArrival: false,
    isFeatured: true,
    tag: "LIMITED EDITION",
  },
  {
    id: "prod_snoov_05",
    handle: "heavyweight-raw-cotton-tee",
    title: "280gsm Combed Cotton Boxy Tee",
    category: "essentials",
    fabric: "100% GOTS Organic Cotton",
    price: 95,
    currency: "USD",
    colorName: "Chalk White",
    colorHex: "#F6F6F4",
    additionalColors: [
      { name: "Snoov Green", hex: "#008000" },
      { name: "Faded Black", hex: "#212121" },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    description:
      "Substantial 280gsm jersey with a crisp, dry hand-feel. Pre-shrunk with blind-stitched hems and a structured ribbed crewneck that holds its shape.",
    details: {
      composition: "100% GOTS Certified Organic Cotton",
      fit: "Boxy, dropped shoulder fit.",
      care: "Machine wash cold inside out. Hang dry.",
      origin: "Crafted in Barcelos, Portugal",
    },
    imageSlot: {
      name: "Boxy Tee — Clean Studio",
      desktop: "1200 × 1600 px",
      mobile: "900 × 1200 px",
      aspectRatio: "3:4",
      purpose: "Minimal front studio shot",
    },
    secondarySlot: {
      name: "Boxy Tee — Collar Detail",
      desktop: "1200 × 1600 px",
      mobile: "900 × 1200 px",
      aspectRatio: "3:4",
      purpose: "Neckband seam & fabric weight macro",
    },
    isNewArrival: true,
    isFeatured: false,
    tag: "ESSENTIAL",
  },
  {
    id: "prod_snoov_06",
    handle: "structured-leather-tote",
    title: "Vegetable-Tanned Minimalist Tote",
    category: "accessories",
    fabric: "Full-Grain Italian Calf Leather",
    price: 450,
    currency: "USD",
    colorName: "Warm Saddle",
    colorHex: "#8B5A2B",
    additionalColors: [
      { name: "Matte Black", hex: "#151515" },
      { name: "Olive Bark", hex: "#3B443B" },
    ],
    sizes: ["One Size"],
    description:
      "Unlined raw-edge leather tote with reinforced double handles, internal slip pocket, and subtle blind-debossed SNOOV monogram.",
    details: {
      composition: "100% Vegetable-Tanned Italian Leather, Solid Brass Hardware",
      fit: "Dimensions: 40cm × 36cm × 12cm. Fits 16\" laptop.",
      care: "Apply natural beeswax leather balm annually.",
      origin: "Handcrafted in Tuscany, Italy",
    },
    imageSlot: {
      name: "Leather Tote — Still Life",
      desktop: "1200 × 1600 px",
      mobile: "900 × 1200 px",
      aspectRatio: "3:4",
      purpose: "Editorial still life on travertine stone",
    },
    secondarySlot: {
      name: "Leather Tote — Interior",
      desktop: "1200 × 1600 px",
      mobile: "900 × 1200 px",
      aspectRatio: "3:4",
      purpose: "Internal pocket & handle stitching",
    },
    isNewArrival: false,
    isFeatured: true,
    tag: "ATELIER CRAFT",
  },
]
