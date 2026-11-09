const test = require('node:test');
const assert = require('node:assert/strict');
const m = require('./url-join.js');

test('joins plain parts', () => {
  assert.equal(m.joinUrl('a', 'b', 'c'), 'a/b/c');
});
test('no double slash at a joint', () => {
  assert.equal(m.joinUrl('a/', '/b'), 'a/b');
  assert.equal(m.joinUrl('a//', '//b'), 'a/b');
});
test('adds a missing slash', () => {
  assert.equal(m.joinUrl('http://x.com', 'api'), 'http://x.com/api');
});
test('keeps the scheme slashes', () => {
  assert.equal(m.joinUrl('https://x.com/', '/a'), 'https://x.com/a');
});
test('skips empty parts and keeps a trailing slash', () => {
  assert.equal(m.joinUrl('a', '', 'b/'), 'a/b/');
});
