const findDivisor = (number) => {
    const divisorArray = [];
    let divisor = 1;
    while (divisor <= number) {
        if (number % divisor === 0) {
            divisorArray.push(divisor);
        }
        divisor++;
    }

    return divisorArray;
};

function solution(brown, yellow) {
    // yellow의 약수를 구합니다. => [1,2]
    const divisorArray = findDivisor(yellow);

    // yellow의 약수는 사각형의 한 변의 길이입니다.
    for (let i = 0; i < divisorArray.length; i++) {
        for (let j = i; j < divisorArray.length; j++) {
            // 두 변의 곱과 두 변의 길이의 합이 yellow가 되는 수를 찾습니다.
            if (divisorArray[i] * divisorArray[j] === yellow && divisorArray[i] + divisorArray[j] === brown / 2 - 2) {
                return [divisorArray[j] + 2, divisorArray[i] + 2];
            }
        }
    }
}
