const test = require('node:test');
const assert = require('node:assert/strict');
const m = require('./b64url.js');

test('encodes text without padding', () => {
  assert.equal(m.encode('hello'), 'aGVsbG8');
  assert.equal(m.encode('a'), 'YQ');
});
test('empty input gives an empty string', () => {
  assert.equal(m.encode(''), '');
});
test('decodes text', () => {
  assert.equal(m.decode('aGVsbG8').toString('utf8'), 'hello');
});
test('decode accepts padded input', () => {
  assert.equal(m.decode('YQ==').toString('utf8'), 'a');
});
test('one special character is swapped', () => {
  assert.equal(m.encode(Buffer.from([0xfb, 0xff])), '-_8');
  assert.deepEqual([...m.decode('-_8')], [0xfb, 0xff]);
});
