const test = require('node:test');
const assert = require('node:assert/strict');
const m = require('./ipv4.js');

test('parses a normal address', () => {
  assert.deepEqual(m.parseIpv4('1.2.3.4'), [1, 2, 3, 4]);
  assert.deepEqual(m.parseIpv4('255.255.255.255'), [255, 255, 255, 255]);
});
test('accepts zeros', () => {
  assert.deepEqual(m.parseIpv4('0.0.0.0'), [0, 0, 0, 0]);
});
test('rejects the wrong number of parts', () => {
  assert.equal(m.parseIpv4('1.2.3'), null);
  assert.equal(m.parseIpv4('1.2.3.4.5'), null);
});
test('rejects out of range and non numbers', () => {
  assert.equal(m.parseIpv4('256.1.1.1'), null);
  assert.equal(m.parseIpv4('a.b.c.d'), null);
  assert.equal(m.parseIpv4(' 1.2.3.4'), null);
});
test('ipv4ToInt gives an unsigned number', () => {
  assert.equal(m.ipv4ToInt('255.255.255.255'), 4294967295);
  assert.equal(m.ipv4ToInt('0.0.1.0'), 256);
});
