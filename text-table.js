const cell = (r, c) => (r[c] === undefined ? '' : String(r[c]));
function table(rows) {
  if (!rows.length) return '';
  const cols = Math.max(...rows.map((r) => r.length));
  const widths = [];
  for (let c = 0; c < cols; c++) widths.push(Math.max(...rows.map((r) => cell(r, c).length)));
  return rows
    .map((r) => r.map((v, c) => cell(r, c).padEnd(widths[c])).join(' | ').replace(/\s+$/, ''))
    .join('\n');
}
module.exports = { table };
