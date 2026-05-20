import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import vm from "node:vm";
import { JSDOM } from "jsdom";

const html = await readFile(new URL("../index.template.html", import.meta.url), "utf8");
const css = await readFile(new URL("../src/styles.css", import.meta.url), "utf8");
const dataJs = await readFile(new URL("../src/data.js", import.meta.url), "utf8");
const appJs = await readFile(new URL("../src/app.js", import.meta.url), "utf8");

function bootApp() {
  const dom = new JSDOM(html, {
    runScripts: "outside-only",
    url: "http://localhost/",
  });

  const context = dom.getInternalVMContext();
  context.console = console;
  context.navigator.clipboard = {
    writeText: async () => {},
  };

  vm.runInContext(`const style = document.createElement("style"); style.textContent = ${JSON.stringify(css)}; document.head.append(style);`, context);
  vm.runInContext(dataJs, context);
  vm.runInContext(appJs, context);
  dom.window.document.dispatchEvent(new dom.window.Event("DOMContentLoaded", { bubbles: true }));

  return dom;
}

test("app boots and renders presets", () => {
  const dom = bootApp();
  const presetCards = dom.window.document.querySelectorAll("[data-preset-id]");
  assert.ok(presetCards.length >= 10);
  assert.ok(dom.window.document.getElementById("preset-detail").textContent.includes("台北") || dom.window.document.getElementById("preset-detail").textContent.length > 0);
});

test("prompt generation works without runtime errors", () => {
  const dom = bootApp();
  dom.window.document.getElementById("generate-btn").click();
  const text = dom.window.document.getElementById("result-text").textContent;
  assert.ok(text.includes("Use the uploaded person photo as the only identity reference."));
  assert.ok(text.includes("Avoid low-detail AI look"));
});

test("custom tab can generate prompt", () => {
  const dom = bootApp();
  dom.window.document.querySelector('[data-tab-target="custom"]').click();
  dom.window.document.querySelector('[data-custom-group="location"]').click();
  dom.window.document.querySelector('[data-custom-group="wardrobe"]').click();
  dom.window.document.getElementById("generate-btn").click();
  const text = dom.window.document.getElementById("result-text").textContent;
  assert.ok(text.includes("場景位置:") || text.includes("Location"));
});
