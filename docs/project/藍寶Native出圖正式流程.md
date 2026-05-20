# 藍寶 Native 出圖正式流程

## 核心規則

正式流程固定為：

```text
原圖 → 程式原生隨機咒語 → API 出圖 → 成功存檔；失敗只記錄，不改、不補、不重送。
```

這裡的「程式原生隨機咒語」指的是直接使用「紅兵旅拍大片生成器」本身的咒語生成邏輯，不額外加 Codex 自己的構圖、A4、安全補詞或重寫規則。

## 專案位置

紅兵旅拍大片生成器專案：

```text
C:\Users\User\Documents\Codex\紅兵旅拍大片生成器
```

程式資料與咒語邏輯：

```text
C:\Users\User\Documents\Codex\紅兵旅拍大片生成器\src\data.js
C:\Users\User\Documents\Codex\紅兵旅拍大片生成器\src\app.js
```

正式使用的咒語函式：

```text
buildEnglishPrompt()
```

## 圖片資料夾

來源圖片資料夾：

```text
C:\Users\User\Documents\Codex\藍寶原圖
```

輸出圖片資料夾：

```text
C:\Users\User\Documents\Codex\藍寶輸出圖
```

## 使用腳本

準備任務與咒語清單：

```text
C:\Users\User\Documents\Codex\紅兵旅拍大片生成器\scripts\prepare-lanbao-native-batch.mjs
```

執行 API 出圖：

```text
C:\Users\User\Documents\Codex\紅兵旅拍大片生成器\scripts\run-lanbao-native-batch.mjs
```

## 準備流程

執行 `prepare-lanbao-native-batch.mjs` 後，系統會：

1. 讀取 `藍寶原圖` 裡的圖片。
2. 載入 `src\data.js`。
3. 載入 `src\app.js`。
4. 隨機選擇程式內的風格範例。
5. 隨機選擇程式內的妝容設定。
6. 呼叫 `buildEnglishPrompt()` 產生咒語。
7. 每張來源圖產生一個對應 prompt 檔。
8. 建立 native 任務清單。

產生的任務清單：

```text
C:\Users\User\Documents\Codex\藍寶輸出圖\lanbao_native_batch_manifest.json
C:\Users\User\Documents\Codex\藍寶輸出圖\lanbao_native_batch_manifest.md
```

產生的咒語檔位置：

```text
C:\Users\User\Documents\Codex\藍寶輸出圖\*_native_prompt.txt
```

咒語檔命名範例：

```text
19_54734012927_f7953277a0_c_native_prompt.txt
```

## 出圖流程

執行 `run-lanbao-native-batch.mjs` 後，系統會：

1. 讀取 `lanbao_native_batch_manifest.json`。
2. 逐張讀取來源圖。
3. 逐張讀取對應的 `_native_prompt.txt`。
4. 把來源圖與咒語送到 OpenAI 圖像 API。
5. 成功時，把圖片寫入 `藍寶輸出圖`。
6. 失敗時，只寫入失敗清單。

成功輸出圖片位置：

```text
C:\Users\User\Documents\Codex\藍寶輸出圖\*_native_travel_output.png
```

成功輸出命名範例：

```text
19_54734012927_f7953277a0_c_native_travel_output.png
```

失敗清單：

```text
C:\Users\User\Documents\Codex\藍寶輸出圖\lanbao_native_failed_jobs.json
```

## 成功規則

只要 API 成功回傳圖片，就把圖片存到：

```text
C:\Users\User\Documents\Codex\藍寶輸出圖
```

已成功的檔案後續再執行時會跳過，不覆蓋。

## 失敗規則

如果某張圖失敗，例如：

- OpenAI 安全系統阻擋
- API 暫時錯誤
- 額度或請求限制
- 檔案問題
- 其他 API 錯誤

處理方式一律是：

```text
只記錄失敗，不改咒語，不補安全詞，不重送，不另外抽圖補數量。
```

失敗任務只寫入：

```text
C:\Users\User\Documents\Codex\藍寶輸出圖\lanbao_native_failed_jobs.json
```

## 禁止事項

正式流程中不要做以下事情：

- 不要自行拼咒語。
- 不要繞過 `buildEnglishPrompt()`。
- 不要額外加入 A4 構圖規則。
- 不要額外加入人物置中、安全邊、2/3 人像等限制。
- 不要額外加入安全補詞。
- 不要因為失敗而修改 prompt。
- 不要失敗後重送同一張。
- 不要為了湊滿數量另外抽圖補跑。

## 正確理解

這個流程的目的不是重新設計提示詞，而是讓 Codex 幫忙做批次執行：

```text
使用者的程式負責產生咒語。
Codex 只負責讀原圖、送 API、收圖、存檔、記錄失敗。
```

## 已驗證的 native 測試輸出

已成功測試輸出的 native 圖：

```text
C:\Users\User\Documents\Codex\藍寶輸出圖\19_54734012927_f7953277a0_c_native_travel_output.png
C:\Users\User\Documents\Codex\藍寶輸出圖\29_54735213440_02e9a56c70_c_native_travel_output.png
C:\Users\User\Documents\Codex\藍寶輸出圖\63_IMG_2943_native_travel_output.png
```

測試中被 OpenAI 安全系統擋下並記錄的失敗任務：

```text
C:\Users\User\Documents\Codex\藍寶輸出圖\15_54235612278_d1e196baec_c_native_travel_output.png
C:\Users\User\Documents\Codex\藍寶輸出圖\66_IMG_2947_native_travel_output.png
```

這些失敗任務不應修改咒語重送。
