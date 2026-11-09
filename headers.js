function parseHeaders(raw) {
  const out = {};
  let last = null;
  for (const line of raw.split(/\r?\n/)) {
    if (line === "") continue;
    if (/^[ \t]/.test(line)) {
      if (last !== null) out[last] = out[last] + " " + line.trim();
      continue;
    }
    const i = line.indexOf(":");
    if (i < 1) {
      last = null;
      continue;
    }
    const name = line.slice(0, i).trim().toLowerCase();
    const value = line.slice(i + 1).trim();
    out[name] = Object.prototype.hasOwnProperty.call(out, name) ? out[name] + ", " + value : value;
    last = name;
  }
  return out;
}

module.exports = { parseHeaders };
