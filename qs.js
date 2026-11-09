'use strict';
function decode(s) {
  return decodeURIComponent(s.replace(/\+/g, ' '));
}
function parse(input) {
  const out = {};
  const text = String(input).replace(/^\?/, '');
  if (text === '') return out;
  for (const part of text.split('&')) {
    if (part === '') continue;
    const i = part.indexOf('=');
    const key = decode(i < 0 ? part : part.slice(0, i));
    const value = i < 0 ? '' : decode(part.slice(i + 1));
    if (!Object.prototype.hasOwnProperty.call(out, key)) out[key] = value;
    else if (Array.isArray(out[key])) out[key].push(value);
    else out[key] = [out[key], value];
  }
  return out;
}
module.exports = { parse };
