/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let islandsCount = 0;    
  for (let i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < grid[0].length; j += 1) {
      if (grid[i][j] === '1') {
        islandsCount += 1;
        exploreIsland(i, j, grid)
      }
    }
  }
  return islandsCount;
};

const exploreIsland = (i, j, grid) => {
  if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === '0' ) {
    return;
  }
  grid[i][j] = '0'
  exploreIsland(i + 1, j, grid);
  exploreIsland(i - 1, j, grid);
  exploreIsland(i, j + 1, grid);
  exploreIsland(i, j - 1, grid);
}