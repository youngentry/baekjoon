function solution(n, k) {
    const resultArray = [];
    const numberArray = Array(n)
        .fill()
        .map((_, index) => index + 1);
    let range = numberArray.reduce((accumulator, currentValue) => accumulator * currentValue, 1);

    while (resultArray.length < n) {
        range /= numberArray.length;
        resultArray.push(...numberArray.splice(Math.floor((k - 1) / range), 1));
        k = k % range;
    }

    return resultArray;
}
const numberArray = Array(20)
    .fill()
    .map((_, index) => index + 1);
let range = numberArray.reduce((accumulator, currentValue) => accumulator * currentValue, 1);

console.log(range);
