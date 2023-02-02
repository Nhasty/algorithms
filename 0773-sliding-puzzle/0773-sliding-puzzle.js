/**
 * @param {number[][]} board
 * @return {number}
 */
var slidingPuzzle = function(board) {
  const distances = [
                      [0, 1, 2, 1, 2, 3],
                      [1, 0, 1, 2, 1, 2],
                      [2, 1, 0, 3, 2, 1],
                      [1, 2, 3, 0, 1, 2],
                      [2, 1, 2, 1, 0, 1],
                      [3, 2, 1, 2, 1, 0],
                    ];
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
  const iterations = new Set(state);
  const q = [[state, state.indexOf('0'), 0]];
  while (q.length) {
    const [current, zero, moveCount] = q.shift();
    iterations.add(current);
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