function solution(n) {
    if (n === 1) {
        return 1;
    }

    let result = 0;
    let count = 1;

    while (count < n / 2 + 1) {
        if (count % 2 === 1 && n % count === 0) {
            result++;
        }
        if (count % 2 === 0 && parseInt(n / count) + count / 2 + (parseInt(n / count) - count / 2 + 1) * (count / 2) === n) {
            result++;
        }
        count++;
    }
    return result;
}
