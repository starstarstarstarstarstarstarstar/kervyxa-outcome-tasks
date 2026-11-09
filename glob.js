'use strict';
const SPECIAL = '.+^$|()[]{}';
function toRegex(pattern) {
  let re = '';
  for (const ch of pattern) {
    if (ch === '*') re += '[^/]*';
    else if (ch === '?') re += '[^/]';
    else if (SPECIAL.indexOf(ch) >= 0 || ch === '\\') re += '\\' + ch;
    else re += ch;
  }
  return new RegExp('^' + re + '$');
}
function match(pattern, path) {
  return toRegex(String(pattern)).test(String(path));
}
module.exports = { match };
