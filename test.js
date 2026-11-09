const test = require('node:test');
const assert = require('node:assert/strict');
const m = require('./uuid-check.js');

test('accepts a version 4 id', () => {
  assert.equal(m.isUuid('550e8400-e29b-41d4-a716-446655440000'), true);
});
test('accepts upper case', () => {
  assert.equal(m.isUuid('550E8400-E29B-41D4-A716-446655440000'), true);
});
test('rejects wrong length and non strings', () => {
  assert.equal(m.isUuid('550e8400-e29b-41d4-a716-44665544000'), false);
  assert.equal(m.isUuid(null), false);
});
test('rejects version 6', () => {
  assert.equal(m.isUuid('550e8400-e29b-61d4-a716-446655440000'), false);
});
test('uuidVersion reads the version', () => {
  assert.equal(m.uuidVersion('550e8400-e29b-41d4-a716-446655440000'), 4);
  assert.equal(m.uuidVersion('nope'), null);
});
