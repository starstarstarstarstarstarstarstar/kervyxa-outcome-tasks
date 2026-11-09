const test = require('node:test');
const assert = require('node:assert/strict');
const { toCamel } = require('./camel.js');
test('snake case', () => {
  assert.equal(toCamel('hello_world'), 'helloWorld');
});
test('kebab case and spaces', () => {
  assert.equal(toCamel('my-var-name'), 'myVarName');
  assert.equal(toCamel('some text here'), 'someTextHere');
});
test('the first word is lower case', () => {
  assert.equal(toCamel('Hello_World'), 'helloWorld');
});
test('digits are kept', () => {
  assert.equal(toCamel('item_2_name'), 'item2Name');
});
test('empty text and repeated separators', () => {
  assert.equal(toCamel(''), '');
  assert.equal(toCamel('a__b--c'), 'aBC');
});
