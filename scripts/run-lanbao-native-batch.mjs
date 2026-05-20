import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const root = "C:/Users/User/Documents/Codex";
const outDir = path.join(root, "\u85cd\u5bf6\u8f38\u51fa\u5716");
const manifestPath = path.join(outDir, "lanbao_native_batch_manifest.json");
const imageCli = "C:/Users/User/.codex/skills/.system/imagegen/scripts/image_gen.py";
const limitArg = process.argv.find((arg) => arg.startsWith("--limit="));
const limit = limitArg ? Number(limitArg.split("=")[1]) : Infinity;
const attemptLimitArg = process.argv.find((arg) => arg.startsWith("--attempt-limit="));
const attemptLimit = attemptLimitArg ? Number(attemptLimitArg.split("=")[1]) : Infinity;
const randomMode = process.argv.includes("--random");
const sizeArg = process.argv.find((arg) => arg.startsWith("--size="));
const qualityArg = process.argv.find((arg) => arg.startsWith("--quality="));
const suffixArg = process.argv.find((arg) => arg.startsWith("--suffix="));

if (!process.env.OPENAI_API_KEY) {
  throw new Error("OPENAI_API_KEY is not set.");
}

const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
const outputSize = sizeArg ? sizeArg.split("=")[1] : manifest.output_size || "1024x1536";
const outputQuality = qualityArg ? qualityArg.split("=")[1] : manifest.quality || "medium";
const outputSuffix = suffixArg ? suffixArg.split("=")[1] : "";
let jobs = manifest.jobs || [];
if (randomMode) {
  jobs = jobs
    .map((job) => ({ job, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ job }) => job);
}
const failedJobsPath = path.join(outDir, "lanbao_native_failed_jobs.json");
if (fs.existsSync(failedJobsPath)) {
  fs.unlinkSync(failedJobsPath);
}

let generated = 0;
let attempted = 0;
let skipped = 0;
let failed = 0;
const failedJobs = [];

for (const job of jobs) {
  const target = outputSuffix
    ? job.output_image_target.replace(/\.png$/i, `${outputSuffix}.png`)
    : job.output_image_target;
  if (fs.existsSync(target)) {
    skipped += 1;
    continue;
  }
  if (generated >= limit) break;
  if (attempted >= attemptLimit) break;
  attempted += 1;

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
      outputSize,
      "--quality",
      outputQuality,
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
    failedJobsPath,
    JSON.stringify({ created_at: new Date().toISOString(), failed_jobs: failedJobs }, null, 2),
    "utf8"
  );
}

console.log(
  `Lanbao native batch chunk finished. Attempted=${attempted} Generated=${generated} Skipped=${skipped} Failed=${failed} Total=${jobs.length}`
);
if (failed > 0) {
  process.exit(1);
}
