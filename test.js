const test = require('node:test');
const assert = require('node:assert/strict');
const m = require('./heading-ids.js');

test('single heading', () => {
  assert.deepEqual(m.headingIds('# Intro'), [{ level: 1, text: 'Intro', id: 'intro' }]);
});
test('levels are counted', () => {
  assert.deepEqual(m.headingIds('## A\n### B').map((h) => h.level), [2, 3]);
});
test('punctuation is removed and spaces become hyphens', () => {
  assert.equal(m.headingIds('# Hello, World!')[0].id, 'hello-world');
  assert.equal(m.headingIds('# C++ & Go')[0].id, 'c--go');
});
test('lines without a space after the hashes are not headings', () => {
  assert.deepEqual(m.headingIds('#NoSpace\ntext'), []);
});
test('different headings keep their own ids', () => {
  assert.deepEqual(m.headingIds('# One\n# Two').map((h) => h.id), ['one', 'two']);
});
