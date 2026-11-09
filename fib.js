function fib(n) {
  if (!Number.isInteger(n) || n < 0) throw new RangeError("n must be a non-negative integer");
  let a = 0,
    b = 1;
  for (let i = 0; i < n; i++) {
    const next = a + b;
    a = b;
    b = next;
  }
  return String(a);
}

module.exports = { fib };
