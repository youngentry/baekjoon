function solution(board) {
  let sum = 0;

  board.forEach((row) => {
    row.forEach((column) => (sum += column));
  });

  if (sum === 0) return 0;

  board.unshift(Array(board[0].length).fill(0));
  for (let i = 0; i < board.length; i++) {
    board[i].unshift(0);
  }

  let highNum = 1;

  for (let i = 1; i < board.length; i++) {
    for (let j = 1; j < board[0].length; j++) {
      if (board[i][j] && board[i - 1][j - 1] > 0 && board[i - 1][j] > 0 && board[i][j - 1] > 0) {
        board[i][j] += Math.min(board[i - 1][j], board[i][j - 1], board[i - 1][j - 1]);
        if (highNum < board[i][j]) {
          highNum = board[i][j];
        }
      }
    }
  }

  return highNum ** 2;
}
