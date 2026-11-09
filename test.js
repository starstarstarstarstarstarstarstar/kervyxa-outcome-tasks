const test = require("node:test");
const assert = require("node:assert/strict");
const m = require("./cookies.js");

test("simple pairs", () => {
  assert.deepEqual(m.parseCookies("a=1; b=2"), { a: "1", b: "2" });
});

test("values are decoded", () => {
  assert.deepEqual(m.parseCookies("n=%41%42"), { n: "AB" });
});

test("bad encoding is kept raw", () => {
  assert.deepEqual(m.parseCookies("n=%E0%A4%A"), { n: "%E0%A4%A" });
});

test("parts without equals are skipped", () => {
  assert.deepEqual(m.parseCookies("flag; a=1"), { a: "1" });
});

test("empty header", () => {
  assert.deepEqual(m.parseCookies(""), {});
});
