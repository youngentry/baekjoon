const [a, b, c] = require("fs")
  .readFileSync("devstdin")
  .toString()
  .split(" ")
  .map(Number);

b < c ? console.log(Math.floor(a / (c - b)) + 1) : console.log(-1);
