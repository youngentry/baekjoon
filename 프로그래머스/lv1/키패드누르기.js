function solution(numbers, hand) {
    const TDA = {
        1: [3, 0],
        2: [3, 1],
        3: [3, 2],
        4: [2, 0],
        5: [2, 1],
        6: [2, 2],
        7: [1, 0],
        8: [1, 1],
        9: [1, 2],
        "*": [0, 0],
        0: [0, 1],
        "#": [0, 2],
    };

    const left = [7, 4, 1];
    const center = [0, 8, 5, 2];
    const right = [9, 6, 3];

    let curL = "*";
    let curR = "#";

    let answer = "";

    for (i = 0; i < numbers.length; i++) {
        for (j = 0; j < numbers.length; j++) {
            // 1,4,7은 왼손으로 누르고, 해당 번호로 이동하기
            if (left.includes(numbers[i])) {
                curL = numbers[i];
                answer += "L";
                break;

                // 3,6,9는 오른손으로 누르고, 해당 번호로 이동하기
            } else if (right.includes(numbers[i])) {
                curR = numbers[i];
                answer += "R";
                break;

                // 0,2,5,8의 경우에는 거리를 고려해서 더 짧은 쪽이 이동하기
            } else if (center.includes(numbers[i])) {
                // 왼손 거리
                let leftDis =
                    Math.abs(TDA[curL][0] - TDA[numbers[i]][0]) +
                    Math.abs(TDA[curL][1] - TDA[numbers[i]][1]);
                // 오른손 거리
                let rightDis =
                    Math.abs(TDA[curR][0] - TDA[numbers[i]][0]) +
                    Math.abs(TDA[curR][1] - TDA[numbers[i]][1]);

                //  거리가 다를 경우
                if (leftDis !== rightDis) {
                    // 왼손이 가까우면 왼손으로 누르기
                    if (leftDis < rightDis) {
                        curL = numbers[i];
                        answer += "L";
                        // 오른손이 가까우면 오른손으로 누르기
                    } else {
                        curR = numbers[i];
                        answer += "R";
                    }

                    // 거리가 같을 경우
                } else {
                    // 왼손잡이면 왼손으로 누르기
                    if (hand == "left") {
                        curL = numbers[i];
                        answer += "L";
                        // 오른손잡이면 오른손으로 누르기
                    } else {
                        curR = numbers[i];
                        answer += "R";
                    }
                }
                break;
            }
        }
    }
    return answer;
}
