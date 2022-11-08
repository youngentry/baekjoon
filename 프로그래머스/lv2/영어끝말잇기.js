function solution(n, words) {
    const result = [undefined, undefined];
    const existWordArray = [];
    let count = 1;

    for (i = 1; i < words.length; i++) {
        if (!existWordArray.includes(words[i - 1]) || words[i - 1][words.length - 1] !== words[i][0]) {
            console.log(existWordArray);
            console.log(words[i - 1][words[i - 1].length - 1], words[i][0]);

            existWordArray.push(words[i]);
            result[0] = (i % n) + 1;
            result[1] = parseInt(count / n) + 1;
            console.log(result[0]);
            console.log(result[1]);
        }
        count++;
    }
    existWordArray.push(words[i]);

    if (existWordArray.includes(words[i - 1])) {
        console.log(result);
        console.log(words[i - 1]);
        return result;
    } else {
        console.log([0, 0]);
        return [0, 0];
    }
}

solution(5, ["hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"]);
