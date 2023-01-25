/**
 * @param {character[][]} grid
 * @return {number}
 */
const testCase = [["1","0","1","1","1"],["1","0","1","0","1"],["1","1","1","0","1"]];

var numIslands = function(grid) {
  debugger
  let islandsCount = 0;    
  let islandCoordinates = new Set();
  for (let i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < grid[0].length; j += 1) {
      const index = i + ',' + j;
      if (grid[i][j] === '1' && !(islandCoordinates.has(index))) {
        islandsCount += 1;
        exploreIsland(i, j, grid, islandCoordinates);
      }
    }
  }
  return islandsCount;
};

const exploreIsland = (i, j, grid, explored) => {
  const index = i + ','  + j;
  if (explored.has(index) || i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === '0') {
    return;
  }
  explored.add(index);
  exploreIsland(i + 1, j, grid, explored);
  exploreIsland(i - 1, j, grid, explored);
  exploreIsland(i, j + 1, grid, explored);
  exploreIsland(i, j - 1, grid, explored);
}