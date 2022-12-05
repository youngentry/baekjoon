function solution(numbers) {
    const answer = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            answer.push(numbers[i] + 1);
            continue;
        }
        const binaryArray = ("0" + numbers[i].toString(2)).split("");
        for (let j = binaryArray.length - 1; j >= 0; j--) {
            if (binaryArray[j - 1] + binaryArray[j] === "01") {
                [binaryArray[j - 1], binaryArray[j]] = [1, 0];
                break;
            }
        }
        answer.push(parseInt(binaryArray.join(""), 2));
    }
    return answer;
}

solution([100011]);
