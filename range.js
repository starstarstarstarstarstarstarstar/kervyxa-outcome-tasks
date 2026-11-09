function parse(v) {
  const m = /^(\d+)\.(\d+)\.(\d+)$/.exec(v);
  if (!m) throw new TypeError("invalid version: " + v);
  return [Number(m[1]), Number(m[2]), Number(m[3])];
}

function cmp(a, b) {
  for (let i = 0; i < 3; i++) {
    if (a[i] !== b[i]) return a[i] < b[i] ? -1 : 1;
  }
  return 0;
}

function satisfies(version, range) {
  const v = parse(version);
  const op = range.charAt(0);
  if (op !== "^" && op !== "~") return cmp(v, parse(range)) === 0;
  const lo = parse(range.slice(1));
  let hi;
  if (op === "~") hi = [lo[0], lo[1] + 1, 0];
  else if (lo[0] > 0) hi = [lo[0] + 1, 0, 0];
  else if (lo[1] > 0) hi = [0, lo[1] + 1, 0];
  else hi = [0, 0, lo[2] + 1];
  return cmp(v, lo) >= 0 && cmp(v, hi) < 0;
}

module.exports = { satisfies };
