const test = require("node:test");
const assert = require("node:assert/strict");
const m = require("./group.js");

test("groups words by length", () => {
  assert.deepEqual(m.groupBy(["a", "bb", "c", "dd"], (w) => w.length), { 1: ["a", "c"], 2: ["bb", "dd"] });
});
test("key order is first seen for names", () => {
  const r = m.groupBy(["b1", "a1", "b2"], (w) => w[0]);
  assert.deepEqual(Object.keys(r), ["b", "a"]);
});
test("empty input gives an empty object", () => {
  assert.deepEqual(m.groupBy([], (x) => x), {});
});
test("keys are strings", () => {
  const r = m.groupBy([true, false, true], (x) => x);
  assert.deepEqual(r.true, [true, true]);
});
test("does not change the input", () => {
  const a = [1, 2];
  m.groupBy(a, (x) => x);
  assert.deepEqual(a, [1, 2]);
});
