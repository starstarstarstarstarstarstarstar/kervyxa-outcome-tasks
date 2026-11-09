const test = require('node:test');
const assert = require('node:assert/strict');
const m = require('./deep-merge.js');

test('merges nested objects', () => {
  assert.deepEqual(m.deepMerge({ a: { x: 1, y: 2 } }, { a: { y: 3, z: 4 } }), { a: { x: 1, y: 3, z: 4 } });
});
test('scalar from b wins', () => {
  assert.equal(m.deepMerge({ n: 1 }, { n: 2 }).n, 2);
});
test('inputs are not changed', () => {
  const a = { o: { x: 1 } };
  const b = { o: { y: 2 } };
  m.deepMerge(a, b);
  assert.deepEqual(a, { o: { x: 1 } });
  assert.deepEqual(b, { o: { y: 2 } });
});
test('prototype keys are skipped', () => {
  const r = m.deepMerge({}, JSON.parse('{"__proto__":{"bad":1}}'));
  assert.equal(r.bad, undefined);
  assert.equal({}.bad, undefined);
});
test('keys only in a are kept', () => {
  assert.deepEqual(m.deepMerge({ a: 1 }, { b: 2 }), { a: 1, b: 2 });
});
