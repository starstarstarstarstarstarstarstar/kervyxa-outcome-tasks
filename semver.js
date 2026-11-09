'use strict';
function parse(v) {
  const s = String(v).split('+')[0];
  const i = s.indexOf('-');
  const core = (i < 0 ? s : s.slice(0, i)).split('.').map(Number);
  const pre = i < 0 ? [] : s.slice(i + 1).split('.');
  return { core, pre };
}
function compare(a, b) {
  const x = parse(a);
  const y = parse(b);
  for (let i = 0; i < 3; i++) {
    if (x.core[i] !== y.core[i]) return x.core[i] < y.core[i] ? -1 : 1;
  }
  if (x.pre.length === 0 && y.pre.length === 0) return 0;
  if (x.pre.length === 0) return 1;
  if (y.pre.length === 0) return -1;
  const n = Math.max(x.pre.length, y.pre.length);
  for (let i = 0; i < n; i++) {
    if (x.pre[i] === undefined) return -1;
    if (y.pre[i] === undefined) return 1;
    if (x.pre[i] !== y.pre[i]) {
      const xn = /^[0-9]+$/.test(x.pre[i]);
      const yn = /^[0-9]+$/.test(y.pre[i]);
      if (xn && yn) return Number(x.pre[i]) < Number(y.pre[i]) ? -1 : 1;
      if (xn) return -1;
      if (yn) return 1;
      return x.pre[i] < y.pre[i] ? -1 : 1;
    }
  }
  return 0;
}
module.exports = { compare };
