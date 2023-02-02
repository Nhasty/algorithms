/**
 * @param {number[][]} board
 * @return {number}
 */
var slidingPuzzle = function(board) {
  const moves = {
    0: [1, 3],
    1: [0, 2, 4],
    2: [1, 5],
    3: [0, 4],
    4: [1, 3, 5],
    5: [2, 4]
  };
  let state = '';
  board.forEach((row) => {state += row.join('')});
  const movePieces = (state, zero, move) => {
    array = state.split('');
    array[zero] = array[move];
    array[move] = 0;
    return array.join('');
  }
  const iterations = new Set();
  iterations.add(state);
  const q = [[state, state.indexOf('0'), 0]];
  while (q.length) {
    const [current, zero, moveCount] = q.shift();
    if (current === '123450') {
      return moveCount;
    }
    for (let move of moves[zero]) {
      const next = movePieces(current, zero, move);
      if (!iterations.has(next)) {
        q.push([next, move, moveCount + 1]);
        iterations.add(next)
      }
    }
  }
  return -1   
};