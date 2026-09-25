import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://carbonara.rocks",
  devToolbar: {
    enabled: false,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
