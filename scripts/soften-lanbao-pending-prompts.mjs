import fs from "node:fs";
import path from "node:path";

const outDir = "C:/Users/User/Documents/Codex/\u85cd\u5bf6\u8f38\u51fa\u5716";
const manifestPath = path.join(outDir, "lanbao_travel_batch_manifest.json");
const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));

const conservativeWardrobe =
  "Strict conservative wardrobe: elegant high-neck or crew-neck outerwear, long sleeves, opaque layered fabric, full torso coverage, no cleavage, no bare shoulders, no backless design, no sheer fabric, no tight lingerie-like silhouette, no bikini, no swimsuit, no bedroom styling. Pose is upright, dignified, fashion-editorial, non-seductive, and family-safe.";

const conservativeAvoid =
  "Avoid any sexualized framing, exposed chest, cleavage, bare shoulders, lingerie, bikini, swimsuit, see-through clothing, wet transparent fabric, bedroom mood, seductive pose, erotic gaze, body-emphasis crop, or suggestive styling.";

let updated = 0;
for (const job of manifest.jobs || []) {
  if (fs.existsSync(job.output_image_target)) continue;

  const prompt = [
    job.prompt,
    conservativeWardrobe,
    conservativeAvoid,
    "For moderation safety, treat the image as a formal commercial fashion photobook portrait with tasteful fully-covered styling and neutral professional body language.",
  ].join("\n");

  job.prompt = prompt;
  fs.writeFileSync(job.prompt_file, prompt, "utf8");
  updated += 1;
}

manifest.safety_softened_at = new Date().toISOString();
manifest.safety_softened_pending_jobs = updated;
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), "utf8");
console.log(JSON.stringify({ updated }, null, 2));
