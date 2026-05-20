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

const layoutModes = [
  {
    id: "epic_tiny_figure",
    name: "epic travel scene, smaller subject",
    instruction:
      "epic environmental travel portrait, subject occupies only 28-35% of image height, dramatic location dominates the frame, full body visible, generous sky or architecture space, cinematic depth, not centered if the scene is stronger off-center",
  },
  {
    id: "off_center_editorial",
    name: "off-center magazine editorial",
    instruction:
      "high-fashion editorial layout with the subject placed on the left or right third, subject occupies 40-50% of image height, large clean negative space, asymmetrical composition, strong environment and outfit story",
  },
  {
    id: "foreground_depth",
    name: "foreground depth travel shot",
    instruction:
      "layered foreground-midground-background travel photography, use doorway, columns, plants, fabric, stairs, railing, or street elements for depth, subject occupies 35-55% of image height, not a flat centered portrait",
  },
  {
    id: "wide_cinematic_walk",
    name: "wide cinematic walking shot",
    instruction:
      "wide cinematic walking scene, full body in motion, subject occupies 30-45% of image height, environment visible above and around the subject, natural candid travel-photo energy, no static poster pose",
  },
  {
    id: "dramatic_low_angle_space",
    name: "dramatic low angle with space",
    instruction:
      "dramatic low-angle fashion travel shot with extra headroom and visible environment, subject occupies 45-60% of image height, powerful but not close-cropped, architecture or landscape remains important",
  },
  {
    id: "cover_with_big_world",
    name: "cover portrait with big world",
    instruction:
      "premium magazine cover portrait where the subject occupies 50-60% of image height, but the background world is still rich and readable, do not fill two-thirds of the frame, avoid plain centered full-body template",
  },
];

const subjectPlacements = [
  "subject on left third with open space on the right",
  "subject on right third with open space on the left",
  "subject slightly below center with expansive sky or architecture above",
  "subject walking diagonally through the frame",
  "subject framed through foreground elements, not centered",
  "subject small against a grand landscape or palace-like setting",
];

const qualityBoost =
  "premium commercial photography, fashion magazine cover quality, cinematic lighting, refined skin texture, clear facial features, ultra high resolution, ultra detailed, print-ready editorial portrait";
const printLayout =
  "A4 portrait vertical, 21:29.5 print layout, keep a practical 8% print-safe margin, but allow dynamic editorial composition and strong environmental space";
const conservativeWardrobe =
  "Tasteful fully-covered editorial fashion: elegant high-neck or crew-neck outerwear, long sleeves when suitable, opaque layered fabric, no lingerie, no bikini, no see-through fabric, no exposed chest focus, family-safe commercial styling.";

function pick(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function line(label, value) {
  if (!value) return "";
  return `${label}: ${String(value).replace(/\s+/g, " ").trim()}`;
}

function promptFor(imageName, presetKey, layoutMode, placement) {
  const preset = P[presetKey];
  const makeup = MK[preset.mk] || MK.warrior || [];
  const makeupDescription = Array.isArray(makeup) ? pick(makeup) : makeup;

  return [
    `Reference image: ${path.join(sourceDir, imageName)}`,
    "Use case: identity-preserve photobook travel editorial edit",
    "Use this image as the only identity reference. Preserve the same recognizable face and identity. Change outfit, scene, lighting, pose, travel atmosphere, and cinematic styling.",
    line("Random Hongbing preset", `${preset.n} (${presetKey})`),
    line("Random v2 layout mode", `${layoutMode.name}: ${layoutMode.instruction}`),
    line("Random placement", placement),
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
        layoutMode.instruction,
        placement,
        preset.cam || "premium travel-editorial composition, face clear and readable, outfit and environment visible",
        "A4 vertical photobook page, avoid the ordinary centered subject occupying two-thirds of the frame, create strong variation in subject scale and placement, keep full head visible, keep important details away from trim edges",
      ].join("; ")
    ),
    line("Color tone", preset.col),
    conservativeWardrobe,
    `Output: one premium A4 photobook travel editorial image with a non-flat composition. The subject must not always occupy two-thirds of the frame. Vary scale, position, environment, and camera distance. ${qualityBoost}`,
    line(
      "Avoid",
      [
        preset.neg,
        "ordinary centered portrait template, subject occupying two-thirds of the frame, same composition as previous images, flat background, close-up crop, cropped head, cropped hair, cropped feet, hidden face, distorted anatomy, generic model face, identity drift, horizontal image, square image, watermark, messy text, nudity, lingerie, bikini, see-through clothing, erotic pose, bedroom mood",
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
  const presetKey = pick(presetKeys);
  const layoutMode = pick(layoutModes);
  const placement = pick(subjectPlacements);
  const base = path.parse(name).name;
  const number = String(imageIndex + 1).padStart(2, "0");
  const promptFileName = `${number}_${base}_a4_book_v2_${layoutMode.id}_prompt.txt`;
  const promptFile = path.join(outDir, promptFileName);
  const outputImageTarget = path.join(outDir, `${number}_${base}_a4_book_v2_${layoutMode.id}_travel_output.png`);
  const prompt = promptFor(name, presetKey, layoutMode, placement);

  if (!process.argv.includes("--stdout")) {
    fs.writeFileSync(promptFile, prompt, "utf8");
  }

  jobs.push({
    index: jobs.length + 1,
    source_index: imageIndex + 1,
    variant: 1,
    source: path.join(sourceDir, name),
    prompt_file: promptFile,
    output_image_target: outputImageTarget,
    preset_id: presetKey,
    preset_name: P[presetKey].n,
    layout_id: layoutMode.id,
    layout_name: layoutMode.name,
    placement,
    prompt,
  });
});

const manifest = {
  created_at: new Date().toISOString(),
  source_dir: sourceDir,
  generator: genDir,
  output_dir: outDir,
  output_size: "2416x3408",
  quality: "medium",
  note:
    "Lanbao A4 photobook v2. One image per source photo, random Hongbing style, random non-flat layout, varied subject scale and placement. Avoids fixed centered two-thirds portrait framing.",
  jobs,
};

const markdown = [
  "# Lanbao A4 photobook v2 random image batch",
  "",
  `- Source images: ${images.length}`,
  `- Jobs: ${jobs.length}`,
  "- Output: one v2 image per source photo",
  "- Goal: avoid fixed subject occupying two-thirds of the frame",
  "- Size: 2416x3408",
  "- Quality: medium",
  "",
  ...jobs.map(
    (job) =>
      `## ${job.index}. ${path.basename(job.source)}\n- Random style: ${job.preset_name} (${job.preset_id})\n- Random layout: ${job.layout_name} (${job.layout_id})\n- Random placement: ${job.placement}\n- Prompt file: ${path.basename(job.prompt_file)}\n- Output file: ${path.basename(job.output_image_target)}`
  ),
].join("\n");

if (process.argv.includes("--stdout")) {
  console.log(JSON.stringify({ manifest, markdown }, null, 2));
} else {
  fs.writeFileSync(path.join(outDir, "lanbao_travel_batch_manifest_v2.json"), JSON.stringify(manifest, null, 2), "utf8");
  fs.writeFileSync(path.join(outDir, "lanbao_travel_batch_manifest_v2.md"), markdown, "utf8");
  console.log(JSON.stringify({ count: jobs.length, outDir }, null, 2));
}
