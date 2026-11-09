const test = require('node:test');
const assert = require('node:assert/strict');
const { compare } = require('./semver.js');
test('compares core numbers numerically', () => {
  assert.equal(compare('1.2.3', '1.10.0'), -1);
  assert.equal(compare('2.0.0', '1.99.99'), 1);
});
test('equal versions return 0', () => {
  assert.equal(compare('1.2.3', '1.2.3'), 0);
});
test('a release is higher than its prerelease', () => {
  assert.equal(compare('1.0.0', '1.0.0-rc.1'), 1);
  assert.equal(compare('1.0.0-rc.1', '1.0.0'), -1);
});
test('letters in prerelease compare in order', () => {
  assert.equal(compare('1.0.0-alpha', '1.0.0-beta'), -1);
  assert.equal(compare('1.0.0-alpha', '1.0.0-alpha.1'), -1);
});
test('build metadata is ignored', () => {
  assert.equal(compare('1.0.0+a', '1.0.0+b'), 0);
});
