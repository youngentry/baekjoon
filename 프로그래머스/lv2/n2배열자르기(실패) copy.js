function solution(n, left, right) {
    const answer = [];

    for (let i = left; i <= right; i++) {
        const x = Math.floor(i / n);
        const y = i % n;
        answer.push(Math.max(x, y) + 1);
    }

    console.log(answer);
    return answer;
}

// n=3
// 1-2-3-4-5-6-7-8-9
// 1,2,3,2,2,3,3,3,3

// (0,0) 1 => 1
// (0,1) 2 => 2
// (0,2) 3 => 3
// (1,0) 4 => 2
// (1,1) 5 => 2
// (1,2) 6 => 3
// (2,0) 7 => 3
// (2,1) 8 => 3
// (2,2) 9 => 3

// (x,y) n*x + y + 1 => x,y 중 큰 수 + 1

solution(3, 2, 5);
