"use strict";

// Greatest common divisor of two integers.
function gcd(a, b) {
  while (b !== 0) [a, b] = [b, a % b];
  return a;
}

// Least common multiple of two integers.
function lcm(a, b) {
  if (a === 0 && b === 0) return 0;
  return (a * b) / gcd(a, b);
}

function gcdAll(list) {
  return list.reduce((acc, x) => gcd(acc, x), 0);
}

function lcmAll(list) {
  return list.reduce((acc, x) => lcm(acc, x), 1);
}

module.exports = { gcd, lcm, gcdAll, lcmAll };
