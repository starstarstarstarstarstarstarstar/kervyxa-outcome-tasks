'use strict';
function isValid(input) {
  const s = String(input).replace(/ /g, '');
  if (!/^[0-9]{2,}$/.test(s)) return false;
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    let d = Number(s[i]);
    if ((s.length - i) % 2 === 0) {
      d *= 2;
      if (d > 9) d -= 9;
    }
    sum += d;
  }
  return sum % 10 === 0;
}
module.exports = { isValid };
