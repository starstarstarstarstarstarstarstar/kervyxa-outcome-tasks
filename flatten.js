"use strict";

function flattenDepth(items, depth = 1) {
  const out = [];
  for (const item of items) {
    if (Array.isArray(item) && depth >= 0) {
      out.push(...flattenDepth(item, depth - 1));
    } else {
      out.push(item);
    }
  }
  return out;
}

module.exports = { flattenDepth };
