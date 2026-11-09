"use strict";

// Compare two arrays as multisets. Order: added follows b, removed and kept follow a.
function arrayDiff(a, b) {
  const left = new Map();
  for (const x of b) left.set(x, (left.get(x) || 0) + 1);
  const kept = [];
  const removed = [];
  for (const x of a) {
    const c = left.get(x) || 0;
    if (c > 0) {
      kept.push(x);
      left.set(x, c - 1);
    } else {
      removed.push(x);
    }
  }
  const added = [];
  for (const x of b) {
    const c = left.get(x) || 0;
    if (c > 0) {
      added.push(x);
      left.set(x, c - 1);
    }
  }
  return { added, removed, kept };
}

module.exports = { arrayDiff };
