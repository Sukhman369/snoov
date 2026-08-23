# SNOOV — Studio & Atelier

> Modern editorial luxury fashion storefront and headless commerce engine.

---

## 🏛️ Architecture

Monorepo powered by **Turborepo**:

* **Storefront (`apps/storefront`):** Next.js 15 (App Router), React 19, Tailwind CSS, Cormorant Garamond editorial typography.
* **Backend (`apps/backend`):** Medusa 2.0 Headless Commerce Engine, Admin Dashboard, Workflows, and PostgreSQL.

---

## 🚀 Quick Start

### Prerequisites
* Node.js `20.x` LTS
* PostgreSQL `16.x`
* npm / Turborepo

### Installation & Run

```bash
# Install dependencies
npm install

# Start local development (Storefront & Backend concurrently)
npm run dev
```

### Local Services & Ports

| Service | URL | Notes |
| :--- | :--- | :--- |
| **Storefront** | `http://localhost:8000` | Art-directed fashion experience |
| **Medusa Backend** | `http://localhost:9000` | Store & REST APIs |
| **Admin Dashboard** | `http://localhost:9000/app` | Store management portal |

---

## 🎨 Design System & Brand Identity

* **Primary Typography:** *Cormorant Garamond* (Editorial Headings) + *Plus Jakarta Sans* (UI & Micro-details).
* **Palette Canvas:** Warm Ivory (`#FBF9F5`), Cashmere Sand (`#F5F1E8`), and Charcoal Noir (`#1A1A1A`).
* **Live Theme Studio:** Built-in floating Palette Studio supporting 6 real-time curated luxury color schemes.
* **Brand Assets:** Lossless WebP alpha logo, multi-res `favicon.ico`, and Apple Touch Icon located in `apps/storefront/public/brand/`.

---

## 📦 Production Build

```bash
# Build both storefront and backend for production
npm run build
```

---

## 📄 License
MIT © [SNOOV](https://github.com/Sukhman369/snoov)
