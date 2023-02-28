/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
  const set = new Set();
  const m = board.length;
  const n = board[0].length
  const explore = (board, row, col) => {
    if (row < 0 || row >= m || col < 0 || col >= n || board[row][col] === 'X') {
      return;
    }
    const pos = row + ',' + col;
    if (set.has(pos)) {
      return;
    }
    set.add(pos);
    explore(board, row + 1, col);
    explore(board, row - 1, col);
    explore(board, row, col + 1);
    explore(board, row, col - 1);
  }
  for (let i = 0; i < n; i += 1) {
    explore(board, 0, i);
    explore(board, m - 1, i);
  }
  for (let j = 1; j < m - 1; j += 1) {
    explore(board, j, 0);
    explore(board, j, n - 1);
  }
  for (let k = 0; k < m; k += 1) {
    for (let l = 0; l < n; l += 1) {
      const pos = k + ',' + l;
      if (!set.has(pos)) {
        board[k][l] = 'X';
      }
    }
  }
  return board;
};