const test = require("node:test");
const assert = require("node:assert/strict");
const m = require("./temp.js");

test("boiling point in F", () => {
  assert.equal(m.convert(100, "C", "F"), 212);
});

test("freezing point in C", () => {
  assert.equal(m.convert(32, "F", "C"), 0);
});

test("body temperature", () => {
  assert.equal(m.convert(37, "C", "F"), 98.6);
});

test("minus 40 matches in both scales", () => {
  assert.equal(m.convert(-40, "C", "F"), -40);
  assert.equal(m.convert(-40, "F", "C"), -40);
});

test("unknown unit throws", () => {
  assert.throws(() => m.convert(1, "C", "X"), RangeError);
});
