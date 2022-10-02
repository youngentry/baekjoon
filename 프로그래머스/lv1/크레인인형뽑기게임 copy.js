function solution(board, moves) {
    let box = [0];
    let result = 0;

    for (i = 0; i < moves.length; i++) {
        for (j = 0; j < board.length; j++) {
            if (board[j][moves[i] - 1] !== 0) {
                let findNum = board[j][moves[i] - 1];
                board[j][moves[i] - 1] = 0;
                if (box[box.length - 1] == findNum) {
                    box.pop();
                    result += 2;
                } else {
                    box.push(findNum);
                }
                break;
            }
        }
    }
    return result;
}

solution(
    [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 3],
        [0, 2, 5, 0, 1],
        [4, 2, 4, 4, 2],
        [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
);
