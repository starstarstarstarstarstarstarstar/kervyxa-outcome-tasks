const test = require("node:test");
const assert = require("node:assert/strict");
const m = require("./titlecase.js");

test("small words stay lowercase", () => {
  assert.equal(m.titleCase("the lord of the rings"), "The Lord of the Rings");
});

test("last word is capitalised", () => {
  assert.equal(m.titleCase("what are you waiting for"), "What Are You Waiting For");
});

test("rest of the word is lowercased", () => {
  assert.equal(m.titleCase("HELLO wORLD"), "Hello World");
});

test("empty string", () => {
  assert.equal(m.titleCase(""), "");
});

test("single word", () => {
  assert.equal(m.titleCase("war"), "War");
});
