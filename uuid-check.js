const RE = /^[0-9a-f]{8}-[0-9a-f]{4}-([1-5])[0-9a-f]{3}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
function isUuid(s) {
  return typeof s === 'string' && RE.test(s);
}
function uuidVersion(s) {
  const r = typeof s === 'string' ? RE.exec(s) : null;
  return r ? Number(r[1]) : null;
}
module.exports = { isUuid, uuidVersion };
