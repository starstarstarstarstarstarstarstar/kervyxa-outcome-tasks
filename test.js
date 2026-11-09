const test = require('node:test');
const assert = require('node:assert/strict');
const { toRoman, fromRoman } = require('./roman.js');
test('small numbers', () => {
  assert.equal(toRoman(1), 'I');
  assert.equal(toRoman(3), 'III');
  assert.equal(toRoman(4), 'IV');
  assert.equal(toRoman(9), 'IX');
});
test('tens and hundreds with subtractive forms', () => {
  assert.equal(toRoman(40), 'XL');
  assert.equal(toRoman(90), 'XC');
  assert.equal(toRoman(400), 'CD');
  assert.equal(toRoman(58), 'LVIII');
});
test('large numbers', () => {
  assert.equal(toRoman(1444), 'MCDXLIV');
  assert.equal(toRoman(2024), 'MMXXIV');
});
test('numbers outside 1 to 3999 throw RangeError', () => {
  assert.throws(() => toRoman(0), RangeError);
  assert.throws(() => toRoman(4000), RangeError);
});
test('fromRoman reads subtractive forms', () => {
  assert.equal(fromRoman('XLII'), 42);
  assert.equal(fromRoman('MCMXCIV'), 1994);
});
