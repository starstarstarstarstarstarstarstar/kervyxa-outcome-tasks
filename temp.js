function round1(x) {
  return Math.round(x * 10) / 10;
}

const toC = {
  C: (v) => v,
  F: (v) => ((v - 32) * 5) / 9,
  K: (v) => v - 273.15,
};
const fromC = {
  C: (v) => v,
  F: (v) => (v * 9) / 5 + 32,
  K: (v) => v + 273.15,
};

function convert(value, from, to) {
  if (!toC[from] || !fromC[to]) throw new RangeError("unknown unit");
  return round1(fromC[to](toC[from](value)));
}

module.exports = { convert };
