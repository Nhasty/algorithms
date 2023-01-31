/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if (!matrix.length || !matrix[0].length) {
    return []
  }
  if (matrix.length === 1) {
    return matrix.pop();
  }
  return [...matrix.shift(), ...downRight(matrix), ...matrix.pop().reverse(), ...upLeft(matrix), ...spiralOrder(matrix)];
};

const downRight = (matrix) => {
  if (!matrix.length || !matrix[0].length) {
    return [];
  }
    const output = [];
  for (let i = 0; i < matrix.length; i += 1) {
    output.push(matrix[i].pop());
  }
  return output;
}

const upLeft = (matrix) => {
  if (!matrix.length || !matrix[0].length) {
    return [];
  }
    const output = [];
  for (let j = matrix.length - 1; j >= 0; j -= 1) {
    output.push(matrix[j].shift())
  }
  return output
}