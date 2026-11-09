"use strict";

// ISO 8601 week number for a calendar date (month is 1-12).
function isoWeek(year, month, day) {
  const dt = new Date(Date.UTC(year, month - 1, day));
  const dow = dt.getUTCDay() || 7;
  dt.setUTCDate(dt.getUTCDate() + 4 - dow);
  const jan1 = Date.UTC(dt.getUTCFullYear(), 0, 1);
  const week = Math.ceil(((dt.getTime() - jan1) / 86400000 + 1) / 7);
  return { year: dt.getUTCFullYear(), week };
}

module.exports = { isoWeek };
