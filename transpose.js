"use strict";

// Transpose an array of rows into an array of columns.
function transpose(matrix) {
  let width = 0;
  for (const row of matrix) width = Math.max(width, row.length);
  const out = [];
  for (let j = 0; j < width; j++) {
    const column = [];
    for (const row of matrix) {
      if (j < row.length) column.push(row[j]);
    }
    out.push(column);
  }
  return out;
}

module.exports = { transpose };
