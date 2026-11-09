const ONES = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const TENS = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
function below1000(n) {
  const parts = [];
  if (n >= 100) {
    parts.push(ONES[Math.floor(n / 100)] + ' hundred');
    n %= 100;
  }
  if (n >= 20) {
    const o = n % 10;
    parts.push(o ? TENS[Math.floor(n / 10)] + '-' + ONES[o] : TENS[Math.floor(n / 10)]);
  } else if (n > 0) parts.push(ONES[n]);
  return parts.join(' ');
}
function toWords(n) {
  if (!Number.isInteger(n) || n < 0 || n > 999999999) throw new RangeError('out of range');
  if (n === 0) return 'zero';
  const parts = [];
  for (const [size, name] of [[1000000, 'million'], [1000, 'thousand']]) {
    const q = Math.floor(n / size);
    if (q > 0) {
      parts.push(below1000(q) + ' ' + name);
      n %= size;
    }
  }
  if (n > 0) parts.push(below1000(n));
  return parts.join(' ');
}
module.exports = { toWords };
