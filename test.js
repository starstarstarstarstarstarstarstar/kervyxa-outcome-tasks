const test = require('node:test');
const assert = require('node:assert/strict');
const { formatBytes } = require('./bytes.js');
test('small values are whole bytes', () => {
  assert.equal(formatBytes(0), '0 B');
  assert.equal(formatBytes(512), '512 B');
  assert.equal(formatBytes(1023), '1023 B');
});
test('kibibytes with one decimal', () => {
  assert.equal(formatBytes(1024), '1.0 KiB');
  assert.equal(formatBytes(1536), '1.5 KiB');
});
test('mebibytes and gibibytes', () => {
  assert.equal(formatBytes(1048576), '1.0 MiB');
  assert.equal(formatBytes(5 * 1024 * 1024 * 1024), '5.0 GiB');
});
test('negative input throws RangeError', () => {
  assert.throws(() => formatBytes(-1), RangeError);
});
