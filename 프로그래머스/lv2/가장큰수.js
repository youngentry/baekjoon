function solution(numbers) {
    const numbersToString = numbers.map((el) => el.toString());
    numbersToString.sort((a, b) => b + a - (a + b));
    return parseInt(numbersToString) === 0 ? "0" : numbersToString.join("");
}

solution([0, 0, 0, 0]); // 9_94_909_90
