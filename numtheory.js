"use strict";

// Greatest common divisor of two integers. The result is never negative.
function gcd(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b !== 0) [a, b] = [b, a % b];
  return a;
}

// Least common multiple of two integers. The result is never negative, and 0 if either is 0.
function lcm(a, b) {
  if (a === 0 || b === 0) return 0;
  return Math.abs(a * b) / gcd(a, b);
}

function gcdAll(list) {
  return list.reduce((acc, x) => gcd(acc, x), 0);
}

function lcmAll(list) {
  return list.reduce((acc, x) => lcm(acc, x), 1);
}

module.exports = { gcd, lcm, gcdAll, lcmAll };
