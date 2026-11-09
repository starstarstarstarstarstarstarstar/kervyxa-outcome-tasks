"use strict";

function gcd(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b !== 0) [a, b] = [b, a % b];
  return a;
}

// Reduce n/d to lowest terms and return [numerator, denominator].
// The denominator is always positive and the sign sits on the numerator.
function reduce(n, d) {
  if (d === 0) throw new Error("denominator is zero");
  const g = gcd(n, d);
  n = n / g;
  d = d / g;
  if (d < 0) {
    n = 0 - n;
    d = 0 - d;
  }
  return [n, d];
}

// Add two fractions given as [numerator, denominator] pairs.
function add(a, b) {
  return reduce(a[0] * b[1] + b[0] * a[1], a[1] * b[1]);
}

module.exports = { reduce, add };
