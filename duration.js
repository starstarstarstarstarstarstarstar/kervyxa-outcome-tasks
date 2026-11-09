'use strict';
function format(seconds) {
  if (typeof seconds !== 'number' || !Number.isFinite(seconds) || seconds < 0) {
    throw new RangeError('seconds must be a number of zero or more');
  }
  const total = Math.floor(seconds);
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  const parts = [];
  if (h > 0) parts.push(h + 'h');
  if (m > 0) parts.push(m + 'm');
  if (s > 0) parts.push(s + 's');
  return parts.length === 0 ? '0s' : parts.join(' ');
}
module.exports = { format };
