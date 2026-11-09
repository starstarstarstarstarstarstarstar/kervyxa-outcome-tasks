const test = require("node:test");
const assert = require("node:assert/strict");
const m = require("./zip.js");

test("equal lengths", () => {
  assert.deepEqual(m.zipLongest([[1, 2], [3, 4]]), [[1, 3], [2, 4]]);
});
test("pads the shorter array with the fill value", () => {
  assert.deepEqual(m.zipLongest([[1, 2, 3], [4]], "x"), [[1, 4], [2, "x"], [3, "x"]]);
});
test("no arrays", () => {
  assert.deepEqual(m.zipLongest([]), []);
});
test("all arrays empty", () => {
  assert.deepEqual(m.zipLongest([[], []]), []);
});
test("default fill is null", () => {
  assert.deepEqual(m.zipLongest([[1], [2, 3]]), [[1, 2], [null, 3]]);
});
