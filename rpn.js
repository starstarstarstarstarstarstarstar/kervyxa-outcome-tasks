"use strict";

const OPS = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
};

// Evaluate a reverse Polish expression written with spaces between tokens.
function evaluate(expr) {
  const stack = [];
  for (const tok of expr.split(/\s+/).filter(Boolean)) {
    if (Object.prototype.hasOwnProperty.call(OPS, tok)) {
      if (stack.length < 2) throw new Error("not enough operands for " + tok);
      const b = stack.pop();
      const a = stack.pop();
      if (tok === "/" && b === 0) throw new Error("division by zero");
      stack.push(OPS[tok](a, b));
    } else {
      const n = Number(tok);
      if (Number.isNaN(n)) throw new Error("unknown token " + tok);
      stack.push(n);
    }
  }
  if (stack.length !== 1) throw new Error("expected exactly one result, found " + stack.length);
  return stack[0];
}

module.exports = { evaluate };
