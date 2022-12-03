const [a, b, v] = require("fs")
  .readFileSync("devstdin")
  .toString()
  .split(" ")
  .map(Number);

console.log(Math.ceil((v - b) / (a - b)));
