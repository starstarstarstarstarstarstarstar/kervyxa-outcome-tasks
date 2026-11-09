const test = require("node:test");
const assert = require("node:assert/strict");
const m = require("./truncate.js");

test("short text is unchanged", () => {
  assert.equal(m.truncate("hello", 10), "hello");
});

test("text of exactly max is unchanged", () => {
  assert.equal(m.truncate("hello world", 11), "hello world");
});

test("empty text", () => {
  assert.equal(m.truncate("", 5), "");
});

test("small max throws", () => {
  assert.throws(() => m.truncate("hello world", 3), RangeError);
});

test("fraction max throws", () => {
  assert.throws(() => m.truncate("hello", 5.5), RangeError);
});
