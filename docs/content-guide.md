# Adding lab content

Edit the relevant JSON array, separating records with commas. IDs must be unique within each collection. All links must be complete URLs. Build locally before submitting a pull request.

## Publication template

Replace every placeholder before setting `draft` to `false`.

```json
{
  "id": "publication-slug",
  "title": "Exact publication title",
  "category": "refereed",
  "authors": "Author list",
  "year": 2026,
  "venue": "Journal or conference",
  "links": [],
  "draft": true
}
```

Allowed categories: `refereed`, `non-refereed`, `presentations`, `proceedings`. Links use `{ "label": "DOI", "url": "https://doi.org/REPLACE" }`; replace with a verified URL. ADS and arXiv use the same link structure. Do not publish placeholder URLs.

## Person template

```json
{
  "id": "name-slug",
  "name": "Full name",
  "group": "current",
  "order": 6,
  "role": "Confirmed role",
  "bio": "Approved short biography.",
  "links": []
}
```

Allowed groups: `lead`, `current`, `past`, `instrumentation`. Role and biography are optional. The starter lists member names without portraits. To add photos, extend the schema and MemberCard together with descriptive alt text and fixed dimensions.

## Research

Copy a Markdown file in `src/content/research/`, give it a unique filename, and update its title, summary, tag, order, and body. The filename becomes its URL. The body renders on the individual research page.
