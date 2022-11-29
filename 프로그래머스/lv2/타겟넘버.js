function solution(numbers, target) {
    let answer = 0;

    const depthFirstSearch = (depth, sum) => {
        if (depth === numbers.length) {
            if (sum === target) {
                answer++;
            }
            return;
        }
        depthFirstSearch(depth + 1, sum + numbers[depth]);
        depthFirstSearch(depth + 1, sum - numbers[depth]);
    };

    depthFirstSearch(0, 0);

    // 종료조건: 깊이가 5일 때 종료해 줘.
    // 근데 종료하기 전에(if(sum === target)): sum과 target이 같다면 answer++ 해줘.
    // if (depth === numbers.length) {
    //     if (sum === target) {
    //         answer++;
    //     }
    //     return
    // }

    // 할일: numbers의 각 인덱스마다 +, -를 시행해 줘.
    // depthFirstSearch(depth + 1, sum + numbers[depth])
    // depthFirstSearch(depth + 1, sum - numbers[depth])

    console.log(answer);
    return answer;
}

solution([1, 1, 1, 1, 1], 3);
