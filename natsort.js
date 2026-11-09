function cmp(a, b) {
  const pa = a.match(/\d+|\D+/g) || [];
  const pb = b.match(/\d+|\D+/g) || [];
  const n = Math.min(pa.length, pb.length);
  for (let i = 0; i < n; i++) {
    const p = pa[i];
    const q = pb[i];
    const x = p.toLowerCase();
    const y = q.toLowerCase();
    if (x !== y) return x < y ? -1 : 1;
  }
  return pa.length - pb.length;
}

function naturalSort(list) {
  return list.slice().sort(cmp);
}

module.exports = { naturalSort };
