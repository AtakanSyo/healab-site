# HEALAB

A static Astro website for the HEALAB academic lab at Sabancı University.

## Run locally

Use Node 22.12+ (Node 22 LTS recommended).

```sh
npm ci
npm run dev
```

`npm run build` checks TypeScript, validates content collections, and generates `dist/`.
`npm run preview` serves the production build.

## Content editing

- `src/data/site.ts`: shared branding, address, navigation, category labels.
- `src/data/people.json`: faculty, current, past, and instrumentation members. Optional role, bio, and links. Keep stable unique IDs when moving members between groups; use `order` to control display order.
- `src/content/research/*.md`: research titles, summaries, ordering, and longer Markdown descriptions. Each file generates its own research page.
- `src/data/publications.json`: publication records, grouped by `refereed`, `non-refereed`, or `presentations`, newest first.
- `src/content.config.ts`: validation schemas for all three collections.
- `src/components/`, `src/layouts/`, `src/styles/`: shared presentation.

Publications include the supplied 2025 MNRAS paper. No papers, affiliations, degree titles, or bios have been fabricated. Empty categories remain visible. Add records using the examples in `docs/content-guide.md`; `draft: true` hides unfinished records. The site has no remote font or image dependencies. The design uses a minimal dark palette and text-based research links.

## GitHub + Vercel

Create a GitHub repository and push this folder when ready. The included workflow runs `npm ci` and `npm run build` on pushes and pull requests. Import the repository into Vercel with the Astro preset, Node 22, build command `npm run build`, and output `dist`. Static output needs no server adapter. `vercel.json` records these build settings. No repository, deployment, or domain has been created by this scaffold.

No domain or canonical URL is configured. Once a production URL is approved, set `site` in `astro.config.mjs` and add canonical URLs and a sitemap. Check content before publishing.

## Content provenance and review

The team roster, research topics, and categories follow Emrah Kalemci’s outline supplied in the “Lab website plan” conversation (18 September 2026). Faculty name and campus address follow his signature. Research descriptions are editorial starter text based on those topics, not verified statements of specific results.

- Confirm preferred spelling of all names, roles, bios, photos, and profile links.
- Efe Öztaban’s unexplained asterisk in the outline is omitted pending clarification.
- Instrumentation was indented under past members in the email; it is presented as its own group, without asserting present membership. Confirm the intended relationship.
- Confirm the lab’s expanded name before adding it; branding stays HEALAB.
- Add approved publication records (DOI, ADS, arXiv links).
- Confirm contact details; the Contact page currently points to the supplied faculty website rather than inventing a lab email.

Reference pages supplied by the professor:

- https://myweb.sabanciuniv.edu/ekalemci/
- https://sites.google.com/sabanciuniv.edu/kalemci-astro/home

Framework references: https://docs.astro.build/en/guides/content-collections/ and https://docs.astro.build/en/guides/deploy/vercel/
