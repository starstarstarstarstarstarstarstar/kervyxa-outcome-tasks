function parse(text) {
  const out = {};
  for (const raw of text.split(/\r?\n/)) {
    const line = raw.trim();
    if (line === "" || line.startsWith("#")) continue;
    const eq = line.indexOf("=");
    if (eq < 1) continue;
    const key = line.slice(0, eq).trim();
    let v = line.slice(eq + 1).trim();
    const q = v.charAt(0);
    if ((q === '"' || q === "'") && v.lastIndexOf(q) > 0) {
      v = v.slice(1, v.lastIndexOf(q));
    } else {
      v = v.replace(/\s+#.*/, "");
    }
    out[key] = v;
  }
  return out;
}

module.exports = { parse };
