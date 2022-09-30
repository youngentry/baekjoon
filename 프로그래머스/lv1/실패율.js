function solution(N, stages) {
    var answer = [];

    let pC = [];
    for (i = 1; i <= N; i++) {
        pC.push(stages.join("").split(i).length - 1);
    }

    let fail = [];
    let left = stages.length;

    let descen = [];

    for (i = 0; i < N; i++) {
        descen.push([pC[i] / left, i + 1]);
        left -= pC[i];
    }

    const result = descen.sort((a, b) => b[0] - a[0]).map((el) => el[1]);
    console.log(result);
    return result;
}

solution(5, [3, 3, 3, 2, 2, 2, 1, 1, 1]);
