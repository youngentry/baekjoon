let inputData = require("fs")
  .readFileSync("devstdin")
  .toString()
  .split("")
  .reverse()
  .join("")
  .split(" ")
  .map(Number);

console.log(Math.max(...inputData));
