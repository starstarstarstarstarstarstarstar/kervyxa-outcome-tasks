const test = require("node:test");
const assert = require("node:assert/strict");
const m = require("./length.js");

const near = (a, b) => Math.abs(a - b) < 1e-9;

test("metres to centimetres", () => {
  assert.ok(near(m.convert(1, "m", "cm"), 100));
});

test("inch to millimetres", () => {
  assert.ok(near(m.convert(1, "in", "mm"), 25.4));
});

test("foot to inches", () => {
  assert.ok(near(m.convert(1, "ft", "in"), 12));
});

test("kilometre to metres", () => {
  assert.ok(near(m.convert(2.5, "km", "m"), 2500));
});

test("unknown unit throws", () => {
  assert.throws(() => m.convert(1, "m", "yd"), RangeError);
});
