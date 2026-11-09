function splitName(name) {
  const dot = name.lastIndexOf(".");
  if (dot < 1 || dot === name.length - 1) return { base: name, ext: "" };
  return { base: name.slice(0, dot), ext: name.slice(dot + 1) };
}

module.exports = { splitName };
