const test = require("node:test");
const assert = require("node:assert/strict");
const m = require("./csvrow.js");

test("plain fields", () => {
  assert.equal(m.toCsvRow(["a", "b", "c"]), "a,b,c");
});

test("comma is quoted", () => {
  assert.equal(m.toCsvRow(["a,b", "c"]), '"a,b",c');
});

test("quotes are doubled", () => {
  assert.equal(m.toCsvRow(['say "hi"']), '"say ""hi"""');
});

test("null and numbers", () => {
  assert.equal(m.toCsvRow([1, null, undefined, true]), "1,,,true");
});

test("empty row", () => {
  assert.equal(m.toCsvRow([]), "");
});
