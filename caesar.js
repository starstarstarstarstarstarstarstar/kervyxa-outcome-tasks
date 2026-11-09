"use strict";

// Shift letters by n places in the alphabet. Case is kept, other characters are left alone.
function shift(text, n) {
  let out = "";
  for (const ch of text) {
    const code = ch.charCodeAt(0);
    if (code >= 65 && code <= 90) {
      out += String.fromCharCode(((code - 65 + n) % 26) + 65);
    } else if (code >= 97 && code <= 122) {
      out += String.fromCharCode(((code - 97 + n) % 26) + 97);
    } else {
      out += ch;
    }
  }
  return out;
}

module.exports = { shift };
