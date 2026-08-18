// Standalone build config for the static GitHub Pages deploy. Deliberately
// bypasses @lovable.dev/vite-tanstack-config's tanstackStart + nitro
// pipeline — that pipeline's SSR/prerender step is broken with the pinned
// nitro version for the static/github-pages presets (fails with
// "rolldownOptions.input should not be an html file when building for SSR"
// regardless of app-level config). This app has no server functions or data
// loaders, so a plain client-rendered build (see gh-pages/index.html and
// src/entry-client-static.tsx) is a safe, working substitute.
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  base: "/portfolio_website/",
  plugins: [tailwindcss(), tsconfigPaths({ projects: ["./tsconfig.json"] }), react()],
  css: { transformer: "lightningcss" },
  build: {
    outDir: "dist/gh-pages",
    rollupOptions: {
      input: fileURLToPath(new URL("./gh-pages/index.html", import.meta.url)),
    },
  },
});
