const test = require("node:test");
const assert = require("node:assert/strict");
const m = require("./mime.js");

test("html", () => {
  assert.equal(m.mimeType("index.html"), "text/html");
});

test("case is ignored", () => {
  assert.equal(m.mimeType("STYLE.CSS"), "text/css");
});

test("json", () => {
  assert.equal(m.mimeType("data.json"), "application/json");
});

test("no extension", () => {
  assert.equal(m.mimeType("readme"), "application/octet-stream");
});

test("unknown extension", () => {
  assert.equal(m.mimeType("a.unknownext"), "application/octet-stream");
});
