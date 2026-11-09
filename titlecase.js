const SMALL = new Set(["a", "an", "and", "as", "at", "but", "by", "for", "in", "of", "on", "or", "the", "to"]);

const cap = (w) =>
  w
    .split("-")
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1).toLowerCase())
    .join("-");

function titleCase(text) {
  const words = text.split(" ");
  return words
    .map((w, i) => {
      if (i !== 0 && i !== words.length - 1 && SMALL.has(w.toLowerCase())) return w.toLowerCase();
      return cap(w);
    })
    .join(" ");
}

module.exports = { titleCase };
