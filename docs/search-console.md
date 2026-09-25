# Search Console snapshots

Use the same pinned `gsc-snapshot@0.2.0` package as But Honestly to capture read-only Google Search Console data. This is local analysis tooling, not part of the website build or a scheduled deployment job.

## Capture data

```sh
# Latest 30 days through yesterday (may include provisional data)
npm run search-console:snapshot

# Exact calendar month for a baseline
npm run search-console:snapshot -- --start 2026-08-01 --end 2026-08-31

# Explicit property if automatic discovery is ambiguous
npm run search-console:snapshot -- --site sc-domain:carbonara.rocks --start 2026-08-01 --end 2026-08-31
```

Property discovery uses `homepage` in `package.json`: it prefers the matching domain property, then a unique URL-prefix property available to the authenticated user. It fails rather than guessing among multiple matching properties. Dates are inclusive and interpreted in `America/Los_Angeles`.

Each interval goes under `local/search-console/<start>--<end>/` with a Markdown summary, manifest, totals, pages, page-query, country, and device datasets. The directory is git-ignored and outside Astro's public/build inputs. Never upload it as a site artifact or commit it. Rerunning an interval replaces its previous snapshot after a successful pull.

## Authentication

The package uses existing Google Application Default Credentials (ADC) and requests Search Console read-only access. It never starts an OAuth flow or modifies the Search Console property.

If authentication fails, the account must have access to the intended property and the Search Console API must be enabled in its quota project. A human can refresh credentials locally:

```sh
gcloud auth application-default login \
  --scopes=https://www.googleapis.com/auth/cloud-platform,https://www.googleapis.com/auth/webmasters.readonly
```

Do not paste tokens, service-account files, or ADC contents into chat or this repository. The additional `cloud-platform` scope is required by current gcloud ADC quota handling; the snapshot runtime requests only Search Console read-only access.

## Interpret the baseline

Start with `summary.md` and `manifest.json`. Only compare final data with final data; the latest days may be provisional. Missing rows or no activity are not proof of an indexing problem.

Use `pages.json` for page performance and `totals.json` for property totals. Query rows are a disclosed subset: Google suppresses some queries for privacy and the API can return only top rows. Do not reconstruct page totals from `page-query.json` or present query coverage as complete.

Track clicks, impressions, CTR, and average position separately. A shift in query/device mix can change average position without a ranking change for a particular query. Annotate deployment and hosting migration dates when interpreting changes; a before/after comparison alone does not establish causation.

For this single-page site, the package's summary is the initial report. But Honestly's separate aggregate reporter contains essay cohorts, migration rules, and other site-specific assumptions that are not copied here. Add comparison logic only when the baseline shows a useful need.

See [the SEO plan](seo-plan.md) for the target intents and deployment checklist, and [gsc-snapshot documentation](https://github.com/SirDarcanos/gsc-snapshot) for the full file format and completeness rules.
