# Portfolio — Giuliana Di Rocco

Bilingual (Spanish / English) portfolio of a full stack developer, built to be read in a minute: who I am, four case studies, experience, stack, contact.

**Live:** [dev.giulianadirocco.com](https://dev.giulianadirocco.com)

## Stack

React 18 · TypeScript · Vite · plain CSS with custom properties · Vercel. The only UI dependency is `lucide-react` for icons.

## How it's organised

- `src/content.ts` holds every piece of copy on the page, with Spanish and English side by side (`{ es, en }`). Adding a project means adding one object to `featured`, `more` or `clientSites`.
- `src/lang.tsx` is a small context for the active language. It starts from the browser language, remembers the visitor's choice and keeps `<html lang>` in sync for search engines and screen readers.
- `src/components/` has one component per section: `Nav`, `Hero`, `Projects`, `Experience`, `Stack`, `Contact`.
- `src/index.css` defines the design tokens (colour, type, spacing) with a dark variant under `prefers-color-scheme`.
- The typeface is Bricolage Grotesque (variable: weight, width and optical size), self-hosted from `public/fonts`.

`/design-system` is a separate page with Lit Element 3 web components (`design-system/index.html`, `src/design-system/`).

## Running it

```bash
npm install
npm run dev
npm run typecheck   # tsc --noEmit
npm run build       # production build
```

No environment variables are needed.
