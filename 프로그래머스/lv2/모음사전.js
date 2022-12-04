function solution(word) {
    const vowel = {
        A: "E",
        E: "I",
        I: "O",
        O: "U",
    };

    const c = ["A"];
    let count = 0;

    const dfs = (wordArray, word) => {
        count++;
        // 문자와 일치하면 count 반환
        if (wordArray.join("") === word) return count;
        // 문자열의 길이가 5보다 작으면 A를 더하기
        if (wordArray.length < 5) {
            wordArray.push("A");
            dfs(wordArray, word);
            return;
        }
        // 마지막 문자열이 U가 아니라면 문자 변환 순서에 따라 변환
        if (wordArray[4] !== "U") {
            wordArray[4] = vowel[c[4]];
            dfs(wordArray, word);
            return;
        }
        // 변환 규칙에 따라 U 앞의 문자열 변환하기
        for (let i = wordArray.length - 1; i > 0; i--) {
            if (wordArray[i - 1] !== "U" && wordArray.slice(i).join("") === "U".repeat(wordArray.length - i)) {
                wordArray[i - 1] = vowel[wordArray[i - 1]];
                // 변환 뒤에는 U 제거하기
                for (let j = 0; j < 5 - i; j++) {
                    wordArray.pop();
                }
                dfs(wordArray, word);
                break;
            }
        }
    };

    dfs(c, word);
    console.log(count, c.join(""), "count");
    return count;
}
solution("I");
