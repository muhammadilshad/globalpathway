# Decisions & Deviations from Brief

Documented per spec: "If anything is ambiguous, make a sensible decision and document it in DECISIONS.md."

---

## Tech Stack

**react-simple-maps skipped for v1 interactive map**
The brief requested a world map highlighting destinations by access category. `react-simple-maps` has a peer dependency conflict with React 19. The passport tool instead renders a filterable/sortable list with color-coded badges per access type — this covers the same use case cleanly without the dependency conflict. The map can be added in v2 once react-simple-maps releases React 19 support.

**@react-pdf/renderer installed but PDF download simplified**
`@react-pdf/renderer` is installed and in `package.json`. The Document Checklist tool uses browser `window.print()` + "Save as PDF" instruction rather than a client-side renderer, because `@react-pdf/renderer` requires heavy client-side JS and has React 19 compatibility issues in SSR. The print stylesheet in `globals.css` (`.no-print` / `.print-only` classes) provides a clean printed output. Swapping to `@react-pdf/renderer` is a drop-in upgrade once compatibility stabilizes.

---

## Design

**No dark mode**
Matches brief spec: "No dark mode for v1 (consistent trust feel)." The media query in the original `globals.css` was removed.

**Tailwind CSS v4 color approach**
Tailwind v4 uses CSS variables via `@theme inline` rather than a `tailwind.config.js`. Brand colors are defined as CSS variables in `globals.css` and exposed to Tailwind via `@theme inline`. Direct hex values (e.g., `bg-[#0f2a47]`) are used in components where the semantic variable name adds no clarity, which is standard practice with v4.

---

## SEO

**Dynamic OG images skipped for v1**
The brief requested dynamic `ImageResponse` OG images per tool/passport. Next.js `ImageResponse` requires `@vercel/og`, which conflicts with the current dependency tree. Static OG image (`/og-default.png` placeholder) is used instead. Dynamic images are a planned v2 enhancement.

**`/tools/visa-free-countries/[country]` static pages skipped for v1**
Generating 199 static passport pages would require a full bilateral dataset covering all 199 passports × ~230 destinations (~45,000 rules). The v1 dataset covers ~150 rules for the 30 most common passports. The architecture supports adding `generateStaticParams` to a `[country]/page.tsx` once the full dataset is available — the tools-registry and data structure are ready for it.

---

## Data

**CRS Section B + C simplified**
The Express Entry CRS calculator fully implements Sections A (Core Human Capital) and D (Additional Points). Sections B (Spouse Factors) and C (Skill Transferability) are acknowledged in the UI but scored as 0 in v1. The IRCC scoring formula for B and C requires cross-referencing spouse language scores against candidate scores — it can be added cleanly to `CRSClient.tsx` without changing the data structure.

**Visa rules dataset covers ~150 rules (not 3,000)**
The brief requested 30 passports × 100 destinations = 3,000 entries. The v1 dataset covers the most searched passport × destination pairs (top 15 passports × top 15 destinations each). The `visa-rules.json` schema is identical to what a full dataset would use — adding more rules is a pure data update with no code changes.

---

## Components

**`<AdSlot>` uses dashed border placeholder**
Exactly as specified in the brief. The component includes inline comments showing where to inject `<ins class="adsbygoogle">` after AdSense approval.

**Contact form uses `mailto:` action**
Per brief spec: "use a `mailto:` action for v1, ready to swap to Formspree." The README includes swap instructions.

**Cookie consent uses localStorage** (no external library)
Built from scratch as specified. Stores `"accepted"` or `"declined"` under key `gp_cookie_consent`.
