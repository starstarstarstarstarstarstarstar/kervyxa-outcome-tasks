const test = require("node:test");
const assert = require("node:assert/strict");
const m = require("./rpn.js");

test("adds", () => {
  assert.equal(m.evaluate("3 4 +"), 7);
});
test("evaluates a longer expression", () => {
  assert.equal(m.evaluate("5 1 2 + 4 * + 3 -"), 14);
});
test("divides", () => {
  assert.equal(m.evaluate("10 4 /"), 2.5);
});
test("single number", () => {
  assert.equal(m.evaluate("42"), 42);
});
test("throws when operands are missing", () => {
  assert.throws(() => m.evaluate("1 +"));
});
test("throws on division by zero", () => {
  assert.throws(() => m.evaluate("1 0 /"));
});
test("throws on an unknown token", () => {
  assert.throws(() => m.evaluate("1 x +"));
});
