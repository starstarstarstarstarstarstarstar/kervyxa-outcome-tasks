const test = require('node:test');
const assert = require('node:assert/strict');
const m = require('./contrast.js');

test('black on white is 21', () => {
  assert.equal(m.contrastRatio('#000000', '#ffffff'), 21);
});
test('same color is 1', () => {
  assert.equal(m.contrastRatio('#336699', '#336699'), 1);
});
test('order does not matter', () => {
  assert.equal(m.contrastRatio('#767676', '#ffffff'), m.contrastRatio('#ffffff', '#767676'));
});
test('known mid gray value', () => {
  assert.equal(m.contrastRatio('#767676', '#ffffff'), 4.54);
});
test('hash is optional and case is ignored', () => {
  assert.equal(m.contrastRatio('FFFFFF', '000000'), 21);
});
test('bad colors throw', () => {
  assert.throws(() => m.contrastRatio('#12345', '#ffffff'));
});
