'use strict';
function visit(graph, state, out, name) {
  if (state[name] === 'done') return;
  if (state[name] === 'active') throw new Error('cycle detected at ' + name);
  state[name] = 'active';
  for (const dep of graph[name] || []) {
    if (dep === name) continue;
    visit(graph, state, out, dep);
  }
  state[name] = 'done';
  out.push(name);
}
function sort(graph) {
  const state = {};
  const out = [];
  for (const name of Object.keys(graph)) visit(graph, state, out, name);
  return out;
}
module.exports = { sort };
