// Write a function, closestCarrot, that takes in a grid, a starting row, and a starting column. In the grid, 'X's are walls, 'O's are open spaces, and 'C's are carrots. The function should return a number representing the length of the shortest path from the starting position to a carrot. You may move up, down, left, or right, but cannot pass through walls (X). If there is no possible path to a carrot, then return -1.

const closestCarrot = (grid, startRow, startCol) => {
  // todo
  const visited = new Set([startRow + ',' + startCol]);
  const q = [ [startRow, startCol, 0] ];
  while (q.length > 0) {
    const [r , c, distance] = q.shift()
    if (grid[r][c] === 'C') {
      return distance;
    }
    const deltas = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    deltas.forEach((delta) => {
      const [deltaRow, deltaCol] = delta;
      const neighborRow = r + deltaRow;
      const neighborCol = c + deltaCol;
      const neighborIndices = neighborRow + ',' + neighborCol;
      const rowIndbounds = neighborRow >= 0 && neighborRow < grid.length;
      const colInbounds = neighborCol >= 0 && neighborCol < grid[0].length;
      if (rowIndbounds && colInbounds && !visited.has(neighborIndices) && grid[neighborRow][neighborCol] !== 'X') {
        visited.add(neighborIndices);
        q.push([neighborRow, neighborCol, distance + 1])
      }
    })
  }
  return -1
}