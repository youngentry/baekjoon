function solution(n, words) {
    let order = 1;
    let saidWordArray = [];

    for (let i = 0; i < words.length; i++) {
        let number = (i % n) + 1;
        const isInclude = saidWordArray.includes(words[i]) && i !== 0;
        const isCoincide = words[i - 1] !== undefined && words[i][0] !== words[i - 1].at(-1);
        const isRightWordLength = words[i].length === 1;
        const isClear = i === words.length - 1;

        saidWordArray.push(words[i]);

        // 단어 포함/글자 불일치/길이 1 => 탈락
        if (isInclude || isCoincide || isRightWordLength) {
            return [number, order];
        }
        // 끝말잇기에 문제 없으면 [0,0] 반환
        if (isClear) {
            return [0, 0];
        }
        // 몇 번째로 말했는지 카운트
        if (number === n) {
            order++;
        }
    }
}

solution(2, ["hello", "one", "even", "never", "now", "world", "draw"]);
