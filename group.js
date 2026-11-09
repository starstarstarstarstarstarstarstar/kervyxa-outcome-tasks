"use strict";

// Group items by the string form of keyFn(item). Keys appear in first-seen order.
function groupBy(items, keyFn) {
  const out = {};
  for (const item of items) {
    const k = String(keyFn(item));
    if (!Object.prototype.hasOwnProperty.call(out, k)) {
      Object.defineProperty(out, k, { value: [], enumerable: true, writable: true, configurable: true });
    }
    out[k].push(item);
  }
  return out;
}

module.exports = { groupBy };
