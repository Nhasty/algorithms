/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
  let array = [];
  for (let i = 0; i < matrix.length; i += 1) {
    array.push(...matrix[i]);
  };
    array.sort((a, b) => a - b);
  return array[k - 1];
};