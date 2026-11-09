const test = require("node:test");
const assert = require("node:assert/strict");
const m = require("./chunk.js");

test("splits with a short last chunk", () => {
  assert.deepEqual(m.chunk([1, 2, 3, 4, 5], 2), [[1, 2], [3, 4], [5]]);
});
test("empty input gives no chunks", () => {
  assert.deepEqual(m.chunk([], 3), []);
});
test("size larger than input", () => {
  assert.deepEqual(m.chunk([1, 2], 5), [[1, 2]]);
});
test("does not change the input", () => {
  const a = [1, 2, 3];
  m.chunk(a, 2);
  assert.deepEqual(a, [1, 2, 3]);
});
test("size one", () => {
  assert.deepEqual(m.chunk(["a", "b"], 1), [["a"], ["b"]]);
});
