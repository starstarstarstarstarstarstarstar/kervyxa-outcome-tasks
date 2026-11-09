"use strict";

const CLOSERS = { ")": "(", "]": "[", "}": "{" };
const OPENERS = new Set(["(", "[", "{"]);

// Returns the index of the first bracket error in text, or -1 when brackets are balanced.
// A closer that does not match counts at its own index. An opener never closed counts at its own index.
function firstError(text) {
  const stack = [];
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (OPENERS.has(ch)) {
      stack.push({ ch, index: i });
    } else if (CLOSERS[ch]) {
      if (stack.length === 0) return i;
      const top = stack.pop();
      if (top.ch !== CLOSERS[ch]) return i;
    }
  }
  return stack.length > 0 ? stack[0].index : -1;
}

module.exports = { firstError };
