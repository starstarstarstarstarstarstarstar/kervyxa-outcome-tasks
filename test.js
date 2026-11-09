const test = require('node:test');
const assert = require('node:assert/strict');
const m = require('./ini.js');

test('top level keys', () => {
  assert.deepEqual(m.parseIni('a = 1\nb=two'), { a: '1', b: 'two' });
});
test('sections nest keys', () => {
  assert.deepEqual(m.parseIni('x=1\n[db]\nhost = h\nport = 5'), { x: '1', db: { host: 'h', port: '5' } });
});
test('full line comments are skipped', () => {
  assert.deepEqual(m.parseIni('; note\n# other\na = 1'), { a: '1' });
});
test('inline comments are cut from plain values', () => {
  assert.equal(m.parseIni('a = 1 ; note').a, '1');
  assert.equal(m.parseIni('a = 1 # note').a, '1');
});
test('only the first equals sign splits', () => {
  assert.equal(m.parseIni('a=b=c').a, 'b=c');
});
