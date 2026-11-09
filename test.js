const test = require("node:test");
const assert = require("node:assert/strict");
const m = require("./numtheory.js");

test("gcd of positives", () => {
  assert.equal(m.gcd(12, 18), 6);
});
test("gcd with zero", () => {
  assert.equal(m.gcd(0, 5), 5);
  assert.equal(m.gcd(5, 0), 5);
});
test("coprime numbers", () => {
  assert.equal(m.gcd(7, 13), 1);
});
test("lcm of positives", () => {
  assert.equal(m.lcm(4, 6), 12);
});
test("gcdAll and lcmAll", () => {
  assert.equal(m.gcdAll([12, 18, 24]), 6);
  assert.equal(m.lcmAll([2, 3, 4]), 12);
});
