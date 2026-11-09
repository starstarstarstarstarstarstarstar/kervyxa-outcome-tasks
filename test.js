const test = require('node:test');
const assert = require('node:assert/strict');
const { parsePages } = require('./pages.js');
test('a single range', () => {
  assert.deepEqual(parsePages('1-3'), [1, 2, 3]);
});
test('single pages and ranges', () => {
  assert.deepEqual(parsePages('1-3,5'), [1, 2, 3, 5]);
});
test('spaces are allowed', () => {
  assert.deepEqual(parsePages(' 1 - 3 , 5 '), [1, 2, 3, 5]);
});
test('empty text gives no pages', () => {
  assert.deepEqual(parsePages(''), []);
});
test('bad text throws SyntaxError and a reversed range throws RangeError', () => {
  assert.throws(() => parsePages('a'), SyntaxError);
  assert.throws(() => parsePages('5-2'), RangeError);
});
