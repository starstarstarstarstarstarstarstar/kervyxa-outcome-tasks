function splitName(name) {
  for (const c of [".tar.gz", ".tar.bz2", ".tar.xz"]) {
    if (name.length > c.length && name.toLowerCase().endsWith(c)) {
      return { base: name.slice(0, name.length - c.length), ext: name.slice(name.length - c.length + 1) };
    }
  }
  const dot = name.lastIndexOf(".");
  if (dot < 1 || dot === name.length - 1) return { base: name, ext: "" };
  return { base: name.slice(0, dot), ext: name.slice(dot + 1) };
}

module.exports = { splitName };
