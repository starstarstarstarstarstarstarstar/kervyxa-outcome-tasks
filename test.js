const test = require("node:test");
const assert = require("node:assert/strict");
const m = require("./flatten.js");

test("flat input is copied unchanged", () => {
  assert.deepEqual(m.flattenDepth([1, 2, 3], 2), [1, 2, 3]);
});
test("infinite depth flattens everything", () => {
  assert.deepEqual(m.flattenDepth([1, [2, [3, [4]]]], Infinity), [1, 2, 3, 4]);
});
test("empty input", () => {
  assert.deepEqual(m.flattenDepth([], 3), []);
});
test("does not change the input", () => {
  const a = [1, [2]];
  m.flattenDepth(a, 1);
  assert.deepEqual(a, [1, [2]]);
});
test("one level of nesting at depth 1", () => {
  assert.deepEqual(m.flattenDepth([[1], [2]], 1), [1, 2]);
});
