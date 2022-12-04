function solution(k, tangerine) {
    const tCountObject = {};
    // for (let i = 0; i < tangerine.length; i++) {
    //     tCountObject[tangerine[i]] = 0;
    // }
    // for (let i = 0; i < tangerine.length; i++) {
    //     tCountObject[`${tangerine[i]}`] = tCountObject[`${tangerine[i]}`] + 1;
    // }
    for (let i = 0; i < tangerine.length; i++) {
        tCountObject[tangerine[i]] = tCountObject[tangerine[i]] + 1 || 1;
    }

    const countArray = [];
    Object.values(tCountObject).forEach((el) => countArray.push(el));
    countArray.sort((a, b) => a - b);

    let [sum, answer] = [0, 0];
    while (sum < k) {
        answer++;
        sum += countArray.pop();
    }
    return answer;
}

solution(6, [1, 1, 2, 3, 4, 5, 6]);
