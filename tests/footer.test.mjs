import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

for (const page of ["index.html", "404.html"]) {
  test(`${page}: footer credits Spacefast with a local, accessible logo`, () => {
    const html = readFileSync(new URL(`../dist/${page}`, import.meta.url), "utf8");
    const footer = html.match(/<footer\b[\s\S]*?<\/footer>/)?.[0];
    assert.ok(footer, "Footer is rendered");
    const credit = footer.match(
      /<a\b[^>]*href="https:\/\/spacefast.com\/"[^>]*>[\s\S]*?<\/a>/,
    )?.[0];
    assert.ok(credit, "Credit links to Spacefast");
    assert.match(footer, /Hosted at\s/);
    assert.doesNotMatch(credit, /Hosted at/);
    assert.match(
      footer,
      /<a\b[^>]*href="https:\/\/nicolamustone.com\/"[^>]*>\s*Designed in Italy\s*<\/a>, without cream/,
    );
    assert.match(footer, /<p class="text-surface\/70">/);
    assert.match(credit, /<img\b[^>]*src="\/images\/spacefast-wordmark.svg"[^>]*alt="Spacefast"/);
    assert.ok(
      readFileSync(
        new URL("../dist/images/spacefast-wordmark.svg", import.meta.url),
        "utf8",
      ).includes("<svg"),
    );
  });
}
