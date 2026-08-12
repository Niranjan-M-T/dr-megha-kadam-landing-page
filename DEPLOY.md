# Deploying to Cloudflare Pages

The site is a Next.js **static export**. `npm run build` writes plain HTML, CSS,
JS and images to `out/`. There is no server runtime, so Pages just serves files.

## Pages project settings

| Setting | Value |
| --- | --- |
| Framework preset | **None** (do *not* pick "Next.js" — that preset expects SSR) |
| Build command | `npm run build` |
| Build output directory | `out` |
| Root directory | leave **blank** (`package.json` is at the repo root) |
| Node version | 18 or newer |

`wrangler.jsonc` declares `pages_build_output_dir: "./out"`, so a
`wrangler pages deploy` from the CLI picks the same directory up automatically.

### Deploying from the CLI instead

```bash
npm run build && npx wrangler pages deploy out --project-name dr-meghas-child-care-clinic
```

### There must be only one connected project

If a **Workers Builds** project is also connected to this repo, every push
builds twice and produces two live URLs, which makes it easy to attach the
domain to the stale one. Delete whichever is not in use.

The two products need incompatible config, so they cannot both work from one
file: Pages needs `pages_build_output_dir`, Workers Builds needs an `assets`
block and a `npx wrangler deploy` deploy command. Switching means changing the
dashboard and `wrangler.jsonc` together.

## Before the first production deploy

1. **Keep `SITE_URL` matching the live origin.** It is
   `https://dr-meghas-child-care-clinic.pages.dev` in `src/data/site.js` and
   drives the canonical tag, `sitemap.xml`, `robots.txt`, the Open Graph image
   URL and the JSON-LD `@id`s. A canonical pointing at a domain that does not
   resolve can keep the page out of Google's index. It is baked in at build
   time, so changing it needs a redeploy.
2. **If a custom domain is added later**, add it in the Pages project, wait for
   the certificate, then update `SITE_URL` and redeploy.
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

`public/og.jpg` is the 1200x630 social share card, built from the cut-out studio
portrait. It deliberately contains no patient: the share thumbnail is the most
widely redistributed image on the site, since WhatsApp and Facebook fetch and
cache it on every link paste. Regenerate it if the portrait or the strapline
changes.

## What is archived, not deleted

`_archive/` holds the previous multi-page site: `/about`, `/contact`,
`/services` plus the six service detail pages, `/lp`, and the old
`globals.legacy.css`. They were moved out of `app/` so Next stops building them.
The long-form copy that fed those pages still lives in `src/data/services.js`
(`metaTitle`, `lead`, `body`, `helps`), so restoring a route is a matter of
moving the folder back and bringing the matching components and CSS with it.
