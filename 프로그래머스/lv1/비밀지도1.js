function solution(n, arr1, arr2) {
    const arr = [];

    for (i = 0; i < n; i++) {
        arr.push([]); // [ [] ]
        let [code1, code2] = [arr1[i].toString(2), arr2[i].toString(2)];

        while (code1.length < n) code1 = "0" + code1;
        while (code2.length < n) code2 = "0" + code2;

        for (j = 0; j < n; j++) {
            code1[j] == 0 ? (arr[i][j] = " ") : (arr[i][j] = "#");
            if (code2[j] == 1) arr[i][j] = "#";
        }
        arr[i] = arr[i].join("");
    }
    console.log(arr);
    return arr;
}

solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]);
