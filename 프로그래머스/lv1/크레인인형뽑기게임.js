function solution(board, moves) {
    let box = [0];
    // console.log(box.length);
    let result = 0;
    // 입력받은 moves의 길이만큼 시행
    for (i = 0; i < moves.length; i++) {
        // 행의 높이만큼 시행합니다.
        for (j = 0; j < board.length; j++) {
            // moves[i]-1번째 열에서 가장 높은 위치의 수를 찾아 findNum에 담을 것입니다.
            // 0이 아닌 수가 찾은 수가 됩니다.
            if (board[j][moves[i] - 1] !== 0) {
                let findNum = board[j][moves[i] - 1];
                // console.log("findNum :", findNum);

                // 해당 좌표의 숫자를 제거합니다.
                board[j][moves[i] - 1] = 0;

                // console.log("박스크기", box.length);
                // 해당 좌표의 숫자를 바구니의 마지막 숫자와 일치하는지 체크합니다.
                if (box[box.length - 1] == findNum) {
                    // console.log("바구니체크 일치하면 숫자제거");
                    // 일치하면 result를 1 더하고, box의 마지막 숫자를 제거합니다.
                    box.pop();
                    result += 2;
                    // console.log(box, "일치", "박스내용");
                } else {
                    // 그렇지 않다면 box에 해당 수를 추가합니다.
                    // console.log("바구니 불일치 box에 추가,", findNum);
                    box.push(findNum);
                    // console.log(box, "박스내용");
                }

                break;
            }
        }
    }
    // console.log(result);
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
