function solution(n) {
    const rule = [4, 1, 2];
    let answer = "";

    while (n > 0) {
        answer = rule[n % 3] + answer;
        n = Math.floor((n - 1) / 3);
    }
    console.log(answer);
    return answer;
}
solution(15);
