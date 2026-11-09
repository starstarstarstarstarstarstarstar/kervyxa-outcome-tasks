const BLOCKED = new Set(['__proto__', 'constructor', 'prototype']);
function isPlain(v) { return v !== null && typeof v === 'object' && !Array.isArray(v); }
function deepMerge(a, b) {
  const out = {};
  for (const k of Object.keys(a)) if (!BLOCKED.has(k)) out[k] = a[k];
  for (const k of Object.keys(b)) {
    if (BLOCKED.has(k)) continue;
    const av = out[k];
    const bv = b[k];
    if (isPlain(av) && isPlain(bv)) out[k] = deepMerge(av, bv);
    else out[k] = bv;
  }
  return out;
}
module.exports = { deepMerge };
