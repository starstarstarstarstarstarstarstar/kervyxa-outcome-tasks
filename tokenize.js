"use strict";

const OPERATORS = "+-*/^";

// Split an arithmetic expression into string tokens: numbers, operators and parentheses.
// A minus sign in unary position, directly before a number, is part of that number.
function tokenize(src) {
  const out = [];
  let i = 0;
  while (i < src.length) {
    const ch = src[i];
    const last = out.length ? out[out.length - 1] : null;
    const unary = last === null || last === "(" || OPERATORS.includes(last);
    if (/\s/.test(ch)) {
      i++;
    } else if (/[0-9.]/.test(ch) || (ch === "-" && unary && /[0-9.]/.test(src[i + 1] || ""))) {
      let j = i + 1;
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
