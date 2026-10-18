# Carbonara Rocks

The authentic Italian carbonara recipe — eggs, Pecorino Romano, guanciale, and black pepper. No cream, ever.

🔗 Live site: [carbonara.rocks](https://carbonara.rocks)

Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com) (v4, CSS-first config). Static, no client-side JavaScript.

## 🚀 Project structure

```text
/
├── public/              Static files copied as-is (favicon)
├── src/
│   ├── assets/          Images + logo (optimized by Astro's image pipeline)
│   ├── components/      Reusable .astro components (Header, Hero, Step, …)
│   ├── layouts/         Layout.astro — the shared page shell
│   ├── pages/           Routes (index.astro is the homepage)
│   └── styles/          global.css — Tailwind import + @theme tokens
└── astro.config.mjs     Astro config (Tailwind via the Vite plugin)
```

Theme colors, fonts, and base typography live in [`src/styles/global.css`](src/styles/global.css) using Tailwind v4's `@theme` and `@layer base` — there is no `tailwind.config.js`.

## 🧞 Commands

Use Node.js 22.12 or newer and pnpm 11.20.0 (pinned in `package.json`). Run from the project root.

Use `pnpm install --frozen-lockfile` for reproducible installs in CI or hosting builds, followed by `pnpm run build`. Commit dependency changes with `pnpm-lock.yaml`; do not generate an npm lockfile.

| Command              | Action                                          |
| :------------------- | :---------------------------------------------- |
| `pnpm install`       | Install dependencies                            |
| `pnpm run dev`       | Start the dev server at `localhost:4321`        |
| `pnpm run build`     | Build the production site to `./dist/`          |
| `pnpm test`          | Build and run the test suite                    |
| `pnpm run check`     | Run Astro diagnostics                           |
| `pnpm run format`    | Format with Prettier (`format:check` to verify) |
| `pnpm run astro ...` | Run Astro CLI commands (e.g. `astro check`)     |

## 📄 License

[MIT](LICENSE) © Nicola Mustone
