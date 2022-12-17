// Write a function, bestBridge, that takes in a grid as an argument. The grid contains water (W) and land (L). There are exactly two islands in the grid. An island is a vertically or horizontally connected region of land. Return the minimum length bridge needed to connect the two islands. A bridge does not need to form a straight line.

const bestBridge = (grid) => {
  // todo
  const q = [];
  let island;
  for (let i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < grid[i].length; j += 1) {
      if (grid[i][j] === 'L') {
        island = exploreIsland(grid, i, j, new Set(), q);
        break;
      }
    }
    if (q.length) {
      break;
    }
  }
  const visited = new Set(island);
  while (q.length) {
    const [r, c, distance] = q.shift();
    const deltas = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    if (grid[r][c] === 'L' && !island.has(r + ',' + c)) {
      return distance - 1;
    }
    for (let delta of deltas) {
      const [rowDelta, colDelta] = delta;
      const neighborRow = r + rowDelta;
      const neighborCol = c + colDelta;
      const rowInbounds = neighborRow >= 0 && neighborRow < grid.length;
      const colInbounds = neighborCol >= 0 && neighborCol < grid[r].length;
      const neighborIndices = neighborRow + ',' + neighborCol
      if (rowInbounds && colInbounds && !visited.has(neighborIndices)) {
        visited.add(neighborIndices)
        q.push([neighborRow, neighborCol, distance + 1])
      }
    }
  }
};

const exploreIsland = (grid, r, c, visited, q) => {
  if (r < 0 || r >= grid.length) {
    return;
  }
  if (c < 0 || c >= grid[0].length) {
    return;
  }
  if (grid[r][c] === 'W') {
    return;
  }
  const indices = r + ',' + c;
  if (visited.has(indices)) {
    return
  }
  visited.add(indices);
  q.push([r, c, 0])
  exploreIsland(grid, r, c + 1, visited, q);
  exploreIsland(grid, r + 1, c, visited, q);
  exploreIsland(grid, r, c - 1, visited, q);
  exploreIsland(grid, r - 1, c, visited, q);
  return visited;
}