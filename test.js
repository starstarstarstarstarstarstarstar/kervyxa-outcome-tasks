const test = require('node:test');
const assert = require('node:assert/strict');
const { distance } = require('./lev.js');
test('same strings are zero apart', () => {
  assert.equal(distance('abc', 'abc'), 0);
});
test('classic example', () => {
  assert.equal(distance('kitten', 'sitting'), 3);
});
test('one substitution, insertion and deletion', () => {
  assert.equal(distance('cat', 'cut'), 1);
  assert.equal(distance('cat', 'cart'), 1);
  assert.equal(distance('cart', 'cat'), 1);
});
test('case matters', () => {
  assert.equal(distance('a', 'A'), 1);
});
test('two empty strings are zero apart', () => {
  assert.equal(distance('', ''), 0);
});
