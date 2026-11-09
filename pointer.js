'use strict';
function unescapeToken(token) {
  return token.replace(/~0/g, '~').replace(/~1/g, '/');
}
function get(doc, pointer) {
  if (pointer === '') return doc;
  if (pointer[0] !== '/') throw new SyntaxError('pointer must start with a slash');
  let cur = doc;
  for (const raw of pointer.slice(1).split('/')) {
    const key = unescapeToken(raw);
    if (cur === null || typeof cur !== 'object') return undefined;
    if (Array.isArray(cur)) {
      if (!/^(0|[1-9][0-9]*)$/.test(key)) return undefined;
      cur = cur[Number(key)];
    } else {
      if (!Object.prototype.hasOwnProperty.call(cur, key)) return undefined;
      cur = cur[key];
    }
  }
  return cur;
}
module.exports = { get };
