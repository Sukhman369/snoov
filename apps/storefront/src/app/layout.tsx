import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google"
import PaletteStudio from "@modules/common/components/palette-studio"
import LogoStudio from "@modules/common/components/logo-studio"
import "styles/globals.css"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
})

export const metadata: Metadata = {
  title: "SNOOV | Modern Editorial Fashion & Sustainable Luxury",
  description:
    "Art-directed modern clothing brand. Intentional silhouettes, organic European textiles, and enduring craftsmanship.",
  metadataBase: new URL(getBaseURL()),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/brand/snoov-icon.webp", type: "image/webp" },
      { url: "/brand/snoov-icon.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jakarta.variable}`}
      data-mode="light"
      suppressHydrationWarning
    >
      <body
        className="bg-snoov-canvas text-snoov-charcoal font-sans antialiased selection:bg-snoov-green-light selection:text-snoov-green"
        suppressHydrationWarning
      >
        <main className="relative min-h-screen flex flex-col">{props.children}</main>
        <PaletteStudio />
        <LogoStudio />
      </body>
    </html>
  )
}
