'use strict';
function parsePages(text) {
  const set = new Set();
  for (const raw of String(text).split(',')) {
    const part = raw.trim();
    if (part === '') continue;
    const m = /^(\d+)\s*-\s*(\d+)$/.exec(part);
    if (m) {
      const a = Number(m[1]);
      const b = Number(m[2]);
      if (a > b) throw new RangeError('reversed range: ' + part);
      for (let p = a; p <= b; p++) set.add(p);
    } else if (/^\d+$/.test(part)) {
      set.add(Number(part));
    } else {
      throw new SyntaxError('bad page: ' + part);
    }
  }
  return Array.from(set).sort();
}
module.exports = { parsePages };
