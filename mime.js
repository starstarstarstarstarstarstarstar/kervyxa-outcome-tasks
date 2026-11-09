const DEFAULT = "application/octet-stream";

const TYPES = {
  html: "text/html",
  css: "text/css",
  js: "text/javascript",
  json: "application/json",
  png: "image/png",
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  gif: "image/gif",
  svg: "image/svg+xml",
  txt: "text/plain",
  pdf: "application/pdf",
  gz: "application/gzip",
  zip: "application/zip",
};

function mimeType(filename) {
  const ext = (filename.split(".")[1] || "").toLowerCase();
  return Object.prototype.hasOwnProperty.call(TYPES, ext) ? TYPES[ext] : DEFAULT;
}

module.exports = { mimeType };
