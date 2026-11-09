const test = require("node:test");
const assert = require("node:assert/strict");
const m = require("./stats.js");

test("median of odd list", () => {
  assert.equal(m.median([3, 1, 2]), 2);
});

test("median of even list", () => {
  assert.equal(m.median([4, 1, 3, 2]), 2.5);
});

test("median of empty list is null", () => {
  assert.equal(m.median([]), null);
});

test("single mode", () => {
  assert.deepEqual(m.modes([1, 2, 2, 3]), [2]);
});

test("several modes in ascending order", () => {
  assert.deepEqual(m.modes([3, 1, 3, 1, 2]), [1, 3]);
});
