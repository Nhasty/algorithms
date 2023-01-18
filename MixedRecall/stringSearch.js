// Write a function, stringSearch, that takes in a grid of letters and a string as arguments. The function should return a boolean indicating whether or not the string can be found in the grid as a path by connecting horizontal or vertical positions. The path can begin at any position, but you cannot reuse a position more than once in the path.

// You can assume that all letters are lowercase and alphabetic.

const stringSearch = (grid, s, row = 0, column = 0, memo = {}) => {
  // todo
  for (let i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < grid[0].length; j += 1) {
      if (dfs(grid, s, i, j)) {
        return true;
      }
    }
  }
};

const dfs = (grid, s, row, col) => {
  const rowInbounds = 0 <= row && row < grid.length;
  const colInbounds = 0 <= col && col < grid[0].length;
  if (!s.length) {
    return true;
  }
  if (!rowInbounds || !colInbounds) {
    return false;
  }
  const char = grid[row][col];
  const suffix = s.slice(1);
  if (char !== s[0]) {
    return false
  }
  grid[row][col] = "*";
  const result = dfs(grid, suffix, row + 1, col) || dfs(grid, suffix, row - 1, col) || dfs(grid, suffix, row, col + 1) || dfs(grid, suffix, row, col - 1);
  grid[row][col] = char;
  return results;
}