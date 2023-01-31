/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  let output = [];
  let top = 0;
  let right = matrix[0].length - 1;
  let bottom = matrix.length - 1;
  let left = 0;
  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i += 1) {
      output.push(matrix[top][i])
    }
    top += 1;
    for (let j = top; j <= bottom; j += 1) {
      output.push(matrix[j][right]);
    }
    right -= 1;
    if (top <= bottom) {
      for (let k = right; k >= left; k -=1) {
        output.push(matrix[bottom][k]);
      }
    }
    bottom -= 1;
    if (left <= right) {
      for (let l = bottom; l >= top; l -= 1) {
        output.push(matrix[l][left]);
      }
    }
    left += 1;
  }
  return output;
};