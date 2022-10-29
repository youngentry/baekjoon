function solution(number) {
    const arrLenght = number.length;
    let count = 0;

    for (i = 0; i < arrLenght; i++) {
        for (j = i + 1; j < arrLenght; j++) {
            for (k = j + 1; k < arrLenght; k++) {
                // 1. 전역탐색으로 세 명의 합이 0이 되는 경우의 수를 찾습니다.
                if (number[i] + number[j] + number[k] === 0) {
                    // 2. 존재한다면 count에 +1을 합니다.
                    count++;
                    continue;
                }
            }
        }
    }
    // count를 반환합니다.
    console.log(count);
    return count;
}

solution([-2, 3, 0, 2, -5]);

// 1. 전역탐색으로 세 명의 합이 0이 되는 경우의 수를 찾습니다.
// 2. 0이 되는 경우의 수의 가짓수를 반환합니다.
