function solution(n, m) {
    n >= m ? ([n, m] = [n, m]) : ([n, m] = [m, n]);

    let r = 0;

    const big = (a, b) => (b === 0 ? a : big(b, a % b));
    const small = (a, b) => (a * b) / big(a, b);

    return [big(n, m), small(n, m)];
}
