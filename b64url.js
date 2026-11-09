function encode(input) {
  const buf = typeof input === 'string' ? Buffer.from(input, 'utf8') : Buffer.from(input);
  return buf.toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}
function decode(str) {
  const b64 = String(str).replace(/-/g, '+').replace(/_/g, '/');
  return Buffer.from(b64, 'base64');
}
module.exports = { encode, decode };
