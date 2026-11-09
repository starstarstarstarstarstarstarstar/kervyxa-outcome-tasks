"use strict";

// Remove duplicates by key. key is a property name or a function.
function uniqueBy(items, key) {
  const getKey = typeof key === "function" ? key : (item) => item[key];
  const seen = new Map();
  for (const item of items) {
    seen.set(getKey(item), item);
  }
  return [...seen.values()];
}

module.exports = { uniqueBy };
