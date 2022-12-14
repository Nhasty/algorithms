// Write a function, minimumIsland, that takes in a grid containing Ws and Ls. W represents water and L represents land. The function should return the size of the smallest island. An island is a vertically or horizontally connected region of land.

// You may assume that the grid contains at least one island.

// df iter

const minimumIsland = (grid) => {
  const visited = new Set();
  let min = Infinity;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      const islandSize = countIslandSize(grid, i, j, visited);
      if (islandSize > 0 && islandSize < min ) {
        min = islandSize;
      }
    }
  }
  return min;
};

const countIslandSize = (grid, r, c, visited) => {
  if (r < 0 || r >= grid.length) {
    return 0;
  }
  if (c < 0 || c >= grid[0].length) {
    return 0;
  }
  if (grid[r][c] === 'W') {
    return 0;
  }
  const indices = `${r},${c}`;
  if (visited.has(indices)) {
    return 0;
  }
  visited.add(indices);
  return 1 + countIslandSize(grid, r, c + 1, visited) + countIslandSize(grid, r + 1, c, visited) + countIslandSize(grid, r, c - 1, visited) + countIslandSize(grid, r - 1, c, visited);
};