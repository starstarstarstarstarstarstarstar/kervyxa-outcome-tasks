const test = require("node:test");
const assert = require("node:assert/strict");
const m = require("./calendar.js");

test("ordinary leap year", () => {
  assert.equal(m.isLeapYear(2024), true);
});
test("ordinary common year", () => {
  assert.equal(m.isLeapYear(2023), false);
});
test("days in common February", () => {
  assert.equal(m.daysInMonth(2023, 2), 28);
});
test("days in other months", () => {
  assert.equal(m.daysInMonth(2023, 4), 30);
  assert.equal(m.daysInMonth(2023, 12), 31);
});
test("bad month throws", () => {
  assert.throws(() => m.daysInMonth(2023, 13), RangeError);
});
