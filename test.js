const test = require("node:test");
const assert = require("node:assert/strict");
const m = require("./fraction.js");

test("reduces", () => {
  assert.deepEqual(m.reduce(2, 4), [1, 2]);
});
test("already reduced", () => {
  assert.deepEqual(m.reduce(3, 5), [3, 5]);
});
test("negative numerator", () => {
  assert.deepEqual(m.reduce(-2, 4), [-1, 2]);
});
test("zero numerator", () => {
  assert.deepEqual(m.reduce(0, 5), [0, 1]);
});
test("throws on zero denominator", () => {
  assert.throws(() => m.reduce(1, 0));
});
test("adds", () => {
  assert.deepEqual(m.add([1, 2], [1, 3]), [5, 6]);
});
