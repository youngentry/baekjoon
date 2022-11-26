function solution(n, words) {
    let order = 1;
    let saidWordArray = [];

    for (let i = 0; i < words.length; i++) {
        let number = (i % n) + 1;

        // 포함되어 있으면 탈락
        if (saidWordArray.includes(words[i]) && i !== 0) {
            return [number, order];
        }
        saidWordArray.push(words[i]);
        // 글자가 일치하지 않으면 탈락
        if (words[i - 1] !== undefined && words[i][0] !== words[i - 1].at(-1)) {
            return [number, order];
        }
        // 길이가 1이면 탈락
        if (words[i].length === 1) {
            return [number, order];
        }
        // 끝말잇기에 문제 없으면 [0,0] 반환
        if (i === words.length - 1) {
            console.log([0, 0], 4);
            return [0, 0];
        }
        // 몇 번째 말했는지 카운터
        if (number === n) {
            order++;
        }
    }
}

// n명이 번갈아 단어를 말한다
// 한 글자 단어는 인정안된다 => 탈락
// 이전에 등장한 단어면 안된다 => 탈락
// 앞사람이 말한 단어의 마지막 문자로 시작하는 단어를 말한다 => 아니면 탈락
// 아무도 탈락하지 않으면 [0,0]을 반환한다.

solution(2, ["hello", "one", "even", "never", "now", "world", "draw"]);
