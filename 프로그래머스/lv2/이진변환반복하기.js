function solution(s) {
    const removeWord = (str, word) => {
        return str.replaceAll(word, "");
    };

    const lengthTobinaryNumber = (str) => {
        return str.length.toString(2);
    };

    let removedS = s;
    let removedWordCount = 0;
    let beforeLength;
    let tryCount = 0;
    while (removedS.split("").includes("0") || removedS.length !== 1) {
        tryCount++;
        beforeLength = removedS.length;
        removedS = removeWord(removedS, "0");
        removedWordCount += beforeLength - removedS.length;
        removedS = lengthTobinaryNumber(removedS);
    }
    return [tryCount, removedWordCount];
}

solution("1111111111111111111111111111111");
