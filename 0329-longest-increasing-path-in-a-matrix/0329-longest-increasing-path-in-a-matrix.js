/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  let max = 0;
  const table = Array(m).fill(0).map((val) => Array(n).fill(0));
  const dfs = (row, col, parentVal, cycle) => {
    if (row >= m || row < 0 || col >= n || col < 0) {
      return 0;
    }
    const current = matrix[row][col];
    const key = col + ',' + row;
    if (current <= parentVal) {
      return 0;
    }
    if (table[row][col] > 0) {
      return table[row][col]
    }
    if (cycle.has(key)) {
      return 0;
    } 
    cycle.add(key);
    table[row][col] = Math.max(1 + dfs(row + 1, col, current, cycle), 1 + dfs(row - 1, col, current, cycle), 1 + dfs(row, col + 1, current, cycle), 1 + dfs(row, col - 1, current, cycle))
    max = Math.max(max, table[row][col])
    return table[row][col];
  }
  for (let i = 0; i < m; i += 1) {
    for (let j = 0; j < n; j += 1) {
      if (table[i][j] === 0) {
        dfs(i, j, -1, new Set());
      }
    }
  }
  return max
};