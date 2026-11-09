const test = require("node:test");
const assert = require("node:assert/strict");
const m = require("./natsort.js");

test("single digit numbers", () => {
  assert.deepEqual(m.naturalSort(["file3", "file1", "file2"]), ["file1", "file2", "file3"]);
});

test("letter case is ignored", () => {
  assert.deepEqual(m.naturalSort(["b", "A", "c"]), ["A", "b", "c"]);
});

test("input is not changed", () => {
  const src = ["b", "a"];
  m.naturalSort(src);
  assert.deepEqual(src, ["b", "a"]);
});

test("empty list", () => {
  assert.deepEqual(m.naturalSort([]), []);
});

test("text only", () => {
  assert.deepEqual(m.naturalSort(["pear", "apple", "fig"]), ["apple", "fig", "pear"]);
});
