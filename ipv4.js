function parseIpv4(s) {
  if (typeof s !== 'string') return null;
  const parts = s.split('.');
  if (parts.length !== 4) return null;
  const out = [];
  for (const p of parts) {
    if (!/^\d{1,3}$/.test(p)) return null;
    const n = Number(p);
    if (n > 255) return null;
    out.push(n);
  }
  return out;
}
function ipv4ToInt(s) {
  const a = parseIpv4(s);
  if (!a) return null;
  return ((a[0] * 256 + a[1]) * 256 + a[2]) * 256 + a[3];
}
module.exports = { parseIpv4, ipv4ToInt };
