const inputData = require("fs")
  .readFileSync("stdin.txt")
  .toString()
  .split("\n");

let result = "";

for (step = 1; step <= inputData[0]; step++) {
  const [a, b] = inputData[step].toString().split(" ").map(Number);
  result += `Case #${step}: ${a} + ${b} = ${a + b}\n`;
}

console.log(result);
