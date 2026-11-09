const test = require('node:test');
const assert = require('node:assert/strict');
const { merge } = require('./intervals.js');
test('overlapping intervals merge', () => {
  assert.deepEqual(merge([[1, 4], [2, 6]]), [[1, 6]]);
});
test('separate intervals stay apart', () => {
  assert.deepEqual(merge([[1, 2], [4, 5]]), [[1, 2], [4, 5]]);
});
test('unsorted input is sorted', () => {
  assert.deepEqual(merge([[8, 9], [1, 3], [2, 4]]), [[1, 4], [8, 9]]);
});
test('a nested interval is absorbed', () => {
  assert.deepEqual(merge([[1, 10], [2, 3]]), [[1, 10]]);
});
test('empty list and bad interval', () => {
  assert.deepEqual(merge([]), []);
  assert.throws(() => merge([[5, 1]]), RangeError);
});
test('the input is not changed', () => {
  const input = [[3, 4], [1, 3]];
  merge(input);
  assert.deepEqual(input, [[3, 4], [1, 3]]);
});
