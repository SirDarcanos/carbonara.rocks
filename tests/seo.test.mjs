import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

const read = (path) => readFileSync(new URL(`../dist/${path}`, import.meta.url), "utf8");
const html = read("index.html");
const text = html.replace(/<[^>]+>/g, "").replace(/\s+/g, " ");
const schema = JSON.parse(
  html.match(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/)[1],
);

test("discovery files contain only the canonical homepage", () => {
  assert.match(read("robots.txt"), /User-agent: \*\nAllow: \/\n/);
  assert.match(read("robots.txt"), /Sitemap: https:\/\/carbonara\.rocks\/sitemap\.xml/);
  const urls = [...read("sitemap.xml").matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
  assert.deepEqual(urls, ["https://carbonara.rocks/"]);
  assert.match(html, /rel="canonical" href="https:\/\/carbonara\.rocks\/"/);
  assert.match(read("404.html"), /name="robots" content="noindex"/);
  assert.doesNotMatch(html, /content="noindex/);
});

test("recipe schema matches visible author, times, ingredients, and instructions", () => {
  assert.equal(schema["@type"], "Recipe");
  assert.equal(schema.url, "https://carbonara.rocks/#recipe");
  assert.ok(text.includes(`Recipe by ${schema.author.name}`));
  for (const [field, label] of [
    ["prepTime", "Prep"],
    ["cookTime", "Cook"],
    ["totalTime", "Total"],
  ]) {
    const minutes = schema[field].match(/^PT(\d+)M$/)[1];
    assert.ok(text.includes(`${label}: ${minutes} min`));
  }
  assert.equal(schema.recipeYield, "2 servings");
  assert.ok(text.includes("For 2 people"));
  assert.equal(schema.recipeIngredient.length, 5);
  assert.equal(schema.recipeInstructions.length, 5);
  for (const step of schema.recipeInstructions) {
    assert.ok(text.includes(step.name));
    assert.ok(text.includes(step.text));
    assert.ok(html.includes(`id="${new URL(step.url).hash.slice(1)}"`));
  }
  for (const image of schema.image) {
    const url = new URL(image);
    assert.equal(url.origin, "https://carbonara.rocks");
    assert.ok(existsSync(new URL(`../dist${url.pathname}`, import.meta.url)));
  }
  assert.equal(schema.aggregateRating, undefined, "Never fabricate reviews");
});

test("search and social previews have image metadata", () => {
  assert.match(html, /content="max-image-preview:large"/);
  assert.match(html, /property="og:image:alt"/);
  assert.match(html, /name="twitter:image:alt"/);
  assert.equal([...html.matchAll(/<h1\b/g)].length, 1);
});
