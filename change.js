function percentChange(from, to) {
  const pct = ((to - from) / from) * 100;
  const text = Math.abs(pct).toFixed(1) + "%";
  if (pct > 0) return "+" + text;
  if (pct < 0) return "-" + text;
  return text;
}

module.exports = { percentChange };
