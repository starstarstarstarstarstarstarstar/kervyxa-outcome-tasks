const test = require("node:test");
const assert = require("node:assert/strict");
const m = require("./sieve.js");

test("primes up to 10", () => {
  assert.deepEqual(m.primesUpTo(10), [2, 3, 5, 7]);
});

test("zero and one have no primes", () => {
  assert.deepEqual(m.primesUpTo(0), []);
  assert.deepEqual(m.primesUpTo(1), []);
});

test("two is the smallest prime", () => {
  assert.deepEqual(m.primesUpTo(2), [2]);
});

test("primes up to 30", () => {
  assert.deepEqual(m.primesUpTo(30), [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
});

test("there are 25 primes up to 100", () => {
  assert.equal(m.primesUpTo(100).length, 25);
});
