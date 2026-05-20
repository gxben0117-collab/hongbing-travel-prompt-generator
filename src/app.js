const state = {
  activeTab: "preset",
  selectedPresetId: null,
  selectedMakeupId: "travel_glow",
  selectedTextMode: "off",
  selectedTextStyle: "travel_caption",
  selectedTextPlacement: "auto",
  selectedTextType: "theme",
  selectedAspectRatio: "4:5 portrait editorial crop",
  selectedSuperCategory: "all",
  selectedCategory: "all",
  searchQuery: "",
  categorySearchQuery: "",
};

const els = {};
const {
  SUPER_CATEGORIES,
  CATEGORY_META,
  MAKEUP_STYLES,
  TEXT_MODES,
  TEXT_TYPES,
  TEXT_PLACEMENTS,
  TEXT_STYLES,
  ASPECT_RATIOS,
  CUSTOM_GROUPS,
  PRESETS,
  PRESET_MAP,
  MAKEUP_MAP,
  TEXT_MODE_MAP,
  TEXT_STYLE_MAP,
  TEXT_TYPE_MAP,
  TEXT_PLACEMENT_MAP,
  ASPECT_RATIO_MAP,
} = globalThis.HONGBING_PROMPT_DATA;

function $(id) {
  return document.getElementById(id);
}

