const test = require('node:test');
const assert = require('node:assert/strict');
const { wrap } = require('./wrap.js');
test('short text stays on one line', () => {
  assert.equal(wrap('hello world', 20), 'hello world');
});
test('lines break at the width', () => {
  assert.equal(wrap('the quick brown fox', 10), 'the quick\nbrown fox');
});
test('a word longer than the width stays whole on its own line', () => {
  assert.equal(wrap('a extraordinarily b', 5), 'a\nextraordinarily\nb');
});
test('extra spaces inside a line are collapsed', () => {
  assert.equal(wrap('a    b', 10), 'a b');
});
test('a bad width throws RangeError', () => {
  assert.throws(() => wrap('x', 0), RangeError);
  assert.throws(() => wrap('x', 2.5), RangeError);
});
