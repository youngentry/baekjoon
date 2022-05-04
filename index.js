let inputData = require("fs").readFileSync("stdin.txt").toString().split("\n");

let result = "";

for (step = 1; step <= inputData[0]; step++) {
  let [a, b] = inputData[step].split(" ").map(Number);
  result += `Case #${step}: ${a + b}\n`;
}

console.log(result);
