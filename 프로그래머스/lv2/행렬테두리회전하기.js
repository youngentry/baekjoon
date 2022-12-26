function solution(rows, columns, queries) {
    const result = [];
    // 1. rows*columns 배열 생성하기
    let array = [];
    let number = 1;
    for (let i = 0; i < rows; i++) {
        array.push([]);
        for (let j = 0; j < columns; j++) {
            array[i].push(number);
            number++;
        }
    }

    queries.forEach((el) => {
        const edgeElementArray = [];
        // 이차원배열 깊은 복사를 위해서는 배열 원소들을 각각 깊은 복사 해주어야 한다.
        const tempArray = array.map((el) => [...el]);
        const [x1, y1, x2, y2] = [el[0] - 1, el[1] - 1, el[2] - 1, el[3] - 1];
        // 2. queries 배열 범위의 테두리를 originEdge 배열에 담기
        for (let i = x1; i <= x2; i++) {
            for (let j = y1; j <= y2; j++) {
                // if (i > x1  && j > y1  && i < x2  && j < y2) 중간값 범위의 대우로 중간값 제외
                if (i <= x1 || j <= y1 || i >= x2 || j >= y2) {
                    // console.log(array[i][j], i, j);
                    // >
                    if (i === x1 && j !== y1) {
                        tempArray[i][j] = array[i][j - 1];
                        edgeElementArray.push(array[i][j - 1]);
                        continue;
                        // console.log(">");
                    }
                    // v
                    if (i !== x1 && j === y2) {
                        tempArray[i][j] = array[i - 1][j];
                        edgeElementArray.push(array[i - 1][j]);
                        continue;
                        // console.log("v");
                    }
                    // <
                    if (i === x2 && j !== y2) {
                        tempArray[i][j] = array[i][j + 1];
                        edgeElementArray.push(array[i][j + 1]);
                        continue;
                        // console.log("<");
                    }
                    // ^
                    tempArray[i][j] = array[i + 1][j];
                    edgeElementArray.push(array[i + 1][j]);
                    // console.log("^");
                }
            }
        }
        // console.log(tempArray);
        result.push(Math.min(...edgeElementArray));
        array = tempArray;
    });
    console.log(result);
    return result;
}

solution(6, 6, [
    [2, 2, 5, 4],
    [3, 3, 6, 6],
    [5, 1, 6, 3],
]);

// 1. rows*columns 배열 생성하기
// 2. queries 배열 범위의 테두리를 시계방향으로 한 칸씩 이동시키기
// 3. queries 배열 범위의 테두리 중 최솟값을 result에 추가하기
// 5. 2~3을 queries의 길이만큼 시행하기
