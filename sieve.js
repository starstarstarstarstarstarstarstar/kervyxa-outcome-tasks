function primesUpTo(n) {
  if (!Number.isInteger(n) || n < 2) return [];
  const composite = new Array(n + 1).fill(false);
  for (let i = 2; i * i < n; i++) {
    if (composite[i]) continue;
    for (let j = i * i; j <= n; j += i) composite[j] = true;
  }
  const out = [];
  for (let k = 2; k <= n; k++) if (!composite[k]) out.push(k);
  return out;
}

module.exports = { primesUpTo };
