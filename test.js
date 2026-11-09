const test = require("node:test");
const assert = require("node:assert/strict");
const m = require("./histogram.js");

test("edges are equal width", () => {
  assert.deepEqual(m.histogram([0, 5, 10], 2).edges, [0, 5, 10]);
});

test("counts has one entry per bin", () => {
  assert.equal(m.histogram([0, 1, 2, 3, 4], 4).counts.length, 4);
});

test("equal values go in the first bin", () => {
  assert.deepEqual(m.histogram([5, 5, 5], 3).counts, [3, 0, 0]);
});

test("empty list throws", () => {
  assert.throws(() => m.histogram([], 3), RangeError);
});

test("bad bin count throws", () => {
  assert.throws(() => m.histogram([1, 2], 0), RangeError);
});
