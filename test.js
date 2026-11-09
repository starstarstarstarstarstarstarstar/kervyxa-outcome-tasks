const test = require("node:test");
const assert = require("node:assert/strict");
const m = require("./change.js");

test("increase", () => {
  assert.equal(m.percentChange(100, 125), "+25.0%");
});

test("decrease", () => {
  assert.equal(m.percentChange(100, 75), "-25.0%");
});

test("no change has no sign", () => {
  assert.equal(m.percentChange(50, 50), "0.0%");
});

test("rounds to one decimal", () => {
  assert.equal(m.percentChange(3, 4), "+33.3%");
});

test("drop to zero", () => {
  assert.equal(m.percentChange(200, 0), "-100.0%");
});
