const [a, b] = require("fs")
  .readFileSync("devstdin")
  .toString()
  .split(" ")
  .map(BigInt);

console.log(a + b);
