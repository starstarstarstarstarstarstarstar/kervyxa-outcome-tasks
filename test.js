const test = require('node:test');
const assert = require('node:assert/strict');
const { hexToRgb, rgbToHex } = require('./color.js');
test('six digit hex', () => {
  assert.deepEqual(hexToRgb('#ff8000'), { r: 255, g: 128, b: 0 });
});
test('three digit hex expands each digit', () => {
  assert.deepEqual(hexToRgb('#fff'), { r: 255, g: 255, b: 255 });
  assert.deepEqual(hexToRgb('#ABC'), { r: 170, g: 187, b: 204 });
});
test('bad hex throws TypeError', () => {
  assert.throws(() => hexToRgb('ff8000'), TypeError);
  assert.throws(() => hexToRgb('#ggg'), TypeError);
});
test('rgb to hex with two digit channels', () => {
  assert.equal(rgbToHex(255, 255, 255), '#ffffff');
  assert.equal(rgbToHex(171, 205, 239), '#abcdef');
});
test('channels outside 0 to 255 throw RangeError', () => {
  assert.throws(() => rgbToHex(256, 0, 0), RangeError);
  assert.throws(() => rgbToHex(0, -1, 0), RangeError);
});
