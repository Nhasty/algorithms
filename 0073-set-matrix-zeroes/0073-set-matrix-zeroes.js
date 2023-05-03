/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  debugger
  const firstRowHasZeros = matrix[0].some((item) => item === 0);
  let firstColHasZeros = !matrix[0][0];
  for (let i = 1; i < matrix.length; i++) {
    firstColHasZeros = !matrix[i][0] ? true : firstColHasZeros;
    for (let j = 1; j < matrix[0].length; j ++) {
      if (!matrix[i][j]) {
        matrix[0][j] = 0;
        matrix[i][0] = 0;
      }
    }
  }
  for (let i = 1; i < matrix.length; i++) {
    if (!matrix[i][0]) {
      matrix[i].fill(0);
    }
  }
  for (let j = 0; j < matrix[0].length; j++) {
    if ((j === 0 && firstColHasZeros) || (j > 0 && !matrix[0][j])) {
      for (let i = 0; i < matrix.length; i++) {
        matrix[i][j] = 0;
      }
    }
  }
  if (firstRowHasZeros) {
    matrix[0].fill(0);
  }
  return matrix;
};