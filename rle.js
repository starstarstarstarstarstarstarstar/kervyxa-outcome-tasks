"use strict";

// Run length encoding. Each run is written as count, a colon, then the character.
function encode(text) {
  let out = "";
  let i = 0;
  while (i < text.length) {
    let j = i;
    while (j < text.length && text[j] === text[i]) j++;
    out += (j - i) + ":" + text[i];
    i = j;
  }
  return out;
}

function decode(text) {
  return text.replace(/(\d+):([\s\S])/g, (_, count, ch) => ch.repeat(Number(count)));
}

module.exports = { encode, decode };
