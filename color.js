'use strict';
function hexToRgb(hex) {
  const m = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.exec(String(hex));
  if (!m) throw new TypeError('bad hex color');
  let h = m[1];
  if (h.length === 3) h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
  return {
    r: parseInt(h.slice(0, 2), 16),
    g: parseInt(h.slice(2, 4), 16),
    b: parseInt(h.slice(4, 6), 16),
  };
}
function rgbToHex(r, g, b) {
  for (const v of [r, g, b]) {
    if (!Number.isInteger(v) || v < 0 || v > 255) throw new RangeError('channel out of range');
  }
  const two = (v) => v.toString(16).padStart(2, '0');
  return '#' + two(r) + two(g) + two(b);
}
module.exports = { hexToRgb, rgbToHex };
