const test = require('node:test');
const assert = require('node:assert/strict');
const { parse } = require('./qs.js');
test('simple pairs', () => {
  assert.deepEqual(parse('a=1&b=2'), { a: '1', b: '2' });
});
test('a leading question mark is ignored', () => {
  assert.deepEqual(parse('?a=1'), { a: '1' });
});
test('plus is a space and percent codes are decoded', () => {
  assert.deepEqual(parse('q=a+b&x=%C3%A9'), { q: 'a b', x: '\u00e9' });
});
test('a key without a value is an empty string', () => {
  assert.deepEqual(parse('flag&a=1'), { flag: '', a: '1' });
});
test('empty input gives an empty object', () => {
  assert.deepEqual(parse(''), {});
  assert.deepEqual(parse('?'), {});
});
