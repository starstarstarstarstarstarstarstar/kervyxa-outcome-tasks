"use strict";

// Remove duplicates by key. key is a property name or a function.
function uniqueBy(items, key) {
  const getKey = typeof key === "function" ? key : (item) => item[key];
  const seen = new Map();
  for (const item of items) {
    const k = getKey(item);
    if (!seen.has(k)) seen.set(k, item);
  }
  return [...seen.values()];
}

module.exports = { uniqueBy };
