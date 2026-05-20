import fs from "node:fs";
import path from "node:path";

const root = "C:/Users/User/Documents/Codex/\u7d05\u5175\u65c5\u62cd\u5927\u7247\u751f\u6210\u5668";
const blocked = new Set([
  "indian",
  "nuwa_series",
  "mazu_series",
  "dramanovel",
  "modern",
  "citywalk",
  "studio",
  "travel",
  "world_culture",
  "myth_angel",
]);
const blockedPattern = Array.from(blocked).join("|");

function removeHtmlBlocks(html) {
  const cardRe = new RegExp(
    String.raw`\s*<div class="preset-card\b[^"]*"[^>]*data-cat="(?:${blockedPattern})"[^>]*>[\s\S]*?<\/div>(?=\s*(?:<div class="preset-card\b|<!--|<\/div>))`,
    "g"
  );
  const btnRe = new RegExp(
    String.raw`\s*<div class="cat-btn" data-cat="(?:${blockedPattern})"[^>]*>[\s\S]*?<\/div>`,
    "g"
  );
  return html.replace(cardRe, "").replace(btnRe, "");
}

function patchDataJs(text) {
  let next = text;
  next = next.replace(
    "Object.entries(IMAGE_REFERENCE_PRESETS_V652).forEach(([id,p])=>{if(!P[id])P[id]=p});\n\nconst ALL_IDS=Object.keys(P);",
    `Object.entries(IMAGE_REFERENCE_PRESETS_V652).forEach(([id,p])=>{if(!P[id])P[id]=p});

const REMOVED_STYLE_CATEGORIES_20260519=new Set(["indian","nuwa_series","mazu_series","dramanovel","modern","citywalk","studio","travel","world_culture","myth_angel"]);
Object.keys(P).forEach(id=>{if(REMOVED_STYLE_CATEGORIES_20260519.has(P[id]?.cat))delete P[id]});

const ALL_IDS=Object.keys(P);`
  );
  next = next.replace(
    '  figure:["changxiangsi","daji_series","ninefox_series","change_series","xuannv_series","nuwa_series","mazu_series","xishi_series","zhaojun_series","diaochan_series","yang_guifei_series","succubus_series","queen_series","demon_lord_series"],',
    '  figure:["changxiangsi","daji_series","ninefox_series","change_series","xuannv_series","xishi_series","zhaojun_series","diaochan_series","yang_guifei_series","succubus_series","queen_series","demon_lord_series"],'
  );
  next = next.replace(
    '  modern:["dramanovel","modern","citywalk","studio","japanese"],',
    '  modern:["studio","japanese"],'
  );
  next = next.replace(
    '  travel:["landmark","travel","world_culture","indian","nature"]',
    '  travel:["landmark","travel","world_culture","nature"]'
  );
  next = next.replace(
    '  AUTO_SERIES_CATEGORIES_V620.forEach(s=>{',
    '  AUTO_SERIES_CATEGORIES_V620.filter(s=>!REMOVED_STYLE_CATEGORIES_20260519.has(s.baseCat)&&!REMOVED_STYLE_CATEGORIES_20260519.has(s.cat)).forEach(s=>{'
  );
  next = next.replace(
    '  Object.entries(P).forEach(([id,p])=>{',
    '  Object.entries(P).forEach(([id,p])=>{\n    if(REMOVED_STYLE_CATEGORIES_20260519.has(p?.cat))return;'
  );
  return next;
}

const htmlPath = path.join(root, "index.template.html");
const dataPath = path.join(root, "src", "data.js");

const html = fs.readFileSync(htmlPath, "utf8");
const data = fs.readFileSync(dataPath, "utf8");

fs.writeFileSync(htmlPath, removeHtmlBlocks(html), "utf8");
fs.writeFileSync(dataPath, patchDataJs(data), "utf8");

console.log(JSON.stringify({ removed_categories: Array.from(blocked) }, null, 2));
