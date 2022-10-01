function solution(n, lost, reserve) {
    let newLos = lost.filter((el) => !reserve.includes(el));
    let newRes = reserve.filter((el) => !lost.includes(el));

    newLos.sort((a, b) => a - b);

    newLos.forEach((el) => {
        if (newRes.length === 0) return;
        if (newRes.includes(el - 1)) {
            newRes = newRes.filter((it) => it !== el - 1);
        } else if (newRes.includes(el + 1)) {
            newRes = newRes.filter((it) => it !== el + 1);
        }
    });

    return n - (lost.length - (reserve.length - newRes.length));
}
