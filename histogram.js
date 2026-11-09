function histogram(values, bins) {
  if (!Array.isArray(values) || values.length === 0) throw new RangeError("values must not be empty");
  if (!Number.isInteger(bins) || bins < 1) throw new RangeError("bins must be a positive integer");
  const min = Math.min(...values);
  const max = Math.max(...values);
  const width = (max - min) / bins;
  const edges = [];
  for (let i = 0; i <= bins; i++) edges.push(min + i * width);
  const counts = new Array(bins).fill(0);
  for (const v of values) {
    const idx = width === 0 ? 0 : Math.floor((v - min) / width);
    counts[Math.min(idx, bins - 1)]++;
  }
  return { edges, counts };
}

module.exports = { histogram };
