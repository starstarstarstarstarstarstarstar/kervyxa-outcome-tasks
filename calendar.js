"use strict";

function isLeapYear(year) {
  return year % 4 === 0;
}

function daysInMonth(year, month) {
  if (!Number.isInteger(month) || month < 1 || month > 12) {
    throw new RangeError("month must be 1 to 12");
  }
  if (month === 2) return isLeapYear(year) ? 29 : 28;
  return [4, 6, 9, 11].includes(month) ? 30 : 31;
}

module.exports = { isLeapYear, daysInMonth };
