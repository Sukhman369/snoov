import { loadEnv, defineConfig } from '@medusajs/framework/utils'

loadEnv(process.env.NODE_ENV || 'development', process.cwd())

module.exports = defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
    http: {
      storeCors: process.env.STORE_CORS!,
      adminCors: process.env.ADMIN_CORS!,
      authCors: process.env.AUTH_CORS!,
      jwtSecret: process.env.JWT_SECRET,
      cookieSecret: process.env.COOKIE_SECRET,
    }
  },
  admin: {
    disable: false,
    backendUrl: "http://localhost:9000",
    vite: () => ({
      resolve: {
        dedupe: ["react", "react-dom", "react-router-dom"],
      },
      plugins: [
        {
          name: "snoov-admin-branding",
          transformIndexHtml(html) {
            return html
              .replace(
                "<head>",
                `<head>
                  <title>SNOOV Atelier · Merchant Admin Console</title>
                  <link rel="icon" type="image/webp" href="/static/brand/snoov-icon.webp" />
                  <style>
                    /* ── SNOOV Luxury Admin Branding & Typography ── */
                    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=JetBrains+Mono:wght@400;500;600&display=swap');

                    :root {
                      --snoov-primary: #1C3F32;
                      --snoov-primary-hover: #245242;
                      --snoov-gold: #C5A880;
                      --snoov-charcoal: #121214;
                    }

                    /* ── Base Typography ── */
                    *, *::before, *::after {
                      -webkit-font-smoothing: antialiased;
                      -moz-osx-font-smoothing: grayscale;
                    }

                    body, html, input, button, select, textarea {
                      font-family: 'Plus Jakarta Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
                      letter-spacing: -0.01em;
                    }

                    /* ── Page Headings & Section Titles ── */
                    h1, h2, h3, .txt-xlarge-plus, .txt-large-plus {
                      font-family: 'Plus Jakarta Sans', sans-serif !important;
                      letter-spacing: -0.025em !important;
                      font-weight: 600 !important;
                    }

                    /* ── Tabular Numbers for Prices, SKUs & Dates ── */
                    td, th, [data-testid*="price"], [data-testid*="amount"], .tabular-nums {
                      font-variant-numeric: tabular-nums !important;
                    }

                    /* ── Badges, Tags & Status Pills ── */
                    .badge, [data-testid*="badge"], [class*="ui-badge"] {
                      font-family: 'JetBrains Mono', monospace !important;
                      font-size: 10px !important;
                      letter-spacing: 0.05em !important;
                      text-transform: uppercase !important;
                      font-weight: 600 !important;
                    }

                    /* ── Sidebar Store Branding & Navigation ── */
                    aside nav a:hover,
                    aside nav button:hover {
                      transition: all 0.2s ease;
                    }

                    aside nav a[aria-current="page"],
                    aside nav button[aria-current="page"] {
                      font-weight: 600 !important;
                    }

                    /* ── Top Header Brand Badge in Sidebar / Navbar ── */
                    header [data-testid="nav-user-button"]::before {
                      content: "✦ SNOOV ATELIER";
                      display: inline-block;
                      font-size: 10px;
                      font-family: 'JetBrains Mono', monospace;
                      letter-spacing: 0.12em;
                      margin-right: 12px;
                      padding: 3px 8px;
                      background: rgba(28, 63, 50, 0.12);
                      color: #1C3F32;
                      border: 1px solid rgba(28, 63, 50, 0.2);
                      border-radius: 2px;
                      font-weight: 700;
                    }

                    /* ── Login Page Customization ── */
                    .shadow-buttons-neutral {
                      display: none !important;
                    }

                    .bg-ui-bg-subtle .mb-4.flex.flex-col.items-center,
                    div.mb-4.flex.flex-col.items-center {
                      display: none !important;
                    }

                    .bg-ui-bg-subtle {
                      background-color: #0C0C0E !important;
                    }

                    form button[type="submit"] {
                      background-color: #1C3F32 !important;
                      color: #FFFFFF !important;
                      font-weight: 600 !important;
                      border: 1px solid rgba(255,255,255,0.1) !important;
                      transition: all 0.2s ease !important;
                    }

                    form button[type="submit"]:hover {
                      background-color: #245242 !important;
                      box-shadow: 0 0 15px rgba(28, 63, 50, 0.4) !important;
                    }
                  </style>`
              )
          },
        },
      ],
    }),
  }
})
