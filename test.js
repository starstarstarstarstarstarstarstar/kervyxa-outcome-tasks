const test = require("node:test");
const assert = require("node:assert/strict");
const m = require("./rle.js");

test("encodes runs of letters", () => {
  assert.equal(m.encode("aaabcc"), "3:a1:b2:c");
});
test("decodes runs of letters", () => {
  assert.equal(m.decode("3:a1:b2:c"), "aaabcc");
});
test("empty string", () => {
  assert.equal(m.encode(""), "");
  assert.equal(m.decode(""), "");
});
test("long runs use more than one digit", () => {
  assert.equal(m.encode("a".repeat(12)), "12:a");
  assert.equal(m.decode("12:a"), "a".repeat(12));
});
test("round trip with letters and spaces", () => {
  const s = "ab  cc d";
  assert.equal(m.decode(m.encode(s)), s);
});
