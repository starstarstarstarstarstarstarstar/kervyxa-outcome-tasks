"use strict";

// Group words that use the same letters. Groups and words keep first-seen order.
function groupAnagrams(words) {
  const groups = new Map();
  for (const w of words) {
    const key = w.split("").sort().join("");
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(w);
  }
  return [...groups.values()];
}

module.exports = { groupAnagrams };
