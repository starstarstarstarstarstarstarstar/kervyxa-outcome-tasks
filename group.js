"use strict";

// Group items by the string form of keyFn(item). Keys appear in first-seen order.
function groupBy(items, keyFn) {
  const out = {};
  for (const item of items) {
    const k = String(keyFn(item));
    out[k] = out[k] || [];
    out[k].push(item);
  }
  return out;
}

module.exports = { groupBy };
