// Write a function, islandCount, that takes in a grid containing Ws and Ls. W represents water and L represents land. The function should return the number of islands on the grid. An island is a vertically or horizontally connected region of land.

//df iter

const islandCount = (grid) => {
  // todo
  const visited = new Set();
  let count = 0;
  grid.forEach((row, rowIndex, rows) => {
    row.forEach((col, colIndex, rowArray) => {
      const indices = [rowIndex, colIndex];
      if (col === 'L' && !visited.has(String(indices))) {
        const stack = [indices];
        while (stack.length) {
          const current = stack.pop();
          let [r, c] = current;
          visited.add(String(current));
          if (r > 0 && rows[r - 1][c] === 'L' && !visited.has(String([r - 1, c]))) {
            stack.push([r - 1, c])
          }
          if (c > 0 && rows[r][c - 1] === 'L' && !visited.has(String([r, c - 1]))) {
            stack.push([r, c - 1])
          }
          if (r < (rows.length - 1) && rows[r + 1][c] === 'L' && !visited.has(String([r + 1, c]))) {
            stack.push([r + 1, c])
          }
          if (c < (rowArray.length - 1) && rows[r][c + 1] === 'L' && !visited.has(String([r, c + 1]))) {
            stack.push([r, c + 1])
          }
        }
        count += 1;
      }
    });
  });
  return count;
};

// df recursive

const islandCount = (grid) => {
  let count = 0;
  const visited = new Set();
  grid.forEach((row, rowIndex, rows) => {
    rows.forEach((col, colIndex) => {
      if (explore(rows, rowIndex, colIndex, visited)) {
        count += 1;
      }
    })
  })
  return count;
}

const explore = (grid, r, c, visited) => {
  if (r < 0 || r >= grid.length) {
    return false;
  }
  if ( c < 0 || c >= grid[0].length) {
    return false;
  }
  if (grid[r][c] === 'W') {
    return false;
  }
  const indices = `${r},${c}`
  if (visited.has(indices)) {
    return false;
  }
  visited.add(indices);
  explore(grid, r, c + 1, visited);
  explore(grid, r + 1, c, visited);
  explore(grid, r, c - 1, visited);
  explore(grid, r - 1, c, visited);
  return true;
};