const test = require('node:test');
const assert = require('node:assert/strict');
const { isValid } = require('./isbn.js');
test('a valid ISBN-10 with digits only', () => {
  assert.equal(isValid('0306406152'), true);
});
test('a wrong ISBN-10 check digit fails', () => {
  assert.equal(isValid('0306406153'), false);
});
test('hyphens and spaces are ignored', () => {
  assert.equal(isValid('0-306-40615-2'), true);
  assert.equal(isValid('978 0 306 40615 7'), true);
});
test('a valid ISBN-13', () => {
  assert.equal(isValid('9780306406157'), true);
  assert.equal(isValid('9780306406158'), false);
});
test('wrong lengths and letters fail', () => {
  assert.equal(isValid('12345'), false);
  assert.equal(isValid('03064O6152'), false);
});
