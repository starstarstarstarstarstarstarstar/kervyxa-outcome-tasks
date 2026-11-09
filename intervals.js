'use strict';
function merge(list) {
  const items = list.map((pair) => {
    if (!Array.isArray(pair) || pair.length !== 2 || pair[0] > pair[1]) {
      throw new RangeError('each interval must be [start, end] with start <= end');
    }
    return [pair[0], pair[1]];
  });
  items.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  const out = [];
  for (const item of items) {
    const last = out[out.length - 1];
    if (last && item[0] < last[1]) {
      last[1] = Math.max(last[1], item[1]);
    } else {
      out.push(item);
    }
  }
  return out;
}
module.exports = { merge };
