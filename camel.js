'use strict';
function toCamel(text) {
  const words = String(text)
    .split(/[_\-\s]+/)
    .filter(Boolean);
  return words
    .map((w, i) => (i === 0 ? w.toLowerCase() : w[0].toUpperCase() + w.slice(1)))
    .join('');
}
module.exports = { toCamel };
