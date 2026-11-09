const test = require('node:test');
const assert = require('node:assert/strict');
const m = require('./cidr.js');

test('address inside a /24', () => {
  assert.equal(m.contains('192.168.1.0/24', '192.168.1.200'), true);
});
test('address outside a /24', () => {
  assert.equal(m.contains('192.168.1.0/24', '192.168.2.1'), false);
});
test('a /8 block', () => {
  assert.equal(m.contains('10.0.0.0/8', '10.255.255.255'), true);
  assert.equal(m.contains('10.0.0.0/8', '11.0.0.0'), false);
});
test('a /32 block matches one address', () => {
  assert.equal(m.contains('1.2.3.4/32', '1.2.3.4'), true);
  assert.equal(m.contains('1.2.3.4/32', '1.2.3.5'), false);
});
test('invalid input gives false', () => {
  assert.equal(m.contains('1.2.3.4/33', '1.2.3.4'), false);
  assert.equal(m.contains('1.2.3.4', '1.2.3.4'), false);
  assert.equal(m.contains('1.2.3.0/24', 'nope'), false);
});
