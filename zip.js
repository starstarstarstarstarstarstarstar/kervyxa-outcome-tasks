"use strict";

// Zip arrays position by position. Shorter arrays are padded with fill.
function zipLongest(arrays, fill = null) {
  const length = Math.max(0, ...arrays.map((a) => a.length));
  const out = [];
  for (let i = 0; i < length; i++) {
    out.push(arrays.map((a) => a[i] || fill));
  }
  return out;
}

module.exports = { zipLongest };
