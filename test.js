const test = require("node:test");
const assert = require("node:assert/strict");
const m = require("./anagrams.js");

test("groups simple anagrams", () => {
  assert.deepEqual(m.groupAnagrams(["eat", "tea", "tan", "ate", "nat"]), [["eat", "tea", "ate"], ["tan", "nat"]]);
});
test("single words form their own group", () => {
  assert.deepEqual(m.groupAnagrams(["a", "b"]), [["a"], ["b"]]);
});
test("empty input", () => {
  assert.deepEqual(m.groupAnagrams([]), []);
});
test("repeated word stays in the group", () => {
  assert.deepEqual(m.groupAnagrams(["ab", "ba", "ab"]), [["ab", "ba", "ab"]]);
});
test("different lengths are not grouped", () => {
  assert.deepEqual(m.groupAnagrams(["ab", "abc"]), [["ab"], ["abc"]]);
});
