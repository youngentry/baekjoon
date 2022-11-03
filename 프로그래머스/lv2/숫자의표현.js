function solution(n) {
    let result = 0;
    let count = 0;

    while (count < n / 2 + 1) {
        if (count % 2 === 1 && n % count === 0) {
            result++;
        }
        if (count % 2 === 0 && parseInt(n / count) + (parseInt(n / count) + 1) * (count / 2) === n) {
            result++;
        }
        count++;
    }
    return result;
}
