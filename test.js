const test = require("node:test");
const assert = require("node:assert/strict");
const m = require("./brackets.js");

test("balanced text", () => {
  assert.equal(m.firstError("([]{})"), -1);
});
test("empty text", () => {
  assert.equal(m.firstError(""), -1);
});
test("text without brackets", () => {
  assert.equal(m.firstError("abc"), -1);
});
test("stray closer", () => {
  assert.equal(m.firstError("a)b"), 1);
});
test("wrong closer", () => {
  assert.equal(m.firstError("(]"), 1);
});
test("other characters are ignored", () => {
  assert.equal(m.firstError("f(x[1]) + {y}"), -1);
});
