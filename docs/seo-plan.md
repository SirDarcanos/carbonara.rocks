# Carbonara Rocks: search plan

## Goal and baseline

Help home cooks find the authentic carbonara recipe, understand the sauce, and choose workable substitutions. Keep the single-page recipe direct; do not turn it into a long preamble or generate thin keyword variants.

Audit: September 25, 2026. The public homepage returned HTTP 200 and a nonexistent path returned 404. Both `/robots.txt` and `/sitemap.xml` returned 404. Missing robots.txt did not block indexing; adding it makes the sitemap discoverable. Source inspection confirmed existing server-rendered Recipe JSON-LD, a canonical URL, and a noindex 404 page.

Search Console data had not been pulled at audit time. The owner has confirmed access; [local snapshot tooling](search-console.md) now supports a read-only baseline. Keyword volumes, backlinks, field Core Web Vitals, and ranking history were not available for the initial audit. No ranking or traffic uplift is promised. Search samples are topic research, not a measured SERP position or keyword difficulty report.

## Implemented in this branch

- Generate robots.txt and a one-URL sitemap using the configured production origin.
- Keep author, serving count, times, and ingredients in shared recipe data. Render author and times visibly, matching the existing recipe schema.
- Give recipe steps stable fragment URLs and include them in JSON-LD.
- Explain carbonara and its cream-free sauce directly in the introduction; use a descriptive recipe heading.
- Spell out “to taste” instead of “q.b.” for English readers.
- Enable large search image previews and provide social-image descriptions.
- Lazy-load the below-the-fold cheese image instead of competing with the main image.
- Test built HTML, discovery files, schema, and text spacing with `npm test`.

These tests are not a substitute for Google's Rich Results Test or a browser performance audit.

## Before and after deployment

1. Verify the Google Search Console domain property and Bing Webmaster Tools ownership. Submit `https://carbonara.rocks/sitemap.xml` after it returns 200.
2. Inspect the homepage in Search Console: check crawl access, Google-selected canonical, and indexing. Request indexing once after deployment.
3. Run Google's Rich Results Test on the deployed homepage. Check the Recipe result and fetchability of its image. Do not invent ratings, nutrition, or video to silence optional-field warnings.
4. Check PageSpeed Insights on mobile. Measure LCP, CLS, and INP where field data exists; investigate Google Fonts and hero image delivery if the measurements warrant it.
5. During the SpaceFast migration, keep the canonical domain unchanged. Confirm public access, no platform-injected noindex header, real 404 responses, HTTPS, www-to-apex redirects, headers, sitemap, and image URLs before DNS cutover. Do not index the preview hostname as another site.
6. Record a Search Console baseline, then compare consecutive 28-day periods: impressions, clicks, CTR, queries, and average position. Fathom measures visits and recipe clicks, not Google impressions or rankings. Treat sparse early data cautiously.

## Search intent and next content

| Intent                | Target phrases to validate in Search Console                               | Next useful improvement                                                     |
| --------------------- | -------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| Cook dinner           | authentic carbonara recipe; carbonara without cream; carbonara for two     | Keep the homepage as the main recipe rather than create competing variants. |
| Fix the sauce         | how to stop carbonara scrambling; carbonara too thick                      | Add a tested troubleshooting section with original process photos.          |
| Shop for ingredients  | guanciale substitute; pancetta vs bacon for carbonara; pecorino substitute | Expand the existing swaps with an honest comparison based on cooking tests. |
| Understand the method | egg yolks or whole eggs for carbonara                                      | Document the author's tested ratios, outcomes, and preferences.             |

The samples surfaced GialloZafferano's carbonara recipe and Bon Appétit's technique explanations. They support technique and substitutions as useful topics, not a claim that those terms are easy to rank for. Preserve this site's distinctive concise voice and avoid mass-produced articles.

## Owner input that would make the biggest difference

- Confirm the existing 10-minute prep / 15-minute cook estimates with a timed run.
- Supply a tested starting weight for Pecorino rather than leaving beginners to guess. Do not change ingredient ratios just to match competitors.
- Confirm a short author bio and preferred public profile/contact link. No invented chef credentials or experience claims.
- Add original step-by-step photos or a short technique video. Existing images are credited to other photographers; don't present them as evidence of the author's cooking tests.
- Earn relevant links by sharing the recipe or a genuinely useful technique demonstration with cooking communities and food writers. No purchased links, bulk directory spam, fabricated reviews, or automated outreach.

## References

- [Google recipe structured data](https://developers.google.com/search/docs/appearance/structured-data/recipe)
- [Google sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [Google people-first content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- [Google AI search guidance](https://developers.google.com/search/docs/appearance/ai-features)
- [Rich Results Test](https://search.google.com/test/rich-results)
- [GialloZafferano carbonara](https://www.giallozafferano.com/recipes/Spaghetti-Carbonara-Bacon-and-egg-spaghetti.html)

No special AI file or FAQ rich-result promise is needed for this recipe. Crawlable HTML, accurate Recipe markup, useful answers, and real experience come first.
