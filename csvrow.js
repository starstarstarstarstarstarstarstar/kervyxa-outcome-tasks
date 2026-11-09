function toCsvRow(fields) {
  return fields
    .map((f) => {
      const s = f === null || f === undefined ? "" : String(f);
      return /[",]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
    })
    .join(",");
}

module.exports = { toCsvRow };