function sample(value) {
  return Array.isArray(value) ? value[Math.floor(Math.random() * value.length)] : value;
}

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function uniqueBy(items, keyFn) {
  const seen = new Set();
  return items.filter((item) => {
    const key = keyFn(item);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function buildOptionCards(items, selectedId, cardClass, attrName) {
  return items
    .map((item) => {
      const active = item.id === selectedId ? " is-selected" : "";
      return `
        <button class="${cardClass}${active}" type="button" data-${attrName}="${escapeHtml(item.id)}">
          <span class="${cardClass}__emoji">${item.emoji}</span>
          <span class="${cardClass}__title">${escapeHtml(item.label)}</span>
          <span class="${cardClass}__meta">${escapeHtml(item.description)}</span>
        </button>
      `;
    })
    .join("");
}

function getPresetEntries() {
  return PRESETS.map((preset) => ({
    ...preset,
    superCategory: CATEGORY_META[preset.category]?.superCategory || "all",
  }));
}

function getVisiblePresets() {
  const query = state.searchQuery.trim().toLowerCase();
  const catQuery = state.categorySearchQuery.trim().toLowerCase();

  return getPresetEntries().filter((preset) => {
    const categoryMeta = CATEGORY_META[preset.category];
    const inSuper =
      state.selectedSuperCategory === "all" ||
      categoryMeta?.superCategory === state.selectedSuperCategory;
    const inCategory =
      state.selectedCategory === "all" || preset.category === state.selectedCategory;

    const haystack = [
      preset.name,
      preset.location,
      preset.scene,
      preset.outfit,
      preset.camera,
      preset.tags.join(" "),
      categoryMeta?.label || "",
    ]
      .join(" ")
      .toLowerCase();

    const categoryHaystack = [categoryMeta?.label || "", preset.category].join(" ").toLowerCase();
    return inSuper && inCategory && haystack.includes(query) && categoryHaystack.includes(catQuery);
  });
}

function ensureSelectedPreset() {
  const visible = getVisiblePresets();
  if (!visible.length) {
    state.selectedPresetId = null;
    return;
  }

  if (!visible.some((preset) => preset.id === state.selectedPresetId)) {
    state.selectedPresetId = visible[0].id;
  }
}

function renderCategoryFilters() {
  const visibleCategories = Object.entries(CATEGORY_META)
    .filter(([, meta]) => state.selectedSuperCategory === "all" || meta.superCategory === state.selectedSuperCategory)
    .filter(([, meta]) => {
      if (!state.categorySearchQuery.trim()) return true;
      const q = state.categorySearchQuery.trim().toLowerCase();
      return [meta.label, meta.description].join(" ").toLowerCase().includes(q);
    });

  els.superCategoryBar.innerHTML = SUPER_CATEGORIES.map((item) => {
    const active = item.id === state.selectedSuperCategory ? " is-active" : "";
    return `<button type="button" class="pill${active}" data-super-category="${escapeHtml(item.id)}">${escapeHtml(item.label)}</button>`;
  }).join("");

  els.categoryBar.innerHTML = [
    `<button type="button" class="pill${state.selectedCategory === "all" ? " is-active" : ""}" data-category="all">全部</button>`,
    ...visibleCategories.map(([id, meta]) => {
      const active = id === state.selectedCategory ? " is-active" : "";
      return `<button type="button" class="pill${active}" data-category="${escapeHtml(id)}">${escapeHtml(meta.label)}</button>`;
    }),
  ].join("");
}

function renderPresetGrid() {
  ensureSelectedPreset();
  const visible = getVisiblePresets();
  els.presetCount.textContent = `${visible.length} 個風格範例`;

  if (!visible.length) {
    els.presetGrid.innerHTML = `
      <div class="empty-state">
        <strong>沒有符合的風格範例</strong>
        <span>調整搜尋或分類條件後再試。</span>
      </div>
    `;
    return;
  }

  els.presetGrid.innerHTML = visible
    .map((preset) => {
      const active = preset.id === state.selectedPresetId ? " is-selected" : "";
      const meta = CATEGORY_META[preset.category];
      return `
        <button class="preset-card${active}" type="button" data-preset-id="${escapeHtml(preset.id)}">
          <span class="preset-card__eyebrow">${preset.emoji} ${escapeHtml(meta.label)}</span>
          <span class="preset-card__title">${escapeHtml(preset.name)}</span>
          <span class="preset-card__summary">${escapeHtml(preset.location)}</span>
          <span class="preset-card__tags">${escapeHtml(uniqueBy(preset.tags, (tag) => tag).slice(0, 4).join(" · "))}</span>
        </button>
      `;
    })
    .join("");
}

function renderSelectedPresetDetails() {
  const preset = PRESET_MAP.get(state.selectedPresetId);
  if (!preset) {
    els.presetDetail.innerHTML = "";
    els.presetDetail.hidden = true;
    return;
  }
  els.presetDetail.hidden = false;

  const meta = CATEGORY_META[preset.category];
  const detailRows = [
    ["定位", preset.scene],
    ["場景", preset.location],
    ["服裝", preset.outfit],
    ["動作", preset.pose],
    ["鏡頭", preset.camera],
    ["光線", preset.lighting],
    ["道具", preset.prop],
    ["特效", preset.effect],
  ];

  els.presetDetail.innerHTML = `
    <div class="detail-hero">
      <div>
        <div class="detail-hero__eyebrow">${preset.emoji} ${escapeHtml(meta.label)}</div>
        <h3>${escapeHtml(preset.name)}</h3>
        <p>${escapeHtml(preset.story)}</p>
      </div>
      <div class="detail-hero__quality">${escapeHtml(preset.quality)}</div>
    </div>
    <div class="detail-grid">
      ${detailRows
        .map(
          ([label, value]) => `
            <div class="detail-row">
              <span>${escapeHtml(label)}</span>
              <strong>${escapeHtml(value)}</strong>
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function renderMakeupCards() {
  els.makeupGrid.innerHTML = buildOptionCards(MAKEUP_STYLES, state.selectedMakeupId, "option-card", "makeup-id");
}

function renderTextControls() {
  els.textModeBar.innerHTML = TEXT_MODES.map((mode) => {
    const active = mode.id === state.selectedTextMode ? " is-active" : "";
    return `<button type="button" class="seg-btn${active}" data-text-mode="${escapeHtml(mode.id)}">${escapeHtml(mode.label)}</button>`;
  }).join("");

  els.textPlacementBar.innerHTML = TEXT_PLACEMENTS.map((item) => {
    const active = item.id === state.selectedTextPlacement ? " is-active" : "";
    return `<button type="button" class="seg-btn${active}" data-text-placement="${escapeHtml(item.id)}">${escapeHtml(item.label)}</button>`;
  }).join("");

  els.textTypeBar.innerHTML = TEXT_TYPES.map((item) => {
    const active = item.id === state.selectedTextType ? " is-active" : "";
    return `<button type="button" class="seg-btn${active}" data-text-type="${escapeHtml(item.id)}">${escapeHtml(item.label)}</button>`;
  }).join("");

  els.textStyleGrid.innerHTML = buildOptionCards(TEXT_STYLES, state.selectedTextStyle, "option-card", "text-style-id");
  const showTextOptions = state.selectedTextMode !== "off";
  els.textAdvanced.hidden = !showTextOptions;
  els.customTextRow.hidden = state.selectedTextMode !== "custom";
}

function renderAspectRatios() {
  els.aspectRatioGrid.innerHTML = buildOptionCards(ASPECT_RATIOS, state.selectedAspectRatio, "option-card", "aspect-ratio-id");
}

function renderCustomBuilder() {
  els.keywordBuilder.innerHTML = CUSTOM_GROUPS.map((group) => {
    const options = group.options
      .map(
        (option) => `
          <button type="button" class="chip" data-custom-group="${escapeHtml(group.id)}" data-custom-value="${escapeHtml(option)}">
            ${escapeHtml(option)}
          </button>
        `
      )
      .join("");

    return `
      <section class="custom-group">
        <div class="custom-group__head">
          <h3>${escapeHtml(group.label)}</h3>
          <span>${escapeHtml(group.description)}</span>
        </div>
        <div class="chip-grid">${options}</div>
        <label class="field">
          <span>自訂補充</span>
          <input id="custom-${escapeHtml(group.id)}" type="text" placeholder="${escapeHtml(group.placeholder)}">
        </label>
      </section>
    `;
  }).join("");
}

function render() {
  renderCategoryFilters();
  renderPresetGrid();
  renderSelectedPresetDetails();
  renderMakeupCards();
  renderTextControls();
  renderAspectRatios();

  document.querySelectorAll("[data-tab-target]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.tabTarget === state.activeTab);
  });
  document.querySelectorAll("[data-tab-panel]").forEach((panel) => {
    panel.hidden = panel.dataset.tabPanel !== state.activeTab;
  });
}

function generateCustomPromptData() {
  return CUSTOM_GROUPS.map((group) => {
    const selected = [
      ...document.querySelectorAll(`[data-custom-group="${group.id}"].is-selected`),
    ].map((node) => node.dataset.customValue);
    const extra = $(`custom-${group.id}`)?.value.trim() || "";
    return {
      label: group.label,
      values: uniqueBy([...selected, extra].filter(Boolean), (value) => value.toLowerCase()),
    };
  }).filter((item) => item.values.length);
}

function getSelectedMakeup() {
  return MAKEUP_MAP.get(state.selectedMakeupId) || MAKEUP_STYLES[0];
}

function getSelectedTextStyle() {
  return TEXT_STYLE_MAP.get(state.selectedTextStyle) || TEXT_STYLES[0];
}

function getSelectedAspectRatio() {
  return ASPECT_RATIO_MAP.get(state.selectedAspectRatio) || ASPECT_RATIOS[0];
}

function buildPrompt() {
  const makeup = getSelectedMakeup();
  const textStyle = getSelectedTextStyle();
  const aspectRatio = getSelectedAspectRatio();
  const extraNotes = els.extraNotes.value.trim();

  const IDENTITY_LOCK_TEXT = "Use the uploaded photo as the only identity reference. Lock exact face shape, bone structure, eye shape, nose shape, lip shape, jawline, hairline, skin tone, skin texture, and age impression. Change only outfit, environment, lighting, makeup effect, and body pose — do not alter any facial features, proportions, or personal likeness. Do not beautify into a different face: no generic influencer, model, celebrity, idol, AI influencer, clean-girl, doll, or V-shaped beauty-filter face. Do not apply glass skin or plastic skin. Keep the face fully visible: hair, props, veil, particles, and effects must frame the subject without covering eyes, nose, mouth, or face outline. Hair must render as individual strands, not merged blobs. Body proportion: adult realistic eight-head proportion with correct head-to-body ratio, realistic shoulder width, and full limb length. Hands must have correct finger count; all joints must be anatomically coherent. Pose coherence: face angle, neck, shoulder, torso, and hips must form one continuous physical pose with plausible center of gravity — no disconnected arms, floating limbs, or face-body direction contradiction. Identity override: if any style element conflicts with the uploaded face, keep the face unchanged and adapt the style around it.";

  const UNIVERSAL_FACE_STYLE_FILTER = "Universal face-preservation filter: words such as princess, bride, bridal, goddess, heroine, celebrity, model, actor, diva, ambassador, campaign, advertisement, luxury editorial, beauty portrait, clear soft smile, sweet smile, delicate features, refined beauty, flawless base, sculpted contour, luminous base, camera-ready skin, high-end polish, and similar beauty or role words describe costume, mood, lighting, pose, and surface makeup only. They must not replace the uploaded face, invent a prettier face, force a new smile, change mouth corners, change cheek volume, enlarge eyes, shrink the nose, sharpen the chin, narrow the jaw, smooth skin identity, or make the person look like a different bride/model/influencer. If role or makeup conflicts with identity, preserve the uploaded face and adapt the styling around it.";

  const TRAVEL_STYLING_BOOST = "Professional travel-portrait styling upgrade: makeup and styling should look like a real paid travel photoshoot makeover while preserving the uploaded person's exact facial identity. Makeup is surface cosmetics only: color, texture, eyeliner, lashes, blush, lip finish, and lighting polish may change, but bone structure, face shape, eye shape, eye size, nose shape, lip shape, cheek volume, jawline, chin, smile structure, age impression, and skin identity must not be beautified or reshaped. Costume styling must feel abundant and ceremonial: layered fabrics, embroidered trims, waist ornaments, earrings, necklaces, bracelets, tassels, hairpins, floral hair inserts, crowns, combs, beads, ribbons, veils, shawls, hand props, and matching accessories. Do not simplify the outfit or leave the hair plain; build a complete head-to-toe travel photoshoot look with rich but coherent accessories.";

  const PROMPT_STRUCTURE_GUIDE = "Prompt structure guide: after the identity and Action / Gesture priority locks, build the image from large environment to person. Establish the medium and overall tone first, then location, weather, time, lighting, and environmental perspective; then place the subject into that light; then add outfit, hair styling, props, action details, camera composition, effects, color, quality, and technical finish.";

  const AVOID_LOCK = "low quality, cartoon style, AI art style, watermark, face swap, identity drift, replaced face, different person, generic influencer face, model face, celebrity face, AI influencer face, Korean idol face, beauty filter face, V-shaped face, doll face, plastic skin, glass skin, over-smoothed skin, altered facial proportions, changed jawline, changed nose, changed eye shape, changed hairline, oversized head, big head, chibi body ratio, doll proportions, deformed hands, fused fingers, extra fingers, incoherent anatomy, hidden face, props covering face, particles covering facial features, disconnected arms, floating limbs, spatial contradiction between face and body, broken pose flow, implausible center of gravity";

  const parts = [];
  parts.push(`Identity lock (highest priority): ${IDENTITY_LOCK_TEXT}`);
  parts.push(`Universal face-preservation filter: ${UNIVERSAL_FACE_STYLE_FILTER}`);
  parts.push(PROMPT_STRUCTURE_GUIDE);
  parts.push(`Makeup surface design only: ${sample(makeup.prompt)}.`);
  parts.push(`Travel photoshoot makeup and accessory density: ${TRAVEL_STYLING_BOOST}`);
  parts.push(`Output format: ${aspectRatio.prompt}.`);

  if (state.activeTab === "preset") {
    const preset = PRESET_MAP.get(state.selectedPresetId);
    if (!preset) return "";

    parts.push(`Style / medium / overall tone: ${preset.scene}.`);
    parts.push(`Large environment / location: ${preset.location}.`);
    parts.push(`Character story atmosphere: ${preset.story}.`);
    parts.push(`Outfit: ${preset.outfit}.`);
    parts.push(`Action / Gesture priority: ${preset.pose}.`);
    parts.push("Action integration: Action / Gesture is the physical pose and movement source. Keep the uploaded person's face visible and recognizable.");
    parts.push("Prop and effect safety: props, foreground framing, atmospheric particles, hair, veil, smoke, rain, snow, and visual effects must stay around the body or frame edge, not across the face or key facial features.");
    parts.push(`Composition: ${preset.camera}.`);
    parts.push(`Environment lighting: ${preset.lighting}.`);
    parts.push(`Props: ${preset.prop}.`);
    parts.push(`Visual effects: ${preset.effect}.`);
    parts.push(`Quality: ${preset.quality}.`);

    if (state.selectedTextMode !== "off") {
      parts.push(
        `Typography: generate ${TEXT_MODE_MAP.get(state.selectedTextMode)?.prompt || "short editorial"} text, ${TEXT_PLACEMENT_MAP.get(state.selectedTextPlacement)?.prompt}, with ${TEXT_TYPE_MAP.get(state.selectedTextType)?.prompt}, styled as ${textStyle.prompt}.`
      );
      if (state.selectedTextMode === "custom" && els.customText.value.trim()) {
        parts.push(`Use the exact text content: "${els.customText.value.trim()}".`);
      }
    }

    if (extraNotes) {
      parts.push(`Special requirements: ${extraNotes}.`);
    }

    parts.push(`Avoid: ${AVOID_LOCK}`);
    return parts.join("\n");
  }

  const customParts = generateCustomPromptData();
  customParts.forEach((part) => parts.push(`${part.label}: ${part.values.join(", ")}.`));

  if (state.selectedTextMode !== "off") {
    parts.push(
      `Typography: generate ${TEXT_MODE_MAP.get(state.selectedTextMode)?.prompt || "short editorial"} text, ${TEXT_PLACEMENT_MAP.get(state.selectedTextPlacement)?.prompt}, with ${TEXT_TYPE_MAP.get(state.selectedTextType)?.prompt}, styled as ${textStyle.prompt}.`
    );
    if (state.selectedTextMode === "custom" && els.customText.value.trim()) {
      parts.push(`Use the exact text content: "${els.customText.value.trim()}".`);
    }
  }

  if (extraNotes) {
    parts.push(`Special requirements: ${extraNotes}.`);
  }

  parts.push(`Avoid: ${AVOID_LOCK}`);
  return parts.join("\n");
}

async function copyResult() {
  if (!els.resultText.textContent.trim()) return;
  await navigator.clipboard.writeText(els.resultText.textContent);
  els.copyButton.textContent = "已複製";
  window.setTimeout(() => {
    els.copyButton.textContent = "複製 Prompt";
  }, 1400);
}

function randomizePreset() {
  const visible = getVisiblePresets();
  if (!visible.length) return;
  const pick = visible[Math.floor(Math.random() * visible.length)];
  state.selectedPresetId = pick.id;
  renderPresetGrid();
  renderSelectedPresetDetails();
}

function bindEvents() {
  document.addEventListener("click", (event) => {
    const tabButton = event.target.closest("[data-tab-target]");
    if (tabButton) {
      state.activeTab = tabButton.dataset.tabTarget;
      render();
      return;
    }

    const presetButton = event.target.closest("[data-preset-id]");
    if (presetButton) {
      state.selectedPresetId = presetButton.dataset.presetId;
      renderPresetGrid();
      renderSelectedPresetDetails();
      return;
    }

    const superButton = event.target.closest("[data-super-category]");
    if (superButton) {
      state.selectedSuperCategory = superButton.dataset.superCategory;
      state.selectedCategory = "all";
      render();
      return;
    }

    const categoryButton = event.target.closest("[data-category]");
    if (categoryButton) {
      state.selectedCategory = categoryButton.dataset.category;
      render();
      return;
    }

    const makeupButton = event.target.closest("[data-makeup-id]");
    if (makeupButton) {
      state.selectedMakeupId = makeupButton.dataset.makeupId;
      renderMakeupCards();
      return;
    }

    const textModeButton = event.target.closest("[data-text-mode]");
    if (textModeButton) {
      state.selectedTextMode = textModeButton.dataset.textMode;
      renderTextControls();
      return;
    }

    const textPlacementButton = event.target.closest("[data-text-placement]");
    if (textPlacementButton) {
      state.selectedTextPlacement = textPlacementButton.dataset.textPlacement;
      renderTextControls();
      return;
    }

    const textTypeButton = event.target.closest("[data-text-type]");
    if (textTypeButton) {
      state.selectedTextType = textTypeButton.dataset.textType;
      renderTextControls();
      return;
    }

    const textStyleButton = event.target.closest("[data-text-style-id]");
    if (textStyleButton) {
      state.selectedTextStyle = textStyleButton.dataset.textStyleId;
      renderTextControls();
      return;
    }

    const aspectRatioButton = event.target.closest("[data-aspect-ratio-id]");
    if (aspectRatioButton) {
      state.selectedAspectRatio = aspectRatioButton.dataset.aspectRatioId;
      renderAspectRatios();
      return;
    }

    const customChip = event.target.closest("[data-custom-group][data-custom-value]");
    if (customChip) {
      customChip.classList.toggle("is-selected");
    }
  });

  els.searchInput.addEventListener("input", () => {
    state.searchQuery = els.searchInput.value;
    renderPresetGrid();
    renderSelectedPresetDetails();
  });

  els.categorySearchInput.addEventListener("input", () => {
    state.categorySearchQuery = els.categorySearchInput.value;
    renderCategoryFilters();
    renderPresetGrid();
    renderSelectedPresetDetails();
  });

  els.randomButton.addEventListener("click", randomizePreset);
  els.generateButton.addEventListener("click", () => {
    const prompt = buildPrompt();
    els.resultText.textContent = prompt;
    els.resultBox.hidden = false;
  });
  els.copyButton.addEventListener("click", () => {
    copyResult().catch(() => {
      window.alert("複製失敗，請手動複製結果。");
    });
  });
  els.clearButton.addEventListener("click", () => {
    els.resultText.textContent = "";
    els.resultBox.hidden = true;
  });
}

function cacheElements() {
  els.superCategoryBar = $("super-category-bar");
  els.categoryBar = $("category-bar");
  els.searchInput = $("preset-search");
  els.categorySearchInput = $("category-search");
  els.presetGrid = $("preset-grid");
  els.presetCount = $("preset-count");
  els.presetDetail = $("preset-detail");
  els.makeupGrid = $("makeup-grid");
  els.textModeBar = $("text-mode-bar");
  els.textPlacementBar = $("text-placement-bar");
  els.textTypeBar = $("text-type-bar");
  els.textStyleGrid = $("text-style-grid");
  els.textAdvanced = $("text-advanced");
  els.customTextRow = $("custom-text-row");
  els.customText = $("custom-text");
  els.aspectRatioGrid = $("aspect-ratio-grid");
  els.keywordBuilder = $("keyword-builder");
  els.extraNotes = $("extra-notes");
  els.randomButton = $("random-btn");
  els.generateButton = $("generate-btn");
  els.resultBox = $("result-box");
  els.resultText = $("result-text");
  els.copyButton = $("copy-btn");
  els.clearButton = $("clear-btn");
}

function init() {
  cacheElements();
  renderCustomBuilder();
  ensureSelectedPreset();
  bindEvents();
  render();
}

document.addEventListener("DOMContentLoaded", init);
