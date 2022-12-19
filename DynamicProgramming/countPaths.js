// Write a function, countPaths, that takes in a grid as an argument. In the grid, 'X' represents walls and 'O' represents open spaces. You may only move down or to the right and cannot pass through walls. The function should return the number of ways possible to travel from the top-left corner of the grid to the bottom-right corner.

const countPaths= (grid, r = 0, c = 0, memo = {}) => {
  // todo
  if (r >= grid.length || c >= grid[0].length || grid[r][c] === 'X') {
    return 0;
  }
  if (r === grid.length - 1 && c === grid[0].length - 1) {
    return 1
  }
  const pos = r + ',' + c;
  if (pos in memo) {
    return memo[pos];
  };
  memo[pos] = countPaths(grid, r + 1, c, memo) + countPaths(grid, r, c + 1, memo);
  return memo[pos];
};