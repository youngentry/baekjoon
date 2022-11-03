function solution(s) {
    const remove0 = (str) => {
        return str.replaceAll("0", "");
    };

    const lengthTobinaryNumber = (str) => {
        return str.length.toString(2);
    };

    let removedS = s;
    let removed0count = 0;
    let beforeLength;
    let tryCount = 0;
    while (removedS.split("").includes("0") || removedS.length !== 1) {
        tryCount++;
        beforeLength = removedS.length;
        removedS = remove0(removedS);
        removed0count += beforeLength - removedS.length;
        removedS = lengthTobinaryNumber(removedS);
    }

    return [tryCount, removed0count];
}

solution("1111111111111111111111111111111");
