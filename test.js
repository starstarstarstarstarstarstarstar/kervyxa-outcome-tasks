const test = require("node:test");
const assert = require("node:assert/strict");
const m = require("./split.js");

test("simple extension", () => {
  assert.deepEqual(m.splitName("report.pdf"), { base: "report", ext: "pdf" });
});

test("last dot wins", () => {
  assert.deepEqual(m.splitName("a.b.c"), { base: "a.b", ext: "c" });
});

test("dotfile has no extension", () => {
  assert.deepEqual(m.splitName(".gitignore"), { base: ".gitignore", ext: "" });
});

test("no dot", () => {
  assert.deepEqual(m.splitName("Makefile"), { base: "Makefile", ext: "" });
});

test("trailing dot", () => {
  assert.deepEqual(m.splitName("name."), { base: "name.", ext: "" });
});
