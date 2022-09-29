function solution(n) {
    const prime = (a) => {
        for (let i = 2; i <= Math.sqrt(a); i++) {
            if (a % i == 0) return false;
        }
        return true;
    };

    var answer = 0;

    for (let i = 2; i <= n; i++) {
        if (prime(i)) answer++;
    }
    return answer;
}
