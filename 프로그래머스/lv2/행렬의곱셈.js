function solution(arr1, arr2) {
    var answer = [[], [], []];

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            // console.log(answer);
            console.log(arr1[0][0], arr2[0][1], arr1[1][0], arr2[1][1]);
            answer[i][j] = arr1[0][0] * arr2[0][0] + arr1[0][1] * arr2[1][1];
        }
    }

    console.log(answer);
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
// 1 4 | 3 3 => 15 | 15
// 3 2 | 3 3 => 15 | 15
// 4 1 |     => 15 | 15

// 2 3 2 | 5 4 3 => 22 22 11
// 4 2 4 | 2 4 1 => 36 28 18
// 3 1 4 | 3 1 1 => 29 20 14
