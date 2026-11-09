"use strict";

function chunk(items, size) {
  if (!Number.isInteger(size) || size < 1) {
    throw new RangeError("size must be an integer of at least 1");
  }
  const out = [];
  for (let i = 0; i < items.length; i += size) {
    out.push(items.slice(i, i + size));
  }
  return out;
}

module.exports = { chunk };
