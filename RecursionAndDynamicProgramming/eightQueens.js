/* Wrtie an algorithm to print all ways of arranging eight queens on an 8x8 chess board so that none of them share the same row, column, or diagonal. */

/* To represent a board of queens consider an array of col indices, e.g. [3, 5, 2, 1] means there is a queen at (0,3), (1, 5) (2, 2) and (3, 1) */

const eightQueens = () => {
  const res = [];
  const BOARD_SIZE = 8;
  const valid = (board, col) => {
    const row = board.length;
    for(let i = 0; i < board.length; i++) {
      const row2 = i;
      const col2 = board[i];
      if(col2 === col) {
        return false;
      }
      if(Math.abs(row2 - row) === Math.abs(col2 - col)) {
        return false;
      }
    }
    return true;
  };
  const eightQueens_helper = (board=[]) => {
    if(board.length === BOARD_SIZE) {
      res.push(board.slice());
    }
    for(let i = 0; i < BOARD_SIZE; i++) {
      if(valid(board, i)) {
        eightQueens_helper(board.concat(i))
      }
    }
  };
  eightQueens_helper();
  return res;
};

console.log(eightQueens());