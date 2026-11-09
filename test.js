const test = require('node:test');
const assert = require('node:assert/strict');
const { match } = require('./glob.js');
test('star matches inside one name', () => {
  assert.equal(match('*.js', 'a.js'), true);
  assert.equal(match('a*', 'abc'), true);
  assert.equal(match('*.js', 'a.ts'), false);
});
test('question mark matches one character', () => {
  assert.equal(match('a?c', 'abc'), true);
  assert.equal(match('a?c', 'ac'), false);
});
test('dots in patterns are plain dots', () => {
  assert.equal(match('a.c', 'abc'), false);
  assert.equal(match('a.c', 'a.c'), true);
});
test('paths without wildcards must match exactly', () => {
  assert.equal(match('src/a.js', 'src/a.js'), true);
  assert.equal(match('src/a.js', 'src/b.js'), false);
});
test('question mark does not match a slash', () => {
  assert.equal(match('a?b', 'a/b'), false);
});
