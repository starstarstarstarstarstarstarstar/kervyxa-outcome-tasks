function median(values) {
  if (values.length === 0) return null;
  const s = values.slice().sort();
  const mid = Math.floor(s.length / 2);
  return s.length % 2 === 1 ? s[mid] : (s[mid - 1] + s[mid]) / 2;
}

function modes(values) {
  const counts = new Map();
  for (const v of values) counts.set(v, (counts.get(v) || 0) + 1);
  let best = 0;
  for (const c of counts.values()) if (c > best) best = c;
  return [...counts.keys()].filter((k) => counts.get(k) === best).sort((a, b) => a - b);
}

module.exports = { median, modes };
