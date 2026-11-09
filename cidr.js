function toInt(s) {
  const p = String(s).split('.');
  if (p.length !== 4) return null;
  let n = 0;
  for (const x of p) {
    if (!/^\d{1,3}$/.test(x) || Number(x) > 255) return null;
    n = n * 256 + Number(x);
  }
  return n;
}
function contains(cidr, ip) {
  const [base, len] = String(cidr).split('/');
  const bits = Number(len);
  const b = toInt(base);
  const a = toInt(ip);
  if (b === null || a === null || len === undefined || len === '') return false;
  if (!Number.isInteger(bits) || bits < 0 || bits > 32) return false;
  const mask = (0xffffffff << (32 - bits)) >>> 0;
  return ((a & mask) >>> 0) === ((b & mask) >>> 0);
}
module.exports = { contains };
