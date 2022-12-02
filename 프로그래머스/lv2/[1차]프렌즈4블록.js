function solution(m, n, board) {
    const boardArray = board.map((el) => el.split(""));

    // 1. 2x2배열 찾기
    const find2by2 = (boardArray, popIndexArray) => {
        popIndexArray.pop();
        popIndexArray.length = 0;
        for (let i = 0; i < boardArray.length - 1; i++) {
            for (let j = 0; j < boardArray[i].length - 1; j++) {
                if (boardArray[i][j] && boardArray[i][j] === boardArray[i + 1][j] && boardArray[i][j] === boardArray[i][j + 1] && boardArray[i][j] === boardArray[i + 1][j + 1]) {
                    popIndexArray.push([i, j]);
                }
            }
        }
    };
    // 2. 2x2퍼즐을 터뜨린 배열 만들기
    const makePopArray = (popIndexArray, popBoardArray) => {
        popIndexArray.forEach((el) => {
            popBoardArray[el[0]][el[1]] = 0;
            popBoardArray[el[0]][el[1] + 1] = 0;
            popBoardArray[el[0] + 1][el[1]] = 0;
            popBoardArray[el[0] + 1][el[1] + 1] = 0;
        });
    };
    // 3. 빈 공간 바닥으로 끌어내리기
    const drawToBottom = (popBoardArray) => {
        for (let k = 0; k < popBoardArray.length; k++) {
            for (let i = 0; i < popBoardArray.length; i++) {
                for (let j = popBoardArray.length - 1; j > 0; j--) {
                    if (!popBoardArray[j][i]) {
                        popBoardArray[j][i] = popBoardArray[j - 1][i];
                        popBoardArray[j - 1][i] = 0;
                    }
                }
            }
        }
    };

    const popIndexArray = [0];
    const popBoardArray = [...boardArray];
    while (popIndexArray.length !== 0) {
        find2by2(boardArray, popIndexArray);
        if (popIndexArray.length === 0) break;
        makePopArray(popIndexArray, popBoardArray);
        drawToBottom(popBoardArray);
        boardArray.length = 0;
        boardArray.push(...popBoardArray);
    }

    return [...popBoardArray.join("")].filter((el) => parseInt(el) === 0).length;
}

solution(6, 6, ["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"]);
