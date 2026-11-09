'use strict';
const UNITS = ['B', 'KiB', 'MiB', 'GiB', 'TiB'];
function formatBytes(n) {
  if (typeof n !== 'number' || !Number.isFinite(n) || n < 0) {
    throw new RangeError('bytes must be a number of zero or more');
  }
  if (n < 1024) return Math.floor(n) + ' B';
  let value = n;
  let unit = 0;
  while (value >= 1024 && unit < UNITS.length - 1) {
    value /= 1024;
    unit++;
  }
  return value.toFixed(1) + ' ' + UNITS[unit];
}
module.exports = { formatBytes };
