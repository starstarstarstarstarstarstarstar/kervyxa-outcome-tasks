function parseField(field, min, max) {
  const out = new Set();
  for (const part of String(field).split(',')) {
    const [range, stepText] = part.split('/');
    const step = stepText === undefined ? 1 : Number(stepText);
    if (!Number.isInteger(step) || step < 1) throw new RangeError('bad step: ' + part);
    let lo;
    let hi;
    if (range === '*') {
      lo = min;
      hi = max;
    } else if (/^\d+$/.test(range)) {
      lo = Number(range);
      hi = stepText === undefined ? lo : max;
    } else {
      const r = /^(\d+)-(\d+)$/.exec(range);
      if (!r) throw new RangeError('bad range: ' + part);
      lo = Number(r[1]);
      hi = Number(r[2]);
    }
    if (lo < min || hi > max || lo > hi) throw new RangeError('out of range: ' + part);
    for (let v = lo; v <= hi; v++) if (v % step === 0) out.add(v);
  }
  return [...out].sort((a, b) => a - b);
}
module.exports = { parseField };
