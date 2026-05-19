# 網頁上架流程（GitHub Pages）

## 基本資訊

| 項目 | 內容 |
|------|------|
| Repo | `https://github.com/gxben0117-collab/hongbing-travel-prompt-generator` |
| 線上網址 | `https://gxben0117-collab.github.io/hongbing-travel-prompt-generator/` |
| 部署方式 | GitHub Pages，從 `main` branch 根目錄自動部署 |
| 生效時間 | push 後約 1–2 分鐘 |

---

## 每次上架步驟

### 1. 確認版本號正確

開啟 `index.html`，確認 title 與 badge 已更新至當前版本：

```html
<title>旅拍大片咒語生成器 v6.XX</title>
<span class="badge">v6.XX · ChatGPT 專版</span>
```

### 2. 存版本快照（可選，Claude 或 Codex 執行）

```powershell
Copy-Item "index.html" "versions/index_v6.XX.html"
```

### 3. Stage 要上架的檔案

```bash
git add index.html
# 若 app.js 也有修改：
git add assets/js/app.js
```

不需加入 `versions/` 和 `docs/`（版本檔不影響線上功能）。

### 4. Commit

```bash
git commit -m "feat: vX.XX 本次修改摘要"
```

### 5. Push → 自動觸發 GitHub Pages 重建

```bash
git push origin main
```

### 6. 確認上線

等 1–2 分鐘後開啟網址確認版本號與功能正常：

```
https://gxben0117-collab.github.io/hongbing-travel-prompt-generator/
```

---

## 快速一行指令（確認版本號後直接執行）

```bash
cd "/c/Users/User/Documents/Codex/紅兵旅拍大片生成器"
git add index.html assets/js/app.js && git commit -m "feat: vX.XX 描述" && git push origin main
```

---

## 注意事項

- `docs/` 和 `versions/` 為本地開發用，**不需要 push**
- GitHub Pages 只讀 `main` branch 根目錄的 `index.html`
- 若 push 後網頁沒更新，等一下再重整（強制重整：Ctrl+Shift+R）
- 若要檢查 Pages 狀態：`gh api repos/gxben0117-collab/hongbing-travel-prompt-generator/pages`
