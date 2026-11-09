"use strict";

// Compare two arrays as multisets. Order: added follows b, removed and kept follow a.
function arrayDiff(a, b) {
  const added = b.filter((x) => !a.includes(x));
  const removed = a.filter((x) => !b.includes(x));
  const kept = a.filter((x) => b.includes(x));
  return { added, removed, kept };
}

module.exports = { arrayDiff };
