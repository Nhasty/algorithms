// A knight and a pawn are on a chess board. Can you figure out the minimum number of moves required for the knight to travel to the same position of the pawn? On a single move, the knight can move in an "L" shape; two spaces in any direction, then one space in a perpendicular direction. This means that on a single move, a knight has eight possible positions it can move to.

// Write a function, knightAttack, that takes in 5 arguments:

// n, kr, kc, pr, pc

// n = the length of the chess board
// kr = the starting row of the knight
// kc = the starting column of the knight
// pr = the row of the pawn
// pc = the column of the pawn

// The function should return a number representing the minimum number of moves required for the knight to land ontop of the pawn. The knight cannot move out-of-bounds of the board. You can assume that rows and columns are 0-indexed. This means that if n = 8, there are 8 rows and 8 columns numbered 0 to 7. If it is not possible for the knight to attack the pawn, then return null.

const knightAttack = (n, kr, kc, pr, pc) => {
  // todo
debugger
  const visited = new Set([kr + ',' + kc]);
  const q = [[kr, kc, 0]];
  while (q.length) {
    const [r, c, distance] = q.shift();
    if (r === pr && c === pc) {
      return distance
    }
    const moves = knightMoves(n, r, c);
    for (let move of moves) {
      const [newRow, newCol] = move;
      const pos = newRow + ',' + newCol;
      if (!visited.has(pos)) {
        visited.add(pos);
        q.push([newRow, newCol, distance + 1]);
      }
    }
  }
  return null
};

const knightMoves = (n, r, c) => {
  positions = [
    [r + 1, c + 2],
    [r - 1, c + 2],
    [r - 2, c + 1],
    [r - 2, c - 1],
    [r + 1, c - 2],
    [r - 1, c - 2],
    [r + 2, c + 1],
    [r + 2, c - 1],
  ];
  return positions.filter((position => {
    const [a, b] = position;
    if (a >= 0 && a < n && b >= 0 && b < n) {
      return true;
    }
  }))
};
