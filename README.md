# Wildpath Safaris & Tours Zambia Limited — Branded Next.js Website

This version integrates the supplied Wildpath brand assets, colour palette and wildlife photography into the website and uses the **exact client-supplied questionnaire wording for visible company/marketing copy**.

## Tech
- Next.js 16.3.3
- React 19.2
- TypeScript
- App Router
- Responsive custom CSS

## Brand assets implemented
- Supplied light horizontal Wildpath logo: navigation + footer
- Supplied dark horizontal Wildpath logo: light contact area
- Supplied stacked Wildpath logo: homepage brand/editorial area
- Supplied palette:
  - Dark Brown `#260E09`
  - Dark Brown `#7B3013`
  - Off-White `#FDFBF8`
  - Ivory Glow `#FFD699`
  - Orange `#DF6E0E`
  - Yellow `#F9BD33`
  - Green `#454411`

## Client photography
All 43 supplied wildlife files are stored locally under `public/wildlife/`.

The website deliberately curates the strongest, non-duplicate images into the live layout because the supplied questionnaire specifies approximately **10–25 high-quality photographs** for the gallery. Images are matched to the text they accompany:
- Private Safari Guiding → leopard in a tree / observation-focused imagery
- Wildlife Safaris → elephant herd / broad wildlife imagery
- South Luangwa Safari Experiences → lion beside water / wilderness landscape
- Private Game Drives → lion encounter imagery
- Walking Safari Experiences → birdlife / smaller-detail nature imagery
- Tailor-Made Safari Planning → elephant family/group imagery
- Blog topics → leopard, spotted hyenas and elephant imagery appropriate to each topic
- Gallery → 20 curated client images across leopards, lions, elephants, spotted hyenas, birds and other wildlife photography

No Unsplash or other external wildlife photography remains in the active site.

## Exact-copy rule
The visible marketing/company text is taken directly from the supplied Wildpath questionnaire. The design may change hierarchy, layout and line wrapping, but the company wording should **not be rewritten** unless the client supplies revised copy.

Functional interface text such as mobile menu controls, accessibility alt text and form suggestion values is implementation/UI copy rather than replacement marketing copy.

## Pages
- `/` — Homepage
- `/about` — About Us
- `/experiences` — Services
- `/south-luangwa` — South Luangwa Safari Experiences
- `/gallery` — Gallery
- `/journal` — Blog
- `/contact` — Contact Us + Safari Enquiry Form

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

For production:

```bash
npm run build
npm run start
```

## Still required from the client before publication
- Masuzyo Zimba professional photograph
- Additional team member information and professional photographs
- Verified customer testimonials
- Website domain
- Social media links
- Google Maps link
- Final legal/privacy advice and approved Privacy Policy / Terms & Conditions / POPIA position
- Form backend / email delivery integration
- Any additional company-owned safari guide, vehicle, walking-safari, lodge/camp or conservation photographs they wish to add

## V6 refinements
- Homepage hero cycles through four Wildpath wildlife photographs with a soft crossfade.
- Homepage hero content now uses the same bottom-left composition as internal page heroes.
- Internal hero placeholders/instructional copy were removed; only useful questionnaire copy remains.
- Removed the visible `Service 3` label from the South Luangwa hero.
- Gallery page uses a responsive editorial mosaic rather than collapsing into a one-column mobile list.
- South Luangwa gallery uses a separate responsive wildlife mosaic.
- Mobile FAQs use swipeable accordion cards; tablet uses a two-column FAQ card grid.
