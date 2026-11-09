const test = require('node:test');
const assert = require('node:assert/strict');
const m = require('./cron-field.js');

test('star with a step from zero', () => {
  assert.deepEqual(m.parseField('*/15', 0, 59), [0, 15, 30, 45]);
});
test('plain list', () => {
  assert.deepEqual(m.parseField('1,3', 0, 59), [1, 3]);
});
test('range', () => {
  assert.deepEqual(m.parseField('1-5', 0, 59), [1, 2, 3, 4, 5]);
});
test('list is sorted and unique', () => {
  assert.deepEqual(m.parseField('3,1,3', 0, 59), [1, 3]);
});
test('range with a step that starts on a multiple', () => {
  assert.deepEqual(m.parseField('0-30/10', 0, 59), [0, 10, 20, 30]);
});
test('out of range value throws', () => {
  assert.throws(() => m.parseField('60', 0, 59), RangeError);
});
