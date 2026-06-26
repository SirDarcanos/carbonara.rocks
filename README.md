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

Run from the project root:

| Command             | Action                                          |
| :------------------ | :---------------------------------------------- |
| `npm install`       | Install dependencies                            |
| `npm run dev`       | Start the dev server at `localhost:4321`        |
| `npm run build`     | Build the production site to `./dist/`          |
| `npm run format`    | Format with Prettier (`format:check` to verify) |
| `npm run astro ...` | Run Astro CLI commands (e.g. `astro check`)     |

## 📄 License

[MIT](LICENSE) © Nicola Mustone
