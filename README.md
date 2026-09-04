# Portfolio — Giuliana Di Rocco

Bilingual developer portfolio (English / Spanish), with an embedded design system built from real web components.

**Live:** [dev.giulianadirocco.com](https://dev.giulianadirocco.com) · **Design system:** [/design-system](https://dev.giulianadirocco.com/design-system)

## Stack

React 18 · TypeScript · Vite · Tailwind CSS · Framer Motion · react-i18next · Firebase Firestore · Lit Element 3 · Vercel

## What's in here

**Full EN/ES internationalization.** Every project description, the profile and the roadmap exist in both languages. Translations that the components consume live in `src/i18n.ts`; copy that is tightly coupled to layout is written bilingually inside the components themselves. `<html lang>` follows the active language, so search engines and screen readers get the right one.

**A design system, not a screenshot of one.** `/design-system` is a live page rendering components built with Lit Element 3 — framework-agnostic web components using Shadow DOM, CSS custom properties and TypeScript reactive properties. They ship as part of the build rather than being documented in isolation.

**Dynamic reviews.** Visitors can submit a review; it lands in Firebase Firestore and is published after moderation.

**Technical SEO.** Canonical URL, Open Graph and Twitter cards, `hreflang` for both locales, `Person` structured data, sitemap and robots.

**Performance.** Every image is served as WebP capped at 1600px and lazy-loaded below the fold — the whole `public/` directory is under 2 MB.

## Project data

Projects are defined once in `src/data/projectsData.ts` — id, image, live URL, repositories, stack — and their copy is looked up per language from `projects.items.<id>` in `src/i18n.ts`. Adding a project means one entry in the data file and one block in each locale.

The counter of shipped projects shown across the site is derived from that same list (`DEPLOYED_COUNT`), so it can't drift out of sync with reality.

## Running it

```bash
npm install
npm run dev
```

Firebase and EmailJS credentials go in `.env.local` (see the `VITE_*` variables read in `src/lib/firebase.ts`). The site runs without them — only the reviews section needs them.

```bash
npm run build       # production build
npm run typecheck   # tsc --noEmit
```
