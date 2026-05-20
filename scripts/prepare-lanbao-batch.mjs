import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const root = "C:/Users/User/Documents/Codex";
const sourceDir = path.join(root, "\u85cd\u5bf6\u539f\u5716");
const outDir = path.join(root, "\u85cd\u5bf6\u8f38\u51fa\u5716");
const genDir = path.join(root, "\u7d05\u5175\u65c5\u62cd\u5927\u7247\u751f\u6210\u5668");
const dataPath = path.join(genDir, "src", "data.js");

fs.mkdirSync(outDir, { recursive: true });

const code = `${fs.readFileSync(dataPath, "utf8")}\n;globalThis.__P=P; globalThis.__MK=MK;`;
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
};
const context = {
  console,
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
vm.runInContext(code, context, { filename: dataPath });

const P = context.__P;
const MK = context.__MK;
const images = fs
  .readdirSync(sourceDir)
  .filter((name) => /\.(jpg|jpeg|png|webp)$/i.test(name))
  .sort();
const presetKeys = Object.keys(P).filter((key) => P[key]?.n && P[key]?.s && P[key]?.o);

const compositionModes = [
  {
    id: "fashion_full",
    name: "fashion full-body distance",
    instruction:
      "fashion full-body portrait from a comfortable editorial distance, the whole body fully visible from head to toe, full head fully visible, feet and dress inside frame, outfit silhouette readable, refined runway-travel posture, no cropped feet",
  },
  {
    id: "wide_full_scene",
    name: "wide full-body grand scene",
    instruction:
      "wide full-body grand scene, the subject appears within a larger cinematic environment, strong travel-location scale, full figure clear, full head and feet fully visible, face still recognizable, no extreme wide-angle distortion",
  },
  {
    id: "low_angle_queen",
    name: "low-angle queen portrait",
    instruction:
      "low-angle queenly power portrait, confident sovereign presence, camera slightly below eye level, elongated elegant body line, dramatic but flattering perspective, full head visible with extra top space, full body inside frame",
  },
];

const variantsPerImage = 1;
const qualityBoost =
  "premium commercial photography, fashion magazine cover quality, cinematic lighting, refined skin texture, clear facial features, ultra high resolution, ultra detailed, print-ready editorial portrait";
const printLayout =
  "A4 portrait vertical, 21:29.5 print layout, leave extra 12% safe margins on all sides, subject centered vertically and horizontally, face in the upper-middle third, feet and dress inside frame, no important details near edges";

function pick(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function line(label, value) {
  if (!value) return "";
  return `${label}: ${String(value).replace(/\s+/g, " ").trim()}`;
}

function promptFor(imageName, presetKey, compositionMode) {
  const preset = P[presetKey];
  const makeup = MK[preset.mk] || MK.warrior || [];
  const makeupDescription = Array.isArray(makeup) ? pick(makeup) : makeup;

  return [
    `Reference image: ${path.join(sourceDir, imageName)}`,
    "Use case: identity-preserve photobook portrait edit",
    "Use this image as the only identity reference. Preserve the same person or pet identity and recognizable facial features. Change only outfit, environment, lighting, pose, cinematic styling, and travel-photo atmosphere.",
    line("Random Hongbing preset", `${preset.n} (${presetKey})`),
    line("Random composition mode", `${compositionMode.name}: ${compositionMode.instruction}`),
    line("Style / medium", preset.q || "ultra realistic premium cinematic travel photoshoot, high-end editorial polish"),
    line("Fixed quality boost", qualityBoost),
    line("Print layout", printLayout),
    line("Large environment / location", preset.s),
    line("Lighting", preset.l),
    line("Makeup / styling surface only", makeupDescription),
    line("Outfit / costume", preset.o),
    line("Action / pose / prop", preset.prop),
    line("Visual effects", preset.fx),
    line(
      "Composition",
      [
        compositionMode.instruction,
        preset.cam || "premium travel-editorial composition, face clear and readable, outfit and environment visible",
        "A4 portrait vertical print composition, 21:29.5 layout, centered subject, extra 12% safe margins on all sides, full head fully visible, full body fully visible, feet and dress inside frame, no close-up crop, no important details near edges",
      ].join("; ")
    ),
    line("Color tone", preset.col),
    "Safety styling: adult subject only, elegant non-revealing fashion, no lingerie, no sheer revealing fabric, no exposed chest focus, no erotic pose, no bedroom intimacy, refined magazine-safe styling.",
    `Output: one finished premium photobook portrait image, A4 vertical print layout for a 21 x 29.5 cm photobook page, clean editorial cover composition, balanced background, not extreme wide angle, realistic details, no watermark, no messy text. ${qualityBoost} ${printLayout}`,
    line(
      "Avoid",
      [
        preset.neg,
        "identity drift, different face, generic model face, distorted anatomy, hidden face, deformed hands, low quality, cartoon, watermark, horizontal image, square image, close-up crop, cropped head, cropped hair, cropped feet, cropped dress, important details near edge, extreme wide angle, face too close to border, nudity, lingerie, bikini, erotic, seductive bedroom, see-through clothing, exposed cleavage",
      ]
        .filter(Boolean)
        .join(", ")
    ),
  ]
    .filter(Boolean)
    .join("\n");
}

const jobs = [];
images.forEach((name, imageIndex) => {
  for (let variant = 1; variant <= variantsPerImage; variant += 1) {
    const presetKey = pick(presetKeys);
    const compositionMode = pick(compositionModes);
    const base = path.parse(name).name;
    const number = String(imageIndex + 1).padStart(2, "0");
    const promptFileName = `${number}_${base}_a4_book_${compositionMode.id}_prompt.txt`;
    const promptFile = path.join(outDir, promptFileName);
    const outputImageTarget = path.join(outDir, `${number}_${base}_a4_book_${compositionMode.id}_travel_output.png`);
    const prompt = promptFor(name, presetKey, compositionMode);

    if (!process.argv.includes("--stdout")) {
      fs.writeFileSync(promptFile, prompt, "utf8");
    }

    jobs.push({
      index: jobs.length + 1,
      source_index: imageIndex + 1,
      variant,
      source: path.join(sourceDir, name),
      prompt_file: promptFile,
      output_image_target: outputImageTarget,
      preset_id: presetKey,
      preset_name: P[presetKey].n,
      composition_id: compositionMode.id,
      composition_name: compositionMode.name,
      prompt,
    });
  }
});

const manifest = {
  created_at: new Date().toISOString(),
  source_dir: sourceDir,
  generator: genDir,
  output_dir: outDir,
  output_size: "2416x3408",
  quality: "medium",
  note:
    "One random Hongbing travel photoshoot prompt prepared for each source image. Each job uses one of three print-safe composition modes, A4 21:29.5 portrait print layout, 12% safe margins, and the fixed commercial photography quality boost. Makeup close-up is intentionally excluded for photobook print safety.",
  jobs,
};

const markdown = [
  "# Lanbao A4 photobook random image batch",
  "",
  `- Source images: ${images.length}`,
  `- Jobs: ${jobs.length}`,
  "- Output: one image per source photo",
  "- Composition: random among three print-safe modes",
  "- Size: 2416x3408",
  "- Quality: medium",
  "",
  ...jobs.map(
    (job) =>
      `## ${job.index}. ${path.basename(job.source)}\n- Random style: ${job.preset_name} (${job.preset_id})\n- Random composition: ${job.composition_name} (${job.composition_id})\n- Fixed quality boost: ${qualityBoost}\n- Prompt file: ${path.basename(job.prompt_file)}\n- Output file: ${path.basename(job.output_image_target)}`
  ),
].join("\n");

if (process.argv.includes("--stdout")) {
  console.log(JSON.stringify({ manifest, markdown }, null, 2));
} else {
  fs.writeFileSync(path.join(outDir, "lanbao_travel_batch_manifest.json"), JSON.stringify(manifest, null, 2), "utf8");
  fs.writeFileSync(path.join(outDir, "lanbao_travel_batch_manifest.md"), markdown, "utf8");
  console.log(
    JSON.stringify(
      {
        count: jobs.length,
        outDir,
        files: fs.readdirSync(outDir).sort(),
      },
      null,
      2
    )
  );
}
