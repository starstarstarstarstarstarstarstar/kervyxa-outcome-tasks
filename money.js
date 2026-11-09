function roundHalfEven(s, digits) {
  const m = /^(-?)(\d+)(?:\.(\d+))?$/.exec(String(s));
  if (!m) throw new Error('not a decimal: ' + s);
  const sign = m[1];
  const int = m[2];
  const frac = m[3] || '';
  let digs;
  if (frac.length <= digits) {
    digs = BigInt(int + frac.padEnd(digits, '0'));
  } else {
    const keep = BigInt(int + frac.slice(0, digits));
    const first = frac[digits];
    const tail = frac.slice(digits + 1);
    let up;
    if (first > '5') up = true;
    else if (first < '5') up = false;
    else if (/[1-9]/.test(tail)) up = true;
    else up = true;
    digs = keep + (up ? 1n : 0n);
  }
  const str = digs.toString().padStart(digits + 1, '0');
  const cut = str.length - digits;
  let out = str.slice(0, cut) + (digits ? '.' + str.slice(cut) : '');
  if (sign && /[1-9]/.test(out)) out = sign + out;
  return out;
}
module.exports = { roundHalfEven };
