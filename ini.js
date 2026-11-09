function parseValue(raw) {
  const v = raw.trim();
  const q = v[0];
  if ((q === "'" || q === '"') && v.indexOf(q, 1) > 0) return v.slice(1, v.indexOf(q, 1));
  const c = /\s[;#]/.exec(v);
  return (c ? v.slice(0, c.index) : v).trim();
}
function parseIni(text) {
  const out = {};
  let cur = out;
  for (const raw of String(text).split(/\r?\n/)) {
    const line = raw.trim();
    if (!line || line[0] === ';' || line[0] === '#') continue;
    const sec = /^\[([^\]]+)\]$/.exec(line);
    if (sec) {
      const name = sec[1].trim();
      cur = out[name] = out[name] || {};
      continue;
    }
    const eq = line.indexOf('=');
    if (eq < 0) continue;
    cur[line.slice(0, eq).trim()] = parseValue(line.slice(eq + 1));
  }
  return out;
}
module.exports = { parseIni };
