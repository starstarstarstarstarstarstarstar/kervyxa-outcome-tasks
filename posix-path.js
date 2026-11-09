function normalize(p) {
  if (p === '') return '.';
  const abs = p[0] === '/';
  const out = [];
  for (const seg of p.split('/')) {
    if (seg === '' || seg === '.') continue;
    if (seg === '..') {
      if (out.length && out[out.length - 1] !== '..') out.pop();
      else out.push('..');
    } else out.push(seg);
  }
  const r = out.join('/');
  if (abs) return '/' + r;
  return r || '.';
}
module.exports = { normalize };
