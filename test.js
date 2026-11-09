const test = require("node:test");
const assert = require("node:assert/strict");
const m = require("./tokenize.js");

test("integers and operators", () => {
  assert.deepEqual(m.tokenize("1+2*3"), ["1", "+", "2", "*", "3"]);
});
test("ignores spaces", () => {
  assert.deepEqual(m.tokenize(" 12  -  3 "), ["12", "-", "3"]);
});
test("decimals", () => {
  assert.deepEqual(m.tokenize("1.5*.25"), ["1.5", "*", ".25"]);
});
test("parentheses", () => {
  assert.deepEqual(m.tokenize("(1+2)^2"), ["(", "1", "+", "2", ")", "^", "2"]);
});
test("empty text", () => {
  assert.deepEqual(m.tokenize(""), []);
});
test("throws on unknown characters", () => {
  assert.throws(() => m.tokenize("1 & 2"));
});
