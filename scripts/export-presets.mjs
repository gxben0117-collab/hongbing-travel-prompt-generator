import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

// ── 1. 從 index.template.html 抓 pid → cat 對照 ──
const html = readFileSync(join(root, 'index.template.html'), 'utf8');
const cardRe = /data-pid="([^"]+)"[^>]*data-cat="([^"]+)"/g;
const pidCat = {};
let m;
while ((m = cardRe.exec(html)) !== null) pidCat[m[1]] = m[2];

// ── 2. 載入 data.js，提取 P 物件 ──
const dataJs = readFileSync(join(root, 'src', 'data.js'), 'utf8');

// 執行 data.js 取得 P（用 Function 沙箱）
const sandbox = {};
const code = dataJs + '\n if(typeof P!=="undefined") __P=P;';
try {
  const fn = new Function('__P_ref', code.replace('__P=P', '__P_ref.P=P'));
  fn(sandbox);
} catch {
  // fallback: 用 eval 風格
}

// 直接用 regex 解析 P 的 n 欄位作為備援
// 解析 P 物件：找出所有 key 與 n、s、o、cat 欄位
function extractPEntries(js) {
  const entries = [];
  // 找每個 top-level key: xxx:{n:"...",
  const keyRe = /\b(\w+):\{n:"([^"\\]*(?:\\.[^"\\]*)*)"/g;
  while ((m = keyRe.exec(js)) !== null) {
    const pid = m[1];
    const name = m[2].replace(/\\"/g, '"');
    // 找該 key 後的 s 欄位（場景）
    const block = js.slice(m.index, m.index + 2000);
    const sMatch = block.match(/\bs:"([^"\\]*(?:\\.[^"\\]*)*)"/);
    const oMatch = block.match(/\bo:"([^"\\]*(?:\\.[^"\\]*)*)"/);
    const scene = sMatch ? sMatch[1].replace(/\\"/g, '"') : '';
    const outfit = oMatch ? oMatch[1].replace(/\\"/g, '"') : '';
    entries.push({ pid, name, scene, outfit });
  }
  return entries;
}

const entries = extractPEntries(dataJs);

// ── 3. 分類標籤對照 ──
const CAT_LABELS = {
  all: '全部', img_ref: '📸 圖片參考',
  myth: '🐉 神話傳奇', xianxia: '⚔️ 仙俠劍影', hanfu: '👘 華服朝華', oriental: '🏯 東方雅集',
  changxiangsi: '🔥 長相思系列', succubus_series: '🖤 魅魔系列', queen_series: '👑 女王系列',
  demon_lord_series: '😈 魔王系列', daji_series: '🦊 妲己神話', ninefox_series: '🦊 九尾狐系列',
  change_series: '🌕 嫦娥神話', xuannv_series: '⚡ 九天玄女', nuwa_series: '🌍 女媧神話',
  mazu_series: '🌊 媽祖神話', xishi_series: '💧 西施歷史', zhaojun_series: '🎵 王昭君歷史',
  diaochan_series: '🌙 貂蟬歷史', yang_guifei_series: '🌸 楊貴妃歷史',
  dramanovel: '🎭 劇本女主', modern: '✨ 摩登封面', citywalk: '🌆 城市電影',
  studio: '📷 品牌大片', japanese: '🌸 日韓光影',
  landmark: '🗺️ 地標旅人', travel: '✈️ 遠方旅拍', world_culture: '🌍 世界風物',
  indian: '🪷 異域宮廷', nature: '🌿 山海曠野',
  bigscene: '🌄 史詩大景', fantasy: '🌙 夢境童話', myth_angel: '🪽 聖光羽翼',
  darkfantasy: '🐺 暗黑傳說', dark_gothic: '🖤 哥德夜宴', underwater: '🌊 水境幻景',
  animegame: '🎮 異界角色', cos_fantasy: '🎭 COS 劇場',
};

const GROUP_ORDER = [
  ['古典 Classical', ['myth','xianxia','hanfu','oriental']],
  ['人物系列 Figure', ['changxiangsi','succubus_series','queen_series','demon_lord_series',
    'daji_series','ninefox_series','change_series','xuannv_series','nuwa_series',
    'mazu_series','xishi_series','zhaojun_series','diaochan_series','yang_guifei_series']],
  ['現代 Modern', ['dramanovel','modern','citywalk','studio','japanese']],
  ['旅拍 Travel', ['landmark','travel','world_culture','indian','nature']],
  ['奇幻 Fantasy', ['bigscene','fantasy','myth_angel','darkfantasy','dark_gothic','underwater','animegame','cos_fantasy']],
  ['圖片參考', ['img_ref']],
];

// ── 4. 組合輸出 ──
const pMap = {};
for (const e of entries) pMap[e.pid] = e;

// 依分類分組
const byCat = {};
for (const [pid, cat] of Object.entries(pidCat)) {
  if (!byCat[cat]) byCat[cat] = [];
  byCat[cat].push(pid);
}

const lines = [];
lines.push('紅兵旅拍大片生成器 — 風格範例詳細說明');
lines.push('=' .repeat(50));
lines.push(`資料來源：src/data.js + index.template.html（v6.73）`);
lines.push(`輸出日期：2026-05-19`);
lines.push('');

let totalCount = 0;

for (const [groupName, cats] of GROUP_ORDER) {
  const groupPids = cats.flatMap(c => byCat[c] || []);
  if (!groupPids.length) continue;

  lines.push('');
  lines.push('━'.repeat(50));
  lines.push(`【${groupName}】`);
  lines.push('━'.repeat(50));

  for (const cat of cats) {
    const pids = byCat[cat];
    if (!pids || !pids.length) continue;
    const label = CAT_LABELS[cat] || cat;
    lines.push('');
    lines.push(`  ▌ ${label}（${pids.length} 個）`);
    lines.push('  ' + '─'.repeat(46));

    for (const pid of pids) {
      const e = pMap[pid];
      if (!e) {
        lines.push(`  • [${pid}] （自動生成 preset，無靜態資料）`);
        totalCount++;
        continue;
      }
      lines.push(`  • ${e.name}`);
      if (e.scene) {
        const sceneShort = e.scene.length > 120 ? e.scene.slice(0, 120) + '…' : e.scene;
        lines.push(`    場景：${sceneShort}`);
      }
      if (e.outfit) {
        const outfitShort = e.outfit.length > 100 ? e.outfit.slice(0, 100) + '…' : e.outfit;
        lines.push(`    服裝：${outfitShort}`);
      }
      lines.push('');
      totalCount++;
    }
  }
}

lines.push('');
lines.push('=' .repeat(50));
lines.push(`總計 ${totalCount} 個風格範例`);

const out = lines.join('\n');
const outPath = 'C:\\Users\\User\\Desktop\\旅拍大片_風格範例詳細說明.txt';
writeFileSync(outPath, out, 'utf8');
console.log(`✅ 已輸出 ${totalCount} 個 preset → ${outPath}`);
