function solution(n) {
    let [f0, f1, f2] = [1, 2, 3];
    let count = 2;

    while (count < n) {
        if (n === 1 || n === 2) {
            console.log(n);
            return n;
        }
        f2 = f0 + f1;
        f0 = f1;
        f1 = f2 % 1_000_000_007;
        count++;
    }

    return f2 % 1_000_000_007;
}
solution(30);

// n
// 1 1
// 2 2
// 3 3
// 4 5
// 5 8

// 피보나치
