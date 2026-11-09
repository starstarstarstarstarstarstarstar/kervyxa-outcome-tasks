function joinUrl(...parts) {
  let out = '';
  for (const p of parts) {
    const s = String(p);
    if (s === '') continue;
    out = out === '' ? s : out.replace(/\/+$/, '') + '/' + s.replace(/^\/+/, '');
  }
  return out;
}
module.exports = { joinUrl };
