const [a, b] = require("fs")
  .readFileSync("devstdin")
  .toString()
  .split(" ")
  .map(BigInt);

let ab = (a + b).toString();
console.log((a + b).toString());
console.log(typeof ab);

let bbb = 123n;
console.log(typeof bbb);
