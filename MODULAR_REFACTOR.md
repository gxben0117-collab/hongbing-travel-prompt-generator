# 旅拍大片生成器 — 模組化重構說明

## 概覽

由 Claude 執行，完成日期：2026-05-18。
原本 8049 行單一 `index.html` → 拆成 CSS / Data / App 三層。

---

## 新檔案結構

```
紅兵旅拍大片生成器/
├── index.html              ← 原 v6.72 單機版（保留不動，開發期間備用）
├── index.template.html     ← 新模組化 HTML 模板（source of truth）
├── src/
│   ├── styles.css          ← 所有 CSS（227 行）
│   ├── data.js             ← 資料層：MK、P、CATEGORY_* 等（5389 行）
│   └── app.js              ← 邏輯層：buildPrompt、事件處理、init（512 行）
├── scripts/
│   └── build.mjs           ← 打包腳本
├── dist/
│   └── index.html          ← npm run build 輸出（部署用）
└── versions/               ← 各版快照不動
```

---

## 工作流程

### 日常開發
1. 編輯 `src/` 內的檔案（`styles.css`、`data.js`、`app.js`）
2. 若需即時預覽：在瀏覽器開 `index.template.html`（自動載入 src/ 外部檔案）
3. 完成後執行 build：
   ```
   npm run build
   ```
4. 測試 `dist/index.html`（即最終單機版）

### 部署到 GitHub Pages
```bash
npm run build
cp dist/index.html index.html   # 覆蓋根目錄的 index.html
git add index.html dist/index.html
git commit -m "chore: build vX.XX"
git push
```

---

## 各檔案職責

| 檔案 | 行數 | 內容 | 修改頻率 |
|------|------|------|----------|
| `src/styles.css` | 227 | 所有 CSS 樣式 | 少 |
| `src/data.js` | 5389 | MK 妝容資料、P preset 物件、CATEGORY_* 分類常數、state 變數、UI 初始綁定 | 中（加 preset 時） |
| `src/app.js` | 512 | `buildProControlPrompt`、`buildRoleActionPrompt`、`buildEnglishPrompt`、事件處理 | 高（功能開發主要在這） |
| `index.template.html` | 1917 | HTML 骨架 + 所有 preset card HTML | 少（加 preset 時） |

---

## Codex 開發建議

- **新增功能**：改 `src/app.js`，它只有 512 行，context 消耗少
- **改 preset 資料**：改 `src/data.js`（或直接改 `index.template.html` 裡的 card HTML）
- **改樣式**：改 `src/styles.css`
- **每次改完**：執行 `npm run build` 產生最新 `dist/index.html`

---

## build.mjs 邏輯

```
index.template.html
  + src/styles.css    → 替換 <link> 為 <style>
  + src/data.js       → 合併為一個 <script>
  + src/app.js        ↗
→ dist/index.html（完整單機 HTML，與原 index.html 相容）
```

---

## 驗證

- Build 輸出：`679331 chars`，與原 `index.html`（`835494 bytes`）差異僅格式
- 包含關鍵標記：`<style>` ✓、`<script>` ✓、`buildProControlPrompt` ✓、`preset-card` ✓
- SHA256：`ed319e518c07fb13106ec4fff3017f8c5143f24cb2c791691a2f41fcd21ec1de`

---

## 待 Codex 確認事項

1. 測試 `dist/index.html` 功能是否正常（隨機、生成、妝容選擇、分類篩選）
2. 確認 GitHub Pages 部署流程（使用 dist/index.html 或 CI 自動 copy）
3. 下一步功能開發建議：生成紀錄、咒語字數顯示、我的自訂預設
# 紅兵旅拍大片生成器 - 模組化重構交接

## 2026-05-19 Codex v6.73 接手確認

Claude 在 2026-05-18 拆出的模組化流程已確認可用。Codex 已將乾淨版本升至 `v6.73`，並用 `npm.cmd run build` 重建。

目前乾淨接手點：

- Source of truth: `index.template.html` + `src/styles.css` + `src/data.js` + `src/app.js`
- Build script: `scripts/build.mjs`
- Build output: `dist/index.html`
- Main entry: `index.html`
- Clean snapshot: `versions/index_v6.73.html`
- SHA256 for `index.html`, `dist/index.html`, and `versions/index_v6.73.html`:
  `CB241022A06E157FB979CF7744D3DE2B5A3617AB336E076368D6233925668C2B`

Verification performed:

- `npm.cmd run build` passed.
- `node --check src/data.js` passed.
- `node --check src/app.js` passed.
- Static feature checks passed for generate button, result box, copy buttons, clear button, default `warrior` preset, `buildEnglishPrompt`, `PHOTO_REFERENCE_GATE`, `AUTO_QUALITY_V670`, and clipboard fallback.
- `index.html` contains 364 `preset-card` entries.

Important note:

- `versions/index_v6.72.html` is preserved as history, but it appears to contain mojibake text in several visible Chinese strings.
- Use `v6.73` as the clean base for future work.
- Do not overwrite old files in `versions/`; create a new `versions/index_v6.XX.html` for each release.

---
