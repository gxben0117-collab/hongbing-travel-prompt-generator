import { mkdir, readFile, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";

const html = await readFile("index.template.html", "utf8");
const css  = await readFile("src/styles.css",  "utf8");
const data = await readFile("src/data.js",     "utf8");
const app  = await readFile("src/app.js",      "utf8");

const bundledScript = `${data}\n\n${app}`;

const bundled = html
  .replace('  <link rel="stylesheet" href="./src/styles.css">', `<style>\n${css}\n</style>`)
  .replace('  <script src="./src/data.js"></script>\n  <script src="./src/app.js"></script>', `<script>\n${bundledScript}\n</script>`);

await mkdir("dist", { recursive: true });
await writeFile("dist/index.html", bundled, "utf8");

const sha = createHash("sha256").update(bundled).digest("hex");
console.log(`Built dist/index.html (${bundled.length} chars)`);
console.log(`SHA256: ${sha}`);
