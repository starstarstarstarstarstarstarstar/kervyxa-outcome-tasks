const test = require('node:test');
const assert = require('node:assert/strict');
const m = require('./posix-path.js');

test('removes dot segments', () => {
  assert.equal(m.normalize('a/./b'), 'a/b');
});
test('resolves parent segments', () => {
  assert.equal(m.normalize('a/b/../c'), 'a/c');
});
test('keeps leading parents on relative paths', () => {
  assert.equal(m.normalize('../a'), '../a');
});
test('empty and fully cancelled paths give a dot', () => {
  assert.equal(m.normalize(''), '.');
  assert.equal(m.normalize('a/..'), '.');
});
test('merges repeated slashes and drops the trailing one', () => {
  assert.equal(m.normalize('/a//b/'), '/a/b');
});
