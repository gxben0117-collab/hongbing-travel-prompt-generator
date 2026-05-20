import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const root = "C:/Users/User/Documents/Codex";
const sourceDir = path.join(root, "\u85cd\u5bf6\u539f\u5716");
const outDir = path.join(root, "\u85cd\u5bf6\u8f38\u51fa\u5716");
const genDir = path.join(root, "\u7d05\u5175\u65c5\u62cd\u5927\u7247\u751f\u6210\u5668");
const dataPath = path.join(genDir, "src", "data.js");
const appPath = path.join(genDir, "src", "app.js");

fs.mkdirSync(outDir, { recursive: true });

const noopElement = {
  appendChild() {},
  addEventListener() {},
  classList: { add() {}, remove() {}, toggle() {} },
  dataset: {},
  querySelector() {
    return noopElement;
  },
  querySelectorAll() {
    return [];
  },
  innerHTML: "",
  style: {},
  textContent: "",
  value: "",
};

const context = {
  console,
  localStorage: {
    getItem() {
      return null;
    },
    setItem() {},
    removeItem() {},
  },
  navigator: {},
  document: {
    createElement() {
      return { ...noopElement };
    },
    querySelector() {
      return noopElement;
    },
    querySelectorAll() {
      return [];
    },
    getElementById() {
      return noopElement;
    },
    addEventListener() {},
  },
  window: { addEventListener() {} },
};

vm.createContext(context);
vm.runInContext(`${fs.readFileSync(dataPath, "utf8")}\n;globalThis.__P=P; globalThis.__MK=MK;`, context, {
  filename: dataPath,
});
vm.runInContext(`${fs.readFileSync(appPath, "utf8")}\n;globalThis.__buildEnglishPrompt=buildEnglishPrompt; globalThis.__buildProControlPrompt=buildProControlPrompt; globalThis.__cleanEnglishPrompt=cleanEnglishPrompt; globalThis.__sanitizePolicySensitiveTerms=sanitizePolicySensitiveTerms;`, context, {
  filename: appPath,
});

const P = context.__P;
const MK = context.__MK;
const buildEnglishPrompt = context.__buildEnglishPrompt;
const buildProControlPrompt = context.__buildProControlPrompt;
const cleanEnglishPrompt = context.__cleanEnglishPrompt;
const sanitizePolicySensitiveTerms = context.__sanitizePolicySensitiveTerms;

const images = fs
  .readdirSync(sourceDir)
  .filter((name) => /\.(jpg|jpeg|png|webp)$/i.test(name))
  .sort();

const presetKeys = Object.keys(P).filter((key) => P[key]?.n && P[key]?.s && P[key]?.o);
const makeupKeys = Object.keys(MK);

function pick(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function promptFromApp(presetKey, makeupKey) {
  const p = { ...P[presetKey], _id: presetKey };
  const mk = MK[makeupKey] || MK.warrior;
  const mkDesc = Array.isArray(mk) ? pick(mk) : mk;
  const selAngle = "4:5 social portrait format";
  const txtLine = "";
  const extras = "";
  const proPrompt = buildProControlPrompt();
  const raw = buildEnglishPrompt(p, null, mkDesc, selAngle, txtLine, extras, proPrompt, makeupKey);
  return sanitizePolicySensitiveTerms(cleanEnglishPrompt(raw));
}

const jobs = images.map((name, imageIndex) => {
  const presetKey = pick(presetKeys);
  const makeupKey = pick(makeupKeys);
  const base = path.parse(name).name;
  const number = String(imageIndex + 1).padStart(2, "0");
  const promptFileName = `${number}_${base}_native_prompt.txt`;
  const promptFile = path.join(outDir, promptFileName);
  const outputImageTarget = path.join(outDir, `${number}_${base}_native_travel_output.png`);
  const prompt = promptFromApp(presetKey, makeupKey);

  if (!process.argv.includes("--stdout")) {
    fs.writeFileSync(promptFile, prompt, "utf8");
  }

  return {
    index: imageIndex + 1,
    source_index: imageIndex + 1,
    variant: 1,
    source: path.join(sourceDir, name),
    prompt_file: promptFile,
    output_image_target: outputImageTarget,
    preset_id: presetKey,
    preset_name: P[presetKey].n,
    makeup_id: makeupKey,
    prompt,
  };
});

const manifest = {
  created_at: new Date().toISOString(),
  source_dir: sourceDir,
  generator: genDir,
  output_dir: outDir,
  output_size: "1024x1536",
  quality: "medium",
  mode: "native_app_prompt",
  note:
    "Uses the Hongbing travel prompt generator app logic directly: random preset, random makeup, buildEnglishPrompt(), then image API edit. No extra A4/QC/composition prompt additions from Codex.",
  jobs,
};

const markdown = [
  "# Lanbao native app-prompt image batch",
  "",
  `- Source images: ${images.length}`,
  `- Jobs: ${jobs.length}`,
  "- Mode: native app prompt via buildEnglishPrompt()",
  "- Output: one image per source photo",
  "- Size: 1024x1536",
  "- Quality: medium",
  "",
  ...jobs.map(
    (job) =>
      `## ${job.index}. ${path.basename(job.source)}\n- Random style: ${job.preset_name} (${job.preset_id})\n- Random makeup: ${job.makeup_id}\n- Prompt file: ${path.basename(job.prompt_file)}\n- Output file: ${path.basename(job.output_image_target)}`
  ),
].join("\n");

if (process.argv.includes("--stdout")) {
  console.log(JSON.stringify({ manifest, markdown }, null, 2));
} else {
  fs.writeFileSync(path.join(outDir, "lanbao_native_batch_manifest.json"), JSON.stringify(manifest, null, 2), "utf8");
  fs.writeFileSync(path.join(outDir, "lanbao_native_batch_manifest.md"), markdown, "utf8");
  console.log(JSON.stringify({ count: jobs.length, outDir }, null, 2));
}
