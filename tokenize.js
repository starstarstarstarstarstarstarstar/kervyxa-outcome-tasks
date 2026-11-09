"use strict";

const OPERATORS = "+-*/^";

// Split an arithmetic expression into string tokens: numbers, operators and parentheses.
function tokenize(src) {
  const out = [];
  let i = 0;
  while (i < src.length) {
    const ch = src[i];
    if (/\s/.test(ch)) {
      i++;
    } else if (/[0-9.]/.test(ch)) {
      let j = i;
      while (j < src.length && /[0-9.]/.test(src[j])) j++;
      out.push(src.slice(i, j));
      i = j;
    } else if (OPERATORS.includes(ch) || ch === "(" || ch === ")") {
      out.push(ch);
      i++;
    } else {
      throw new Error("unexpected character " + ch);
    }
  }
  return out;
}

module.exports = { tokenize };
