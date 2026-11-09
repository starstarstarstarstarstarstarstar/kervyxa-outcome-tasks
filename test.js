const test = require('node:test');
const assert = require('node:assert/strict');
const { isValid } = require('./luhn.js');
test('a valid 16 digit number', () => {
  assert.equal(isValid('4539148803436467'), true);
});
test('a wrong check digit fails', () => {
  assert.equal(isValid('4539148803436468'), false);
});
test('spaces are ignored', () => {
  assert.equal(isValid('4539 1488 0343 6467'), true);
});
test('letters fail', () => {
  assert.equal(isValid('4539a48803436467'), false);
});
test('fewer than two digits fail', () => {
  assert.equal(isValid('0'), false);
  assert.equal(isValid(''), false);
});
