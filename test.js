const test = require("node:test");
const assert = require("node:assert/strict");
const m = require("./uniq.js");

test("all unique items are kept in order", () => {
  const rows = [{ id: 1 }, { id: 2 }, { id: 3 }];
  assert.deepEqual(m.uniqueBy(rows, "id"), rows);
});
test("empty input", () => {
  assert.deepEqual(m.uniqueBy([], "id"), []);
});
test("function key with distinct results", () => {
  assert.deepEqual(m.uniqueBy(["a", "bb", "ccc"], (s) => s.length), ["a", "bb", "ccc"]);
});
test("does not change the input", () => {
  const rows = [{ id: 1 }, { id: 2 }];
  m.uniqueBy(rows, "id");
  assert.equal(rows.length, 2);
});
test("returns a new array", () => {
  const rows = [{ id: 1 }];
  assert.notEqual(m.uniqueBy(rows, "id"), rows);
});
