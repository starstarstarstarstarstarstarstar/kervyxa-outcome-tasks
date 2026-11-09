function parseTsv(text) {
  const lines = String(text).split('\n').map((l) => l.replace(/\r$/, ''));
  while (lines.length && lines[lines.length - 1] === '') lines.pop();
  if (!lines.length) return [];
  const head = lines[0].split('\t');
  return lines
    .slice(1)
    .filter((l) => l !== '')
    .map((l) => {
      const cells = l.trim().split('\t');
      const o = {};
      head.forEach((h, i) => {
        o[h] = cells[i] === undefined ? '' : cells[i];
      });
      return o;
    });
}
module.exports = { parseTsv };
