const test = require('node:test');
const assert = require('node:assert/strict');
const { format } = require('./duration.js');
test('hours minutes and seconds', () => {
  assert.equal(format(3723), '1h 2m 3s');
});
test('zero parts are left out', () => {
  assert.equal(format(3600), '1h');
  assert.equal(format(3601), '1h 1s');
  assert.equal(format(7260), '2h 1m');
});
test('under a minute', () => {
  assert.equal(format(45), '45s');
});
test('hours can be above 24', () => {
  assert.equal(format(90000), '25h');
});
test('negative and non-number input throws RangeError', () => {
  assert.throws(() => format(-1), RangeError);
  assert.throws(() => format('5'), RangeError);
});
