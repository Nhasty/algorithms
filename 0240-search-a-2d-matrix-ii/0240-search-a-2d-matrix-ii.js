/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  let col = 0;
  let row = matrix.length - 1;
  while (col < matrix[0].length && row >= 0) {
    if (matrix[row][col] === target) {
      return true;
    }
    if (matrix[row][col] < target) {
      col += 1;
    } else {
      row -= 1
    }
  }
  return false;
};