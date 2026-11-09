const test = require("node:test");
const assert = require("node:assert/strict");
const m = require("./headers.js");

test("names are lowercased", () => {
  assert.deepEqual(m.parseHeaders("Content-Type: text/html"), { "content-type": "text/html" });
});

test("values are trimmed", () => {
  assert.deepEqual(m.parseHeaders("Host:   example.test  "), { host: "example.test" });
});

test("CRLF lines", () => {
  assert.deepEqual(m.parseHeaders("A: 1\r\nB: 2\r\n"), { a: "1", b: "2" });
});

test("folded line joins with one space", () => {
  assert.deepEqual(m.parseHeaders("X-Long: first\n   second"), { "x-long": "first second" });
});

test("line without a colon is skipped", () => {
  assert.deepEqual(m.parseHeaders("junk\nA: 1"), { a: "1" });
});
