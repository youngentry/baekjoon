function solution(n) {
    let f0 = 0;
    let f1 = 1;
    let f2 = 1;
    let count = 1;

    while (count <= n) {
        f2 = f0 + f1;
        f0 = f1;
        f1 = f2 % 1234567;
        count++;
    }

    return f2 % 1234567;
}
// 하나씩 결괏값을 살펴보니 피보나치 수열을 이루는 중
// n=3 3
// n=4 5
// n=5 8
// n=6 13
// n=7 21
// n=8 34
