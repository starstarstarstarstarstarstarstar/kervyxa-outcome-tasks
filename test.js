const test = require("node:test");
const assert = require("node:assert/strict");
const m = require("./diff.js");

test("disjoint arrays", () => {
  assert.deepEqual(m.arrayDiff([1, 2], [3, 4]), { added: [3, 4], removed: [1, 2], kept: [] });
});
test("identical arrays", () => {
  assert.deepEqual(m.arrayDiff([1, 2], [1, 2]), { added: [], removed: [], kept: [1, 2] });
});
test("overlap without repeats", () => {
  assert.deepEqual(m.arrayDiff([1, 2, 3], [2, 3, 4]), { added: [4], removed: [1], kept: [2, 3] });
});
test("both empty", () => {
  assert.deepEqual(m.arrayDiff([], []), { added: [], removed: [], kept: [] });
});
test("works with strings", () => {
  assert.deepEqual(m.arrayDiff(["a"], ["a", "b"]), { added: ["b"], removed: [], kept: ["a"] });
});
