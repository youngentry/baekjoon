const [nAndX, numberArrangement] = require("fs")
  .readFileSync("devstdintxt")
  .toString()
  .split("\n");
const [numberCount, smallerThanThisNumber] = nAndX.split(" ").map(Number);
const numbers = numberArrangement.toString().split(" ");

let filtering = numbers.filter((number) => number < smallerThanThisNumber);

console.log(filtering.join(" "));
