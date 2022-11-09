function solution(n, a, b) {
    const divideCeil = (number) => {
        return Math.ceil(number / 2);
    };

    let count = 0;

    while (a !== b) {
        a = divideCeil(a);
        b = divideCeil(b);
        count++;
    }

    return count;
}
