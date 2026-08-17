# Devansh Tours & Travel

Marketing website for Devansh Tours & Travel (Pune) — Next.js App Router, TypeScript, Tailwind CSS.

## Development

```bash
npm install
npm run dev
```

## Structure

- `src/data/business.ts` — single source of truth for phone numbers, WhatsApp message templates, destinations, fleet, services, reviews, and the Google Maps location. Update content here.
- `src/lib/whatsapp.ts` — builds `wa.me` deep links with pre-filled messages.
- `src/components/sections/*` — one component per homepage section.
- `src/components/ui/*` — shared building blocks (`Cta`, `WhatsAppCTA`, cards, icons).
- `src/app/opengraph-image.tsx` / `twitter-image.tsx` — social preview images generated with `next/og`.

## Content still needed

- **Fleet photos** — `public/images/fleet/*.svg` are placeholder illustrations. Replace with real vehicle photos and update the `image` path in `src/data/business.ts`.
- **Google reviews** — `googleReviews` in `src/data/business.ts` is empty by design. Add verified reviews (name, rating, quote, date) as they're supplied; the Reviews section renders them automatically.
- **Instagram gallery** — currently a link-out CTA to `@devansh_travel`. Add a photo grid component once real photos are available.

## Environment

Copy `.env.example` to `.env.local`. `NEXT_PUBLIC_SITE_URL` should be set to the real domain once live (used in metadata, sitemap, and robots.txt).
