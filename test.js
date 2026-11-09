const test = require('node:test');
const assert = require('node:assert/strict');
const m = require('./tsv.js');

test('rows become objects', () => {
  assert.deepEqual(m.parseTsv('a\tb\n1\t2\n3\t4'), [{ a: '1', b: '2' }, { a: '3', b: '4' }]);
});
test('header only gives no rows', () => {
  assert.deepEqual(m.parseTsv('a\tb\n'), []);
  assert.deepEqual(m.parseTsv(''), []);
});
test('missing trailing cells become empty text', () => {
  assert.deepEqual(m.parseTsv('a\tb\n1'), [{ a: '1', b: '' }]);
});
test('windows line endings are handled', () => {
  assert.deepEqual(m.parseTsv('a\tb\r\n1\t2\r\n'), [{ a: '1', b: '2' }]);
});
test('blank lines are skipped', () => {
  assert.deepEqual(m.parseTsv('a\n1\n\n2\n'), [{ a: '1' }, { a: '2' }]);
});
