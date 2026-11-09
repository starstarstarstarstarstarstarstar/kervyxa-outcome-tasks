const test = require("node:test");
const assert = require("node:assert/strict");
const m = require("./dotenv.js");

test("plain pairs", () => {
  assert.deepEqual(m.parse("A=1\nB=two"), { A: "1", B: "two" });
});

test("comments and blank lines are skipped", () => {
  assert.deepEqual(m.parse("# note\n\nA=1\n"), { A: "1" });
});

test("quoted values keep spaces", () => {
  assert.deepEqual(m.parse('A="x y"\nB=' + "'z w'"), { A: "x y", B: "z w" });
});

test("inline comment is dropped", () => {
  assert.deepEqual(m.parse("A=1 # one"), { A: "1" });
});

test("hash inside quotes is kept", () => {
  assert.deepEqual(m.parse('A="x # y"'), { A: "x # y" });
});
