const PAIR = /([A-Za-z_][\w.]*)=(?:"([^"]*)"|(\S+))/g;

function valueOf(p) {
  return p[2] !== undefined ? p[2] : p[3];
}

function parseLog(line) {
  const head = /^([A-Z]+) \[([^\]]+)\] ?(.*)$/.exec(line);
  if (!head) return null;
  const rest = head[3];
  const fields = {};
  let end = rest.length;
  for (const p of rest.matchAll(PAIR)) {
    if (end === rest.length) end = p.index;
    fields[p[1]] = valueOf(p);
  }
  return { level: head[1], module: head[2], message: rest.slice(0, end).trim(), fields };
}

module.exports = { parseLog };
