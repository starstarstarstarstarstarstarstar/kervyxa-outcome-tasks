const test = require('node:test');
const assert = require('node:assert/strict');
const { sort } = require('./topo.js');
test('dependencies come first', () => {
  assert.deepEqual(sort({ a: ['b'], b: [] }), ['b', 'a']);
});
test('order follows key order and listed order', () => {
  assert.deepEqual(sort({ app: ['lib', 'util'], lib: ['util'], util: [] }), ['util', 'lib', 'app']);
});
test('independent nodes keep key order', () => {
  assert.deepEqual(sort({ x: [], y: [], z: [] }), ['x', 'y', 'z']);
});
test('a name that is only a dependency is still listed', () => {
  assert.deepEqual(sort({ a: ['b'] }), ['b', 'a']);
});
test('a cycle between two nodes throws an error that mentions cycle', () => {
  assert.throws(() => sort({ a: ['b'], b: ['a'] }), /cycle/);
});
