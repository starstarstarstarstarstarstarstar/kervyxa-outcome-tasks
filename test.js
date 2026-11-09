const test = require("node:test");
const assert = require("node:assert/strict");
const m = require("./ordinal.js");

test("first three", () => {
  assert.equal(m.ordinal(1), "1st");
  assert.equal(m.ordinal(2), "2nd");
  assert.equal(m.ordinal(3), "3rd");
});
test("four to ten", () => {
  assert.equal(m.ordinal(4), "4th");
  assert.equal(m.ordinal(10), "10th");
});
test("twenties", () => {
  assert.equal(m.ordinal(21), "21st");
  assert.equal(m.ordinal(22), "22nd");
});
test("zero and hundred", () => {
  assert.equal(m.ordinal(0), "0th");
  assert.equal(m.ordinal(100), "100th");
});
test("rejects non integers", () => {
  assert.throws(() => m.ordinal(1.5), TypeError);
});
