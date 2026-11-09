const MAP = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
const PLAIN = /[&<>"']/g;
const KEEP = /&(?!(?:[a-zA-Z][a-zA-Z0-9]*);)|[<>"']/g;
function escapeHtml(s, opts) {
  const keep = !!(opts && opts.preserveEntities);
  return String(s).replace(keep ? KEEP : PLAIN, (c) => MAP[c]);
}
module.exports = { escapeHtml };
