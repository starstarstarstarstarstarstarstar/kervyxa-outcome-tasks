'use strict';
function isbn10(s) {
  if (!/^[0-9]{9}[0-9Xx]$/.test(s)) return false;
  let sum = 0;
  for (let i = 0; i < 10; i++) {
    const v = /x/i.test(s[i]) ? 10 : Number(s[i]);
    sum += v * (10 - i);
  }
  return sum % 11 === 0;
}
function isbn13(s) {
  if (!/^[0-9]{13}$/.test(s)) return false;
  let sum = 0;
  for (let i = 0; i < 13; i++) {
    sum += Number(s[i]) * (i % 2 === 0 ? 1 : 3);
  }
  return sum % 10 === 0;
}
function isValid(input) {
  const s = String(input).replace(/[- ]/g, '');
  if (s.length === 10) return isbn10(s);
  if (s.length === 13) return isbn13(s);
  return false;
}
module.exports = { isValid };
