const test = require("node:test");
const assert = require("node:assert/strict");
const m = require("./fib.js");

test("first values", () => {
  assert.equal(m.fib(0), "0");
  assert.equal(m.fib(1), "1");
  assert.equal(m.fib(2), "1");
});

test("fib 10", () => {
  assert.equal(m.fib(10), "55");
});

test("fib 50", () => {
  assert.equal(m.fib(50), "12586269025");
});

test("fib 78 is still exact", () => {
  assert.equal(m.fib(78), "8944394323791464");
});

test("bad input throws", () => {
  assert.throws(() => m.fib(-1), RangeError);
  assert.throws(() => m.fib(1.5), RangeError);
});
