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
                    /* ── SNOOV Luxury Admin Branding ── */
                    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Cormorant+Garamond:wght@400;500;600&display=swap');

                    :root {
                      --snoov-primary: #1C3F32;
                      --snoov-gold: #C5A880;
                      --snoov-charcoal: #121214;
                    }

                    body {
                      font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif !important;
                    }

                    /* ── Login Page Customization ── */
                    /* Hide default Medusa hexagon icon and replace with SNOOV Monogram */
                    .shadow-buttons-neutral svg.rounded-\\[10px\\] {
                      display: none !important;
                    }
                    .shadow-buttons-neutral {
                      background-image: url('/static/brand/snoov-icon.webp') !important;
                      background-size: 32px 32px !important;
                      background-repeat: no-repeat !important;
                      background-position: center !important;
                      background-color: #18181B !important;
                      box-shadow: 0 0 20px rgba(0,0,0,0.5) !important;
                      border: 1px solid rgba(255,255,255,0.1) !important;
                    }

                    /* Top Header Brand Badge in Sidebar / Navbar */
                    header [data-testid="nav-user-button"]::before {
                      content: "✦ SNOOV ATELIER";
                      display: inline-block;
                      font-size: 10px;
                      font-family: 'Plus Jakarta Sans', monospace;
                      letter-spacing: 0.12em;
                      margin-right: 12px;
                      padding: 3px 8px;
                      background: rgba(28, 63, 50, 0.12);
                      color: #1C3F32;
                      border: 1px solid rgba(28, 63, 50, 0.2);
                      border-radius: 2px;
                      font-weight: 700;
                    }
                  </style>`
              )
          },
        },
      ],
    }),
  }
})
