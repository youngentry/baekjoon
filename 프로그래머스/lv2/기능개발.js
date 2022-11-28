function solution(progresses, speeds) {
    const answer = [];
    let returnCountOnce = 0;

    while (true) {
        if (progresses[0] >= 100) {
            returnCountOnce++;
            progresses.shift();
            speeds.shift();
            continue;
        }
        if (returnCountOnce !== 0) {
            answer.push(returnCountOnce);
            returnCountOnce = 0;
            if (progresses.length === 0) {
                break;
            }
        }
        for (let i = 0; i < progresses.length; i++) {
            progresses[i] += speeds[i];
        }
    }

    console.log(answer);
    return answer;
}

solution([93, 30, 55], [1, 30, 5]);
// solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]);
// solution([90, 90, 90, 90, 90, 90, 90], [4, 4, 2, 1, 2, 3, 4]);
// solution([1, 1, 1, 1], [100, 50, 99, 100]);
// solution([95, 94], [3, 3]);
// solution([99, 99, 99, 90, 90, 90], [1, 1, 1, 1, 1, 1]);
// solution([70], [20]);
// solution([20, 20], [30, 5]);
solution([1, 1, 50], [100, 2, 1]);
