# SNOOV — Studio & Atelier

<p align="left">
  <img src="https://img.shields.io/badge/SNOOV-Atelier%20Luxury-008000?style=flat&logoColor=white" alt="Snoov Atelier" />
  <img src="https://img.shields.io/badge/Next.js-15.5.21-000000?style=flat&logo=nextdotjs&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19.0-20232A?style=flat&logo=react&logoColor=61DAFB" alt="React 19" />
  <img src="https://img.shields.io/badge/Medusa-2.0%20Engine-5420DE?style=flat&logo=medusa&logoColor=white" alt="Medusa 2.0" />
  <img src="https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Turborepo-Monorepo-EF4444?style=flat&logo=turborepo&logoColor=white" alt="Turborepo" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=flat&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/PostgreSQL-16-4169E1?style=flat&logo=postgresql&logoColor=white" alt="PostgreSQL" />
  <img src="https://img.shields.io/badge/Node.js-20%20LTS-339933?style=flat&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Turbopack-Enabled-000000?style=flat&logo=vercel&logoColor=white" alt="Turbopack" />
  <img src="https://img.shields.io/badge/License-MIT-008000?style=flat&logo=open-source-initiative&logoColor=white" alt="License" />
  <img src="https://img.shields.io/badge/Status-Production%20Ready-008000?style=flat" alt="Status" />
</p>

> Modern editorial luxury fashion storefront and headless commerce engine.

---

## 🏛️ Architecture & Tech Stack

<p align="left">
  <img src="https://img.shields.io/badge/Storefront-Next.js%2015%20App%20Router-000000?style=flat&logo=nextdotjs&logoColor=white" alt="Storefront" />
  <img src="https://img.shields.io/badge/Backend-Medusa%202.0%20Core-5420DE?style=flat&logo=medusa&logoColor=white" alt="Backend" />
  <img src="https://img.shields.io/badge/Database-PostgreSQL%2016-4169E1?style=flat&logo=postgresql&logoColor=white" alt="Database" />
  <img src="https://img.shields.io/badge/Cache-In--Memory%20%2F%20Redis-DC382D?style=flat&logo=redis&logoColor=white" alt="Cache" />
  <img src="https://img.shields.io/badge/Styling-Vanilla%20Tailwind%20%2B%20CSS%20Variables-06B6D4?style=flat&logo=tailwindcss&logoColor=white" alt="Styling" />
  <img src="https://img.shields.io/badge/Typography-Cormorant%20Garamond%20%2B%20Jakarta-C5A880?style=flat&logo=googlefonts&logoColor=white" alt="Typography" />
</p>

Monorepo workspace orchestrated via **Turborepo**:
* **`apps/storefront`:** Next.js 15 App Router, React 19, Art-directed Fashion UI, Multi-slot 3:4 Gallery, Size Guide Modal, Dynamic Filters.
* **`apps/backend`:** Medusa 2.0 Headless Commerce Engine, Admin Dashboard, Workflows, Cart/Region Services, and PostgreSQL.

---

## 🚀 Quick Start

<p align="left">
  <img src="https://img.shields.io/badge/Node-v20.x%20Required-339933?style=flat&logo=nodedotjs&logoColor=white" alt="Node Version" />
  <img src="https://img.shields.io/badge/Package_Manager-npm-CB3837?style=flat&logo=npm&logoColor=white" alt="npm" />
  <img src="https://img.shields.io/badge/Build_Tool-Turbo%20v2-EF4444?style=flat&logo=turborepo&logoColor=white" alt="Turbo" />
</p>

### Installation & Run

```bash
# 1. Install all dependencies across monorepo
npm install

# 2. Start local development (Storefront & Backend concurrently)
npm run dev
```

### Local Services & Ports

| Service | Port / URL | Status | Notes |
| :--- | :--- | :--- | :--- |
| **Storefront** | `http://localhost:8000` | <img src="https://img.shields.io/badge/Live-Port%208000-008000?style=flat" alt="Port 8000" /> | Art-directed luxury fashion frontend |
| **Medusa Backend** | `http://localhost:9000` | <img src="https://img.shields.io/badge/API-Port%209000-5420DE?style=flat" alt="Port 9000" /> | Store, Cart & Product REST APIs |
| **Admin Dashboard** | `http://localhost:9000/app` | <img src="https://img.shields.io/badge/Admin-Auth%20Protected-1A1A1A?style=flat" alt="Admin" /> | Merchant inventory & order portal |

---

## 🎨 Design System & Palette Studio

<p align="left">
  <img src="https://img.shields.io/badge/Palette_01-Emerald%20%26%20Ivory-008000?style=flat" alt="Emerald & Ivory" />
  <img src="https://img.shields.io/badge/Palette_02-Champagne%20Gold%20%26%20Alabaster-A67C1E?style=flat" alt="Champagne Gold" />
  <img src="https://img.shields.io/badge/Palette_03-Bordeaux%20Wine%20%26%20Raw%20Silk-7A1C28?style=flat" alt="Bordeaux Wine" />
  <img src="https://img.shields.io/badge/Palette_04-Savile%20Midnight%20%26%20Stone-1E2F48?style=flat" alt="Savile Midnight" />
  <img src="https://img.shields.io/badge/Palette_05-Olive%20Moss%20%26%20Travertine-48532B?style=flat" alt="Olive Moss" />
  <img src="https://img.shields.io/badge/Palette_06-Obsidian%20Noir%20%26%20Chalk-141414?style=flat" alt="Obsidian Noir" />
</p>

* **Typography:** *Cormorant Garamond* (Editorial Headings & Quotes) paired with *Plus Jakarta Sans* (UI & Micro-details).
* **Live Theme Switching:** Interactive floating **Palette Studio** embedded on the storefront to test 6 real-time luxury color profiles.
* **Production Image System:** Standardized 3:4 aspect ratio blueprints (`1200 × 1600 px`) for editorial catalog photography.
* **Brand Assets:** Multi-format WebP with lossless alpha transparency, high-res PNGs, and multi-matrix `favicon.ico`.

---

## 📦 Production Commands

<p align="left">
  <img src="https://img.shields.io/badge/Build-turbo%20build-000000?style=flat&logo=turborepo&logoColor=white" alt="Build" />
  <img src="https://img.shields.io/badge/Lint-eslint-4B32C3?style=flat&logo=eslint&logoColor=white" alt="Lint" />
  <img src="https://img.shields.io/badge/Deploy-Hostinger%20%2F%20Vercel%20%2F%20Railway-000000?style=flat" alt="Deploy" />
</p>

```bash
# Optimized production build
npm run build
```

---

## 📄 License
<img src="https://img.shields.io/badge/License-MIT-008000?style=flat&logo=open-source-initiative&logoColor=white" alt="MIT License" /> © [SNOOV](https://github.com/Sukhman369/snoov)
