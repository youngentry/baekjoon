const permutation = (arr) => {
    const result = [];

    const dfs = (i, arr) => {
        if (i === arr.length) {
            return result.push([...arr]);
        }
        for (let j = i; j < arr.length; j++) {
            [[arr[i]], arr[j]] = [[arr[j]], arr[i]];
            dfs(i + 1, arr);
            [[arr[i]], arr[j]] = [[arr[j]], arr[i]];
        }
    };
    dfs(0, arr);
    return result;
};

function solution(k, dungeons) {
    let 최대탐험횟수 = 0;
    const 던전순열 = permutation(dungeons);

    던전순열.forEach((던전탐색) => {
        let 남은피로도 = k;
        let 탐험가능지역 = 0;
        던전탐색.forEach((던전) => {
            if (남은피로도 >= 던전[0]) {
                남은피로도 -= 던전[1];
                탐험가능지역++;
            }
        });

        if (최대탐험횟수 <= 탐험가능지역) {
            최대탐험횟수 = 탐험가능지역;
        }
    });
    return 최대탐험횟수;
}
solution(80, [
    [80, 20],
    [50, 40],
    [30, 10],
]);
