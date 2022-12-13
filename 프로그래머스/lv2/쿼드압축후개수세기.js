function solution(arr) {
    let answer = [0, 0];

    const quadZip = (x, y, length) => {
        if (length === 1) {
            return answer[arr[x][y]]++;
        }

        let sum = 0;
        for (let i = x; i < x + length; i++) {
            for (let j = y; j < y + length; j++) {
                sum += arr[i][j];
            }
        }
        if (sum === length ** 2) {
            return answer[1]++;
        }
        if (sum === 0) {
            return answer[0]++;
        }

        length /= 2;
        quadZip(x, y, length);
        quadZip(x + length, y, length);
        quadZip(x, y + length, length);
        quadZip(x + length, y + length, length);
        return;
    };
    quadZip(0, 0, arr.length);

    return answer;
}

solution([
    [1, 1, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 1],
    [1, 1, 1, 1],
]);
