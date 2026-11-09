function decode(v) {
  try {
    return decodeURIComponent(v);
  } catch (e) {
    return v;
  }
}

function parseCookies(header) {
  const out = {};
  for (const part of header.split(";")) {
    const i = part.indexOf("=");
    if (i < 1) continue;
    const name = part.slice(0, i).trim();
    const raw = part.slice(i + 1).trim();
    if (name === "") continue;
    if (!Object.prototype.hasOwnProperty.call(out, name)) out[name] = decode(raw);
  }
  return out;
}

module.exports = { parseCookies };
