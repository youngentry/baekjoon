function solution(n, left, right) {
    const array = Array.from({ length: n }, () => Array.from({ length: n }, (_, i) => i + 1));

    console.log(array);

    for (let i = 0; i < n; i++) {
        let plus = i;
        for (let j = 0; j < i; j++) {
            if (Math.sqrt(i + 1) * Math.sqrt(j + 1) <= Math.sqrt(right)) {
                array[i][j] += plus;
            }
            plus--;
        }
    }

    console.log(array);

    const numberArray = array
        .join(",")
        .split(",")
        .slice(left, right + 1)
        .map((el) => parseInt(el));
    console.log(numberArray);
    return numberArray;
}

solution(3, 2, 5);
