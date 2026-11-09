const test = require('node:test');
const assert = require('node:assert/strict');
const m = require('./money.js');

test('rounds down below half', () => {
  assert.equal(m.roundHalfEven('1.234', 2), '1.23');
});
test('rounds up above half', () => {
  assert.equal(m.roundHalfEven('1.236', 2), '1.24');
  assert.equal(m.roundHalfEven('-1.236', 2), '-1.24');
});
test('pads short inputs', () => {
  assert.equal(m.roundHalfEven('7', 2), '7.00');
  assert.equal(m.roundHalfEven('7.5', 3), '7.500');
});
test('carries across digits', () => {
  assert.equal(m.roundHalfEven('1.999', 2), '2.00');
});
test('a tie with an odd digit before it rounds up', () => {
  assert.equal(m.roundHalfEven('2.675', 2), '2.68');
});
test('rejects text that is not a decimal', () => {
  assert.throws(() => m.roundHalfEven('abc', 2));
});
