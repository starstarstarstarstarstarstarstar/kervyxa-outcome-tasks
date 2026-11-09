const test = require('node:test');
const assert = require('node:assert/strict');
const m = require('./words.js');

test('zero and small numbers', () => {
  assert.equal(m.toWords(0), 'zero');
  assert.equal(m.toWords(7), 'seven');
  assert.equal(m.toWords(13), 'thirteen');
});
test('tens use a hyphen', () => {
  assert.equal(m.toWords(21), 'twenty-one');
  assert.equal(m.toWords(90), 'ninety');
});
test('hundreds have no and', () => {
  assert.equal(m.toWords(100), 'one hundred');
  assert.equal(m.toWords(342), 'three hundred forty-two');
});
test('big numbers', () => {
  assert.equal(m.toWords(1000000), 'one million');
  assert.equal(m.toWords(123456789), 'one hundred twenty-three million four hundred fifty-six thousand seven hundred eighty-nine');
});
test('out of range throws', () => {
  assert.throws(() => m.toWords(-1), RangeError);
  assert.throws(() => m.toWords(1.5), RangeError);
});
