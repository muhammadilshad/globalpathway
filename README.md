# GlobalPathway

Free immigration tools website — visa-free lookups, Schengen calculator, USCIS processing times, Express Entry CRS, citizenship test practice, visa cost calculator, and document checklists.

Built with Next.js 16, TypeScript, Tailwind CSS v4. Zero database — all data in static JSON.

---

## Running Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploying to Vercel

1. Push to a GitHub repo
2. Import at [vercel.com/new](https://vercel.com/new)
3. No environment variables required for v1
4. Vercel auto-detects Next.js — click Deploy

---

## Updating Data Monthly

All data lives in `src/data/` as JSON files. Each file has a `_source` field pointing to where to refresh it.

| File | Update from | Frequency |
|---|---|---|
| `uscis-processing.json` | [egov.uscis.gov/processing-times](https://egov.uscis.gov/processing-times/) | Monthly |
| `crs-scoring.json` → `recentDraws` | [canada.ca Express Entry draws](https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/submit-profile/rounds-invitations.html) | After each draw (~biweekly) |
| `visa-fees.json` | Embassy/consulate fee pages | Quarterly |
| `passports.json` | [Henley Passport Index](https://www.henleyglobal.com/passport-index) | Quarterly |
| `visa-rules.json` | Official government portals | Quarterly |
| `document-requirements.json` | Embassy requirement pages | Quarterly |

### Updating USCIS processing times

1. Open `src/data/uscis-processing.json`
2. Update `min`, `max`, and `inquiryDate` for each form × service center from [egov.uscis.gov/processing-times](https://egov.uscis.gov/processing-times/)
3. Update `_lastUpdated` to today's date
4. Update `lastUpdated` in `src/data/tools-registry.ts` for `uscis-processing-times`

### Adding a new CRS draw

1. Open `src/data/crs-scoring.json`
2. Prepend to the `recentDraws` array (newest first):
   ```json
   { "date": "2026-05-14", "program": "Federal Skilled Worker", "cutoff": 495, "invitations": 3200 }
   ```
3. Remove the oldest entry to keep the list at 6

---

## Activating Google AdSense

After approval:

1. **Add the AdSense script** to `src/app/layout.tsx` `<head>`:
   ```tsx
   <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXX" crossOrigin="anonymous" />
   ```

2. **Replace `<AdSlot>` placeholders** with real `<ins class="adsbygoogle">` tags. See comments in `src/components/common/AdSlot.tsx`.

3. **Update `public/ads.txt`** with your real publisher line:
   ```
   google.com, pub-XXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0
   ```

---

## Pre-AdSense Submission Checklist

- [ ] Real address added to `/contact` page
- [ ] Governing law jurisdiction filled in `/terms` page
- [ ] `public/ads.txt` updated with real publisher ID
- [ ] Site live on a custom domain (not `*.vercel.app`)
- [ ] Privacy Policy covers AdSense/cookies ✓
- [ ] Cookie consent banner working ✓
- [ ] YMYL disclaimers on every tool page ✓
- [ ] All 5 required pages (About, Contact, Privacy, Terms, Disclaimer) with substantial content ✓
- [ ] Swap contact form from `mailto:` to Formspree or similar

## Upgrading the Contact Form

Replace `mailto:` in `src/app/contact/ContactForm.tsx` with Formspree:
1. Create a form at [formspree.io](https://formspree.io)
2. POST to `https://formspree.io/f/YOUR_FORM_ID` in `handleSubmit`

---

## Project Structure

```
src/app/          All routes (Next.js App Router)
src/components/   Reusable UI (layout/, tools/, common/)
src/data/         Static JSON data + tools-registry.ts
src/lib/          utils.ts, seo.ts, schema.ts
public/           ads.txt, static assets
```
