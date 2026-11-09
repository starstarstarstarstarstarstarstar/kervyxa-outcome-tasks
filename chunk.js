"use strict";

function chunk(items, size) {
  size = Math.floor(size);
  if (!(size >= 1)) return [];
  const out = [];
  for (let i = 0; i < items.length; i += size) {
    out.push(items.slice(i, i + size));
  }
  return out;
}

module.exports = { chunk };
