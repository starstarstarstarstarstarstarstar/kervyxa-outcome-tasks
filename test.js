const test = require("node:test");
const assert = require("node:assert/strict");
const m = require("./logline.js");

test("level module and message", () => {
  const r = m.parseLog("INFO [db] connection opened");
  assert.equal(r.level, "INFO");
  assert.equal(r.module, "db");
  assert.equal(r.message, "connection opened");
  assert.deepEqual(r.fields, {});
});

test("plain fields", () => {
  const r = m.parseLog("WARN [api] slow request path=/users ms=250");
  assert.equal(r.message, "slow request");
  assert.deepEqual(r.fields, { path: "/users", ms: "250" });
});

test("line that does not match", () => {
  assert.equal(m.parseLog("just some text"), null);
});

test("lowercase level does not match", () => {
  assert.equal(m.parseLog("info [db] x"), null);
});

test("fields only", () => {
  const r = m.parseLog("ERROR [job] id=7");
  assert.equal(r.message, "");
  assert.deepEqual(r.fields, { id: "7" });
});
