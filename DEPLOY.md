# Deploying to Cloudflare Pages

The site is a Next.js **static export**. `npm run build` writes plain HTML, CSS,
JS and images to `out/`. There is no server runtime, so Pages just serves files.

## Pages project settings

| Setting | Value |
| --- | --- |
| Framework preset | **None** (do *not* pick "Next.js" — that preset expects SSR) |
| Build command | `npm run build` |
| Build output directory | `out` |
| Root directory | `dr-megha-kadam` (only if the repo root is the parent folder) |
| Node version | 18 or newer |

`wrangler.jsonc` already declares `pages_build_output_dir: "./out"`, so a
`wrangler pages deploy` from the CLI picks the same directory up automatically.

### Deploying from the CLI instead

```bash
npm run build && npx wrangler pages deploy out --project-name dr-megha-kadam
```

## Before the first production deploy

1. **Set the real domain.** `SITE_URL` in `src/data/site.js` is still the
   placeholder `https://www.drmeghakadam.com`. It drives the canonical tag,
   `sitemap.xml`, `robots.txt` and the Open Graph image URL, so a wrong value
   there points Google at a domain that does not exist.
2. **Add the custom domain** in the Pages project, then let Cloudflare issue the
   certificate before pointing DNS.
3. **Confirm the clinic hours.** `CLINIC.timings` currently reads
   "By appointment. Call to confirm timings."
4. **Check photo consent** (see below).

## Caching

`public/_headers` ships to `out/_headers` and Cloudflare applies it:

- `/_next/static/*` and `/photos/*` are immutable for a year. Next fingerprints
  its own assets; the photos are versioned by filename, so to replace one, export
  it under a new name rather than overwriting.
- Everything else gets Cloudflare's default, which revalidates.

## Photos

Source images live in `_source-photos/` and are **not** deployed. The graded,
resized versions in `public/photos/` are what ship, as WebP with a JPEG fallback.

To regenerate after adding new source photos, adapt the grading script noted in
the project history: it neutralises the colour cast, warms the highlights,
suppresses clinical greens, and exports responsive widths.

> **Consent:** two of the photos show identifiable patients (a child in
> `megha-clinic` and a newborn in `megha-nicu`). Confirm written parental consent
> is on file before this goes live. To swap either one, replace the files in
> `public/photos/` keeping the same stem and widths; no code change is needed.

## What is archived, not deleted

`_archive/` holds the previous multi-page site: `/about`, `/contact`,
`/services` plus the six service detail pages, `/lp`, and the old
`globals.legacy.css`. They were moved out of `app/` so Next stops building them.
The long-form copy that fed those pages still lives in `src/data/services.js`
(`metaTitle`, `lead`, `body`, `helps`), so restoring a route is a matter of
moving the folder back and bringing the matching components and CSS with it.
