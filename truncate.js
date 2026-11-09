function truncate(text, max) {
  if (!Number.isInteger(max) || max < 4) throw new RangeError("max must be an integer of at least 4");
  if (text.length <= max) return text;
  const room = max - 3;
  const s = text.slice(0, room);
  if (text.charAt(room) === " ") return s.trimEnd() + "...";
  const cut = s.lastIndexOf(" ");
  return (cut > 0 ? s.slice(0, cut) : s).trimEnd() + "...";
}

module.exports = { truncate };
