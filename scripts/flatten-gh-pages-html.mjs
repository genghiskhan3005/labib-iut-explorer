// vite build writes gh-pages/index.html to dist/gh-pages/gh-pages/index.html
// (it mirrors the input file's path relative to the project root, since the
// entry isn't literally at the project root). GitHub Pages needs index.html
// directly at the published directory's root, so move it up one level.
import { existsSync, renameSync, rmdirSync } from "node:fs";
import { join } from "node:path";

const outDir = join(import.meta.dirname, "..", "dist", "gh-pages");
const nested = join(outDir, "gh-pages", "index.html");
const flat = join(outDir, "index.html");

if (existsSync(nested)) {
  renameSync(nested, flat);
  rmdirSync(join(outDir, "gh-pages"));
} else if (!existsSync(flat)) {
  throw new Error(`Expected ${nested} or ${flat} to exist after build.`);
}
