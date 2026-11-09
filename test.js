const test = require('node:test');
const assert = require('node:assert/strict');
const { slugify } = require('./slug.js');
test('lowers case and joins words with a hyphen', () => {
  assert.equal(slugify('Hello World'), 'hello-world');
});
test('removes accents', () => {
  assert.equal(slugify('Caf\u00e9'), 'cafe');
  assert.equal(slugify('Cr\u00e8me'), 'creme');
});
test('keeps digits', () => {
  assert.equal(slugify('Top 10 Tips'), 'top-10-tips');
});
test('keeps an existing slug as it is', () => {
  assert.equal(slugify('already-a-slug'), 'already-a-slug');
});
test('empty text gives an empty slug', () => {
  assert.equal(slugify(''), '');
});
