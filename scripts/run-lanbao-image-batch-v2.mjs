import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const root = "C:/Users/User/Documents/Codex";
const outDir = path.join(root, "\u85cd\u5bf6\u8f38\u51fa\u5716");
const manifestPath = path.join(outDir, "lanbao_travel_batch_manifest_v2.json");
const imageCli = "C:/Users/User/.codex/skills/.system/imagegen/scripts/image_gen.py";
const limitArg = process.argv.find((arg) => arg.startsWith("--limit="));
const limit = limitArg ? Number(limitArg.split("=")[1]) : Infinity;

if (!process.env.OPENAI_API_KEY) {
  throw new Error("OPENAI_API_KEY is not set.");
}

const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
const jobs = manifest.jobs || [];
let generated = 0;
let skipped = 0;
let failed = 0;
const failedJobs = [];

for (const job of jobs) {
  const target = job.output_image_target;
  if (fs.existsSync(target)) {
    skipped += 1;
    continue;
  }
  if (generated >= limit) break;

  const label = `[${job.index}/${jobs.length}] ${path.basename(target)}`;
  console.log(`${label} generating`);
  const result = spawnSync(
    "python",
    [
      imageCli,
      "edit",
      "--image",
      job.source,
      "--prompt-file",
      job.prompt_file,
      "--size",
      "2416x3408",
      "--quality",
      "medium",
      "--out",
      target,
    ],
    {
      env: process.env,
      stdio: "inherit",
      windowsHide: true,
    }
  );

  if (result.status === 0) {
    generated += 1;
  } else {
    failed += 1;
    failedJobs.push({
      index: job.index,
      source: job.source,
      prompt_file: job.prompt_file,
      target,
      exit_code: result.status ?? "unknown",
    });
    console.warn(`${label} failed with exit code ${result.status ?? "unknown"}`);
  }
}

if (failedJobs.length) {
  fs.writeFileSync(
    path.join(outDir, "lanbao_failed_jobs_v2.json"),
    JSON.stringify({ created_at: new Date().toISOString(), failed_jobs: failedJobs }, null, 2),
    "utf8"
  );
}

console.log(`Lanbao v2 batch chunk finished. Generated=${generated} Skipped=${skipped} Failed=${failed} Total=${jobs.length}`);
if (failed > 0) {
  process.exit(1);
}
