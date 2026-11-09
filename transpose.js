"use strict";

// Transpose an array of rows into an array of columns.
function transpose(matrix) {
  const width = matrix[0].length;
  const out = [];
  for (let j = 0; j < width; j++) {
    out.push(matrix.map((row) => row[j]));
  }
  return out;
}

module.exports = { transpose };
