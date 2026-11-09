"use strict";

function ordinal(n) {
  if (!Number.isInteger(n) || n < 0) {
    throw new TypeError("n must be a non-negative integer");
  }
  const lastTwo = n % 100;
  const last = n % 10;
  let suffix = "th";
  if (lastTwo < 11 || lastTwo > 13) {
    if (last === 1) suffix = "st";
    else if (last === 2) suffix = "nd";
    else if (last === 3) suffix = "rd";
  }
  return n + suffix;
}

module.exports = { ordinal };
