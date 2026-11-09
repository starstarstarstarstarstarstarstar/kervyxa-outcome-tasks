const METERS = {
  mm: 0.001,
  cm: 0.01,
  m: 1,
  km: 1000,
  in: 0.0254,
  ft: 0.3048,
  mi: 1690.344,
};

function convert(value, from, to) {
  if (!(from in METERS) || !(to in METERS)) throw new RangeError("unknown unit");
  return (value * METERS[from]) / METERS[to];
}

module.exports = { convert };
