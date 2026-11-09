const test = require("node:test");
const assert = require("node:assert/strict");
const m = require("./transpose.js");

test("square matrix", () => {
  assert.deepEqual(m.transpose([[1, 2], [3, 4]]), [[1, 3], [2, 4]]);
});
test("wide matrix", () => {
  assert.deepEqual(m.transpose([[1, 2, 3], [4, 5, 6]]), [[1, 4], [2, 5], [3, 6]]);
});
test("single row", () => {
  assert.deepEqual(m.transpose([[1, 2, 3]]), [[1], [2], [3]]);
});
test("single cell", () => {
  assert.deepEqual(m.transpose([["x"]]), [["x"]]);
});
test("does not change the input", () => {
  const a = [[1, 2], [3, 4]];
  m.transpose(a);
  assert.deepEqual(a, [[1, 2], [3, 4]]);
});
