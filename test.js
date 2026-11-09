const test = require('node:test');
const assert = require('node:assert/strict');
const { get } = require('./pointer.js');
const doc = { a: { b: [10, 20] }, 'x/y': 1, 'm~n': 2, '': 3 };
test('empty pointer is the whole document', () => {
  assert.equal(get(doc, ''), doc);
});
test('nested keys and array index', () => {
  assert.equal(get(doc, '/a/b/1'), 20);
});
test('~1 is a slash and ~0 is a tilde', () => {
  assert.equal(get(doc, '/x~1y'), 1);
  assert.equal(get(doc, '/m~0n'), 2);
});
test('slash alone is the empty key', () => {
  assert.equal(get(doc, '/'), 3);
});
test('missing paths give undefined', () => {
  assert.equal(get(doc, '/nope'), undefined);
  assert.equal(get(doc, '/a/b/5'), undefined);
});
test('a pointer without a leading slash throws SyntaxError', () => {
  assert.throws(() => get(doc, 'a'), SyntaxError);
});
