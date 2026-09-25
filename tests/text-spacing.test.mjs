import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

// Run after `npm run build`: source whitespace can disappear during compilation.
for (const page of ["index.html", "404.html"]) {
  test(`${page}: legal notice preserves spaces around links`, () => {
    const html = readFileSync(new URL(`../dist/${page}`, import.meta.url), "utf8");
    const dialog = html.match(/<dialog\b[^>]*id="privacy-dialog"[\s\S]*?<\/dialog>/)?.[0];
    assert.ok(dialog, "Terms & Privacy dialog is rendered");
    const text = dialog.replace(/<[^>]+>/g, "").replace(/\s+/g, " ");
    assert.ok(text.includes("We use Fathom Analytics to understand"));
    assert.ok(text.includes("Read more in Fathom's data processing agreement and data journey."));
  });
}

test("homepage: inline emphasis preserves sentence spacing", () => {
  const text = readFileSync(new URL("../dist/index.html", import.meta.url), "utf8")
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ");
  assert.ok(
    text.includes(
      "The magic happens when hot pasta meets the eggs and cheese — that’s the cream you love.",
    ),
  );
  assert.ok(text.includes("What not to put in carbonara"));
  assert.ok(text.includes("you’re not making carbonara. You’re making pasta"));
});
