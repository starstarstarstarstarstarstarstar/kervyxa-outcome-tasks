'use strict';
function wrapLine(line, width) {
  const words = line.split(/\s+/).filter(Boolean);
  const lines = [];
  let cur = '';
  for (const word of words) {
    if (cur === '') cur = word;
    else if (cur.length + 1 + word.length <= width) cur += ' ' + word;
    else {
      lines.push(cur);
      cur = word;
    }
  }
  if (cur !== '') lines.push(cur);
  return lines.join('\n');
}
function wrap(text, width) {
  if (!Number.isInteger(width) || width < 1) {
    throw new RangeError('width must be a whole number of 1 or more');
  }
  return wrapLine(String(text), width);
}
module.exports = { wrap };
