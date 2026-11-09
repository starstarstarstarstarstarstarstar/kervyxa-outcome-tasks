const test = require('node:test');
const assert = require('node:assert/strict');
const m = require('./lru-cache.js');

test('stores and reads values', () => {
  const c = new m.LRUCache(2);
  c.set('a', 1).set('b', 2);
  assert.equal(c.get('a'), 1);
  assert.equal(c.get('b'), 2);
});
test('miss returns undefined', () => {
  assert.equal(new m.LRUCache(2).get('x'), undefined);
});
test('evicts the oldest entry when full', () => {
  const c = new m.LRUCache(2);
  c.set('a', 1).set('b', 2).set('c', 3);
  assert.equal(c.has('a'), false);
  assert.equal(c.size, 2);
});
test('set on an existing key updates it and makes it newest', () => {
  const c = new m.LRUCache(2);
  c.set('a', 1).set('b', 2).set('a', 9).set('c', 3);
  assert.equal(c.get('a'), 9);
  assert.equal(c.has('b'), false);
});
test('capacity must be a positive integer', () => {
  assert.throws(() => new m.LRUCache(0), RangeError);
});
