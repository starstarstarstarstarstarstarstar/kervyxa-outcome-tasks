const test = require('node:test');
const assert = require('node:assert/strict');
const m = require('./bounds.js');

test('lowerBound finds the first duplicate', () => {
  assert.equal(m.lowerBound([1, 2, 2, 2, 3], 2), 1);
});
test('lowerBound of a missing value is its insert point', () => {
  assert.equal(m.lowerBound([1, 3, 5], 4), 2);
});
test('empty array gives 0', () => {
  assert.equal(m.lowerBound([], 1), 0);
  assert.equal(m.upperBound([], 1), 0);
});
test('values past the end give the length', () => {
  assert.equal(m.lowerBound([1, 2], 9), 2);
  assert.equal(m.upperBound([1, 2], 9), 2);
});
test('upperBound of a missing value is its insert point', () => {
  assert.equal(m.upperBound([1, 3, 5], 4), 2);
  assert.equal(m.countOf([1, 3, 5], 4), 0);
});
