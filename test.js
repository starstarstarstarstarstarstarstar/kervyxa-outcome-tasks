const test = require("node:test");
const assert = require("node:assert/strict");
const m = require("./range.js");

test("caret allows minor and patch updates", () => {
  assert.equal(m.satisfies("1.9.0", "^1.2.3"), true);
});

test("caret stops at the next major", () => {
  assert.equal(m.satisfies("2.0.0", "^1.2.3"), false);
});

test("below the range", () => {
  assert.equal(m.satisfies("1.2.2", "^1.2.3"), false);
});

test("tilde allows patch updates only", () => {
  assert.equal(m.satisfies("1.2.9", "~1.2.3"), true);
  assert.equal(m.satisfies("1.3.0", "~1.2.3"), false);
});

test("exact and invalid", () => {
  assert.equal(m.satisfies("1.2.3", "1.2.3"), true);
  assert.equal(m.satisfies("1.2.4", "1.2.3"), false);
  assert.throws(() => m.satisfies("1.2", "^1.0.0"), TypeError);
});
