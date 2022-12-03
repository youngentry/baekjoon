const [nAndX, numberArrangement] = require("fs")
  .readFileSync("devstdintxt")
  .toString()
  .split("\n");
const [numberCount, smallerThanThisNumber] = nAndX.split(" ").map(Number);
const numbers = numberArrangement.toString().split(" ");

let filtering = numbers.filter((number) => number < smallerThanThisNumber);
let result = "";

for (step = 0; step < filtering.length; step++) {
  result += filtering[step] + " ";
}

console.log(result);
