const test = require("node:test");
const assert = require("node:assert/strict");
const m = require("./isoweek.js");

test("mid-year Monday is week 24", () => {
  assert.deepEqual(m.isoWeek(2024, 6, 10), { year: 2024, week: 24 });
});
test("mid-year Sunday stays in the same week", () => {
  assert.deepEqual(m.isoWeek(2024, 6, 16), { year: 2024, week: 24 });
});
test("first Thursday week is week 1", () => {
  assert.deepEqual(m.isoWeek(2024, 1, 4), { year: 2024, week: 1 });
});
test("late March", () => {
  assert.deepEqual(m.isoWeek(2023, 3, 29), { year: 2023, week: 13 });
});
test("does not need a Date object", () => {
  assert.equal(typeof m.isoWeek(2022, 8, 1).week, "number");
});
