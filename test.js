const test = require("node:test");
const assert = require("node:assert/strict");
const m = require("./caesar.js");

test("shifts forward", () => {
  assert.equal(m.shift("abc", 1), "bcd");
});
test("wraps past z", () => {
  assert.equal(m.shift("xyz", 3), "abc");
});
test("keeps case", () => {
  assert.equal(m.shift("Hello", 2), "Jgnnq");
});
test("leaves other characters alone", () => {
  assert.equal(m.shift("a b, c!", 1), "b c, d!");
});
test("zero shift changes nothing", () => {
  assert.equal(m.shift("Same", 0), "Same");
});
