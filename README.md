# FunnelsMania

A modern, premium business website for **FunnelsMania** — Shopify Development & Ecommerce Automation consulting.

## Tech Stack

- React 19 + Vite 6
- React Router 7
- Vanilla CSS (no UI framework)
- Mobile-first responsive design
- SEO-friendly meta tags

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push this repo to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Vercel auto-detects Vite — no extra config needed
4. `vercel.json` is included for SPA routing

## Pages

| Route | Page |
|-------|------|
| `/` | Home |
| `/services` | Services |
| `/pricing` | Pricing |
| `/testimonials` | Testimonials |
| `/about` | About |
| `/contact` | Contact |

## Project Structure

```
src/
├── components/     # Reusable UI components
├── data/           # Static content (services, pricing, testimonials)
├── pages/          # Route-level page components
├── App.jsx         # Router configuration
├── main.jsx        # Entry point
└── index.css       # Global styles & design system
```

## Customization

Update contact details, social links, and meta tags in `src/data/siteConfig.js`.
