const test = require('node:test');
const assert = require('node:assert/strict');
const m = require('./text-table.js');

test('empty input gives an empty string', () => {
  assert.equal(m.table([]), '');
});
test('equal widths need no padding', () => {
  assert.equal(m.table([['a', 'b'], ['c', 'd']]), 'a | b\nc | d');
});
test('header that is widest sets the width', () => {
  assert.equal(m.table([['name', 'age'], ['Al', '9']]), 'name | age\nAl   | 9');
});
test('numbers are shown as text', () => {
  assert.equal(m.table([['n'], [12]]), 'n\n12');
});
test('trailing spaces are removed', () => {
  assert.equal(m.table([['ab', 'x'], ['c']]), 'ab | x\nc');
});
