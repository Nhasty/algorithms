/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  const columns = new Set();
  for (let row of matrix) {
    if (row.some((item) => item === 0)) {
      for (let i = 0; i < row.length; i++) {
        row[i] === 0 ? columns.add(i) : row[i] = 0;  
      }
    }
  }
  for (let row of matrix) {
    for (let [entry] of columns.entries()) {
      row[entry] = 0;
    }
  }
  return matrix;
};