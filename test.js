const test = require('node:test');
const assert = require('node:assert/strict');
const m = require('./html-escape.js');

test('escapes the five characters', () => {
  assert.equal(m.escapeHtml('<a href="x">T&C\'s</a>'), '&lt;a href=&quot;x&quot;&gt;T&amp;C&#39;s&lt;/a&gt;');
});
test('plain text is unchanged', () => {
  assert.equal(m.escapeHtml('hello world'), 'hello world');
});
test('turns other values into text', () => {
  assert.equal(m.escapeHtml(12), '12');
});
test('escapes an existing entity by default', () => {
  assert.equal(m.escapeHtml('&amp;'), '&amp;amp;');
});
test('preserveEntities keeps named entities', () => {
  assert.equal(m.escapeHtml('&amp; <b>', { preserveEntities: true }), '&amp; &lt;b&gt;');
  assert.equal(m.escapeHtml('a & b', { preserveEntities: true }), 'a &amp; b');
});
