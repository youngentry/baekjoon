function solution(arr1, arr2) {
    var answer = [];

    for (let i = 0; i < arr1.length; i++) {
        const answerArray = [];
        for (let j = 0; j < arr2[0].length; j++) {
            let element = 0;
            for (let k = 0; k < arr2.length; k++) {
                element += arr1[i][k] * arr2[k][j];
            }
            answerArray.push(element);
        }
        answer.push(answerArray);
    }

    return answer;
}

solution(
    [
        [1, 4],
        [3, 2],
        [4, 1],
    ],
    [
        [3, 3],
        [3, 3],
    ]
);

solution(
    [
        [2, 3, 2],
        [4, 2, 4],
        [3, 1, 4],
    ],
    [
        [5, 4, 3],
        [2, 4, 1],
        [3, 1, 1],
    ]
);

solution(
    [
        [2, 3, 2],
        [4, 2, 4],
        [3, 1, 4],
    ],
    [
        [5, 4],
        [2, 4],
        [3, 1],
    ]
);
// 1 4 | 3 3 => 15 | 15
// 3 2 | 3 3 => 15 | 15
// 4 1 |     => 15 | 15

// 2 3 2 | 5 4 3 => 22 22 11
// 4 2 4 | 2 4 1 => 36 28 18
// 3 1 4 | 3 1 1 => 29 20 14
