function solution(n) {
    const array = [];
    for (let i = 1; i <= n; i++) {
        array.push(new Array(i));
    }

    let [count, x, y] = [1, -1, 0];
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            if (i % 3 === 0) x++;
            else if (i % 3 === 1) y++;
            else x--, y--;

            array[x][y] = count;
            count++;
        }
    }
    return array.flat(); //[ 1, 2, 9, 3, 10, 8, 4, 5, 6, 7 ]
}

solution(4);
