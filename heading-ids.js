function slug(t) {
  return t
    .toLowerCase()
    .trim()
    .replace(/[^\p{L}\p{N}\s_-]/gu, '')
    .replace(/\s/g, '-');
}
function headingIds(md) {
  const seen = new Map();
  const used = new Set();
  const out = [];
  for (const line of String(md).split(/\r?\n/)) {
    const mt = /^(#{1,6})\s+(.+?)\s*$/.exec(line);
    if (!mt) continue;
    const base = slug(mt[2]);
    let n = seen.get(base) || 1;
    let id = base;
    while (used.has(id)) {
      n++;
      id = base + '-' + n;
    }
    seen.set(base, n);
    used.add(id);
    out.push({ level: mt[1].length, text: mt[2], id });
  }
  return out;
}
module.exports = { headingIds };
