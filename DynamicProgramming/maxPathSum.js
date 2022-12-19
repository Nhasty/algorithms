// Write a function, maxPathSum, that takes in a grid as an argument. The function should return the maximum sum possible by traveling a path from the top-left corner to the bottom-right corner. You may only travel through the grid by moving down or right.

// You can assume that all numbers are non-negative.

const maxPathSum = (grid, r = 0, c = 0, memo = {}) => {
  const pos = r + ',' + c;
  if (r === grid.length - 1 && c === grid[0].length - 1) {
    return grid[r][c];
  }
  if (r >= grid.length || c >= grid[0].length) {
    return 0;
  }
  if (memo[pos] === undefined) {
    memo[pos] = grid[r][c] + Math.max(maxPathSum(grid, r + 1, c, memo), maxPathSum(grid, r, c + 1, memo));
  }
  return memo[pos];
}