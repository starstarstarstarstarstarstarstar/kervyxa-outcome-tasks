const test = require('node:test');
const assert = require('node:assert/strict');
const { splitLine } = require('./csv.js');
test('plain fields', () => {
  assert.deepEqual(splitLine('a,b,c'), ['a', 'b', 'c']);
});
test('quoted field with a comma', () => {
  assert.deepEqual(splitLine('"a,b",c'), ['a,b', 'c']);
});
test('empty fields', () => {
  assert.deepEqual(splitLine('a,,c'), ['a', '', 'c']);
  assert.deepEqual(splitLine('a,'), ['a', '']);
});
test('empty line gives one empty field', () => {
  assert.deepEqual(splitLine(''), ['']);
});
test('quotes around spaces keep the spaces', () => {
  assert.deepEqual(splitLine('" a ",b'), [' a ', 'b']);
});
